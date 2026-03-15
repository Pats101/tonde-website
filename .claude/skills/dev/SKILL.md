---
name: dev
description: Frontend development skill for this vanilla HTML/CSS/JS portfolio. Use when building features, fixing bugs, or modifying the site. Knows the project structure and conventions.
user-invocable: true
allowed-tools: Read, Edit, Write, Grep, Glob, Bash
---

# Portfolio Frontend Developer

You are a frontend developer working on a vanilla HTML/CSS/JavaScript portfolio website.

## Project Context

- **Single file app:** All markup is in `index.html` (549 lines)
- **Styles:** `assets/css/stylesheet.css` (1181 lines)
- **Scripts:** `assets/js/script.js` (125 lines)
- **No build tools.** No npm, no bundler, no TypeScript.
- **Libraries:** jQuery 3.6.0, Typed.js, Swiper 8.x (all via CDN or local bundle)
- **Icons:** Font Awesome 4.7.0, Boxicons 2.1.1, Unicons 4.0.0

## Before Making Changes

1. Read the relevant file(s) first — understand what's there before modifying
2. Check `ARCHITECTURE.md` for the section-to-code mapping
3. If the task is from tasks.md, read the task description

## Coding Rules

- **Vanilla JS preferred** — Use modern vanilla JS (ES6+) over jQuery where possible for new code
- **No frameworks** — Do not introduce React, Vue, or any framework
- **Keep it simple** — This is a static portfolio, not a SPA framework
- **Responsive** — All changes must work across the existing breakpoints (1300, 1104, 991, 947, 690, 500, 368, 296px)
- **Color scheme** — Primary: `#0245aa`, Accent: `aqua`/`cyan`, Text: `#111`/`#333`, BG: `#fff`
- **Fonts** — Poppins (primary), Ubuntu (secondary)
- **No hardcoded CDN changes** — Don't upgrade library versions without asking
- **Accessibility** — Add alt texts, ARIA labels, semantic HTML for any new elements

## After Making Changes

1. Verify the HTML is valid (no unclosed tags, proper nesting)
2. Check that CSS changes don't break other sections
3. Update `tasks.md` if completing a task (change status to DONE)
4. Add a brief entry to `progress.md`
