# Task Board — Portfolio Website

## Legend
- **TODO** — Not started
- **IN_PROGRESS** — Currently being worked on
- **DONE** — Completed

---

### [TASK-001] Set up Claude Code skills and agents infrastructure
**Status:** DONE
**Priority:** High
**Description:** Create .claude/skills/ and .claude/agents/ with proper SKILL.md and AGENT.md files for the portfolio project workflow.

---

### [TASK-002] Fix contact form submission
**Status:** DONE
**Priority:** High
**Description:** Contact form in index.html has no backend. Add Formspree, Netlify Forms, or similar free service so messages actually get delivered.

---

### [TASK-003] Add SEO meta tags
**Status:** DONE
**Priority:** High
**Description:** Add proper `<title>`, `<meta description>`, Open Graph tags, and Twitter Card tags to index.html for better search engine and social media presence.

---

### [TASK-004] Optimize images
**Status:** DONE
**Priority:** Medium
**Description:** Compress all images in assets/img/. Add lazy loading attributes. Consider WebP format for smaller file sizes.

---

### [TASK-005] Improve accessibility
**Status:** DONE
**Priority:** Medium
**Description:** Add missing alt texts to all images. Add ARIA labels to interactive elements. Ensure proper heading hierarchy. Test with screen reader.

---

### [TASK-006] Add dark mode toggle
**Status:** DONE
**Priority:** Low
**Description:** Add a dark/light mode toggle. Use CSS custom properties for theming. Persist preference in localStorage.

---

### [TASK-007] Add page load animations
**Status:** DONE
**Priority:** Low
**Description:** Use Intersection Observer API to animate sections as they scroll into view. Replace any jQuery scroll handlers with vanilla JS where possible.

---

### [TASK-008] Update project demos
**Status:** TODO
**Priority:** Medium
**Description:** Verify all project demo links work. Update screenshots if needed. Consider adding more recent projects.

---

### [TASK-009] Add structured data (JSON-LD)
**Status:** DONE
**Priority:** High
**Description:** Add JSON-LD Person schema for rich search results in Google.

---

### [TASK-010] Add blog/writing section
**Status:** DONE
**Priority:** Medium
**Description:** Add a writing section with article cards. Currently has placeholder "Coming Soon" articles.

---

### [TASK-011] Add privacy-friendly analytics
**Status:** TODO
**Priority:** Low
**Description:** GoatCounter script is ready in index.html (commented out). Sign up at goatcounter.com and uncomment with your site code.

---

### [TASK-012] Multi-language support
**Status:** DONE
**Priority:** Medium
**Description:** Added client-side i18n with English and Shona translations. Language switcher in navbar, preference saved in localStorage.

---

### [TASK-013] GitHub Actions CI pipeline
**Status:** DONE
**Priority:** Medium
**Description:** Added .github/workflows/validate.yml for HTML validation and broken link checking on push/PR to master.
