# ELITE — architectural editorial redesign

## Strategy
Public marketing site for homeowners and businesses in Southeast Texas. Primary action: discuss a project with John. Brand adjectives: architectural, precise, personal, composed. Essence: technology quietly integrated. Preserve approved EH mark, ELITE / Integrated Technology lockup, and “Advanced technology. Everyday simplicity.”

## System
Existing Next.js + React + Lucide + Tailwind; custom CSS projections, no new dependencies. Manrope display and body (existing loaded face), display weight 400–500, body 400–600. Type scale 16,20,25,31,39,49; fluid hero up to80. Navy dominant, cool white editorial surfaces, silver accents, existing blue reserved for actionable support/error context. No new gold branding; warm tones come from imagery.

| Token | Value / role |
|---|---|
| ink | oklch(0.20 0.037 258), approved navy equivalent |
| paper | oklch(0.978 0.006 260), cool white |
| silver | oklch(0.81 0.023 250), approved silver family |
| muted | oklch(0.74 0.027 252) |
| line | oklch(0.37 0.034 253) |
| action | oklch(0.48 0.17 260) |
| success / warning / error | existing semantic states retained |
| spacing | 8px base, sections64–112, gutters24–64 |
| radius | 0 editorial, 4px form controls |
| edge | fine keylines only, no decorative shadows |
| motion | 220ms ease-out, opacity/transform; reduced-motion removes it |

## Signature / composition
An architectural panorama beneath a confident two-column headline. Asymmetric cinema/outdoor diptych with text outside photographs. High-key physical control detail interrupts dark sections; precision network close-up supports care. No repeated image on the homepage. Mobile gets an intentionally framed architectural image, stacked copy, full-width tap targets and compact expandable navigation. Photos retain breathing room rather than being darkened beneath paragraph overlays.

## Image roles
All new assets under public/images/editorial, built-in Codex subscription image generation. Prompts and source-file provenance in IMAGE-PROVENANCE.md. Captions say “AI-generated design concept”; footer explicitly states not client installations. No fabricated project portfolio.
- Arrival: exterior blue-hour architecture, panoramic establishing shot, homepage only.
- Cinema: dark dedicated entertainment room, angled rows and screen; theater navigation/detail.
- Outdoor: bright garden listening terrace, foreground speaker and seating; audio navigation/detail.
- Control: macro bronze keypad on stone, raking daylight; automation feature/detail.
- Lighting: table-centered dining space, pendant and wall lighting; lighting navigation/detail.
- Network: tight blue-cable/patch-panel engineering detail; care and network capability.
- Entry: retained existing conceptual entry visual, surveillance capability only.
Consistent navigation-to-detail reuse is deliberate; no duplicate prominent scenes within a page.

## Interaction / accessibility
Visible double-contrast keyboard focus; active desktop/mobile navigation; menu expanded/control semantics, Escape dismissal and focus return, route-close behavior. Native link semantics throughout. Minimum44px mobile controls. No hover-only content. Real Formspree endpoint and intent handling retained; test via intercepted requests without sending emails. Semantic headings and landmarks. No new portal/demo routes.

## Review gate
Check all14 routes at desktop/mobile, intermediate widths, keyboard navigation, no overflow/missing images, request errors, form success/error with interception, axe WCAG AA checks. Inspect complete rendered pages separately for hierarchy, contrast, image role/crop, reading order and whitespace. Build success alone is not acceptance. Final results recorded in canonical topic4795 record.
