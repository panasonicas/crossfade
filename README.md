# Crossfade Player

**Your everyday mix, with a DJ-inspired touch.**

A browser-based YouTube music player with two decks, smooth automatic crossfades and playlists that stay on your device. No installation, account or API key required to use the player.

### [▶ Open the live player](https://panasonicas.github.io/crossfade/)

[![Release](https://img.shields.io/badge/version-v0.1.4-c8f76b)](https://github.com/panasonicas/crossfade/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-c8f76b.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-22272e.svg)](https://panasonicas.github.io/crossfade/)

<img src="favicon.svg" width="64" alt="Crossfade icon">

## Make your next mix

1. Open the [live player](https://panasonicas.github.io/crossfade/).
2. Paste a YouTube video link and add a few tracks.
3. Press **Play**. Use **⇄** to adjust crossfade duration, curve and overlap.
4. Create named playlists, rearrange tracks and switch between your collections.

The waiting deck shows **NEXT UP** before the next track loads. With shuffle enabled, the preview stays locked to the track that will actually play next.

## Features

- **Two-deck player** with a responsive DJ-inspired layout.
- **Automatic crossfade:** 0–20 seconds, Equal Power, Linear and Smooth curves, plus overlap control.
- **Next-track preview** with a vinyl display, animated cue and scrolling long titles.
- **Shuffle and repeat:** repeat one track or the whole playlist.
- **Named playlists:** create, rename, delete and switch between lists.
- **Track controls:** reorder by dragging or arrow buttons, seek, rename and remove tracks.
- **Master volume knob** with pointer, mouse-wheel and keyboard controls.
- **Browser storage** and JSON playlist import / export.
- **English and Lithuanian** interface with a saved language preference.
- **Responsive layout** for desktop and mobile, with reduced-motion support.

## Your playlists stay in your browser

There is no account system or playlist backend. Lists and preferences are stored in the browser on the device you are using. They do not automatically sync between devices or between the live site and localhost.

Use **••• → Export** to save a backup. To move a playlist, create or select a list on the other device and import its JSON file. Clearing site data also clears saved playlists.

YouTube handles video playback and receives playback requests. Track titles and thumbnails are requested from YouTube; this player does not download media files for offline use. Video availability, embedding permissions and browser autoplay rules can affect playback. Some metadata requests may fail; use the track's **✎** button to set a title manually.

## Run your own copy

This is a static HTML / CSS / JavaScript application. GitHub Pages can serve it directly from `main` → `/(root)`; no build step, Python service or secret key is needed.

See the [deployment guide](docs/DEPLOYMENT.md) for publishing and optional local development. Download the versioned source ZIP from [Releases](https://github.com/panasonicas/crossfade/releases). Extract it before uploading the application files.

## Project status

**v0.1.4 is live.** The owner verified playback on desktop, mobile and in a private-browsing session. Development checks are described in [Testing](docs/TESTING.md); the release history is in [CHANGELOG.md](CHANGELOG.md).

Found a problem? [Open an issue](https://github.com/panasonicas/crossfade/issues) with your browser, device, what you expected and what happened. Include a video link when relevant, but never include passwords, access tokens or other private account information.

## License

[MIT](LICENSE). This is an independent project and is not affiliated with or endorsed by YouTube or Google. YouTube and other third-party content remain subject to their respective rights and terms.
