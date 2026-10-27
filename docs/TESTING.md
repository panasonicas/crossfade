# Testing and verification

## v0.1.4 — GitHub Pages / YouTube

Verified on **27 October 2026**.

- 11 automated checks cover static asset paths, no backend/local-audio dependency, metadata success/failure, manual titles, playback state and seek, shuffle preview stability, crossfade, reorder/repeat, named-playlist persistence, old YouTube-session migration, safe text rendering/URL validation and locale strings.
- The static release was exercised under a project subdirectory without a `/api` endpoint.
- Two added YouTube tracks received real titles, including the next track before its playback media loaded.
- Main Play, a real YouTube-to-YouTube transition, saved playlists/titles and the language preference were verified in the development browser.
- GitHub Pages deployment succeeded. Real playback and metadata were then verified at the public HTTPS address.
- The owner separately confirmed that the live player works on desktop, mobile and in private browsing.

The automated JavaScript checks use simulated YouTube objects and do not replace real playback checks. Their source is retained in the development workspace; this repository currently contains the deployed static application, not a bundled test runner.

## Manual checks for future releases

1. Add two playable YouTube video links; check titles and thumbnails.
2. Start using the main Play button, pause, resume and seek. The progress slider must keep updating after seeking.
3. Confirm that NEXT UP matches the next song, including with shuffle enabled.
4. Test crossfade, repeat one/all and the end of the list.
5. Reorder or remove the next song and verify that the preview updates.
6. Create, rename and switch playlists; reload and check persistence.
7. Export a list and import it into another list or browser.
8. Switch LT / EN, use a narrow screen and check reduced-motion behavior.

YouTube availability, autoplay policies and background playback can vary between browsers and devices. A successful check does not guarantee that every YouTube video can be embedded.
