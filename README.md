# Amplifier for Zoom: Burnout Measurement

Marketing landing page for Amplifier Health's Zoom integration, covering the case for measuring executive burnout and fatigue through passive vocal biomarker analysis on Zoom calls.

Live at https://burnout.amplifierhealth.com

Static site, no build step. `index.html` is the landing page, `account/` is the account dashboard and `privacypolicy.html` is the privacy policy.

## Design system

The look is the Amplifier Burnout design system on the Amplifier Cream palette. It lives in `design-system/`:

1. `design-system/tokens.css` is the single source for colors, type, spacing and radius. Every page links it before its own styles.
2. `design-system/tokens.json` holds the same tokens with usage notes.
3. `design-system/README.md` is the brand book, with the content, color, type and layout rules.
4. `design-system/components/` holds the React components, their stylesheet, previews and guidelines.
5. `design-system/assets/Logos/amplifier-wordmark.svg` is the wordmark in brand green.

Change a color in `design-system/tokens.css` and every page follows. Do not hard code colors in page styles.
