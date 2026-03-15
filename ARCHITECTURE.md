# Architecture — Portfolio Website

## Overview

Single-page vanilla HTML/CSS/JS application. No build tools, no frameworks, no package manager.

## File Map

```
index.html                    ← All markup (549 lines, 9 sections)
├── assets/css/
│   ├── stylesheet.css        ← All custom styles (1181 lines)
│   └── swiper-bundle.min.css ← Swiper library styles
├── assets/js/
│   ├── script.js             ← All custom JS (125 lines)
│   └── swiper-bundle.min.js  ← Swiper library
├── assets/img/
│   ├── ptg.jpg               ← Profile photo
│   ├── *.jpg                 ← Project screenshots
│   └── drawings/             ← Hobby artwork (7 images)
└── assets/pdf/
    └── PATRICKs Resume*.pdf  ← CV downloads
```

## External Dependencies (CDN)

| Library | Version | Purpose | CDN |
|---------|---------|---------|-----|
| jQuery | 3.6.0 | DOM manipulation | cdnjs |
| Typed.js | 2.0.12 | Typing animation | cdnjs |
| Swiper | 8.x | Carousel/slider | bundled locally |
| Font Awesome | 4.7.0 | Icons | cdnjs |
| Boxicons | 2.1.1 | Icons | unpkg |
| Unicons | 4.0.0 | Icons | iconscout CDN |

## Section → Code Mapping

| Section | HTML IDs/Classes | CSS Lines (approx) | JS Functions |
|---------|-----------------|---------------------|-------------|
| Navbar | `.navbar`, `#menu-icon` | 1-80 | Scroll sticky, mobile toggle |
| Home | `#home`, `.home-content` | 80-200 | Typed.js init |
| About | `#about`, `.about-content` | 200-300 | — |
| Skills | `#skills`, `.skills-content` | 300-450 | Accordion toggle |
| Qualification | `#qualification`, `.qualification-tabs` | 450-600 | Tab switching |
| Projects | `#portfolio`, `.portfolio-container` | 600-750 | Swiper init |
| Hobbies | `#drawings`, `.drawings-container` | 750-850 | Swiper init |
| Contact | `#contact`, `.contact-form` | 850-1000 | — |
| Footer | `.footer` | 1000-1050 | — |
| Responsive | Media queries | 1050-1181 | — |

## Data Flow

All content is **hardcoded in index.html**. No external data sources, no API calls, no database.

## Deployment

- Push to `master` branch → GitHub Pages auto-deploys
- No build step required
- URL: https://pats101.github.io/tonde-website/
