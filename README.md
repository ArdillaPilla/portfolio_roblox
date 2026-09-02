# deimos_who — portfolio

Personal portfolio site: Roblox development, UI systems, backend architecture,
and Blender 3D modelling. Built with React + Vite + Tailwind, deployed to GitHub
Pages.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built output
npm run lint     # eslint
npm run deploy   # build, then publish dist/ to the gh-pages branch
```

## Deploy path

`vite.config.js` sets `base: '/portfolio_roblox/'` and `package.json` sets a
matching `homepage`. If the repository is ever renamed, both must change
together or every asset 404s in production.

## Editing the content

Everything on the page is driven by the arrays at the top of `src/App.jsx`:

| constant   | what it drives |
|------------|----------------|
| `SKILLS`   | the Skills & Tools grid. Add `level: 'Proficient'` to badge a skill. |
| `FEATURED` | the star video at the top of the showcase. |
| `MODELS`   | the Blender gallery. Add `wide: true` to give a wide render a double-width card. |

Media lives in `public/` and is referenced through the `asset()` helper, which
prefixes the deploy base path. Write `asset('videos/thing.mp4')`, never a bare
`/videos/thing.mp4` — the latter breaks on GitHub Pages.

## The featured video

`public/videos/ufo.mp4` is ~26 MB. The player therefore uses `preload="none"`
behind a poster frame (`public/images/ufo-poster.jpg`), so nothing downloads
until a visitor presses play.

That size is worth reducing — GitHub Pages has a soft 1 GB repo limit, and every
push of a new cut adds another copy to git history. To re-encode:

```bash
ffmpeg -i public/videos/ufo.mp4 -vcodec libx264 -crf 26 -preset slow \
       -vf "scale=1280:-2" -an public/videos/ufo.mp4
```

That typically lands around 3-5 MB with no visible loss at this size. Once it is
small, you can drop `preload="none"` and add `autoPlay` to `FeaturedVideo` in
`src/App.jsx` for a hero video that plays on load.

To regenerate the poster after a re-encode:

```bash
ffmpeg -i public/videos/ufo.mp4 -ss 6.5 -vframes 1 -q:v 3 public/images/ufo-poster.jpg
```
