# PRD: Patrick Ganhiwa — Portfolio Website

**Document Status:** Living document — update as goals evolve
**Last Updated:** 2026-03-14
**Owner:** Patrick Ganhiwa

---

## 1. Overview

A personal portfolio website showcasing Patrick Ganhiwa's professional skills, work experience, education, projects, and hobbies. Currently deployed as a vanilla HTML/CSS/JS single-page application on GitHub Pages.

**Live URL:** https://pats101.github.io/tonde-website/

---

## 2. Goals

### Primary Goals
- Present a professional image to recruiters, collaborators, and potential employers
- Showcase technical skills across frontend and backend development
- Provide easy access to CV/resume and contact information
- Display personal projects with live demo links
- Highlight personality through hobbies section (artwork)

### Success Metrics
- Site loads in under 3 seconds on mobile
- All sections are accessible and responsive across devices
- Contact form successfully delivers messages
- Projects link to working demos
- CV download works correctly

---

## 3. Target Audience

| Audience | What They Need |
|----------|---------------|
| Recruiters | Quick overview of skills, experience, CV download |
| Hiring Managers | Depth of technical skills, project examples, work history |
| Collaborators | Contact info, project links, GitHub profile |
| General Visitors | Professional impression, easy navigation |

---

## 4. Current Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom, 1181 lines) |
| JavaScript | Vanilla JS + jQuery 3.6.0 |
| Animations | Typed.js 2.0.12 |
| Carousels | Swiper 8.x |
| Icons | Font Awesome 4.7.0, Boxicons 2.1.1, Unicons 4.0.0 |
| Hosting | GitHub Pages |
| Build Tools | None (static files) |
| Package Manager | None |

---

## 5. Site Architecture

### Sections (in order)
1. **Navigation** — Fixed navbar, mobile hamburger menu
2. **Home** — Hero section with typing animation, social links, CTA
3. **About** — Profile photo, bio paragraph, CV download button
4. **Skills** — Collapsible accordion: Frontend (HTML, CSS, JS, Angular, Vue 3) + Backend (MySQL, Node, Java, Python, .NET C#)
5. **Qualification** — Tabbed view: Education timeline + Work experience timeline
6. **Projects** — Swiper carousel with 3 project cards (links to demos)
7. **Hobbies** — Swiper carousel with 7 pencil drawings
8. **Contact** — Contact form + contact details (email, location)
9. **Footer** — Copyright

### File Structure
```
tonde-website/
├── index.html              # Single-page app (all sections)
├── assets/
│   ├── css/
│   │   ├── stylesheet.css  # Custom styles (1181 lines)
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── script.js       # Custom JS (125 lines)
│   │   └── swiper-bundle.min.js
│   ├── img/                # Photos and project screenshots
│   │   └── drawings/       # Hobby artwork (7 images)
│   └── pdf/                # Resume/CV files
└── README.md
```

---

## 6. Design System

| Property | Value |
|----------|-------|
| Primary Color | `#0245aa` (Dark Blue) |
| Accent Color | `aqua` / `cyan` |
| Text Color | `#111` / `#333` |
| Background | `#fff` |
| Primary Font | Poppins |
| Secondary Font | Ubuntu |
| Responsive Breakpoints | 1300, 1104, 991, 947, 690, 500, 368, 296px |

---

## 7. Current Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Responsive navigation | Done | Hamburger menu on mobile |
| Typing animation | Done | Typed.js on hero |
| Skills accordion | Done | Frontend + Backend categories |
| Qualification tabs | Done | Education + Work timelines |
| Project carousel | Done | 3 projects with Swiper |
| Hobbies carousel | Done | 7 drawings with Swiper |
| Contact form | Done | HTML form (no backend) |
| CV download | Done | PDF link |
| Scroll-to-top | Done | Cyan button, bottom-right |
| Dark mode | Not started | — |
| Blog section | Not started | — |
| Analytics | Not started | — |
| Form backend | Not started | Contact form has no submission handler |
| SEO optimization | Not started | Missing meta tags, structured data |
| Performance optimization | Not started | No image optimization, no lazy loading |
| Accessibility | Partial | Missing ARIA labels, alt texts incomplete |

---

## 8. Phase Roadmap

### Phase 1: Foundation & Fixes (Current Priority)
- Fix contact form (add Formspree/Netlify Forms or similar backend)
- Add proper meta tags for SEO (title, description, OG tags)
- Optimize images (compress, add lazy loading)
- Add missing alt texts and ARIA labels for accessibility
- Ensure all project demo links work

### Phase 2: Content & Polish
- Update all content to reflect current role and skills
- Add dark mode toggle
- Improve mobile experience (test on real devices)
- Add page load animations (intersection observer)
- Add a testimonials/recommendations section

### Phase 3: Growth Features
- Add blog/articles section (could use static site generator)
- Add analytics (privacy-friendly, e.g., Plausible)
- Add structured data (JSON-LD) for rich search results
- Consider migration to a modern stack if needed (Astro, 11ty, etc.)

### Phase 4: Advanced (Future)
- CMS integration for easy content updates
- Automated deployment pipeline
- A/B testing for layout optimization
- Multi-language support

---

## 9. Constraints

- **No build tools** — Keep deployment simple (GitHub Pages static hosting)
- **No frameworks required** — Vanilla stack is intentional, keep it lightweight
- **Single HTML file** — Current architecture; consider splitting only if complexity demands it
- **Budget: $0** — Free hosting, free tools only
- **Maintenance: Solo** — Patrick is the only contributor

---

## 10. Content Sources

All portfolio content is currently hardcoded in `index.html`. Key content includes:

- **Profile:** Patrick Ganhiwa, Software Developer at Knowledge Translation Unit (2024-Present)
- **Education:** BS, BS Honours, MS Computer Science — University of the Western Cape
- **Work History:** Java Intern (2020) → Java Junior (2020-2021) → C# Engineer (2021-2022) → C# Developer (2022-2024) → Software Developer (2024-Present)
- **Skills:** Frontend (HTML, CSS, JS, Angular, Vue 3) + Backend (MySQL, Node, Java, Python, .NET C#)
- **Projects:** CS Jokes Generator, Inspiring Quotes Generator, CV Web View
- **Hobbies:** Pencil drawings and artwork (7 pieces)
