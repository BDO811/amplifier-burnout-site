Amplifier Burnout is the look of burnout.amplifierhealth.com, the Amplifier for Zoom product that reads fatigue and stress from how a person sounds on calls, as a private trend against their own baseline. It is a wellness signal, never a diagnosis. It uses the Amplifier Cream palette and the same editorial look as the rest of Amplifier.

## How to build with it

Load `tokens.css`, `components/bundle.css`, React 18 and `components/bundle.js`, then use `window.AmplifierBurnout`. Use components before writing your own markup. Read a component's README before using it. Never hard code a color, size or radius; use the token.

## Content fundamentals

Write short declarative headlines in second person. Claim first, proof second: "Burnout doesn't show up on a survey." Keep clinical credibility in the body with cited numbers and never invent a statistic. Keep the lighter music voice (Spark, Groove, Encore, "Find your rhythm") to pricing and the closing call to action. Never write copy that reads as a diagnosis; say "wellness signal" and "trend against your baseline". No emoji.

## Visual foundations

Color. Set the page on `surface-100` and cards on `surface-200`. Body copy is `ink`; captions and axis labels are `ink-muted`. Hairline dividers and card borders use `rule`. Use `brand` (the Amplifier green) for the wordmark, primary buttons and links, with `on-brand` text on a brand fill. Draw focus rings in `focus`, 2px solid with a 2px offset. The live vocal readout sits in the rounded `panel` with `panel-ink` text and the `panel-fatigue`, `panel-stress`, `panel-good` and `panel-alert` colors.

The two measured signals. Draw fatigue in `signal-fatigue`, solid and 3px. Draw stress in `signal-stress`, dashed and 2.5px, so the two never depend on hue alone. Draw the person's baseline as a `surface-200` band with a `rule` midline.

The four states. Baseline, Watch, Elevated and High use `state-baseline`, `state-watch`, `state-elevated` and `state-high`. Always print the word beside the color; the four are not told apart by lightness alone. Contrast was checked: ink and ink-muted at 4.5:1 or better on both surfaces, brand and on-brand at 4.5:1, signal, state and focus colors at 3:1 on both surfaces, panel colors at 4.5:1 on `panel`. Do not use `signal-stress` or the state colors for small text.

Type. Set display headlines in Cormorant Garamond Light with the second line in Light Italic (`display-xl`, `display-xl-italic`, `display-lg`). Set body in Inter (`body`, `body-sm`). Set kicker labels, eyebrows such as AMPLIFIER FOR ZOOM, and readout rows in JetBrains Mono (`label`, `readout`), uppercase and letterspaced. Fonts load from Google Fonts.

Layout. Separate sections with hairlines and a mono kicker above each headline. Use `space-12` between sections, `space-6` between related blocks, `space-4` inside cards. Use `radius-sm` for cards and color blocks, `radius-md` for buttons and the panel, `radius-pill` for chips. Borders, not shadows. No gradients, no emoji, no colored left borders on cards.

## Page anatomy

NavBar, Hero, a problem section of StatCards, a science section of FeatureCards beside a TrendChart and SnapshotPanel, How it works as three Steps, Privacy as CheckItems, Pricing as three PricingCards, a closing Hero, then Footer.

## Iconography

Use simple checkmarks and plain glyphs only. No emoji. The Amplifier wordmark is set in text until the logo file is supplied; do not redraw it.
