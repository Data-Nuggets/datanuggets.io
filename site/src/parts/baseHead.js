import { html } from "lit";

/**
 * @param {{ title: string }} options
 * @returns {import('lit').TemplateResult}
 */
export function baseHead({ title }) {
    return html`
    <!-- Global Metadata -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <!-- Primary Meta Tags -->
    <title-server-only>${title}</title-server-only>
    <meta name="title" content="${title}" />
    <meta name="description" content="" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap"
    />
    <!--<link
      href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800;900&display=swap"
      rel="stylesheet"
      /> -->
    <link rel="stylesheet" href="resolve:@data-nuggets/web/styles/styles.css" />
    <link
      rel="stylesheet"
      href="resolve:@data-nuggets/web/styles/landing.css"
    />
  `;
}
