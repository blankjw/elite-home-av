# ELITE website — repository reconciliation (2026-09-13)

Result of consolidating the copies that had drifted apart. Written by Main.

## Canonical source

**`/home/jwblank/OpenClaw/projects/Elite Home AV Website` is now the single canonical
copy** for elitehomeav.com — the only ELITE website tree left working. Edit the public
site here.

- Build: `npx next build --webpack` (Next 16 defaults to Turbopack, which panics on a
  `node_modules` symlink — see Tooling)
- Deploy: `npx vercel --prod` (Vercel project `elite-home-av`; aliases
  `www.elitehomeav.com` / `elitehomeav.com`)
- HEAD: `main` = `716e212`

## What was wrong

Four states, and **three of them were separate git histories sharing no commits**, so
nothing fast-forwarded:

1. **The live line** (the redesign + `/care`, `/service-area`, `/services/[slug]`, the
   SEO layer). This was sitting in a `releases/` snapshot folder with no remote, and its
   `node_modules` was a symlink into a worktree.
2. **A stale GitHub clone** at the project path — on a different, older line, missing
   `/care` and `/service-area` entirely, 6 commits behind its own remote.
3. **A portal worktree** — the V1 portal/API/login preview.
4. **GitHub `origin/main`** = `a517ce8` — a divergent line carrying a `/card` business-card
   route and email-signature work.

## What was done

- **Everything was backed up first** (full bundles + working-tree tarballs) to
  `/home/jwblank/.openclaw/archive/elite-repo-reconcile-20260913/`.
- **All histories were unified into one repo.** The canonical tree now holds, as local
  branches: `main` (the live line), `imported/github-main` (`cd4e225` line) and
  `imported/portal-v1-preview` (`3af3be2`), plus the fetched `origin/*` refs and tag.
  Nothing from any copy is unreachable.
- **`node_modules` was made real** (moved in, no longer a symlink into the worktree).
- **The two redundant copies were retired** (moved, not deleted) to
  `/home/jwblank/.openclaw/archive/elite-repo-reconcile-20260913/retired/`:
  `Elite Home AV Website (github-clone-stale)` and `elite-home-av-website-v1`.
- **Verified:** the canonical tree builds clean from its new path (all 22 routes,
  including `/service-area/lumberton` and `/service-area/beaumont`).

## Still open

1. **GitHub write is blocked from this host.** `git ls-remote` (read) works only when git
   is pointed at the egress trust bundle — git ignores `SSL_CERT_FILE`:
   `GIT_SSL_CAINFO=/home/jwblank/.openclaw/secret-egress-proxy/gateway-*/trust-bundle.pem`.
   `git push` fails with `remote: Invalid username or token. Password authentication is
   not supported for Git operations.` Needs the owner to authenticate git/gh.
2. **Decision:** port the `/card` + email-signature work (`imported/github-main`) onto
   `main`, or drop it. It is the only thing on the GitHub line not already superseded, and
   `/card` currently 404s on production.
3. **Decision:** once push works, which branch becomes GitHub `main`.

## Tooling

Build with `--webpack`. `next build` alone uses Turbopack, which fails here:
`Symlink [project]/node_modules is invalid, it points out of the filesystem root`.
