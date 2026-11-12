import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { canonicalURL } from "../src/lib/seo.js";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const site = "https://balca.com.ar";

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(filename) : [filename];
  }));
  return files.flat().filter((filename) => filename.endsWith(".html"));
}

function tagsWith(html, tag, attribute, value) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))]
    .map(([tag]) => tag)
    .filter((tag) => tag.includes(`${attribute}="${value}"`));
}

test("canonical normalization keeps the production origin and strips URL variants", () => {
  for (const [pathname, expected] of [
    ["/", "/"],
    ["/?utm_source=google#top", "/"],
    ["/design/?utm_source=google#details", "/design"],
    ["/projects/preview/1", "/projects/preview/1"],
    ["//other.example/path/", "//other.example/path"],
  ]) {
    const page = new URL(`http://localhost:4321${pathname}`);
    const original = page.href;
    assert.equal(canonicalURL(page, site).href, `${site}${expected}`);
    assert.equal(page.href, original, "must not mutate the incoming URL");
  }
});

test("built pages have one canonical and matching Open Graph URL; 404 is noindex", async () => {
  const files = await htmlFiles(dist);
  assert.ok(files.length > 1, "run npm run build before these tests");
  for (const filename of files) {
    const html = await readFile(filename, "utf8");
    const relative = path.relative(dist, filename).split(path.sep).join("/");
    const canonicals = tagsWith(html, "link", "rel", "canonical");
    const robots = tagsWith(html, "meta", "name", "robots");
    if (relative === "404.html") {
      assert.equal(canonicals.length, 0);
      assert.equal(robots.length, 1);
      assert.match(robots[0], /content="noindex, follow"/);
      continue;
    }
    const pathname = relative.replace(/(?:^|\/)index\.html$/, "");
    const expected = `${site}/${pathname}`;
    assert.equal(canonicals.length, 1, relative);
    assert.ok(canonicals[0].includes(`href="${expected}"`), relative);
    const ogURL = tagsWith(html, "meta", "property", "og:url");
    assert.equal(ogURL.length, 1, relative);
    assert.ok(ogURL[0].includes(`content="${expected}"`), relative);
    assert.equal(robots.length, 0, `${relative} must remain indexable`);
    assert.equal(tagsWith(html, "link", "rel", "sitemap").length, 1);
  }
});

test("sitemap contains exactly the generated indexable pages, including project details", async () => {
  const index = await readFile(path.join(dist, "sitemap-index.xml"), "utf8");
  const sitemapURLs = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
  assert.ok(sitemapURLs.length > 0);
  const urls = [];
  for (const url of sitemapURLs) {
    assert.equal(new URL(url).origin, site);
    const xml = await readFile(path.join(dist, new URL(url).pathname), "utf8");
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url));
    assert.doesNotMatch(xml, /<(lastmod|priority|changefreq)>/);
  }
  const expected = (await htmlFiles(dist))
    .map((filename) => path.relative(dist, filename).split(path.sep).join("/"))
    .filter((relative) => relative !== "404.html")
    .map((relative) => `${site}/${relative.replace(/(?:^|\/)index\.html$/, "")}`);
  assert.equal(new Set(urls).size, urls.length, "no duplicate URLs");
  assert.deepEqual(urls.sort(), expected.sort());
  assert.ok(urls.some((url) => url.includes("/projects/preview/")));
});

test("robots.txt allows crawling and advertises the generated sitemap index", async () => {
  const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
  assert.equal(robots, `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\n`);
});
