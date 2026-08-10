# AGENTS.md

## Cursor Cloud specific instructions

This repo (`crusa-web`) is a Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4 marketing/lead-generation website for Computer Recyclers USA. There is **no database and no authentication**; nearly every page is static/server-rendered.

Standard commands live in `package.json` and `CLAUDE.md` (`npm run dev`, `npm run build`, `npm run start`, `npm run lint`). Dependencies are managed with **npm** (`package-lock.json`). Note: `CLAUDE.md` tells human developers never to run `npm run dev` — that instruction is for humans; cloud agents should run the dev server as needed to test.

### The only dynamic feature: the pickup / "Schedule Free Pickup" lead form
- UI: `src/components/PickupForm.tsx` (a 3-step wizard modal, opened by the green "SCHEDULE FREE PICKUP" button on the homepage and other pages).
- Backend: `src/app/api/pickup-request/route.ts` POSTs are emailed to the business via `nodemailer` over SMTP. It supports three `submissionType`s: `initial`, `supplemental`, and `legacy`.
- **Non-obvious caveat:** the form send depends on SMTP env vars. With none set, the POST throws and the route returns HTTP 500 — the rest of the site is completely unaffected. Relevant env vars (all read in the API route): `SMTP_HOST` (default `smtp.gmail.com`), `SMTP_PORT` (default `587`), `SMTP_USER`, `SMTP_PASS`, `EMAIL_ADDR` (recipient). There is no `.env` file committed.

### Testing the pickup form end-to-end without real credentials
Run a throwaway local SMTP catcher and point the dev server at it (nodemailer skips AUTH when the server doesn't advertise it, so dummy `SMTP_USER`/`SMTP_PASS` are fine):

```bash
pip install aiosmtpd            # one-off, not a project dependency
python3 -m aiosmtpd -n -l 127.0.0.1:1025   # or a small custom handler that logs messages
# then start dev with:
SMTP_HOST=127.0.0.1 SMTP_PORT=1025 SMTP_USER=x SMTP_PASS=x EMAIL_ADDR=leads@example.com npm run dev
```

A successful `initial` submission returns `{"message":"Lead captured successfully"}` (HTTP 200) and the catcher receives the lead email. The wizard also fires a second `supplemental` message on final submit.

### Other notes
- `@vercel/analytics` is embedded but is a no-op locally (only reports on Vercel); no config needed.
- `.github/workflows/lighthouse.yml` + `.lighthouserc.json` run Lighthouse CI against a Vercel preview URL — CI-only, not needed for local dev.
