# Foto Clube Design System

Brand and UI system for **Socio Foto Clube** (Foto Clube), a Brazilian monthly photo-print subscription club. Members pay a recurring fee and receive polaroid-format photo prints ("revelação de fotos") and related keepsake products at home every month.

- Marketing / e-commerce site: https://www.sociofotoclube.com.br/ (built on the Betalabs subscription-club commerce platform)
- Source of truth for this design system: `uploads/manual-marca-foto-clube.pdf` — the brand's official "Manual de Marca" (27 pages), supplied by the user
- No Figma file, codebase, or component library was attached — this system is built from the brand manual + the live marketing site's copy/structure. Component primitives below are therefore an **authored standard set** sized to the brand (see "Intentional additions"), not an extracted inventory.

## What's here
- `styles.css` — root stylesheet, imports everything below. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `fonts.css`, `spacing.css`, `effects.css`
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Badge, Tag
- `components/core/` — Card, Tabs
- `guidelines/` — foundation specimen cards (Design System tab: Colors, Type, Spacing, Brand, Iconography, Imagery)
- `assets/` — brand assets (see "Logo" caveat below)
- `SKILL.md` — Claude Code-compatible skill wrapper

## Logo — important caveat
**No usable logo file could be extracted.** The brand manual's logomarca is drawn as vector artwork inside the PDF; the page-rendering tool available in this session could not reliably rasterize those pages (intermittent rendering failures on the vector-heavy pages), and no raster/embedded logo image exists in the PDF to fall back on. Per design-system policy, **no logo was drawn, approximated, or reconstructed.** Everywhere a mark would go, this system renders the wordmark "Foto Clube" in plain type (Heavitas/Fredoka, see Typography) instead.

**Ask:** please attach the logo as a standalone file (SVG/PNG/AI/EPS) — from the manual's pages 1–5 ("Logomarca", "Tipograma", "Símbolo da marca", positive/negative/outline variants) — and it will be dropped into `assets/logo/` and wired into the cards and components that reference it.

## Content fundamentals
- **Language & voice**: Brazilian Portuguese. Direct, warm, family-oriented. The manual's own description of on-brand imagery — "fotos de maternidade, fotos fofas de bebês, memórias mágicas, fotos de momentos felizes entre família" (maternity photos, cute baby photos, magical memories, happy family moments) — doubles as the brand's emotional register: nostalgic, tender, domestic.
- **Site meta line**: "Receba revelação de fotos, todos os meses, em formato polaroid e mais produtos especiais. Seja Sócio Foto Clube." — imperative, benefit-first, ends on the membership call ("Seja Sócio" / "Be a Member"). Copy leans on the ritual of a **monthly** recurring gift, not one-off purchase.
- **Tone**: casual-warm, not corporate. Second person ("Seja Sócio", "Meu cadastro", "Meus pedidos") — direct address, informal "você" register typical of Brazilian D2C. No emoji seen in brand materials or site chrome.
- **Naming pattern**: "Sócio Foto Clube" — brand frames the customer as a *member of a club*, not a customer of a store. Lean on club/membership language (sócio, clube) over transactional language (cliente, compra) when writing UI copy.
- **Product vocabulary**: "revelação" (print/development), "polaroid", "sacola" (cart/bag — from the live site), "cadastro" (account), "pedidos" (orders), "assinatura/plano" (subscription/plan).

## Visual foundations
- **Color**: two-color brand palette — **blue `#008694`** (called "azul" in the manual; reads as a deep teal) as primary, used across most brand applications, paired with **yellow `#ffc500`** as the complementary/secondary color. Black is for text, white is for backgrounds and "positive" logo applications. The manual is explicit that this 4-color set (blue / yellow / black / white) is the whole primary palette — neutrals/grays used in this system for surfaces and secondary text are an interpolated extension, not from the source.
- **Logo color rules**: when color reproduction is limited, the logo must fall back to **fully positive (all-white) or fully negative (all-black)** — never partial recoloring, never a mixed-color logo.
- **Corners are square.** The manual is explicit: patterns, icons, and supporting graphics should use "formas quadradas e retangulares com os vértices formando o ângulo de 90°" (square/rectangular shapes with sharp 90° corners). This system defaults to **`--radius-0` (no rounding)** everywhere; a couple of small radii exist as *sparing* exceptions (see `tokens/effects.css`), not a default rounded-corner treatment. Do not default to rounded-rect cards/buttons — that reads off-brand here.
- **Type**: five-typeface system, each with one job:
  - **Heavitas** (display/all-caps, headline-only — no lowercase text usage per manual) — no font file was supplied; substituted with **Fredoka** (rounded-geometric, bold, all-caps friendly). Flagged substitution.
  - **Solway** — the workhorse: titles, subtitles, captions, and body text across most applications. Exact Google Fonts match, used as-is.
  - **Work Sans** — sans-serif for running text/body copy, and optionally subtitles/captions. Never used for titles. Exact Google Fonts match.
  - **Handsome Pro** (handwritten, decorative only, always paired with another face) — no font file supplied; substituted with **Caveat**. Flagged substitution.
  - **Alexander Lettering** (second handwritten face, same decorative-only role) — no font file supplied; substituted with **Permanent Marker**. Flagged substitution.
  - Rule of thumb: Solway/Work Sans carry real content; Heavitas is for short punchy headline moments; the two script faces are seasoning on details, never a whole heading or paragraph.
- **Shapes/grafismos**: supporting graphic devices are square/rectangular blocks with hard right-angle corners — used as background patterns and color-blocking, not just icon style.
- **Icons**: prioritize square, geometric icons with straight vertices. Manual explicitly allows other icon shapes but says to keep prioritizing geometric/square forms. No icon font or SVG icon set was included in the manual — see Iconography below.
- **Supporting illustration style**: manual calls out three recurring social-media motifs — *aquarela* (watercolor-style illustration), *rabiscos* (doodle/scribble marks), and flat-color ("cor chapada") illustration. These read as hand-touched, warm accents layered over the geometric brand system, not the primary visual language.
- **Textures**: soft, subtle textures only — watercolor, paper grain, and granulated textures. The manual points to a shared texture pack rather than embedding files: https://drive.google.com/drive/folders/14nsWKR9K7LIx8acwGoELmgZPGsSb88qD (not fetched into this project — external Drive folder, ask the user if you need the actual files).
- **Imagery**: warm, candid, real-feeling family/baby/maternity photography — "memórias mágicas" over polished studio shots. Manual notes the brand sources these from stock libraries (used sparingly), AI-generated images, and photos shot in-house at the company's own office. No sample images were embedded in the manual pages this session could read reliably — ask the user for real photography before shipping imagery-heavy layouts; use clearly-labeled placeholders until then.
- **Misuse rules (explicit "don't"s from the manual)**: never misalign the logo; never apply drop shadows to the logo (or, by extension, treat this as a signal the brand runs flat/shadowless — this system's shadow tokens are minimal and reserved for real elevation, not decoration); never recolor the logo's symbol black-only; never blur the logo. Always reproduce the mark in full — never a partial/cropped logo.
- **Animation / interaction states**: not specified in the manual (no motion, hover, or press guidance given). This system defaults to a restrained, fast, standard-ease treatment (`tokens/effects.css`: 120–180ms, standard easing) with opacity/darken-based hover states matching the flat, shadow-averse brand — treat these as reasonable defaults to revisit once real product UI exists.

## Iconography
No icon font, SVG sprite, or icon set was included in the brand manual or found accessible from the marketing site. The manual's only guidance is stylistic: prefer square, geometric, straight-edged icon shapes. **Substitution**: this system links **Lucide** (CDN, MIT-licensed, stroke-based, easy to square off) as the default icon set until the brand supplies its own — flagged here as a substitution, not a brand asset. No emoji or unicode-glyph icon usage was observed anywhere in the source materials.

## Intentional additions
No component library, codebase, or Figma file was attached — only the static brand manual — so the component set below is an authored standard set sized to a small subscription-commerce brand, not an extracted inventory:
- **Button, IconButton, Input, Select, Checkbox, Radio, Switch** (forms), **Badge, Tag** (feedback), **Card, Tabs** (core) — common primitives a membership/e-commerce product needs (account forms, plan/product cards, order status tags).
- Deliberately **not** built yet: Dialog, Toast, Tooltip, Avatar, Table, Navigation — omitted to keep the initial set tight; add on request once there's a real screen driving the need.

## Index
- `styles.css` → `tokens/{colors,typography,fonts,spacing,effects}.css`
- `guidelines/*.card.html` → specimens (Colors, Type, Spacing, Brand, Iconography, Imagery groups in the Design System tab)
- `components/forms/{Button,IconButton,Input,Select,Checkbox,Radio,Switch}.*`
- `components/feedback/{Badge,Tag}.*`
- `components/core/{Card,Tabs}.*`
- `SKILL.md` — portable skill wrapper for Claude Code

## Caveats / ask
1. **Logo could not be extracted** — see "Logo" above. Please attach logo files directly.
2. **Three fonts substituted** (Heavitas→Fredoka, Handsome Pro→Caveat, Alexander Lettering→Permanent Marker) because no font files were supplied — please attach the real font files (e.g. `.woff2`/`.otf`) if you have them, and I'll swap the `@font-face` rules in.
3. **No icon set found** — using Lucide via CDN as a geometric-icon substitute; happy to swap to the brand's real icons if they exist somewhere.
4. **No product photography supplied** — imagery-heavy layouts use placeholders; send real photos for anything customer-facing.
5. **No Figma/codebase attached** — components and any future UI kit are original-but-on-brand, not extracted from a real product. If Foto Clube's actual site/app has a design file or repo, attach it and I'll rebuild against the real screens.

Tell me what to prioritize next — logo integration, real fonts, a homepage/account UI kit, or a deeper component set — and I'll iterate.
