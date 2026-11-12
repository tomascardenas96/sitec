/**
 * Keep canonical URLs on the configured site, without query strings or fragments.
 * Existing internal links use extensionless paths without a trailing slash.
 * @param {URL} pageUrl
 * @param {URL | string} siteUrl
 */
export function canonicalURL(pageUrl, siteUrl) {
  const canonical = new URL(siteUrl);
  canonical.pathname = pageUrl.pathname.replace(/\/+$/, "") || "/";
  canonical.search = "";
  canonical.hash = "";
  return canonical;
}
