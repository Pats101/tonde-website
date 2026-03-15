# Claude Code — Skills & Agents Usage Guide

Here's a practical walkthrough:

## 1. `/orchestrator` — Start every session with this

Just type `/orchestrator` and it will:
- Read your PRD.md, tasks.md, progress.md, ARCHITECTURE.md
- Give you a status report
- Ask what you want to work on

Try it now — type `/orchestrator` in your next message.

## 2. `/dev` — When you want to build something

```
/dev Add a dark mode toggle to the navbar
```

or just type `/dev` first, then describe what you want. It loads all the project conventions (colors, fonts, breakpoints, file locations) so Claude doesn't need to rediscover them.

## 3. `/review` — After making changes

```
/review
```

This spins up an **isolated sub-agent** (won't clutter your conversation). It runs `git diff`, reads the changed files, and returns a structured review with HIGH/MED/LOW issues and an APPROVE or REQUEST CHANGES verdict.

## 4. `/deploy-check` — Before pushing to master

```
/deploy-check
```

Runs through a checklist: do all referenced files exist? Any broken links? Placeholder text left in? Sensitive files about to be committed?

## 5. Sub-Agents — Just ask for them by name

These aren't slash commands — you invoke them naturally:

```
"Run the accessibility-auditor on my site"
"Use the seo-optimizer agent"
"Have the code-reviewer check my latest changes"
```

Claude will automatically spin them up in an isolated context and return the results.

---

## Quick Cheat Sheet

| What you want to do  | What to type                    |
|----------------------|---------------------------------|
| Start a session      | `/orchestrator`                 |
| Build a feature      | `/dev` then describe it         |
| Review your changes  | `/review`                       |
| Check before pushing | `/deploy-check`                 |
| Accessibility audit  | "Run the accessibility-auditor" |
| SEO check            | "Run the seo-optimizer"         |
| Code quality review  | "Run the code-reviewer"         |
