/**
 * Roadmap direction · client behaviour. Vanilla, no dependencies.
 * Everything here is an enhancement: without JS the board, tickets and links all work.
 */

const doc = document.documentElement;
(window as unknown as { __roadmap: boolean }).__roadmap = true; // tells the inline failsafe the script arrived
const $ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => root.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(s));
const wide = matchMedia('(min-width: 900px)');
const still = matchMedia('(prefers-reduced-motion: reduce)');
const announcer = $('[data-announce]');
const say = (msg: string) => {
  if (!announcer) return;
  announcer.textContent = '';
  window.setTimeout(() => (announcer.textContent = msg), 40);
};
const hasIO = 'IntersectionObserver' in window;
const SR = doc.lang === 'sr';
const tr = (en: string, sr: string) => (SR ? sr : en);

/* ── Belgrade clock in the hero ── */

{
  const clocks = $$('[data-clock]');
  if (clocks.length) {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Belgrade',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
    const tick = () => {
      const s = fmt.format(new Date());
      clocks.forEach((c) => (c.textContent = s));
    };
    tick();
    window.setInterval(tick, 15000);
  }
}

/* ── Tickets: on phones only the first ticket's criteria start open; a ticket opened from the board unfolds ── */

{
  const acs = $$<HTMLDetailsElement>('details.ac');
  if (!wide.matches) acs.forEach((d, i) => (d.open = i === 0));
  const unfold = () => {
    const id = location.hash.slice(1);
    const el = id ? document.getElementById(id) : null;
    const ac = el?.querySelector<HTMLDetailsElement>('details.ac');
    if (ac) ac.open = true;
  };
  window.addEventListener('hashchange', unfold);
  unfold();
}

/* ── Today: move the line to the visitor's real date ── */

const board = $('[data-board]');
const from = Number(board?.dataset.from ?? 2023);
const to = Number(board?.dataset.to ?? 2027.5);
{
  const now = new Date();
  const y = now.getFullYear();
  const t0 = new Date(y, 0, 1).getTime();
  const year = y + (now.getTime() - t0) / (new Date(y + 1, 0, 1).getTime() - t0);
  doc.style.setProperty('--today', Math.min(1, Math.max(0, (year - from) / (to - from))).toFixed(4));
  const label = now.toLocaleDateString(SR ? 'sr-Latn-RS' : 'en-GB', { month: 'short', year: 'numeric' });
  $$('[data-today]').forEach((el) => (el.textContent = label));
}

/* ── Scroll reveals ── */

const revealEls = $$('[data-reveal]');
if (hasIO) {
  const reveal = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        el.classList.add('is-in');
        reveal.unobserve(el);
        // Once its entrance has played, an element keeps its final state for good.
        window.setTimeout(() => el.classList.add('is-settled'), 1800);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
  );
  revealEls.forEach((el) => reveal.observe(el));
} else revealEls.forEach((el) => el.classList.add('is-in'));

/* ── The board ── */

if (board) {
  // Intro: the playhead sweeps once the board is on screen. When it has finished,
  // .is-done removes the animation rules so nothing can replay or blank the board later.
  const css = getComputedStyle(board);
  const introMs = ((parseFloat(css.getPropertyValue('--D')) || 2.4) + (parseFloat(css.getPropertyValue('--lead')) || 0.35) + 0.9) * 1000;
  const start = () => {
    board.classList.add('is-playing');
    window.setTimeout(() => board.classList.add('is-done'), introMs);
  };
  if (hasIO) {
    const play = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        start();
        play.disconnect();
      },
      { threshold: 0.2 },
    );
    play.observe(board);
  } else start();

  // Labels that do not fit inside their bar move into the empty past before it,
  // when that row has room. Otherwise they stay truncated (the tooltip has the full text).
  const fitLabels = () => {
    const bars = $$('.bar', board);
    bars.forEach((b) => b.classList.remove('is-out'));
    if (!wide.matches) return;
    for (const track of $$('.lane-track', board)) {
      const rows = new Map<string, HTMLElement[]>();
      for (const b of $$(':scope > .bar', track)) {
        const k = b.style.getPropertyValue('--row');
        rows.set(k, [...(rows.get(k) ?? []), b]);
      }
      const edge = track.getBoundingClientRect().left;
      for (const list of rows.values()) {
        let prevRight = edge;
        const boxes = list.map((b) => ({ b, r: b.getBoundingClientRect() })).sort((x, y) => x.r.left - y.r.left);
        for (const { b, r } of boxes) {
          const text = $('.item-label-text', b);
          if (text && text.scrollWidth > text.clientWidth + 1) {
            b.classList.add('is-out');
            const need = ($('.item-label', b)?.getBoundingClientRect().width ?? 0) + 12;
            if (r.left - need < prevRight + 8) b.classList.remove('is-out');
          }
          prevRight = r.right + (b.classList.contains('has-launch') ? 10 : 0);
        }
      }
    }
  };
  let fitFrame = 0;
  const refit = () => {
    cancelAnimationFrame(fitFrame);
    fitFrame = requestAnimationFrame(() => {
      fitLabels();
      board.classList.add('is-fit');
    });
  };
  document.fonts?.ready.then(refit);
  refit();
  window.addEventListener('resize', refit);

  const tip = $('[data-tip-card]', board)!;
  const tipLink = $<HTMLAnchorElement>('.tip-link', tip)!;
  const layer = $('.time-over', board)!;
  const scrub = $('[data-scrub]', board)!;
  const scrubLabel = $('[data-scrub-label]', board)!;
  const fields = ['id', 'lane', 'status', 'title', 'when', 'outcome', 'launch', 'cta'] as const;
  let active: HTMLAnchorElement | null = null;
  let pinned = false;
  let timer = 0;
  let lastPointer = 'mouse';

  const fill = (a: HTMLAnchorElement) => {
    for (const k of fields) $(`[data-f="${k}"]`, tip)!.textContent = a.dataset[k] ?? '';
    tip.classList.toggle('has-launch', !!a.dataset.launch);
    tipLink.href = a.getAttribute('href') ?? '#work';
    const li = a.parentElement as HTMLElement;
    const c = getComputedStyle(li).getPropertyValue('--c').trim() || '#7dd3fc';
    tip.style.setProperty('--tc', c);
    board.style.setProperty('--hs', li.style.getPropertyValue('--s'));
    board.style.setProperty('--he', li.style.getPropertyValue('--e'));
    board.style.setProperty('--hc', c);
  };

  const place = (a: HTMLAnchorElement, x?: number) => {
    const br = board.getBoundingClientRect();
    const r = a.getBoundingClientRect();
    const tw = tip.offsetWidth;
    const th = tip.offsetHeight;
    const cx = Math.min(Math.max(x ?? r.left + Math.min(r.width / 2, 150), r.left + 14), r.right - 14);
    const left = Math.max(12, Math.min(cx - br.left - tw / 2, br.width - tw - 12));
    const topRoom = parseFloat(getComputedStyle(doc).getPropertyValue('--top-h')) || 64;
    const above = r.top - th - 14 > topRoom + 6;
    const top = above ? r.top - br.top - th - 12 : r.bottom - br.top + 12;
    tip.style.setProperty('--x', `${Math.round(left)}px`);
    tip.style.setProperty('--y', `${Math.round(top)}px`);
    tip.style.setProperty('--ax', `${Math.round(cx - br.left - left)}px`);
    tip.dataset.side = above ? 'top' : 'bottom';
  };

  const show = (a: HTMLAnchorElement, x?: number) => {
    window.clearTimeout(timer);
    if (active !== a) {
      active?.classList.remove('is-active');
      active?.closest('.lane')?.classList.remove('is-hot');
      active = a;
      a.classList.add('is-active');
      a.closest('.lane')?.classList.add('is-hot');
      fill(a);
    }
    place(a, x);
    tip.classList.add('is-on');
    board.classList.add('has-active');
  };

  const hide = (delay = 0) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      tip.classList.remove('is-on');
      board.classList.remove('has-active');
      active?.classList.remove('is-active');
      active?.closest('.lane')?.classList.remove('is-hot');
      active = null;
      pinned = false;
    }, delay);
  };

  board.addEventListener('pointerdown', (e) => (lastPointer = e.pointerType), true);

  for (const a of $$<HTMLAnchorElement>('a[data-tip]', board)) {
    a.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse' && wide.matches) show(a, e.clientX);
    });
    a.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && !pinned) hide(160);
    });
    a.addEventListener('focus', () => {
      if (wide.matches) show(a);
    });
    a.addEventListener('blur', () => {
      if (!pinned) hide(140);
    });
    a.addEventListener('click', (e) => {
      // Keyboard (detail 0) and mouse follow the link. Touch and pen: the first tap
      // previews the bar, a second tap on the same bar opens its ticket.
      if (!wide.matches || e.detail === 0 || lastPointer === 'mouse') return;
      if (pinned && active === a) return;
      e.preventDefault();
      show(a);
      pinned = true;
    });
  }

  tip.addEventListener('pointerenter', () => window.clearTimeout(timer));
  tip.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'mouse' && !pinned) hide(160);
  });
  tipLink.addEventListener('click', () => hide(0));

  document.addEventListener('pointerdown', (e) => {
    const t = e.target as Element;
    if (active && !t.closest('[data-tip-card], a[data-tip]')) hide(0);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && active) hide(0);
  });
  window.addEventListener('resize', () => active && place(active));
  wide.addEventListener('change', () => {
    hide(0);
    refit();
  });

  // Scrubber: a hairline under the mouse that reads out the quarter.
  board.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || !wide.matches) return;
    const r = layer.getBoundingClientRect();
    const x = e.clientX - r.left;
    const inside = x >= 0 && x <= r.width && e.clientY >= r.top && e.clientY <= r.bottom;
    scrub.classList.toggle('is-on', inside);
    if (!inside) return;
    scrub.style.transform = `translateX(${x.toFixed(1)}px)`;
    scrub.classList.toggle('is-flip', x > r.width - 96);
    const year = from + (x / r.width) * (to - from);
    const y = Math.floor(year);
    scrubLabel.textContent = `${y} Q${Math.min(4, Math.floor((year - y) * 4) + 1)}`;
  });
  board.addEventListener('pointerleave', () => scrub.classList.remove('is-on'));
}

/* ── "Show on roadmap": scroll up, then flash the bar and focus it ── */

document.addEventListener('click', (e) => {
  const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#bar-"]');
  const bar = link && document.getElementById(link.hash.slice(1));
  if (!bar) return;
  window.setTimeout(
    () => {
      bar.classList.remove('is-flash');
      void bar.offsetWidth;
      bar.classList.add('is-flash');
      bar.focus({ preventScroll: true });
    },
    still.matches ? 0 : 650,
  );
});

/* ── Copy the email address ── */

for (const btn of $$<HTMLButtonElement>('[data-copy]')) {
  const label = $('[data-copy-label]', btn);
  const original = label?.textContent ?? '';
  let t = 0;
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copy ?? '';
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      /* clipboard blocked: the address is visible next to the button anyway */
    }
    if (label) label.textContent = ok ? tr('Copied', 'Kopirano') : tr('Copy failed', 'Nije kopirano');
    btn.classList.toggle('is-done', ok);
    say(
      ok
        ? tr(`Copied ${value}`, `Kopirano: ${value}`)
        : tr(`Could not copy. The address is ${value}`, `Kopiranje nije uspelo. Adresa je ${value}`),
    );
    window.clearTimeout(t);
    t = window.setTimeout(() => {
      if (label) label.textContent = original;
      btn.classList.remove('is-done');
    }, 2200);
  });
}

/* ── Skills board: highlight one lane ── */

const filters = $('[data-filters]');
const kanban = $('[data-kanban]');
if (filters && kanban) {
  filters.hidden = false;
  const cards = $$('.card', kanban);
  filters.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>('button[data-d]');
    if (!b) return;
    const d = b.dataset.d ?? 'all';
    for (const x of $$('button', filters)) x.setAttribute('aria-pressed', String(x === b));
    if (d === 'all') delete kanban.dataset.filter;
    else kanban.dataset.filter = d;
    let n = 0;
    for (const c of cards) {
      const hit = d !== 'all' && c.dataset.d === d;
      c.classList.toggle('is-hit', hit);
      if (hit) n++;
    }
    const lane = b.textContent?.trim();
    say(d === 'all' ? tr('Showing all skills', 'Prikazane su sve veštine') : tr(`${n} skills highlighted: ${lane}`, `Istaknuto veština: ${n}, ${lane}`));
  });
}

/* ── Mobile menu ── */

const menu = $<HTMLDetailsElement>('[data-menu]');
if (menu) {
  menu.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) menu.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !menu.open) return;
    menu.open = false;
    $('summary', menu)?.focus();
  });
  document.addEventListener('pointerdown', (e) => {
    if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
  });
}

/* ── Nav: mark the section in view ── */

const spyLinks = $$<HTMLAnchorElement>('[data-spy]');
if (hasIO && spyLinks.length) {
  const byId = new Map(spyLinks.map((a) => [a.dataset.spy ?? '', a]));
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        spyLinks.forEach((a) => a.removeAttribute('aria-current'));
        byId.get(e.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  byId.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });
}
