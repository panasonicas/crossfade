# Deployment

The public player is available at **https://panasonicas.github.io/crossfade/**.

## GitHub Pages

1. Download and extract the ZIP from [Releases](https://github.com/panasonicas/crossfade/releases), or copy the repository's static application files.
2. Put `index.html`, `app.js`, `engine.js`, `i18n.js`, `style.css` and `favicon.svg` at the root of your repository. Keep `.nojekyll` there too.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch → main → /(root)** and save.
5. Wait for the **pages-build-deployment** workflow to succeed, then open **Visit site**. Keep HTTPS enabled.

Upload the extracted files, not just the ZIP. All local asset paths are relative, so a project URL such as `username.github.io/project/` works without rewriting paths. No npm install, build step, backend or API key is needed.

For official setup details, see [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Optional local development

Serve the repository folder with any static HTTP server. For example, if Python is installed:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://localhost:8765/`. Python is only one development-server option; the application itself has no Python dependency. Avoid opening `index.html` through `file://`, because YouTube playback expects an HTTP(S) page with a valid referrer.

## Updates and backups

Application versions are preserved as separate ZIP assets under Releases. Do not replace an older version's archive with different application files.

Publish application updates to the same site address to retain browser storage at that origin and project path. Moving to another domain or path requires exporting and importing playlists. Back up playlists before clearing browser data.

The player stores no shared server-side playlist data. Do not put private playlists, passwords, tokens or `.env` files into a public repository.

## Troubleshooting

| Problem | Check |
| --- | --- |
| Pages shows a README or 404 | Confirm that `index.html` is at the selected branch/folder root. |
| An old version is shown | Check the Actions result, wait for deployment, then refresh the page. |
| A YouTube track will not play | Check connectivity, browser restrictions and whether the video allows embedding. |
| A title is missing | Wait for metadata, prepare the track, or rename it with ✎. |
| Another device has no playlists | Export JSON on the original device and import it on the other device. |
