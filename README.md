# BMWorks Performance — site rebuild

Modern, bilingual (Italian default + English under `/en/`) static rebuild of bmworks.it.
Plain HTML/CSS/JS, no runtime dependencies; fonts and images are self-hosted.

- Edit copy in `_src/content/site.mjs` (pages), `_src/content/faq.json`, `_src/content/posts/*.json` (blog).
- Rebuild with `node _src/build.mjs` (Node 18+). Output is written next to this file.
- `PREVIEW = true` in `_src/build.mjs` adds `noindex`; set it to `false` at go-live.
- Italian URLs match the old WordPress slugs, so existing links keep working when deployed at the domain root.
- The contact forms open a pre-filled WhatsApp or email message (no backend).
