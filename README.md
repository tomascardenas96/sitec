# Astro Starter Kit: Basics

## Production SEO

The production origin is `https://balca.com.ar`, configured in `astro.config.mjs`.
The shared layout generates absolute canonical and Open Graph URLs without query
strings, fragments, or trailing slashes (except the homepage). Existing routes
and routing defaults are unchanged. The 404 page is marked `noindex` and has no
canonical URL.

`@astrojs/sitemap` discovers static pages, including project details generated
with `getStaticPaths()`. Each build emits `sitemap-index.xml`, `sitemap-0.xml`,
and a `robots.txt` endpoint derived from the configured origin. Error pages are
excluded from the sitemap. When adding a non-indexable page, exclude it in the
sitemap filter as well as setting `noindex` in the layout.

Run `npm run test:seo` to build and validate the generated HTML, sitemap, and
robots file. This does not publish the site.

After deployment, verify that canonical URLs return HTTP 200 without redirecting
to a different slash variant, and that missing URLs return HTTP 404. Check
`https://balca.com.ar/robots.txt` and `https://balca.com.ar/sitemap-index.xml`,
then submit `sitemap-index.xml` in Google Search Console. Hosting redirects,
Search Console submission, and actual Google indexation are separate checks.

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
