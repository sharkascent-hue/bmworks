// Static site generator for the BMWorks Performance site (Italian + English).
// Usage: node bmworks/_src/build.mjs   → writes plain HTML into bmworks/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BIZ, UI, HOME, SERVICES, REMAP, OPTIONS, ABOUT, CONTACT, CARS, CARS_PAGE, BLOG, FAQ_PAGE, PRIVACY } from './content/site.mjs';

const SRC = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(SRC, '..');
// While the site is a preview it must not be indexed. Set to false (and check SITE_URL) at go-live.
const PREVIEW = true;
const SITE_URL = 'https://www.bmworks.it/';
const V = '2';

const faq = JSON.parse(fs.readFileSync(path.join(SRC, 'content/faq.json'), 'utf8')).items;
const imgmap = JSON.parse(fs.readFileSync(path.join(SRC, 'content/imgmap.json'), 'utf8'));
const posts = fs.readdirSync(path.join(SRC, 'content/posts')).filter(f => f.endsWith('.json'))
  .map(f => JSON.parse(fs.readFileSync(path.join(SRC, 'content/posts', f), 'utf8')))
  .sort((a, b) => b.date.localeCompare(a.date));

/* ---------- routes ---------- */
const R = {
  home: { it: '', en: 'en' },
  cars: { it: 'le-nostre-auto', en: 'en/cars' },
  remap: { it: 'rimappatura-centraline', en: 'en/ecu-remapping' },
  options: { it: 'opzioni-di-rimappatura', en: 'en/remap-options' },
  services: { it: 'servizi-bmw', en: 'en/services' },
  blog: { it: 'blog', en: 'en/blog' },
  about: { it: 'about-us', en: 'en/about' },
  faq: { it: 'faq', en: 'en/faq' },
  contact: { it: 'contatti', en: 'en/contact' },
  privacy: { it: 'privacy', en: 'en/privacy' },
};
for (const s of SERVICES) R[s.key] = { it: s.slug.it, en: 'en/' + s.slug.en };
for (const c of CARS) R['car:' + c.slug] = { it: 'le-nostre-auto/' + c.slug, en: 'en/cars/' + c.slug };
for (const p of posts) R['post:' + p.slug] = { it: 'blog/' + p.slug, en: 'en/blog/' + p.slug };

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const depth = p => (p ? p.split('/').length : 0);
let cur = { path: '', lang: 'it' };
const root = () => '../'.repeat(depth(cur.path)) || './';
const href = (key, lang = cur.lang) => { const t = R[key][lang]; return root() + (t ? t + '/' : ''); };
const asset = f => root() + 'assets/' + f;
const img = f => asset('img/' + f);
const t = o => (o && typeof o === 'object' && 'it' in o ? o[cur.lang] : o);
const inline = s => esc(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\(@([\w:-]+)\)/g, (_, a, k) => `<a href="${href(k)}">${a}</a>`);
const wa = (num = BIZ.wa, text = t(UI.waText)) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
const fmtDate = d => new Date(d + 'T12:00:00Z').toLocaleDateString(cur.lang === 'it' ? 'it-IT' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const I = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.200 8.200 0 0 1-4.200-1.150l-.3-.18-3 .78.8-2.900-.2-.3A8.200 8.200 0 1 1 12 20.200zm4.500-6.100c-.25-.120-1.470-.720-1.700-.800s-.39-.120-.56.120-.64.800-.79.970-.290.190-.540.060a6.700 6.700 0 0 1-2-1.230 7.400 7.400 0 0 1-1.370-1.700c-.140-.250 0-.380.110-.500s.250-.290.370-.430a1.700 1.700 0 0 0 .250-.420.460.460 0 0 0 0-.430c-.060-.120-.560-1.340-.760-1.840s-.400-.420-.560-.430h-.470a.900.900 0 0 0-.660.310 2.800 2.800 0 0 0-.860 2.060 4.800 4.800 0 0 0 1 2.540 11 11 0 0 0 4.200 3.700c.590.250 1.050.400 1.400.520a3.400 3.400 0 0 0 1.560.100 2.550 2.550 0 0 0 1.670-1.180 2.070 2.070 0 0 0 .140-1.180c-.060-.100-.220-.160-.470-.290z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7.2L20 7H4zm0 2.300L4 9.300V17h16V9.300z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.200 7 13 7 13s7-7.800 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.800-13h-1.600v6l5 3 .800-1.300-4.200-2.500z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.200 5.300 12 6.500l4.600 4.600H4v1.800h12.600L12 17.500l1.200 1.200L20 12z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.500 16.200-3.700-3.700-1.300 1.300 5 5L20 8.300 18.700 7z"/></svg>',
  chev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 9.500 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.300A4.700 4.700 0 1 0 12 16.700 4.700 4.700 0 0 0 12 7.300zm0 7.700a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.900-9a1.100 1.100 0 1 0 0 2.200 1.100 1.100 0 0 0 0-2.200zM16.500 3h-9A4.500 4.500 0 0 0 3 7.500v9A4.500 4.500 0 0 0 7.500 21h9a4.500 4.500 0 0 0 4.500-4.500v-9A4.500 4.500 0 0 0 16.500 3zm2.800 13.500a2.800 2.800 0 0 1-2.800 2.800h-9a2.800 2.800 0 0 1-2.800-2.800v-9a2.800 2.800 0 0 1 2.800-2.800h9a2.800 2.800 0 0 1 2.800 2.800z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.500 21v-7.500H16l.400-3h-2.900V8.600c0-.870.250-1.460 1.500-1.460h1.600V4.460A21 21 0 0 0 14.300 4.300c-2.300 0-3.800 1.400-3.800 3.900v2.300H8v3h2.500V21z"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.700 5.800 6.300.800-4.600 4.400 1.200 6.300L12 17.200 6.400 20.300l1.200-6.300L3 9.600l6.300-.800z"/></svg>',
};

/* ---------- content blocks ---------- */
function mdBlocks(src) {
  return src.trim().split(/\n\s*\n/).map(b => {
    b = b.trim();
    if (b.startsWith('### ')) return { t: 'h3', x: b.slice(4) };
    if (b.startsWith('## ')) return { t: 'h2', x: b.slice(3) };
    if (b.split('\n').every(l => l.trim().startsWith('- '))) return { t: 'ul', items: b.split('\n').map(l => l.trim().slice(2)) };
    const m = b.match(/^!\[(.*?)\]\((.+?)\)$/);
    if (m) return { t: 'img', local: m[2], alt: m[1] };
    return { t: 'p', x: b.replace(/\s*\n\s*/g, ' ') };
  });
}
function renderBlocks(blocks) {
  return blocks.map(b => {
    if (b.t === 'h2' || b.t === 'h3') return `<${b.t}>${inline(b.x)}</${b.t}>`;
    if (b.t === 'p') return `<p>${inline(b.x)}</p>`;
    if (b.t === 'ul') return `<ul class="ticks">${b.items.map(i => `<li>${I.check}<span>${inline(i)}</span></li>`).join('')}</ul>`;
    if (b.t === 'img') { const f = b.local || imgmap[b.src]; return f ? `<figure><img src="${img(f)}" alt="${esc(b.alt || '')}" loading="lazy"></figure>` : ''; }
    return '';
  }).join('\n');
}
const prose = src => `<div class="prose">${renderBlocks(mdBlocks(t(src)))}</div>`;

/* ---------- layout ---------- */
function nav() {
  const svc = SERVICES.map(s => `<a href="${href(s.key)}">${esc(t(s.nav))}</a>`).join('');
  const item = (key, label) => `<a class="nav-link${cur.key === key ? ' is-active' : ''}" href="${href(key)}">${esc(t(label))}</a>`;
  return `
  <nav class="nav" id="nav" aria-label="${t(UI.mainNav)}">
    ${item('home', UI.nav.home)}
    <div class="dd"><button class="nav-link dd-btn" aria-expanded="false">${t(UI.nav.remap)}${I.chev}</button>
      <div class="dd-panel"><a href="${href('remap')}">${t(UI.nav.remapLookup)}</a><a href="${href('options')}">${t(UI.nav.options)}</a><a href="${href('faq')}">${t(UI.nav.remapFaq)}</a></div></div>
    <div class="dd"><button class="nav-link dd-btn" aria-expanded="false">${t(UI.nav.services)}${I.chev}</button>
      <div class="dd-panel dd-wide">${svc}<a class="dd-all" href="${href('services')}">${t(UI.nav.allServices)} ${I.arrow}</a></div></div>
    ${item('cars', UI.nav.cars)}${item('blog', UI.nav.blog)}${item('about', UI.nav.about)}${item('contact', UI.nav.contact)}
  </nav>`;
}
function header() {
  const other = cur.lang === 'it' ? 'en' : 'it';
  const otherHref = '../'.repeat(depth(cur.path)) + (R[cur.key][other] ? R[cur.key][other] + '/' : '') || './';
  return `
<a class="skip" href="#main">${t(UI.skip)}</a>
<div class="topbar"><div class="wrap topbar-in">
  <span>${I.pin}<a href="${BIZ.mapsLink}" target="_blank" rel="noopener">${BIZ.address}</a></span>
  <span class="tb-hide">${I.clock}${t(UI.hours)}</span>
  <span class="tb-right"><a href="mailto:${BIZ.email}">${I.mail}${BIZ.email}</a></span>
</div></div>
<header class="header" id="header"><div class="wrap header-in">
  <a class="logo" href="${href('home')}" aria-label="BMWorks Performance — home"><img src="${img('logo_black.webp')}" alt="BMWorks Performance" width="268" height="54"></a>
  ${nav()}
  <div class="header-actions">
    <div class="lang" role="group" aria-label="${t(UI.langLabel)}">
      <a ${cur.lang === 'it' ? 'class="on" aria-current="true"' : ''} href="${cur.lang === 'it' ? '#' : otherHref}" lang="it" hreflang="it" data-lang="it">IT</a>
      <a ${cur.lang === 'en' ? 'class="on" aria-current="true"' : ''} href="${cur.lang === 'en' ? '#' : otherHref}" lang="en" hreflang="en" data-lang="en">EN</a>
    </div>
    <a class="btn btn-gold btn-sm hd-call" href="tel:${BIZ.tel}">${I.phone}<span>${BIZ.telNice}</span></a>
    <button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
  </div>
</div></header>`;
}
function footer() {
  const svc = SERVICES.map(s => `<li><a href="${href(s.key)}">${esc(t(s.nav))}</a></li>`).join('');
  return `
<footer class="footer"><div class="stripe"></div><div class="wrap footer-grid">
  <div><img class="footer-logo" src="${img('logo.webp')}" alt="BMWorks Performance" width="180" height="112" loading="lazy">
    <p>${t(UI.footerAbout)}</p>
    <div class="social"><a href="${BIZ.ig}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a><a href="${BIZ.fb}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a></div></div>
  <div><h3>${t(UI.nav.services)}</h3><ul>${svc}</ul></div>
  <div><h3>${t(UI.footerExplore)}</h3><ul>
    <li><a href="${href('remap')}">${t(UI.nav.remapLookup)}</a></li><li><a href="${href('options')}">${t(UI.nav.options)}</a></li>
    <li><a href="${href('cars')}">${t(UI.nav.cars)}</a></li><li><a href="${href('blog')}">${t(UI.nav.blog)}</a></li>
    <li><a href="${href('about')}">${t(UI.nav.about)}</a></li><li><a href="${href('faq')}">FAQ</a></li><li><a href="${href('contact')}">${t(UI.nav.contact)}</a></li></ul></div>
  <div><h3>${t(UI.nav.contact)}</h3><ul class="contact-list">
    <li>${I.pin}<a href="${BIZ.mapsLink}" target="_blank" rel="noopener">${BIZ.address}</a></li>
    <li>${I.phone}<a href="tel:${BIZ.tel}">${BIZ.telNice}</a></li>
    <li>${I.mail}<a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
    <li>${I.clock}<span>${t(UI.hours)}</span></li></ul></div>
</div>
<div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} BMWorks Performance. ${t(UI.rights)}</span><span><a href="${href('privacy')}">${t(UI.privacy)}</a> · ${t(UI.disclaimer)}</span></div>
</footer>
<div class="wa-widget" id="wa">
  <div class="wa-panel" id="wa-panel" hidden>
    <div class="wa-head"><strong>WhatsApp Chat</strong><span>${t(UI.waIntro)}</span></div>
    ${BIZ.agents.map(a => `<a class="wa-agent" href="${wa(a.num)}" target="_blank" rel="noopener"><span class="wa-av">${a.name[0]}</span><span><small>${t(a.role)}</small><strong>${a.name}</strong><small>${t(UI.waAvail)}</small></span>${I.wa}</a>`).join('')}
  </div>
  <button class="wa-fab" id="wa-fab" aria-expanded="false" aria-controls="wa-panel" aria-label="WhatsApp chat">${I.wa}</button>
</div>
<div class="mobile-bar"><a href="tel:${BIZ.tel}">${I.phone}${t(UI.call)}</a><a href="${wa()}" target="_blank" rel="noopener">${I.wa}WhatsApp</a><a href="${href('contact')}">${I.mail}${t(UI.book)}</a></div>
<script src="${asset('site.js')}?v=${V}" defer></script>`;
}
function page({ key, title, desc, body, ogImg = 'remap-auto.webp', schema = '' }) {
  const alt = l => SITE_URL + (R[key][l] ? R[key][l] + '/' : '');
  return `<!doctype html>
<html lang="${cur.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>(function(){var p=location.pathname;if(location.protocol!=='file:'&&!/\\/$|\\.html$/.test(p))location.replace(p+'/'+location.search+location.hash)})()</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${PREVIEW ? '<meta name="robots" content="noindex, nofollow">' : `<link rel="canonical" href="${alt(cur.lang)}">`}
<link rel="alternate" hreflang="it" href="${alt('it')}">
<link rel="alternate" hreflang="en" href="${alt('en')}">
<link rel="alternate" hreflang="x-default" href="${alt('it')}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="BMWorks Performance">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE_URL}assets/img/${ogImg}">
<meta property="og:locale" content="${cur.lang === 'it' ? 'it_IT' : 'en_GB'}">
<meta name="theme-color" content="#0b0c0e">
<link rel="icon" href="${img('favicon.png')}" type="image/png">
<link rel="preload" href="${asset('fonts/inter-latin-wght-normal.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${asset('fonts/barlow-condensed-latin-700-italic.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${asset('site.css')}?v=${V}">
${schema}
</head>
<body data-lang="${cur.lang}" data-root="${root()}">
${header()}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

/* ---------- shared sections ---------- */
const crumbs = list => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${href('home')}">Home</a>${list.map(([k, l]) => k ? ` <span>/</span> <a href="${href(k)}">${esc(l)}</a>` : ` <span>/</span> <span aria-current="page">${esc(l)}</span>`).join('')}</nav>`;
const pageHero = ({ kicker, h1, lead, image, trail }) => `
<section class="phero"${image ? ` style="--img:url('img/${(image)}')"` : ''}><div class="wrap">
  ${trail ? crumbs(trail) : ''}
  ${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ''}
  <h1>${esc(h1)}</h1>
  ${lead ? `<p class="lead">${inline(lead)}</p>` : ''}
</div></section>`;
const ctaBand = (h = t(UI.ctaTitle), p = t(UI.ctaText)) => `
<section class="cta"><div class="wrap cta-in">
  <div><h2>${esc(h)}</h2><p>${esc(p)}</p></div>
  <div class="cta-btns"><a class="btn btn-gold" href="tel:${BIZ.tel}">${I.phone}${BIZ.telNice}</a><a class="btn btn-wa" href="${wa()}" target="_blank" rel="noopener">${I.wa}WhatsApp</a><a class="btn btn-ghost" href="${href('contact')}">${t(UI.writeUs)}</a></div>
</div></section>`;
const secHead = (kicker, h2, p) => `<div class="sec-head">${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ''}<h2>${esc(h2)}</h2>${p ? `<p>${esc(p)}</p>` : ''}</div>`;
const serviceCards = (list = SERVICES, withRemap = false) => {
  const cards = list.map((s, i) => ({ n: i + 1, href: href(s.key), img: s.card, title: t(s.nav), text: t(s.short) }));
  if (withRemap) cards.push({ n: cards.length + 1, href: href('remap'), img: 'svc-remap.webp', title: t(UI.nav.remapLookup), text: t(UI.remapShort) });
  return `<div class="cards">${cards.map(c => `
  <a class="card" href="${c.href}"><div class="card-img"><img src="${img(c.img)}" alt="" loading="lazy"><span class="card-n">${String(c.n).padStart(2, '0')}</span></div>
    <div class="card-body"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><span class="more">${t(UI.more)} ${I.arrow}</span></div></a>`).join('')}</div>`;
};
const faqList = items => `<div class="faq">${items.map(([q, a]) => `<details><summary>${esc(q)}${I.chev}</summary><div class="faq-a">${a}</div></details>`).join('')}</div>`;
const faqSchema = items => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() } })) }).replace(/</g, '\\u003c')}</script>`;
const gallery = (files, alt) => `<div class="gallery" data-gallery>${files.map((f, i) => `<a href="${img(f)}"><img src="${img(f)}" alt="${esc(alt)} ${i + 1}" loading="lazy"></a>`).join('')}</div>`;
const mapEmbed = () => `<div class="map"><iframe title="${t(UI.mapTitle)}" src="${BIZ.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`;
const contactForm = (subject = '') => `
<form class="form" data-contact-form data-subject="${esc(subject)}" novalidate>
  <div class="row"><label>${t(UI.form.name)}<input name="name" autocomplete="name" required></label><label>${t(UI.form.phone)}<input name="phone" type="tel" autocomplete="tel"></label></div>
  <label>Email<input name="email" type="email" autocomplete="email"></label>
  <label>${t(UI.form.vehicle)}<input name="vehicle" placeholder="${t(UI.form.vehiclePh)}"></label>
  <label>${t(UI.form.message)}<textarea name="message" rows="5" required></textarea></label>
  <label class="check"><input type="checkbox" name="privacy" required><span>${t(UI.form.accept)} <a href="${href('privacy')}">${t(UI.privacy)}</a></span></label>
  <p class="form-err" hidden>${t(UI.form.err)}</p>
  <div class="form-btns"><button class="btn btn-wa" type="submit" data-via="wa">${I.wa}${t(UI.form.viaWa)}</button><button class="btn btn-ghost" type="submit" data-via="mail">${I.mail}${t(UI.form.viaMail)}</button></div>
  <p class="form-note">${t(UI.form.note)}</p>
</form>`;
const localBiz = () => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'AutoRepair', name: 'BMWorks Performance', url: SITE_URL, image: SITE_URL + 'assets/img/logo.webp', telephone: BIZ.tel, email: BIZ.email, address: { '@type': 'PostalAddress', streetAddress: 'Via Giacinto Menotti Serrati, 60 BIS', postalCode: '20098', addressLocality: 'San Giuliano Milanese', addressRegion: 'MI', addressCountry: 'IT' }, geo: { '@type': 'GeoCoordinates', latitude: 45.394594, longitude: 9.293357 }, openingHours: 'Mo-Fr 09:00-18:00', sameAs: [BIZ.ig, BIZ.fb] })}</script>`;

/* ---------- pages ---------- */
function home() {
  const H = HOME;
  return page({
    key: 'home', title: t(H.title), desc: t(H.desc), schema: localBiz(), body: `
<section class="hero" style="--img:url('img/${('remap-auto.webp')}')"><div class="wrap hero-in">
  <p class="kicker">${t(H.kicker)}</p>
  <h1>${t(H.h1)}</h1>
  <p class="lead">${t(H.lead)}</p>
  <div class="hero-btns"><a class="btn btn-gold" href="${href('remap')}">${t(H.cta1)} ${I.arrow}</a><a class="btn btn-ghost" href="${href('services')}">${t(H.cta2)}</a></div>
  <ul class="hero-points">${t(H.points).map(p => `<li>${I.check}${esc(p)}</li>`).join('')}</ul>
</div>
<div class="wrap"><div class="hero-book"><div><span>${t(H.bookLabel)}</span><a href="tel:${BIZ.tel}">${BIZ.telNice}</a></div><a class="btn btn-wa btn-sm" href="${wa()}" target="_blank" rel="noopener">${I.wa}WhatsApp</a></div></div>
</section>
<section class="sec"><div class="wrap">${secHead(t(H.svcKicker), t(H.svcTitle), t(H.svcText))}${serviceCards(SERVICES, true)}</div></section>
<section class="sec sec-alt"><div class="wrap">${secHead(t(H.remapKicker), t(H.remapTitle), t(H.remapText))}
  <div class="tiles">${H.remapTypes.map(r => `<a class="tile" href="${href('remap')}" style="--img:url('img/${(r.img)}')"><h3>${t(r.title)}</h3><p>${t(r.text)}</p><span class="more">${t(r.cta)} ${I.arrow}</span></a>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap split">
  <div>${secHead(t(H.benKicker), t(H.benTitle), t(H.benText))}<a class="btn btn-gold" href="${href('options')}">${t(H.benCta)} ${I.arrow}</a></div>
  <ul class="benefits">${H.benefits.map((b, i) => `<li><span class="num">${i + 1}</span><div><h3>${t(b.title)}</h3><p>${t(b.text)}</p></div></li>`).join('')}</ul>
</div></section>
<section class="sec sec-alt"><div class="wrap">${secHead(t(H.whyKicker), t(H.whyTitle))}
  <div class="stats">${H.stats.map(s => `<div class="stat"><strong>${s.n}</strong><span>${t(s.label)}</span></div>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap">${secHead(t(H.revKicker), t(H.revTitle))}
  <div class="reviews" data-scroller>${H.reviews.map(r => `<figure class="review"><div class="stars">${I.star.repeat(5)}</div><blockquote>${esc(t(r.text))}</blockquote><figcaption><span class="av">${r.name[0]}</span><span><strong>${r.name}</strong><small>${r.place} · ${r.car}</small></span></figcaption></figure>`).join('')}</div>
</div></section>
<section class="sec sec-tight"><div class="wrap">${secHead('', t(H.partnersTitle))}
  <div class="partners">${['sp-autotuner.webp|AutoTuner', 'sp-alientech.webp|Alientech', 'sp-magic.webp|Magic Motorsport'].map(s => { const [f, n] = s.split('|'); return `<div><img src="${img(f)}" alt="${n}" loading="lazy"></div>`; }).join('')}</div>
</div></section>
${latestPosts()}
<section class="sec sec-alt"><div class="wrap split split-map">
  <div>${secHead(t(H.findKicker), t(H.findTitle), t(H.findText))}
    <ul class="contact-list big"><li>${I.pin}<a href="${BIZ.mapsLink}" target="_blank" rel="noopener">${BIZ.address}</a></li><li>${I.phone}<a href="tel:${BIZ.tel}">${BIZ.telNice}</a></li><li>${I.mail}<a href="mailto:${BIZ.email}">${BIZ.email}</a></li><li>${I.clock}<span>${t(UI.hours)}</span></li></ul>
    <a class="btn btn-gold" href="${href('contact')}">${t(UI.book)} ${I.arrow}</a></div>
  ${mapEmbed()}
</div></section>` });
}
const postCard = p => `<a class="post" href="${href('post:' + p.slug)}"><div class="post-img"><img src="${img(imgmap[p.image])}" alt="" loading="lazy"></div><div class="post-body"><time datetime="${p.date}">${fmtDate(p.date)}</time><h3>${esc(p[cur.lang].title)}</h3><p>${esc(p[cur.lang].excerpt)}</p><span class="more">${t(UI.readMore)} ${I.arrow}</span></div></a>`;
const latestPosts = () => `<section class="sec"><div class="wrap">${secHead('Blog', t(UI.latestPosts))}<div class="posts">${posts.slice(0, 3).map(postCard).join('')}</div><p class="center"><a class="btn btn-ghost" href="${href('blog')}">${t(UI.allPosts)} ${I.arrow}</a></p></div></section>`;

function servicesIndex() {
  return page({ key: 'services', title: t(UI.servicesPage.title), desc: t(UI.servicesPage.desc), body: `
${pageHero({ kicker: t(UI.servicesPage.kicker), h1: t(UI.servicesPage.h1), lead: t(UI.servicesPage.lead), image: 'svc-service.webp', trail: [[null, t(UI.nav.services)]] })}
<section class="sec"><div class="wrap">${serviceCards(SERVICES, true)}</div></section>${ctaBand()}` });
}
function servicePage(s) {
  const qa = s.faq ? s.faq.map(f => [t(f.q), `<p>${esc(t(f.a))}</p>`]) : null;
  const others = SERVICES.filter(o => o.key !== s.key).slice(0, 3);
  return page({ key: s.key, title: t(s.title), desc: t(s.desc), ogImg: s.card, schema: qa ? faqSchema(qa) : '', body: `
${pageHero({ kicker: t(UI.servicesPage.kicker), h1: t(s.h1), lead: t(s.lead), image: s.hero || s.card, trail: [['services', t(UI.nav.services)], [null, t(s.nav)]] })}
<section class="sec"><div class="wrap article">
  <div>${prose(s.body)}
    ${s.gallery ? `<h2>${t(UI.galleryTitle)}</h2>${gallery(s.gallery, t(s.nav))}` : ''}
    ${qa ? `<h2>${t(s.faqTitle || UI.faqTitle)}</h2>${faqList(qa)}` : ''}
  </div>
  <aside class="side"><div class="side-box"><h3>${t(UI.sideTitle)}</h3><p>${t(UI.sideText)}</p>
    <a class="btn btn-gold btn-block" href="tel:${BIZ.tel}">${I.phone}${BIZ.telNice}</a><a class="btn btn-wa btn-block" href="${wa()}" target="_blank" rel="noopener">${I.wa}WhatsApp</a><a class="btn btn-ghost btn-block" href="${href('contact')}">${t(UI.writeUs)}</a></div>
    <div class="side-box"><h3>${t(UI.otherServices)}</h3><ul class="side-links">${SERVICES.filter(o => o.key !== s.key).map(o => `<li><a href="${href(o.key)}">${esc(t(o.nav))}${I.arrow}</a></li>`).join('')}<li><a href="${href('remap')}">${t(UI.nav.remapLookup)}${I.arrow}</a></li></ul></div>
  </aside>
</div></section>
<section class="sec sec-alt"><div class="wrap">${secHead('', t(UI.otherServices))}${serviceCards(others)}</div></section>${ctaBand()}` });
}
function remap() {
  const P = REMAP;
  return page({ key: 'remap', title: t(P.title), desc: t(P.desc), ogImg: 'svc-remap.webp', body: `
${pageHero({ kicker: t(P.kicker), h1: t(P.h1), lead: t(P.lead), image: 'svc-remap2.webp', trail: [[null, t(UI.nav.remapLookup)]] })}
<section class="sec"><div class="wrap">${secHead(t(P.lookKicker), t(P.lookTitle), t(P.lookText))}
  <div class="lookup"><iframe title="${t(P.lookTitle)}" src="${BIZ.lookup}" loading="lazy"></iframe></div>
  <p class="note">${t(P.lookNote)} <a href="${BIZ.lookup}" target="_blank" rel="noopener">${t(P.lookOpen)}</a></p>
</div></section>
<section class="sec sec-alt"><div class="wrap">${secHead(t(HOME.remapKicker), t(HOME.remapTitle), t(HOME.remapText))}
  <div class="tiles">${HOME.remapTypes.map(r => `<div class="tile" style="--img:url('img/${(r.img)}')"><h3>${t(r.title)}</h3><p>${t(r.text)}</p></div>`).join('')}</div></div></section>
<section class="sec"><div class="wrap split">
  <div>${prose(P.body)}<p class="btn-row"><a class="btn btn-gold" href="${href('options')}">${t(HOME.benCta)} ${I.arrow}</a><a class="btn btn-ghost" href="${href('faq')}">${t(UI.nav.remapFaq)}</a></p></div>
  <ul class="benefits">${HOME.benefits.map((b, i) => `<li><span class="num">${i + 1}</span><div><h3>${t(b.title)}</h3><p>${t(b.text)}</p></div></li>`).join('')}</ul>
</div></section>${ctaBand()}` });
}
function options() {
  const P = OPTIONS;
  return page({ key: 'options', title: t(P.title), desc: t(P.desc), ogImg: 'svc-remap.webp', body: `
${pageHero({ kicker: t(REMAP.kicker), h1: t(P.h1), lead: t(P.lead), image: 'svc-remap.webp', trail: [['remap', t(UI.nav.remapLookup)], [null, t(UI.nav.options)]] })}
<section class="sec"><div class="wrap narrow">${prose(P.intro)}</div></section>
<section class="sec sec-alt"><div class="wrap">${secHead(t(P.tiersKicker), t(P.tiersTitle))}
  <div class="tiers">${P.tiers.map(x => `<article class="tier tier-${x.color}"><img src="${img('tier-' + x.color + '.webp')}" alt="BMWorks Performance ${x.name}" loading="lazy" width="300" height="74"><h3>Performance ${x.name}™</h3><p class="tier-tag">${t(x.tag)}</p><ul class="ticks">${t(x.points).map(p => `<li>${I.check}<span>${esc(p)}</span></li>`).join('')}</ul></article>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap narrow">${prose(P.outro)}<p class="btn-row"><a class="btn btn-gold" href="${href('remap')}">${t(P.cta)} ${I.arrow}</a><a class="btn btn-ghost" href="${href('faq')}">${t(UI.nav.remapFaq)}</a></p></div></section>${ctaBand()}` });
}
function about() {
  const P = ABOUT;
  const qa = P.faq.map(f => [t(f.q), `<p>${esc(t(f.a))}</p>`]);
  return page({ key: 'about', title: t(P.title), desc: t(P.desc), schema: faqSchema(qa), body: `
${pageHero({ kicker: t(P.kicker), h1: t(P.h1), lead: t(P.lead), image: 'svc-mini.webp', trail: [[null, t(UI.nav.about)]] })}
<section class="sec"><div class="wrap split"><div>${prose(P.body)}</div>
  <div><figure class="quote"><blockquote>${t(P.quote)}</blockquote><figcaption><strong>${BIZ.founder}</strong><small>${t(P.founderRole)}</small></figcaption></figure>
  <div class="pillars">${P.pillars.map(x => `<div><h3>${t(x.title)}</h3><p>${t(x.text)}</p></div>`).join('')}</div></div>
</div></section>
<section class="sec sec-alt"><div class="wrap"><div class="stats stats-4">${P.stats.map(s => `<div class="stat"><strong data-count="${s.n}">${s.n.toLocaleString(cur.lang === 'it' ? 'it-IT' : 'en-GB')}</strong><span>${t(s.label)}</span></div>`).join('')}</div></div></section>
<section class="sec"><div class="wrap narrow">${secHead('FAQ', t(UI.faqTitle))}${faqList(qa)}</div></section>${ctaBand(t(P.ctaTitle))}` });
}
function contact() {
  const P = CONTACT;
  return page({ key: 'contact', title: t(P.title), desc: t(P.desc), ogImg: 'contact.webp', schema: localBiz(), body: `
${pageHero({ kicker: t(P.kicker), h1: t(P.h1), lead: t(P.lead), image: 'contact.webp', trail: [[null, t(UI.nav.contact)]] })}
<section class="sec"><div class="wrap split">
  <div>
    <div class="ways">
      <a class="way" href="tel:${BIZ.tel}">${I.phone}<div><h3>${t(P.phoneT)}</h3><strong>${BIZ.telNice}</strong><p>${t(P.phoneP)}</p></div></a>
      <a class="way" href="${wa()}" target="_blank" rel="noopener">${I.wa}<div><h3>WhatsApp</h3><strong>${BIZ.telNice}</strong><p>${t(P.waP)}</p></div></a>
      <a class="way" href="mailto:${BIZ.email}">${I.mail}<div><h3>Email</h3><strong>${BIZ.email}</strong><p>${t(P.mailP)}</p></div></a>
      <a class="way" href="${BIZ.mapsLink}" target="_blank" rel="noopener">${I.pin}<div><h3>${t(P.addrT)}</h3><strong>${BIZ.address}</strong><p>${t(P.addrP)}</p></div></a>
    </div>
    <h3 class="mt">${t(P.socialT)}</h3><p>${t(P.socialP)}</p>
    <div class="social"><a href="${BIZ.ig}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a><a href="${BIZ.fb}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a></div>
  </div>
  <div class="panel"><h2>${t(P.formT)}</h2><p>${t(P.formP)}</p>${contactForm()}
    <h3 class="mt">${t(P.nextT)}</h3><p>${t(P.nextP)}</p></div>
</div></section>
<section class="sec sec-flush">${mapEmbed()}</section>` });
}
function carsIndex() {
  const P = CARS_PAGE;
  return page({ key: 'cars', title: t(P.title), desc: t(P.desc), ogImg: CARS[0].photos[0], body: `
${pageHero({ kicker: t(P.kicker), h1: t(P.h1), lead: t(P.lead), image: 'svc-service.webp', trail: [[null, t(UI.nav.cars)]] })}
<section class="sec"><div class="wrap">${secHead(t(P.featKicker), t(P.featTitle))}
  <div class="carlist">${CARS.map(c => `<a class="car" href="${href('car:' + c.slug)}"><div class="car-img"><img src="${img(c.photos[0])}" alt="${esc(c.name)}" loading="lazy"><span class="badge">${t(P.featured)}</span><span class="count">${c.photos.length} ${t(P.photos)}</span></div>
    <div class="car-body"><h3>${esc(c.name)}</h3><p class="car-sub">${t(c.sub)}</p><ul class="chips">${c.chips.map(x => `<li>${t(x)}</li>`).join('')}</ul><div class="car-foot"><strong>${t(c.price)}</strong><span class="more">${t(UI.details)} ${I.arrow}</span></div></div></a>`).join('')}</div>
  <div class="narrow center-block">${prose(P.outro)}</div>
</div></section>${ctaBand(t(P.ctaTitle), t(P.ctaText))}` });
}
function carPage(c) {
  const P = CARS_PAGE;
  return page({ key: 'car:' + c.slug, title: `${c.name} — ${t(c.price)} | BMWorks Performance`, desc: t(c.sub), ogImg: c.photos[0], body: `
<section class="sec sec-top"><div class="wrap">${crumbs([['cars', t(UI.nav.cars)], [null, c.name]])}
  <div class="car-head"><div><h1>${esc(c.name)}</h1><p class="lead">${t(c.sub)}</p></div><div class="price"><span>${t(P.price)}</span><strong>${t(c.price)}</strong></div></div>
  <div class="car-layout">
    <div><div class="viewer" data-viewer><div class="viewer-main"><img src="${img(c.photos[0])}" alt="${esc(c.name)}" data-main><button class="vbtn prev" aria-label="${t(P.prev)}">${I.chev}</button><button class="vbtn next" aria-label="${t(P.next)}">${I.chev}</button><span class="vcount"><b data-idx>1</b> / ${c.photos.length}</span></div>
      <div class="thumbs">${c.photos.map((f, i) => `<button${i ? '' : ' class="on"'} data-src="${img(f)}" aria-label="${t(P.photo)} ${i + 1}"><img src="${img(f)}" alt="" loading="lazy"></button>`).join('')}</div></div>
      <h2>${t(P.descT)}</h2>${prose(c.body)}
    </div>
    <aside class="side">
      <div class="side-box"><h3>${t(P.specsT)}</h3><dl class="specs">${c.specs.map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${t(v)}</dd></div>`).join('')}</dl>
        <a class="btn btn-gold btn-block" href="tel:${BIZ.tel}">${I.phone}${BIZ.telNice}</a><a class="btn btn-wa btn-block" href="${wa(BIZ.wa, t(P.waCar).replace('{car}', c.name))}" target="_blank" rel="noopener">${I.wa}WhatsApp</a>
        ${c.autoscout ? `<a class="btn btn-ghost btn-block" href="${c.autoscout}" target="_blank" rel="noopener">${t(P.autoscout)}</a>` : ''}</div>
      <div class="side-box calc" data-calc data-price="${c.priceNum}" data-locale="${cur.lang === 'it' ? 'it-IT' : 'en-GB'}"><h3>${t(P.calcT)}</h3><p>${t(P.calcP)}</p>
        <label>${t(P.price)} (€)<input type="number" data-f="price" value="${c.priceNum}" min="0" step="50"></label>
        <label>${t(P.down)} (€)<input type="number" data-f="down" value="${Math.round(c.priceNum * 0.2 / 100) * 100}" min="0" step="50"></label>
        <div class="row"><label>${t(P.rate)} (%)<input type="number" data-f="rate" value="7.5" min="0" step="0.1"></label><label>${t(P.months)}<input type="number" data-f="months" value="48" min="1" step="1"></label></div>
        <dl class="calc-out"><div><dt>${t(P.monthly)}</dt><dd data-o="monthly">–</dd></div><div><dt>${t(P.interest)}</dt><dd data-o="interest">–</dd></div><div><dt>${t(P.total)}</dt><dd data-o="total">–</dd></div></dl>
        <p class="form-note">${t(P.calcNote)}</p></div>
    </aside>
  </div>
</div></section>
<section class="sec sec-alt"><div class="wrap narrow"><div class="panel"><h2>${t(P.askT)}</h2><p>${t(P.askP)}</p>${contactForm(c.name)}</div></div></section>` });
}
function blogIndex() {
  return page({ key: 'blog', title: t(BLOG.title), desc: t(BLOG.desc), body: `
${pageHero({ kicker: 'Blog', h1: t(BLOG.h1), lead: t(BLOG.lead), image: 'rep-3.webp', trail: [[null, 'Blog']] })}
<section class="sec"><div class="wrap"><div class="posts">${posts.map(postCard).join('')}</div></div></section>
<section class="sec sec-alt"><div class="wrap narrow"><div class="author"><span class="av">G</span><div><h3>${BIZ.founder}</h3><p>${t(BLOG.author)}</p></div></div></div></section>${ctaBand()}` });
}
function postPage(p) {
  const d = p[cur.lang];
  const blocks = d.blocks.filter((b, i) => !(i < 3 && b.t === 'img' && b.src && imgmap[b.src] === imgmap[p.image]));
  const others = posts.filter(o => o.slug !== p.slug).slice(0, 3);
  const schema = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: d.title, datePublished: p.date, author: { '@type': 'Organization', name: 'BMWorks Performance' }, image: SITE_URL + 'assets/img/' + imgmap[p.image] }).replace(/</g, '\\u003c')}</script>`;
  return page({ key: 'post:' + p.slug, title: `${d.title} | BMWorks Performance`, desc: d.excerpt, ogImg: imgmap[p.image], schema, body: `
<article class="sec sec-top"><div class="wrap narrow">${crumbs([['blog', 'Blog'], [null, d.title]])}
  <header class="post-head"><time datetime="${p.date}">${fmtDate(p.date)}</time><h1>${esc(d.title)}</h1><p class="lead">${esc(d.excerpt)}</p></header>
  <figure class="post-cover"><img src="${img(imgmap[p.image])}" alt=""></figure>
  <div class="prose">${renderBlocks(blocks)}</div>
  <div class="author"><span class="av">G</span><div><h3>${BIZ.founder}</h3><p>${t(BLOG.author)}</p></div></div>
</div></article>
<section class="sec sec-alt"><div class="wrap">${secHead('Blog', t(UI.relatedPosts))}<div class="posts">${others.map(postCard).join('')}</div></div></section>${ctaBand()}` });
}
function faqPage() {
  const qa = faq.map(f => [f.q[cur.lang], renderBlocks(f.a[cur.lang])]);
  return page({ key: 'faq', title: t(FAQ_PAGE.title), desc: t(FAQ_PAGE.desc), schema: faqSchema(qa), body: `
${pageHero({ kicker: 'FAQ', h1: t(FAQ_PAGE.h1), lead: t(FAQ_PAGE.lead), image: 'svc-diag.webp', trail: [[null, 'FAQ']] })}
<section class="sec"><div class="wrap narrow">${faqList(qa)}<p class="note">${inline(t(FAQ_PAGE.note))}</p></div></section>${ctaBand()}` });
}
function privacy() {
  return page({ key: 'privacy', title: t(PRIVACY.title), desc: t(PRIVACY.desc), body: `
${pageHero({ h1: t(PRIVACY.h1), trail: [[null, t(UI.privacy)]] })}
<section class="sec"><div class="wrap narrow">${prose(PRIVACY.body)}</div></section>` });
}

/* ---------- write ---------- */
let count = 0;
function emit(key, fn) {
  for (const lang of ['it', 'en']) {
    cur = { key, lang, path: R[key][lang] };
    const dir = path.join(OUT, cur.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), fn());
    count++;
  }
}
emit('home', home);
emit('services', servicesIndex);
for (const s of SERVICES) emit(s.key, () => servicePage(s));
emit('remap', remap);
emit('options', options);
emit('about', about);
emit('contact', contact);
emit('cars', carsIndex);
for (const c of CARS) emit('car:' + c.slug, () => carPage(c));
emit('blog', blogIndex);
for (const p of posts) emit('post:' + p.slug, () => postPage(p));
emit('faq', faqPage);
emit('privacy', privacy);

const urls = Object.values(R).flatMap(r => [r.it, r.en]).map(p => `  <url><loc>${SITE_URL}${p ? p + '/' : ''}</loc></url>`).join('\n');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`Built ${count} pages`);
