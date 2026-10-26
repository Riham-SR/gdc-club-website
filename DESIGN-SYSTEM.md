# Figma Design System Extraction

## Design system overview

**Reference:** [GRD-Club](https://www.figma.com/design/T8HZRCspMMC1crtF2xRXg8/GRD-Club?node-id=154-419)
**File key:** `T8HZRCspMMC1crtF2xRXg8`
**Design page:** `GDC_Web` (`87:8`)
**Selected frame:** `GDC_Club` (`154:419`), 1440 × 6390 px

The file reports these top-level pages:

| Page | Node ID |
|---|---|
| Design System | `0:1` |
| Component | `50:2` |
| GDC_Web | `87:8` |

The Design System page is organized into:
- Color Primitives
- Typography Primitives
- Spacing Primitives
- Border Radius Primitives

The visible colour group labels include Purple, Petrol, Yellow, Neutral, and Base Roles.

Their displayed scales are:
- purple 100–900
- petrol 100–900
- yellow 100–900
- neutral 100–900

Base-role names include Background Light, Background Dark, Text Dark, and Text Light.

Typography samples are named Display, H1, H2, H3, Body Large, Body, Small, and Tiny. Spacing samples are numbered 100–1000 and radius samples 100–500.

These are verified layer and taxonomy names from the inspection metadata. That metadata does not expose every swatch value or confirm that every displayed sample is backed by a Figma variable.

## Variable collections and modes

`get_variable_defs` returned a key-to-value map for the website frame. It did not return variable collection names, modes, declared data types, aliases, or usage locations.

The Design System page query returned an empty map; its page-level request also reported that no layer was selected. This does not establish that the page contains no variables.

The values below are preserved exactly as returned. Numeric variable values are listed as raw numbers without adding units that were not included in the response.

Where a name suggests a unit or role, that interpretation is not a separate type field returned by MCP.

## Colour tokens

| Exact key | Returned value |
|---|---|
| `var(--color-brand-secondary)` | `#448883` |
| `var(--color-text-primary)` | `#2a2e32` |
| `var(--color-text-muted)` | `#817d7a` |
| `var(--color-text-inverse)` | `#ffffff` |
| `var(--color-brand-primary)` | `#775572` |
| `var(--color-brand-accent)` | `#f5cb42` |
| `var(--color-background-light)` | `#f8f6f2` |
| `var(--color-background-dark)` | `#4a4f55` |
| `var(--color-surface-primary)` | `#f7f5f0` |
| `var(--color-text-light-500)` | `#ffffff` |
| `var(--color-border-strong)` | `#a39f9b` |
| `color/action/default` | `#454244` |

These are exact values returned for the website frame.

The full primitive colour-scale values were not available through the metadata or variable-definition response. Artwork may contain additional colours outside this token inventory.

## Typography tokens and text styles

### Extracted tokens

| Exact key | Returned value |
|---|---|
| `type/family/display` | `Manrope` |
| `type/weight/extrabold` | `800` |
| `var(--type-display-size)` | `80` |
| `var(--type-display-line-height)` | `96` |
| `var(--type-display-weight)` | `800` |
| `var(--type-h1-size)` | `80` |
| `var(--type-h1-line-height)` | `75.5999984741211` |
| `var(--type-h1-weight)` | `500` |
| `var(--type-line-height-h1)` | `75.5999984741211` |
| `var(--type-h2-size)` | `48` |
| `var(--type-h2-line-height)` | `52.79999923706055` |
| `var(--type-h2-weight)` | `400` |
| `var(--type-h3-size)` | `32` |
| `var(--type-h3-line-height)` | `38.400001525878906` |
| `var(--type-h3-weight)` | `500` |
| `var(--type-body-large-size)` | `20` |
| `var(--type-body-large-line-height)` | `30` |
| `var(--type-body-large-weight)` | `400` |
| `var(--type-line-height-body-large)` | `30` |
| `var(--type-body-size)` | `16` |
| `var(--type-body-line-height)` | `24` |
| `var(--type-body-weight)` | `400` |
| `var(--type-small-size)` | `14` |
| `var(--type-small-line-height)` | `19.600000381469727` |
| `var(--type-small-weight)` | `400` |
| `var(--type-tiny-size)` | `12` |
| `var(--type-tiny-weight)` | `400` |

The variable-definition response does not expose complete reusable text-style records or all individual text-layer font assignments.

### Additional verified text-layer settings

Direct inspection of desktop text layers verified the following applied settings:

| Element | Font family | Font style | Font size |
|---|---|---|---|
| Hero heading | Manrope | ExtraBold | 80 px |
| About heading | Manrope | Regular | 48 px |
| Selected Work heading | Inter | Medium | 80 px |
| Tutorials heading | Inter | Medium | 80 px |
| Tutorial card headings | Inter | Medium | 32 px |
| Explore the Club heading | Inter | Medium | 48 px |
| Activity panel headings | Inter | Medium | 80 px |
| Upcoming Events heading | Inter | Extra Bold | 88 px |
| Event card headings | Inter | Bold | 43 px |
| Get Involved heading | Inter | Medium | 80 px |
| Footer wordmark | Inter | Medium | 80 px |

Inter Regular, Medium, Semi Bold, Bold, and Extra Bold styles are used in the desktop design.

Other inspected text layers use sizes including 11, 12, 13, 14, 15, 16, 18, and 20 px. Decorative tutorial lettering also uses 85 and 110 px.

The extracted typography tokens are not an exhaustive inventory of the text settings applied to the page.

Preserve element-specific settings rather than replacing them with the nearest token value. The applied settings above do not, by themselves, establish whether those properties are bound to variables or reusable text styles.

Use the tablet and mobile frames to verify smaller-screen typography rather than applying desktop sizes universally.

## Spacing and layout tokens

| Exact key | Returned value |
|---|---|
| `var(--space-component-gap)` | `16` |
| `var(--space-card-padding)` | `24` |

The Design System page metadata shows spacing sample names from 100 through 1000, but their values were not returned.

No width, height, or general sizing variables were returned for the website frame. Node dimensions are available in metadata, but dimensions alone are not evidence of sizing variables.

### Verified layout measurements

The following are node measurements, not confirmed variable definitions:

| Element | Measurement |
|---|---|
| Desktop frame | 1440 × 6390 px |
| Tablet frame | 768 × 7965 px |
| Mobile frame | 390 × 8696 px |
| Desktop event cards | 432 px wide |
| Desktop event card gaps | 20 px |
| Desktop activity viewing frame | 1336 px wide |
| Individual desktop activity panels | 1336 px wide |
| Combined activity panel track | 4008 px wide |

Reference frame heights should not automatically become fixed CSS page heights.

## Effects and other visual tokens

| Exact key | Returned value |
|---|---|
| `var(--radius-sm)` | `6` |
| `var(--radius-md)` | `10` |
| `var(--radius-lg)` | `16` |
| `var(--radius-xl)` | `20` |
| `var(--radius-2xl)` | `28` |

Radius sample layers are numbered 100–500 on the Design System page.

The MCP responses used for this extraction did not expose shadow/effect variable definitions or reusable effect-style records. Their absence from this extraction does not establish that no such styling exists in the file.

Verify which radius applies to each component rather than applying one radius universally.

## Component inventory and variants

The extraction reported no libraries added to the file. The Component page metadata exposes local component symbols and variant families:

| Component family | Names or variants visible in metadata |
|---|---|
| `Button_Explore_Services` | `State=Default`, `State=Hover` |
| Navigation links | `Nav link_Services`, `Nav link_About`, `Nav link_ Featured`, `Nav link_ Tutorials`, `Nav link_ Contact`; Default and Hover states |
| Profile icon | `Icon_Profile` |
| Logo | `GDC_logo 1` |
| Content cards | Desktop 420, Tablet 338, Mobile 346 |
| Tutorial cards | Desktop / 1–3, Tablet / 1–3, Mobile / 1–3 |
| `UpcomingEvents / Card` | `Type=CreativeLab`, `Type=DesignSprint`, `Type=PortfolioMeetup`; desktop, tablet, and mobile families |
| `ExploreClub / Card` | `Type=CreativeWorkshops`, `Type=DesignChallenges`, `Type=PortfolioReviews`; desktop, tablet, and mobile families |

These names and variants were reported by the Component page metadata. The metadata did not provide complete component property schemas or relationships.

Code Connect component-detail requests failed with a seat-related access restriction. This limits that inspection method; it does not establish that local components are unavailable.

MCP design-system searches for named components and the style `type/h1` returned no results. Those searches are library-oriented, so empty results do not prove that local components or styles do not exist.

Repeated visual elements are not counted as actual components unless metadata exposes them as components or instances.

## Naming conventions and taxonomy

Verified labels show a mix of:

- Primitive family and scale names, such as `purple 100` and `neutral 900`.
- Role names, such as Background Light and Text Dark.
- Semantic-looking variable keys, such as `var(--color-text-primary)` and `var(--color-brand-primary)`.
- Slash-delimited keys, such as `type/weight/extrabold`, `type/family/display`, and `color/action/default`.
- Component family, responsive size, and variant names, such as `UpcomingEvents / Card / Desktop 1440` and `Type=CreativeLab`.

The returned variable map does not expose a complete primitive-to-semantic-to-component alias graph.

Do not treat visible naming categories as confirmed variable relationships. Preserve original Figma names in this documentation.

## Gaps, inconsistencies, and recommendations

### Possible naming/value inconsistencies

These keys return identical values. They may be aliases, separately scoped variables, or duplicated values; the extraction did not resolve their relationships.

| Keys | Same returned value |
|---|---|
| `var(--type-h1-line-height)` and `var(--type-line-height-h1)` | `75.5999984741211` |
| `var(--type-body-large-line-height)` and `var(--type-line-height-body-large)` | `30` |
| `type/weight/extrabold` and `var(--type-display-weight)` | `800` |
| `var(--color-text-inverse)` and `var(--color-text-light-500)` | `#ffffff` |

These are review suggestions, not confirmed defects.

### Typography coverage

The token response does not cover all applied text sizes and font assignments.

In particular:
- The Hero and About headings use Manrope.
- The Upcoming Events heading uses Inter Extra Bold at 88 px.
- Event card headings use Inter Bold at 43 px.

Do not replace these settings solely to make the page conform to the extracted token list.

### Information not retrieved

- Variable collection names and modes.
- Declared variable data types.
- Alias relationships and per-variable usage.
- Exact values for every primitive palette swatch.
- Complete reusable text, paint, and effect style records.
- Shadow/effect definitions.
- A complete width, height, and sizing token set.
- Complete component property schemas and relationships.
- Confirmation that every displayed primitive sample is backed by a Figma variable.
- A complete audit of hard-coded properties and inconsistent component styling.

### HTML and CSS implementation recommendations

- Map verified colour, typography, spacing, and radius values to CSS custom properties.
- Preserve the original Figma keys in documentation.
- Distinguish CSS property names chosen for implementation from original Figma variable names.
- Do not invent missing aliases or claim that inferred relationships are verified.
- Preserve verified element-specific typography.
- Use responsive component references when implementing their corresponding layouts.
- Verify numeric units from the relevant Figma properties before converting raw token values to CSS lengths.
- Use semantic HTML and accessible controls.
- Verify hover states from the relevant component variants.
- Provide keyboard focus states as an accessibility requirement; do not describe unverified focus styling as extracted from Figma.
- Treat unresolved interaction behaviour and intermediate-width layouts as implementation decisions requiring documentation.
- Do not rename Figma variables, create new variables, or modify the Figma file as part of this extraction.

## Inspection scope

This report combines the supplied Figma MCP extraction with additional direct inspection of desktop text layers and frame measurements.

It is a partial inventory where the extraction tools did not expose full variable, style, or component metadata.

No Figma design content was changed.