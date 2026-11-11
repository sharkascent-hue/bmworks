(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var TEL = '393292949290', MAIL = 'info@bmworks.it';
  var lang = document.body.dataset.lang || 'it';

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
      var f = form.elements, err = $('.form-err', form);
      if (!f.name.value.trim() || !f.message.value.trim() || !f.privacy.checked) { err.hidden = false; return; }
      err.hidden = true;
      var L = lang === 'it'
        ? { n: 'Nome', p: 'Telefono', v: 'Veicolo', s: 'Richiesta dal sito', a: 'Riguardo a' }
        : { n: 'Name', p: 'Phone', v: 'Vehicle', s: 'Website enquiry', a: 'About' };
      var lines = [];
      if (form.dataset.subject) lines.push(L.a + ': ' + form.dataset.subject);
      lines.push(L.n + ': ' + f.name.value.trim());
      if (f.phone.value.trim()) lines.push(L.p + ': ' + f.phone.value.trim());
      if (f.email.value.trim()) lines.push('Email: ' + f.email.value.trim());
      if (f.vehicle.value.trim()) lines.push(L.v + ': ' + f.vehicle.value.trim());
      lines.push('', f.message.value.trim());
      var text = lines.join('\n');
      if (via === 'mail') {
        location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(L.s + (form.dataset.subject ? ' — ' + form.dataset.subject : '')) + '&body=' + encodeURIComponent(text);
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

  // count-up numbers + reveal on scroll
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target.dataset.count) {
          var end = +e.target.dataset.count, t0 = performance.now(), loc = lang === 'it' ? 'it-IT' : 'en-GB';
          (function tick(t) { var p = Math.min((t - t0) / 1400, 1); e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString(loc); if (p < 1) requestAnimationFrame(tick); })(t0);
        } else e.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    $$('.card,.tile,.benefits li,.stat,.post,.tier,.car,.way').forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
    $$('[data-count]').forEach(function (el) { io.observe(el); });
  }
})();
