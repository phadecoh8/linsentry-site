
## LinSentry Site — Project Notes

This is the documentation/marketing site for LinSentry, a Bash-based
Linux hardening auditor. This repo contains only the website — the
actual LinSentry script lives in a separate repo.

- Package manager: pnpm (always — not npm or yarn)
- Styling: Tailwind CSS only, no separate CSS files unless unavoidable
- Structure:
  - `src/app/` — pages (App Router)
  - `src/app/docs/` — documentation (install, usage, checks explained)
  - `src/app/blog/` — dev-log style blog posts
  - `src/app/changelog/` — release history, mirrors LinSentry's git tags (v0.1.0–v0.4.1 so far)