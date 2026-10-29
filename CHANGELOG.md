# Changelog

Application versions are preserved as separate ZIP archives. Documentation-only updates do not change the player version.

## v0.1.5 — 2026-10-29

- Accept YouTube Music share links directly, including the optional `si` parameter.
- Preserve strict hostname and video-ID validation.
- Passed all 12 automated Pages checks, including the supplied link through the add-track form.

## v0.1.4 — 2026-10-27

First public GitHub Pages release.

- Converted the player to a fully static, YouTube-only application.
- Removed local audio-file playback, IndexedDB and the Python metadata service.
- Retrieved titles directly from YouTube, with embedded-player metadata and manual track naming as fallbacks.
- Added relative asset paths, a content security policy and project-path-specific browser storage.
- Retained two decks, crossfade curves, overlap, stable NEXT UP previews, shuffle/repeat, named playlists and LT/EN.
- Published over HTTPS and verified by the owner on desktop, mobile and in private browsing.

## v0.1.3 — 2026-10-27

- Added the waiting deck's NEXT UP title, vinyl preview and animated cue before media loading.
- Locked shuffle's next-track selection until playback or a relevant queue/mode change.
- Added long-title scrolling and reduced-motion behavior.

## v0.1.2 — 2026-10-27

- Improved main Play initialization and progress updates after seeking.
- Added named playlists, a functional master volume knob and English/Lithuanian locales.
- Improved title refresh for previously saved tracks.

## v0.1.1 — 2026-10-27

- Introduced the DJ-inspired interface and favicon.
- Added track reordering, shuffle/repeat and configurable crossfade curves/overlap.
- Expanded playlist persistence and JSON import/export.

## Initial local MVP

- Combined YouTube links and local audio in a queue with automatic crossfade.
- Used a local HTTP server to resolve the original `file://` playback issue.

Earlier local versions remain archived in the development workspace. v0.1.4 is the first GitHub release.
