# Graphic Design Club — GRD 509

Responsive single-page HTML/CSS/JavaScript project for St. Clair College.

## Submission links

- [Figma design system and responsive design](https://www.figma.com/design/T8HZRCspMMC1crtF2xRXg8/GRD-Club?node-id=87-8&t=wcBf1IW6LSE7QOIo-1)
- [Process documentation (PDF)](GDC_Process_Documentation.pdf)
- [Process documentation (PowerPoint)](GDC_Process_Documentation.pptx)

## Run the website

Download the repository using **Code → Download ZIP**, extract it, and open `index.html` in a browser. No npm packages or build step are required.

Alternatively, open this folder in Visual Studio Code and use Live Server, or run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Internet access is needed to load Google Fonts; fallback fonts are available.

## Project structure

- `index.html`: semantic page structure
- `css/style.css`: styles, CSS variables, reusable patterns and responsive layouts
- `js/script.js`: mobile menu, activity carousel and motion with reduced-motion support
- `assets/`: artwork and logos

## Page sections

Hero, About, Featured Content, three tutorial/content cards, Club Activities, Upcoming Events, Get Involved and Footer.

## Upcoming Events system test

The additional section reuses the site's colour variables, typography, section shell, card variants, spacing conventions and CTA patterns. Event dates are labelled as concepts to be confirmed.

## Review sizes

Desktop: 1440px · Tablet: 768px · Mobile: 390px.
