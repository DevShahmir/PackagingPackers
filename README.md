# Packaging Packers — Custom Packaging Platform

A modern Next.js 16 storefront and custom box specification platform engineered for high-end retail, bakery, and e-commerce packaging in Pakistan.

---

## Quick Start

```bash
npm install
npm run dev
```

Runs on [http://localhost:3000](http://localhost:3000).

```bash
# Production verification
npm run build
```

---

## Architecture & Component Map

The codebase is organized cleanly so developers can immediately locate and extend any feature:

```
app/
├── (homepage)/page.tsx          # Landing page with scroll reveals
├── products/page.tsx            # Main catalog page with real-time filtering
├── products/[id]/page.tsx       # Dynamic product detail page with related suggestions
├── about/page.tsx               # Atelier craftsmanship & workflow breakdown
├── contact/page.tsx             # Interactive custom quote request form
│
├── Components/
│   ├── layout/                  # Persistent layout chrome
│   │   ├── navbar.tsx           # Responsive navigation + quote scroll anchor
│   │   └── footer.tsx           # Site footer & contact info
│   │
│   ├── Homepage-Sections/       # Landing page building blocks
│   │   ├── heroSection.tsx      # 80vh track slider with auto-scroll & pause
│   │   ├── FeatureStrip.tsx     # Value props (Nationwide delivery, 3D proofs, etc.)
│   │   ├── CategoryBanners.tsx  # Featured category cards (Rigid, Mailer, etc.)
│   │   ├── TopSellersSection.tsx# Category tabs with curated product grid
│   │   ├── SplitCollectionSection.tsx # Spotlight comparisons + Mailer suite
│   │   ├── ForyouSection.tsx    # Brand elevation perks + final CTA
│   │   ├── IntroSection.tsx     # 3-step buying journey guide
│   │   └── PillarCard.tsx       # Reusable pillar cards
│   │
│   ├── ProductpageSections/     # Catalog & filtering logic
│   │   ├── ProductView.tsx      # Search query state, category orchestration
│   │   ├── Filtersecction.tsx   # Category & subcategory pill selectors
│   │   └── productsection.tsx   # Product grid with empty state fallback
│   │
│   ├── ProductCard/             # Card presentation
│   │   ├── ProductCard.tsx      # Hover animations (float, strike, shadow)
│   │   └── ReliventCards.tsx    # Curated recommendations algorithm
│   │
│   ├── ContactPageSectoins/     # Quote form ecosystem
│   │   ├── Inputs.tsx           # Suspense-wrapped form controller
│   │   ├── CategorySelector.tsx # Dynamic subcategory drill-down
│   │   ├── ContactFormFields.tsx# Form inputs with focus management
│   │   ├── SelectedProductBanner.tsx # Dynamic active product pill
│   │   ├── ContactSuccessCard.tsx    # Submission confirmation
│   │   ├── ContactInfoCard.tsx       # Reusable contact card
│   │   └── Info.tsx             # Business hours, email, phone details
│   │
│   ├── AboutPage-Sections/      # Brand story & technical specs
│   │   ├── AtelierHero.tsx      # Heritage stats and intro
│   │   ├── AtelierInspector.tsx # Interactive box archetype explorer
│   │   ├── AtelierWorkflow.tsx  # 4-stage packaging production timeline
│   │   ├── FinishesShowcase.tsx # Finishes and surface details lab
│   │   ├── FinishCard.tsx       # Individual finish swatch card
│   │   ├── AtelierGuarantees.tsx# Packaging commitments
│   │   ├── GuaranteeCard.tsx    # Guarantee feature item
│   │   ├── AtelierCTA.tsx       # Direct dieline consultation banner
│   │   ├── InspectorDetailCard.tsx # Detailed technical specs
│   │   ├── WorkflowStepItem.tsx # Production step item
│   │   └── StatBadge.tsx        # Highlight metric badge
│   │
│   └── ui/                      # Global reusable UI primitives
│       ├── CTAButton.tsx        # Pill button with hover shimmer & directional arrow
│       ├── SectionHeading.tsx   # Serif typography heading with diamond flourish
│       ├── BoxVisual.tsx        # Vector SVG box illustrations for all models
│       ├── PageTransition.tsx   # Animated 3D packaging dieline route transition
│       ├── SparkleEffect.tsx    # Gold stardust & shockwave ring click feedback
│       ├── ScrollReveal.tsx     # Intersection-observer scroll animations
│       └── AmbientBackground.tsx# Subtle canvas particle atmosphere
│
├── Data/
│   ├── types.ts                 # BoxCategory, AnySubCategory, BoxProduct contracts
│   └── shape.ts                 # Full product catalog (40+ items with specs)
│
├── globals.css                  # Atelier luxury palette, Tailwind v4 theme, animations
└── layout.tsx                   # Root HTML shell, fonts, global providers
```

---

## Design System

- **Palette**: Deep Espresso (`#1A120E`), Rich Chocolate (`#3A2418`), Warm Cocoa (`#6B4A2E`), Gold/Taupe (`#A88462`), Cream Linen (`#D5C4AE`).
- **Typography**: Playfair Display (Serif headings via `.font-royal`), Geist Sans (Body).
- **Illustrations**: All 3D boxes are lightweight SVGs in `BoxVisual.tsx` (zero image bloat).
- **Tactile Feedback**:
  - Global button hover lift (`-2.5px`) with ambient gold glow.
  - Multi-tone gold stardust spark burst on every button and filter pill click.
  - Smooth CAD packaging route transition on link navigation.
