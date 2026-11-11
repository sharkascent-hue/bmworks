(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var TEL = '393292949290', MAIL = 'info@bmworks.it';
  var lang = document.body.dataset.lang || 'it';

  // intro animation: full on the first page of a visit, short between pages; skippable
  var intro = $('#intro'), rootEl = document.documentElement, reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (intro && getComputedStyle(intro).display !== 'none') {
    var gone = false, short = rootEl.classList.contains('intro-short');
    rootEl.classList.add('intro-lock');
    var end = function () { if (gone) return; gone = true; rootEl.classList.remove('intro-lock'); try { sessionStorage.setItem('bmw-intro', '1'); } catch (_) {} intro.remove(); };
    var skip = function () { intro.classList.add('skip'); setTimeout(end, 450); };
    intro.addEventListener('animationend', function (e) { if (e.animationName === 'introOut') end(); });
    intro.addEventListener('click', skip);
    document.addEventListener('keydown', function k(e) { if (e.key === 'Escape') { skip(); document.removeEventListener('keydown', k); } });
    setTimeout(end, short ? 1900 : 4200);
  }
  // curtain when leaving for another page of the site
  if (!reduced) {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target === '_blank' || a.hasAttribute('download') || a.origin !== location.origin) return;
      if (a.closest('[data-gallery]') || a.getAttribute('href').charAt(0) === '#' || (a.pathname === location.pathname && a.hash)) return;
      if (a.pathname === location.pathname && a.search === location.search) return;
      e.preventDefault();
      rootEl.classList.add('leaving');
      setTimeout(function () { location.href = a.href; }, 270);
    });
    window.addEventListener('pageshow', function (e) { if (e.persisted) rootEl.classList.remove('leaving'); });
  }
  // scroll progress bar
  var bar = $('.progress');
  if (bar) {
    var tick = false, upd = function () { tick = false; var h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ')'; };
    addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
  // videos: play in place, one at a time
  $$('.vid-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.vid video').forEach(function (o) { o.pause(); });
      var v = document.createElement('video');
      v.src = b.dataset.video; v.controls = true; v.autoplay = true; v.playsInline = true; v.setAttribute('playsinline', '');
      v.poster = $('img', b).src;
      b.replaceWith(v); v.focus();
    });
  });
  var hv = $('.hero-media video');
  if (hv && reduced) { hv.removeAttribute('autoplay'); hv.pause(); }

  // remember the language chosen with the IT / EN switch
  $$('.lang a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      try { localStorage.setItem('bmw-lang', a.dataset.lang); } catch (_) {}
      if (a.classList.contains('on')) e.preventDefault();
    });
  });

  // mobile menu + dropdowns
  var header = $('#header'), nav = $('#nav'), burger = $('#burger');
  function setH() { document.documentElement.style.setProperty('--hh', header.getBoundingClientRect().bottom + 'px'); }
  burger.addEventListener('click', function () {
    setH();
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('.dd-btn').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var dd = b.parentNode, open = !dd.classList.contains('open');
      $$('.dd.open').forEach(function (d) { d.classList.remove('open'); $('.dd-btn', d).setAttribute('aria-expanded', 'false'); });
      dd.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
    });
  });
  document.addEventListener('click', function () { $$('.dd.open').forEach(function (d) { d.classList.remove('open'); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    $$('.dd.open').forEach(function (d) { d.classList.remove('open'); });
    var p = $('#wa-panel'); if (p) p.hidden = true;
  });

  // WhatsApp widget
  var fab = $('#wa-fab'), panel = $('#wa-panel');
  if (fab) fab.addEventListener('click', function () { panel.hidden = !panel.hidden; fab.setAttribute('aria-expanded', !panel.hidden); });

  // contact forms: compose a WhatsApp or email message (no server needed)
  $$('[data-contact-form]').forEach(function (form) {
    var via = 'wa';
    $$('button[type=submit]', form).forEach(function (b) { b.addEventListener('click', function () { via = b.dataset.via; }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = $('.form-err', form), ok = true;
      $$('[required]', form).forEach(function (el) { var bad = el.type === 'checkbox' ? !el.checked : !el.value.trim(); if (bad) { el.setAttribute('aria-invalid', 'true'); ok = false; } else el.removeAttribute('aria-invalid'); });
      if (!ok) { err.hidden = false; return; }
      err.hidden = true;
      var subj = form.dataset.subject, lines = [];
      if (subj) lines.push((lang === 'it' ? 'Riguardo a' : 'About') + ': ' + subj);
      $$('[data-l]', form).forEach(function (el) { var v = el.value.trim(); if (v) lines.push(el.dataset.l + ': ' + v); });
      var msg = form.elements.message.value.trim(); if (msg) lines.push('', msg);
      var text = lines.join('\n');
      if (via === 'mail') {
        location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent((lang === 'it' ? 'Richiesta dal sito' : 'Website enquiry') + (subj ? ' — ' + subj : '')) + '&body=' + encodeURIComponent(text);
      } else {
        window.open('https://wa.me/' + TEL + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
      }
    });
  });

  // photo viewer on car pages
  $$('[data-viewer]').forEach(function (v) {
    var main = $('[data-main]', v), thumbs = $$('.thumbs button', v), idx = $('[data-idx]', v), i = 0;
    function show(n) {
      i = (n + thumbs.length) % thumbs.length;
      main.src = thumbs[i].dataset.src; idx.textContent = i + 1;
      thumbs.forEach(function (t, k) { t.classList.toggle('on', k === i); });
      thumbs[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
    thumbs.forEach(function (t, k) { t.addEventListener('click', function () { show(k); }); });
    $('.prev', v).addEventListener('click', function () { show(i - 1); });
    $('.next', v).addEventListener('click', function () { show(i + 1); });
    var x0 = null;
    main.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    main.addEventListener('touchend', function (e) { if (x0 === null) return; var d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 40) show(i + (d < 0 ? 1 : -1)); x0 = null; });
  });

  // lightbox for galleries
  $$('[data-gallery]').forEach(function (g) {
    var links = $$('a', g);
    links.forEach(function (a, k) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var i = k, box = document.createElement('div');
        box.className = 'lightbox'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
        box.innerHTML = '<img alt=""><button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous">‹</button><button class="lb-n" aria-label="Next">›</button>';
        var im = $('img', box);
        function show(n) { i = (n + links.length) % links.length; im.src = links[i].href; }
        function close() { box.remove(); document.removeEventListener('keydown', key); a.focus(); }
        function key(ev) { if (ev.key === 'Escape') close(); if (ev.key === 'ArrowRight') show(i + 1); if (ev.key === 'ArrowLeft') show(i - 1); }
        box.addEventListener('click', function (ev) { if (ev.target === box || ev.target.classList.contains('lb-x')) close(); });
        $('.lb-p', box).addEventListener('click', function () { show(i - 1); });
        $('.lb-n', box).addEventListener('click', function () { show(i + 1); });
        document.addEventListener('keydown', key);
        document.body.appendChild(box); show(i); $('.lb-x', box).focus();
      });
    });
  });

  // finance calculator
  $$('[data-calc]').forEach(function (c) {
    var fmt = new Intl.NumberFormat(c.dataset.locale, { style: 'currency', currency: 'EUR' });
    function v(k) { return parseFloat($('[data-f=' + k + ']', c).value) || 0; }
    function out(k, n) { $('[data-o=' + k + ']', c).textContent = isFinite(n) && n >= 0 ? fmt.format(n) : '–'; }
    function calc() {
      var P = Math.max(v('price') - v('down'), 0), n = Math.round(v('months')), r = v('rate') / 1200;
      if (!n) { out('monthly', NaN); out('interest', NaN); out('total', NaN); return; }
      var m = r ? P * r / (1 - Math.pow(1 + r, -n)) : P / n;
      out('monthly', m); out('interest', m * n - P); out('total', m * n);
    }
    $$('input', c).forEach(function (i) { i.addEventListener('input', calc); });
    calc();
  });

  // count-up numbers + staggered reveal on scroll
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target;
        if (el.dataset.count) {
          var end = +el.dataset.count, pre = el.dataset.pre || '', suf = el.dataset.suf || '', t0 = performance.now(), loc = lang === 'it' ? 'it-IT' : 'en-GB';
          (function tick(t) { var p = Math.min((t - t0) / 1500, 1); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString(loc) + suf; if (p < 1) requestAnimationFrame(tick); })(t0);
        } else el.classList.add('in');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    var groups = {};
    $$('.card,.tile,.benefits li,.stat,.post,.tier,.car,.way,.vid,.review,.pillars div,.faq details,.gallery a,.partners div').forEach(function (el) {
      var k = el.parentNode; k.__i = (k.__i || 0); el.style.setProperty('--d', Math.min(k.__i++, 7) * 80 + 'ms');
      el.classList.add('reveal'); io.observe(el);
    });
    $$('.sec-head,.prose figure,.quote,.side-box,.panel,.map,.lookup,.author,.cta-in,.viewer').forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
    $$('.split').forEach(function (sp) { var c = sp.children; if (c[0] && !c[0].classList.contains('reveal')) { c[0].classList.add('reveal', 'rv-l'); io.observe(c[0]); } });
    $$('[data-count]').forEach(function (el) { io.observe(el); });
  }
})();
