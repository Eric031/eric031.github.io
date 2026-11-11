/**
 * Roadmap data: the time axis, lanes, bars and the skills board, built per language from copy.ts.
 * Bar dates are months; the axis is drawn by quarter.
 */
import { copy, PROJECTS, type Lang, type LaneId, type Status, type Domain, type ProjectMeta } from './copy';

export type { Lang, LaneId, Status, Domain };

/** Decimal years. The axis starts with 2024; the quarters after today are the "next" zone. */
export const AXIS = { from: 2024, to: 2027.25 };
export const QUARTERS = Math.round((AXIS.to - AXIS.from) * 4);

const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));
const ym = (s: string) => {
  const [y, m] = s.split('-').map(Number);
  return y + (m - 1) / 12;
};

export function decimalYear(d: Date) {
  const y = d.getFullYear();
  const start = new Date(y, 0, 1).getTime();
  const end = new Date(y + 1, 0, 1).getTime();
  return y + (d.getTime() - start) / (end - start);
}

/** Position on the axis, 0..1. */
export const pos = (year: number) => clamp((year - AXIS.from) / (AXIS.to - AXIS.from), 0, 1);

/** Build-time "today". The client script moves it to the visitor's real date. */
export const BUILD_DATE = new Date();
const todayYear = decimalYear(BUILD_DATE);
export const TODAY = pos(todayYear);

export const YEARS = Array.from({ length: Math.ceil(AXIS.to) - AXIS.from }, (_, i) => {
  const y = AXIS.from + i;
  return { year: y, quarters: Math.round((Math.min(y + 1, AXIS.to) - y) * 4) };
});

const LANE_COLORS: Record<LaneId, string> = {
  role: '#e8edf7',
  web: '#7dd3fc',
  payments: '#fcd34d',
  infra: '#5eead4',
  automation: '#a5b4fc',
  studio: '#d8a6ff',
};
const DOMAIN_COLORS: Record<Domain, string> = {
  delivery: '#e8edf7',
  web: '#7dd3fc',
  payments: '#fcd34d',
  infra: '#5eead4',
  automation: '#a5b4fc',
};

export interface Lane {
  id: LaneId;
  label: string;
  color: string;
}

export interface Project extends ProjectMeta {
  title: string;
  context: string;
  points: string[];
  stack: string[];
  bar: string;
  outcome: string;
  launch?: string;
  /** Axis positions, 0..1. */
  s: number;
  e: number;
  ongoing: boolean;
  /** CSS value for --e: a number, or var(--today) for work that is still going. */
  eCss: string;
  when: string;
  whenA11y: string;
  row: number;
}

function monthLabel(s: string, locale: string) {
  const [y, m] = s.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 15)).toLocaleDateString(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/**
 * Greedy row packing inside a lane. A bar shares a row only when there is room before it
 * for its label (labels of short bars sit in the empty space to their left).
 */
function pack(items: Omit<Project, 'row'>[]): Project[] {
  const rowsEnd: number[] = [];
  return [...items]
    .sort((a, b) => a.s - b.s || b.e - a.e)
    .map((p) => {
      let row = rowsEnd.findIndex((end) => end + 0.2 <= p.s);
      if (row === -1) row = rowsEnd.push(0) - 1;
      // Reserve a little room after very short bars so their diamond never touches the next bar.
      rowsEnd[row] = Math.max(p.e, p.s + 0.05);
      return { ...p, row };
    });
}

function build(lang: Lang) {
  const t = copy[lang];

  const LANES: Lane[] = (Object.keys(LANE_COLORS) as LaneId[]).map((id) => ({ id, label: t.lanes[id], color: LANE_COLORS[id] }));
  const laneById = Object.fromEntries(LANES.map((l) => [l.id, l])) as Record<LaneId, Lane>;

  const projects = PROJECTS.map((m) => {
    const c = t.projects[m.key];
    const ongoing = m.end === 'now';
    const s = pos(ym(m.start));
    // Finished work stops at the end of its last month, or at today if that month is still running.
    const e = ongoing ? TODAY : pos(Math.min(ym(m.end) + 1 / 12, todayYear));
    const a = monthLabel(m.start, t.locale);
    const b = ongoing ? t.ticket.now : monthLabel(m.end, t.locale);
    const single = !ongoing && m.start === m.end;
    return {
      ...m,
      ...c,
      s,
      e,
      ongoing,
      eCss: ongoing ? 'var(--today)' : e.toFixed(4),
      when: single ? a : `${a} → ${b}`,
      whenA11y: single ? a : `${a} ${t.ticket.to} ${b}`,
    };
  });

  const board = LANES.filter((l) => l.id !== 'role').map((lane) => {
    const items = pack(projects.filter((p) => p.lane === lane.id));
    return { lane, rows: Math.max(1, ...items.map((i) => i.row + 1)), items };
  });
  const byKey = Object.fromEntries(board.flatMap((b) => b.items).map((p) => [p.key, p])) as Record<string, Project>;
  const ordered = PROJECTS.map((m) => byKey[m.key]);

  const PHASES = (['plan', 'build', 'run'] as const).map((id) => ({
    id,
    name: t.skills.phases[id],
    policy: t.skills.policies[id],
    cards: t.skills.cards[id].map(([text, d]) => ({ text, d })),
  }));
  const DOMAINS = (Object.keys(DOMAIN_COLORS) as Domain[]).map((id) => ({ id, label: t.skills.domains[id], color: DOMAIN_COLORS[id] }));

  return {
    t,
    LANES,
    laneById,
    board,
    workTickets: ordered.filter((p) => p.lane !== 'studio'),
    studioTickets: ordered.filter((p) => p.lane === 'studio'),
    /** Project manager since Feb 2024; the developer epic started before the axis, so it runs from the left edge. */
    EPIC: { s: pos(2024 + 1 / 12) },
    DEV_EPIC: { s: 0 },
    PHASES,
    DOMAINS,
    todayLabel: (d: Date) => d.toLocaleDateString(t.locale, { month: 'short', year: 'numeric' }),
  };
}

const cache = new Map<Lang, ReturnType<typeof build>>();
export function getData(lang: Lang) {
  let d = cache.get(lang);
  if (!d) cache.set(lang, (d = build(lang)));
  return d;
}
