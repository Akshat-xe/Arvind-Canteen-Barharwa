/* ── NAV ── */
(function () {
  const nav = document.querySelector('.site-nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mob-backdrop');

  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (document.body) document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu && mobileMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Mark active nav link
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('[data-nav-link]').forEach(a => {
    const href = a.getAttribute('href') || '';
    const norm = href.replace(/\/$/, '') || '/index.html';
    if (path.endsWith(norm) || (norm === '/index.html' && (path === '' || path === '/'))) {
      a.classList.add('active');
    }
  });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ── POPULAR TIMES ── */
(function () {
  const container = document.getElementById('popular-times');
  if (!container) return;

  const data = {
    MON: [10,22,32,44,36,26,18,28,44,66,76,80,66,46,14,0],
    TUE: [12,24,34,46,38,28,20,30,46,68,78,82,68,48,16,0],
    WED: [12,26,36,48,40,30,22,32,48,70,80,84,70,50,18,0],
    THU: [14,28,38,50,42,32,24,34,50,72,82,86,74,54,20,0],
    FRI: [16,32,42,54,46,34,28,38,54,76,88,92,80,60,24,0],
    SAT: [22,38,52,66,60,48,44,52,64,82,92,96,88,70,30,0],
    SUN: [18,32,44,56,52,44,38,46,58,76,86,90,78,58,22,0],
  };
  const summaries = {
    MON: { peak: '6p–8p', vibe: 'Steady evening rush after work' },
    TUE: { peak: '6p–8p', vibe: 'Good evening flow' },
    WED: { peak: '6p–8p', vibe: 'Mid-week, calm morning, busy evening' },
    THU: { peak: '6p–8p', vibe: 'Pre-weekend buzz picks up' },
    FRI: { peak: '6p–8p', vibe: 'Busiest weekday evening' },
    SAT: { peak: '6p–9p', vibe: 'Busiest day — lively all day' },
    SUN: { peak: '6p–8p', vibe: 'Family visits, great evening crowd' },
  };
  const dayLabels = { MON:'Mon', TUE:'Tue', WED:'Wed', THU:'Thu', FRI:'Fri', SAT:'Sat', SUN:'Sun' };
  let activeDay = 'SAT';

  const barsEl = container.querySelector('.pop-bars');
  const liveTag = container.querySelector('.pop-live');
  const dayLabel = container.querySelector('#pop-day-label');
  const peakLabel = container.querySelector('#pop-peak-label');
  const vibeLabel = container.querySelector('#pop-vibe-label');

  function render(day) {
    activeDay = day;
    const bars = data[day];
    const max = Math.max(...bars, 1);
    const peakIdx = bars.indexOf(Math.max(...bars));

    // Buttons
    container.querySelectorAll('.pop-day-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.day === day);
    });

    // Live indicator (Saturday only)
    if (liveTag) liveTag.style.display = day === 'SAT' ? 'flex' : 'none';

    // Bars
    if (barsEl) {
      barsEl.innerHTML = bars.map((v, i) => {
        const isLive = day === 'SAT' && i === 10;
        const isPeak = i === peakIdx;
        const cls = isLive ? 'pop-bar live' : isPeak ? 'pop-bar peak' : 'pop-bar';
        const pct = Math.round((v / max) * 100);
        return `<div class="${cls}" style="height:${pct}%" title="${v}%"></div>`;
      }).join('');
    }

    // Stats
    if (dayLabel) dayLabel.textContent = dayLabels[day];
    if (peakLabel) peakLabel.textContent = summaries[day].peak;
    if (vibeLabel) vibeLabel.textContent = summaries[day].vibe;
  }

  container.querySelectorAll('.pop-day-btn').forEach(btn => {
    btn.addEventListener('click', () => render(btn.dataset.day));
  });

  render('SAT');
})();

/* ── CIRCULAR TESTIMONIALS ── */
(function () {
  const container = document.getElementById('testimonials');
  if (!container) return;

  const cards = Array.from(container.querySelectorAll('.circ-card'));
  const quoteEls = container.querySelector('.circ-quote-area');
  const dots = Array.from(container.querySelectorAll('.circ-dot'));
  const count = cards.length;
  let active = 0;
  let timer = null;

  const testimonialData = window.__testimonials || [];

  function getCardStyle(i, activeIdx, containerW) {
    const gap = Math.min(68, Math.max(44, 44 + (68-44) * ((containerW - 320) / 320)));
    const lift = gap * 0.7;
    const isActive = i === activeIdx;
    const isLeft  = ((activeIdx - 1 + count) % count) === i;
    const isRight = ((activeIdx + 1) % count) === i;
    if (isActive)  return `transform:translateX(0) translateY(0) scale(1);z-index:3;opacity:1;pointer-events:auto`;
    if (isLeft)    return `transform:translateX(-${gap}px) translateY(-${lift}px) scale(0.85);z-index:2;opacity:0.8;pointer-events:auto`;
    if (isRight)   return `transform:translateX(${gap}px) translateY(-${lift}px) scale(0.85);z-index:2;opacity:0.8;pointer-events:auto`;
    return `transform:translateX(0) translateY(-${lift}px) scale(0.7);z-index:1;opacity:0;pointer-events:none`;
  }

  function update(idx) {
    const w = container.querySelector('.circ-cards').offsetWidth;
    cards.forEach((c, i) => { c.style.cssText = getCardStyle(i, idx, w) + ';transition:all .7s cubic-bezier(.4,2,.3,1)'; });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));

    if (testimonialData[idx] && quoteEls) {
      quoteEls.querySelector('.circ-blockquote').textContent = `"${testimonialData[idx].quote}"`;
      quoteEls.querySelector('.circ-name').textContent = testimonialData[idx].name;
      quoteEls.querySelector('.circ-role').textContent = testimonialData[idx].designation;
      quoteEls.style.opacity = '0';
      quoteEls.style.transform = 'translateY(8px)';
      requestAnimationFrame(() => {
        quoteEls.style.transition = 'opacity .32s ease, transform .32s ease';
        quoteEls.style.opacity = '1';
        quoteEls.style.transform = 'translateY(0)';
      });
    }
    active = idx;
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => update((active + 1) % count), 5000);
  }
  function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }

  container.querySelector('#circ-prev')?.addEventListener('click', () => { stopAuto(); update((active - 1 + count) % count); });
  container.querySelector('#circ-next')?.addEventListener('click', () => { stopAuto(); update((active + 1) % count); });
  cards.forEach((c, i) => c.addEventListener('click', () => { stopAuto(); update(i); }));
  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); update(i); }));

  // Initial render + resize
  update(0);
  startAuto();
  window.addEventListener('resize', () => update(active));
})();

/* ── MENU PAGE SIDEBAR ACTIVE ── */
(function () {
  const cats = document.querySelectorAll('.menu-cat-block');
  const sideLinks = document.querySelectorAll('.menu-sidebar-link');
  const pills = document.querySelectorAll('.cat-pill');
  if (!cats.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        sideLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        pills.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  cats.forEach(c => obs.observe(c));
})();
