# UF Property Group — Project Documentation

## Overview
Landing page for UF Property Group, a North West England property investment and deal sourcing business. Built with Next.js + TypeScript, deployed on Vercel.

**Live site:** Connected via GitHub → Vercel (auto-deploys on every push to `main`)  
**GitHub repo:** https://github.com/4-Jhin/steves-uf-property  
**Business email:** steveufuoma505@gmail.com

---

## Tech Stack
- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Space Grotesk (Google Fonts)
- **Email:** Resend (API routes for form submissions)
- **Analytics:** Vercel Analytics + Vercel Speed Insights
- **Deployment:** Vercel (auto-deploy from GitHub main branch)

---

## Colour Scheme
| Token | Value |
|---|---|
| Background | `#F5F1EB` (warm cream) |
| Text | `#111111` (near-black) |
| Accent | `#C8A040` (gold) |
| Surface | `#EEEBE3` (slightly darker cream) |
| Dark sections | `#111111` bg with `#F5F1EB` text |

---

## Project Structure

```
app/
  components/
    Navbar.tsx        — Sticky nav, hamburger mobile menu, Join button
    Hero.tsx          — Oversized "UF PROPERTY" heading, SVG house scene, CTA
    HouseGraphic.tsx  — Custom SVG house illustration (garage left, trees right)
    About.tsx         — Two-column brand description
    HowItWorks.tsx    — 3-step numbered process
    DealTypes.tsx     — 4 deal type cards (BRRR, BMV, Value-Add, Cashflow)
    Register.tsx      — Investor registration form (wired to Resend)
    FocusAreas.tsx    — Focus area list (Bolton, Manchester etc.)
    Footer.tsx        — Mailing list signup + nav links + compliance note
  api/
    register/route.ts      — Sends email + adds contact to Resend audience
    mailing-list/route.ts  — Sends email + adds contact to Resend audience
  page.tsx            — Assembles all sections
  layout.tsx          — Root layout, fonts, Speed Insights, Analytics
  globals.css         — Tailwind theme + CSS custom properties
public/
  house.png           — House image (currently unused, SVG used instead)
```

---

## Page Section Order
1. Navbar
2. Hero (UF PROPERTY heading + house SVG + CTA)
3. About
4. How It Works
5. Deal Types
6. Register (investor form)
7. Focus Areas
8. Footer (mailing list + nav + compliance)

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key (full access) |
| `RESEND_AUDIENCE_ID` | `33a4c032-e5f0-4833-a4d4-74879b99c6c0` |

Both must be set in:
- `.env.local` for local development
- Vercel → Settings → Environment Variables (Production + Preview, marked sensitive)

---

## Resend Setup
- Form submissions (register + mailing list) send an email to `steveufuoma505@gmail.com`
- Contacts are also saved to the Resend Audience (`33a4c032-e5f0-4833-a4d4-74879b99c6c0`)
- **Important:** Resend must be initialised inside the route handler function, not at module level — otherwise Vercel build fails with "Missing API key" error
- From address uses `onboarding@resend.dev` until a custom domain is added to Resend

---

## Deploying Changes
```bash
git add .
git commit -m "Your message"
git push origin main
```
Vercel picks up the push and auto-deploys. No manual steps needed.

---

## Known Considerations
- The SVG house scene (HouseGraphic.tsx) has the garage bleeding off the left edge and trees bleeding off the right — this is intentional
- Mobile and desktop hero layouts are completely separate (`md:hidden` / `hidden md:flex`) to avoid overlap issues
- The contact form is wired to Resend but has no custom domain yet — emails send from `onboarding@resend.dev`
- Future: add a custom domain in Resend to send from a branded address (e.g. `hello@ufpropertygroup.co.uk`)
