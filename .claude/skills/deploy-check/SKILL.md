---
name: deploy-check
description: Pre-deployment checklist for the portfolio site. Run before pushing to master to catch issues that would break the live GitHub Pages site.
user-invocable: true
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash
---

# Pre-Deploy Checklist

Run through this checklist before pushing to master (which triggers GitHub Pages deployment).

## Checks to Perform

### 1. File Integrity
- [ ] `index.html` exists and is valid HTML
- [ ] `assets/css/stylesheet.css` exists
- [ ] `assets/js/script.js` exists
- [ ] All images referenced in HTML exist in `assets/img/`
- [ ] Resume PDF exists in `assets/pdf/`

### 2. Link Validation
Use Grep to find all `href` and `src` attributes in index.html. Verify:
- [ ] No broken relative paths (check each referenced file exists)
- [ ] External CDN links use HTTPS
- [ ] Project demo links are valid URLs

### 3. Content Check
- [ ] No placeholder text (lorem ipsum, TODO, FIXME)
- [ ] Email address is correct
- [ ] Phone/contact info is current

### 4. Git Status
Run `git status` and `git diff` to verify:
- [ ] No unintended files staged
- [ ] No sensitive files (.env, credentials) being committed
- [ ] Changes match the intended task

## Output

Report as a checklist with pass/fail for each item. Flag any blockers that should prevent deployment.
