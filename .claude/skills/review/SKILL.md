---
name: review
description: Review recent changes to the portfolio site for quality, responsiveness, accessibility, and best practices. Use after making changes or before committing.
user-invocable: true
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---

# Code Review — Portfolio Website

Review the current state of the portfolio codebase. Focus on:

## 1. HTML Quality (index.html)
- Valid structure (proper nesting, closed tags)
- Semantic HTML (correct heading hierarchy, landmarks)
- Accessibility (alt texts, ARIA labels, form labels)
- No broken links or missing assets

## 2. CSS Quality (assets/css/stylesheet.css)
- No duplicate or conflicting selectors
- Responsive design works across all breakpoints
- Color scheme consistency (#0245aa primary, aqua accent)
- No unused styles

## 3. JavaScript Quality (assets/js/script.js)
- No console errors
- Event listeners properly attached
- No memory leaks (e.g., unremoved listeners)
- Swiper and Typed.js properly initialized

## 4. Performance
- Image sizes reasonable (check for oversized images)
- No unnecessary library loads
- Efficient CSS selectors

## 5. Content
- All information is current and accurate
- Links point to working URLs
- CV/resume file exists and is downloadable

## Output Format

```
## Review Results

### Issues Found
1. [severity: high/medium/low] Description — file:line
2. ...

### Recommendations
1. Description — why and how to fix

### Overall Assessment
[1-2 sentence summary]
```
