# CPS Navigator prototype

A high-fidelity, deterministic prototype of the CPS Navigator seller journey. It demonstrates a Teams-first commercial legal intake, targeted follow-up questions, a shared matter state, the Business Deal Navigator, and a distinct Legal workspace foundation.

The prototype uses synthetic data only. It has no authentication, database, external API, or live model dependency.

## Run locally

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Next.js exports the static site to `out/`. All core interactions use local client state and work without a server runtime.

## Primary demo path

1. Begin in the simulated Microsoft Teams conversation.
2. Send the prepared Contoso request.
3. Review the matched opportunity and immediate CPS response.
4. Answer the three targeted questions inside Teams.
5. Open **View deal**.
6. Review the updated readiness, timing risks, coaching, handled changes, benchmarks, and status timeline.
7. Use the understated persona switcher to see the same matter in the Legal information hierarchy.

Refresh the page to reset the deterministic demo.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the static export.

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`, or run the **Deploy static site to GitHub Pages** workflow manually.

The build derives the repository name from `GITHUB_REPOSITORY` and configures the correct Next.js `basePath` and asset prefix for a project site.

## Architecture

- `src/lib/model.ts` is the canonical synthetic matter and state model.
- `src/app/page.tsx` contains the prototype surfaces and state transitions.
- `src/app/globals.css` defines the Fluent-informed application layout and visual system.
- Fluent UI React v9 provides controls and interaction behavior.

The UI consumes local data through a centralized model so later service-backed implementations can replace the deterministic layer without restructuring the persona views.
