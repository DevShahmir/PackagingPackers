# 📦 ProductpageSections: Architecture & Data Flow Guide

This folder controls the entire interactive product catalog and two-level filtering system.

---

## 🏛️ 1. The Big Picture (Component Roles)

Think of these components as a **Restaurant Kitchen**:

```
                       ┌─────────────────────────┐
                       │     ProductView.tsx     │  <--- THE HEAD CHEF (The Boss)
                       │  - Holds category state │       Decides what should be displayed
                       │  - Holds subCategory    │
                       │  - Calculates "visible" │
                       └────────────┬────────────┘
                                    │
            ┌───────────────────────┴───────────────────────┐
            │ Passes:                                       │ Passes:
            │ - category & onCategoryChange                 │ - items (filtered list)
            │ - subCategory & onSubCategoryChange           │
            ▼                                               ▼
┌───────────────────────────┐                 ┌───────────────────────────┐
│     Filtersecction.tsx    │                 │     productsection.tsx    │
│   (THE REMOTE CONTROL)    │                 │   (THE PRESENTATION TABLE)│
│   - Shows Level 1 Buttons │                 │   - Takes "items"         │
│   - Shows Level 2 Subtypes│                 │   - Renders each card     │
│   - Calls on...Change()   │                 └───────────────────────────┘
└───────────────────────────┘
```

| File | Role | What it holds |
|---|---|---|
| **`ProductView.tsx`** | **Parent (The Brain)** | Holds `category` & `subCategory` states and filters the `products` list. |
| **`Filtersecction.tsx`** | **Child 1 (The Remote Control)** | Stateless. Renders Main category buttons + conditional Sub-type buttons. |
| **`productsection.tsx`** | **Child 2 (The Display Gallery)** | Stateless. Just receives `items` and loops (`.map`) to display cards. |

---

## 🔍 2. How the Two-Level Filter Works

### Level 1: Main Category (`"ALL" | "Rigid" | "Corrugated" | "Cardboard"`)
- Handled by `category` state.
- When clicked, it also **resets** `subCategory` to `"ALL"`.

### Level 2: Sub-Categories
- Handled by `subCategory` state.
- **Conditional:** Only appears when `category !== "ALL"`.
- We use the `SUBCATEGORIES_BY_CATEGORY[category]` dictionary from `types.ts` to get the list of available subtypes for the selected category!

---

## 🔄 3. The 6-Step Lifecycle: What Happens When You Click?

```
[1. User Clicks "Rigid"]
          │
          ▼
[2. Filtersecction fires onCategoryChange("Rigid")]
          │
          ▼
[3. ProductView updates category = "Rigid" and resets subCategory = "ALL"]
          │
          ▼
[4. React re-renders ProductView]
          │
          ▼
[5. visible is recalculated -> only "Rigid" products are kept]
          │
          ▼
[6. Filtersecction now shows the Rigid Sub-types: [All Rigid] [MagneticClosureBox] ...]
```

When the user clicks a sub-type (e.g. `MagneticClosureBox`):
1. `onSubCategoryChange("MagneticClosureBox")` fires.
2. `subCategory` becomes `"MagneticClosureBox"`.
3. `visible` is filtered by BOTH `category === "Rigid"` AND `subCategory === "MagneticClosureBox"`.
4. Only that specific subtype of boxes is displayed on screen!
