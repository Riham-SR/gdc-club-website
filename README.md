# Graphic Design Club Website

Responsive single-page website for the Graphic Design Club at St. Clair College.

## Preview

Open `index.html` in a browser. The project uses plain HTML, CSS, and a small amount of JavaScript; it has no package or build step.

## Project files

- `index.html` contains the page structure and content.
- `css/styles.css` contains the design tokens and responsive styling.
- `js/main.js` controls the mobile navigation and the desktop activity-panel controls.
- `assets/` contains the original Figma artwork, logos, and icons used by the page.

## Outstanding items

- Confirm whether the hero heading should remain “Greate Brand Starts Here” or be corrected.
- Confirm Services wording and destinations for Services, Contact, Join the Club, Learn More, and event actions.
- Event dates are intentionally shown as “Date to be announced.”
- The exact activity carousel behavior and intermediate responsive breakpoints are not specified in the reference; the implementation uses a scrollable desktop track and stacked narrow-screen panels.
- The activity-panel illustrations and some tutorial artwork are CSS-built approximations; an exact matching exported composite asset was not available in the downloaded assets.
- The original animated Figma GIFs are large (approximately 9 MB, 7 MB, and 22 MB). They are retained to preserve the supplied artwork; consider replacing them with optimized exports before production.
- Inter and Manrope are requested from Google Fonts at runtime; use local font files if offline hosting is required.
