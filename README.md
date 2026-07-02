# Ethos Bakery

A frontend prototype for a Los Angeles artisan bakery — featuring a full home page, browsable menu, and a complete order flow from cart through confirmation.

---

## Features

**Home**
- Hero slideshow cycling through menu item photography with a purple-to-blue gradient overlay
- About section with brand copy
- Interactive location cards with embedded Leaflet/OpenStreetMap maps pinned to each address
- Menu preview section with category images and item listings

**Order flow**
- `/order` — searchable, filterable menu grid with live cart pill
- `/cart` — line items with quantity steppers, order summary, pickup/delivery fee
- `/checkout` — pickup/delivery toggle, contact fields, location picker or address input
- `/payment` — order summary + card fields (mock, no real payment processing)
- `/confirmation` — animated confirmation screen with generated order number

**Navigation**
- Desktop: sticky frosted-glass navbar with smooth scroll and page routing
- Mobile: hamburger menu with animated slide-out drawer, scroll lock, serif nav items

**Other**
- Page transition animations (slide left/right based on direction)
- Framer Motion throughout
- Fully responsive — mobile-first layout with Tailwind breakpoints
- OpenGraph + Twitter Card metadata for link sharing
- Per-page document titles

---

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** — CSS-first config via `@theme`
- **React Router v7**
- **Framer Motion v12**
- **React Leaflet** + **OpenStreetMap** — no API key required
- **Bun** — package manager and workspace runner

---

## Project structure

```
apps/web/
  public/
    images/menu/    # menu item photography
    logos/          # Ethos brand mark (purple + white variants)
    hero.png        # OG image
  src/
    components/
      cards/        # MapCard, MenuCategory, MenuItem
      home/         # Hero, About, Locations, Menu sections
      navigation/   # Navbar (with mobile drawer), OrderNavbar, Footer
      orders/       # OrderMenuCard, SearchFilters
    context/
      CartContext   # cart state, mode (pickup/delivery), derived totals
    data/
      menuItems.json
      locations.json
      nav.json
    pages/          # Home, Order, Cart, Checkout, Payment, Confirmation
    lib/
      capitalizeFirst.ts
```

---

## Getting started

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # production build → apps/web/dist/
```

---

## Deployment

Configured for Vercel via `vercel.json` at the repo root. Import the repo in Vercel — no additional settings required. The SPA rewrite ensures React Router routes (`/order`, `/cart`, etc.) resolve correctly on direct load.

---

*Prototype site — no real payments, accounts, or order processing. Property of [JRoybalDev](https://jroybal.dev).*
