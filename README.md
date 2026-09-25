# Idaho Wiki

A static, three-page Idaho reference adapted from the supplied WIKI-Template.

## Published routes

The production site uses clean Cloudflare Pages routes:

- `/` — main Idaho article
- `/resources/` — official resources and source notes
- `/history/` — revision history

No public page route uses an `.html` extension. No build step is required.

## Pages and features

- `/`: Idaho article, flag, state infobox, contents, Top Businesses section, and 20 numbered references to official sources.
- `/resources/`: Official resources and source notes, including all four supplied links.
- `/history/`: A revision log recording the initial edition and the addition of Top Businesses on September 25, 2026.
- Search covers the article, resources, and revision history. Print uses a reading-friendly layout.
- Responsive layout and keyboard-accessible navigation.

The original template's serif headings, blue links, pale borders, tabs, right-hand infobox, contents panel, and references are retained. Placeholder biography content and inactive editing/discussion controls were replaced with state content and usable navigation. There is no editing backend or multiuser revision database.

## Sources

The article contains claim-level citations. Population is the Census Bureau's July 1, 2025 estimate. Land area uses 2020 Census geography. Government officeholders were checked September 25, 2026. Figures from the Department of State's 2017–2021 archive retain their historical dates. The supplied Google share link resolves to an Idaho search and is listed as a discovery resource, not as evidence for article claims.

Flag image: https://idaho.gov/wp-content/uploads/2025/10/6ff71a1137fe07944e8578ad10cdbcfb0a95a5fb.jpg — reproduced without alteration from https://idaho.gov/about-idaho/facts-symbols/ for reference identification. No state endorsement is implied.

## Edit or upload

Edit the page-level `index.html` files and `assets/styles.css` directly. The local search index is in `assets/search-index.js`; update it when changing article content. Upload the contents of this folder to a static web host while preserving the directory structure.

This is an independent reference, not an official state publication or a Wikipedia page.
