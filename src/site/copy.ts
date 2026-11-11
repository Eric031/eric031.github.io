/**
 * All copy for the site, in English and Serbian.
 *
 * Facts come from the portfolio research of 9 Nov 2026: only dated, checked outcomes.
 * No employer, client, vendor or brand names; BAT DEV (his own studio) is the one name used.
 * Ticket IDs follow the order the work started in; they are labels, not tracker numbers.
 */
export type Lang = 'en' | 'sr';
export const langOf = (url: URL): Lang => (url.pathname.startsWith('/sr') ? 'sr' : 'en');

export const name = 'Dušan Erić';
export const email = 'dule.eric98@gmail.com';
export const github = 'https://github.com/Eric031';
export const repo = 'https://github.com/Eric031/eric031.github.io';
/** LinkedIn URL is not known yet. The link renders only when this is non-empty. */
export const LINKEDIN = '';
export const STUDIO = { name: 'BAT DEV', url: 'https://brandandtech.dev', urlLabel: 'brandandtech.dev' };

export type LaneId = 'role' | 'web' | 'payments' | 'infra' | 'automation' | 'studio';
export type Status = 'live' | 'shipped' | 'running' | 'ongoing';
export type Domain = 'delivery' | 'web' | 'payments' | 'infra' | 'automation';
export type ProjectKey =
  | 'shop'
  | 'relaunch'
  | 'incident'
  | 'portal'
  | 'move'
  | 'transcripts'
  | 'recordings'
  | 'callboard'
  | 'kyb'
  | 'domains'
  | 'booking';

export interface ProjectMeta {
  key: ProjectKey;
  id: string;
  lane: Exclude<LaneId, 'role'>;
  /** 'YYYY-MM' */
  start: string;
  end: string | 'now';
  status: Status;
}

/** Ticket order on the page. Dates are months from file dates, commits and logs. */
export const PROJECTS: ProjectMeta[] = [
  { key: 'shop', id: 'BAT-2', lane: 'studio', start: '2026-10', end: 'now', status: 'live' },
  { key: 'relaunch', id: 'DE-106', lane: 'web', start: '2026-09', end: '2026-10', status: 'live' },
  { key: 'incident', id: 'DE-105', lane: 'infra', start: '2026-08', end: '2026-09', status: 'shipped' },
  { key: 'portal', id: 'DE-104', lane: 'web', start: '2026-05', end: '2026-09', status: 'shipped' },
  { key: 'move', id: 'DE-107', lane: 'infra', start: '2026-09', end: '2026-09', status: 'shipped' },
  { key: 'transcripts', id: 'DE-110', lane: 'automation', start: '2026-10', end: 'now', status: 'running' },
  { key: 'recordings', id: 'DE-108', lane: 'automation', start: '2026-09', end: 'now', status: 'running' },
  { key: 'callboard', id: 'DE-103', lane: 'automation', start: '2026-04', end: '2026-05', status: 'shipped' },
  { key: 'kyb', id: 'DE-101', lane: 'payments', start: '2024-02', end: 'now', status: 'ongoing' },
  { key: 'domains', id: 'DE-102', lane: 'infra', start: '2024-08', end: 'now', status: 'ongoing' },
  { key: 'booking', id: 'BAT-1', lane: 'studio', start: '2026-05', end: 'now', status: 'live' },
];

interface ProjectCopy {
  title: string;
  context: string;
  points: string[];
  stack: string[];
  /** Short label that fits inside a bar. */
  bar: string;
  outcome: string;
  /** Launch diamond at the end of the bar. */
  launch?: string;
}

type Card = [string, Domain];

const en = {
  htmlLang: 'en',
  locale: 'en-GB',
  meta: {
    title: 'Dušan Erić · Frontend development & project management',
    description:
      'Dušan Erić, frontend developer and project manager in Belgrade. His work as a roadmap: card payments, brand websites, client portals, email, infrastructure and automation, plus his studio, BAT DEV.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    roadmap: 'Roadmap',
    work: 'Work',
    studio: 'Studio',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
    menu: 'Menu',
    menuSuffix: '(menu)',
    language: 'Language',
  },
  views: {
    timeline: 'Timeline',
    tickets: 'Tickets',
    workspace: 'Workspace',
    board: 'Board',
    changelog: 'Changelog',
    newTicket: 'New ticket',
  },
  hero: {
    kicker: 'Belgrade · Building and shipping the web',
    headline: 'Frontend development',
    accent: '& project management',
    lead: 'Frontend developer turned project manager, based in Belgrade. I’ve built more than ten websites, and now I lead web projects from brief to launch: I plan the work, deal with vendors, banks and hosting providers, and still build the frontend myself. I ran every project on this page.',
    props: { status: 'Status', base: 'Base', email: 'Email', time: 'Local time', studio: 'Studio' },
    open: 'Open to new projects',
    baseValue: 'Belgrade, Serbia',
    copy: 'Copy',
    copyAria: 'Copy email address',
    mail: 'Email me',
  },
  board: {
    title: 'Roadmap',
    range: 'by quarter',
    legend: 'Legend',
    project: 'Project',
    launch: 'Launch',
    today: 'Today',
    nextLegend: 'Next',
    lanes: 'Lanes',
    hintPointer: 'Hover or focus a bar for details. Click it to open the ticket.',
    hintTouch: 'Tap a bar for details, then open its ticket.',
    hintList: 'Tap a row to open its ticket.',
    openTicket: 'Open ticket',
    launchSr: 'Launch: ',
    epic: {
      title: 'Project manager, group of fintech companies',
      label: 'Project manager · fintech',
      when: 'Feb 2024 → now',
      outcome: 'Websites, client portals, payment providers, email and internal tools for a group of fintech brands.',
      cta: 'Read the changelog',
    },
    devEpic: {
      title: 'Frontend developer: websites for brands and small businesses',
      label: 'Frontend developer · 10+ websites',
      when: 'Before PM · still building',
      outcome: 'More than ten websites from design to launch. Today I build the frontend of my own and the studio’s projects.',
      cta: 'Read the changelog',
    },
    nextBar: {
      title: 'Open to new projects',
      label: 'Open to new',
      tail: ' projects',
      when: 'From today',
      status: 'Unscheduled',
      cta: 'Start a ticket',
    },
    facts: [
      { value: '10+', label: 'websites built, from design to launch' },
      { value: '~5 weeks', label: 'from first brief to live card payments' },
      { value: '3,430', label: 'call transcripts filed automatically in 4 weeks' },
      { value: '9 in 10 days', label: 'security vendors cleared a flagged domain' },
    ],
  },
  lanes: {
    role: 'Role',
    web: 'Web & product',
    payments: 'Payments',
    infra: 'Infrastructure & email',
    automation: 'Automation',
    studio: 'Studio',
  } as Record<LaneId, string>,
  status: { live: 'Live', shipped: 'Shipped', running: 'Running', ongoing: 'Ongoing' } as Record<Status, string>,
  ticket: {
    outcome: 'Outcome',
    ac: 'Acceptance criteria',
    all: 'all ',
    met: ' met',
    status: 'Status',
    lane: 'Lane',
    timeline: 'Timeline',
    stack: 'Stack',
    show: 'Show on roadmap',
    now: 'now',
    to: 'to',
    attachment: 'Attachment',
  },
  work: {
    title: 'Selected work',
    intro:
      'Every bar on the roadmap opens one of these tickets. I was the project manager on each of them; where a colleague wrote the code, the ticket says so.',
  },
  studio: {
    tagline: 'Brand and Tech Studio',
    line: 'We design brands, craft interfaces, and ship the software that carries them.',
    me: 'I run BAT DEV, a brand and tech studio. Two of its client projects are below: an online shop with card payments, which we also maintain every month, and a booking platform for a beauty salon.',
    services: ['Branding', 'UI/UX design', 'Development', 'Marketing'],
    servicesAria: 'Studio services',
  },
  skills: {
    title: 'Plan, build, run',
    intro: 'Skills and how I work, on one board: what I use at each stage of a project, and the rule each stage runs on.',
    filterAria: 'Highlight skills by lane',
    all: 'All',
    policy: 'Column policy',
    suffix: 'skills',
    phases: { plan: 'Plan', build: 'Build', run: 'Run' },
    policies: {
      plan: {
        title: 'Start from the outcome',
        text: 'Before tickets or code: what has to be true on launch day, who signs it off, and what can break on the way.',
      },
      build: {
        title: 'Small releases, checked live',
        text: 'Each change ships on its own, gets checked on the live site and on a phone, and has a way back if something breaks.',
      },
      run: {
        title: 'Leave notes behind',
        text: 'Most hand-overs come with notes, scripts and checks, so the work keeps running without me in the room.',
      },
    },
    domains: {
      delivery: 'Delivery',
      web: 'Web & product',
      payments: 'Payments',
      infra: 'Infrastructure',
      automation: 'Automation',
    } as Record<Domain, string>,
    cards: {
      plan: [
        ['Scoping and requirements', 'delivery'],
        ['Specs and acceptance criteria', 'delivery'],
        ['Vendor and partner management', 'delivery'],
        ['Working with compliance and legal', 'delivery'],
        ['Payment-provider onboarding (KYB)', 'payments'],
      ] as Card[],
      build: [
        ['TypeScript · JavaScript', 'web'],
        ['React · Next.js', 'web'],
        ['Astro · Vite', 'web'],
        ['Tailwind CSS · CSS Grid & Flexbox', 'web'],
        ['Responsive, mobile-first pages', 'web'],
        ['Node.js · REST APIs', 'web'],
        ['Card payments · 3-D Secure', 'payments'],
        ['Client portals and CRM setup', 'payments'],
        ['Node.js and PowerShell scripting', 'automation'],
        ['Playwright · automated checks', 'delivery'],
      ] as Card[],
      run: [
        ['Release management · Vendor coordination', 'delivery'],
        ['Launch planning', 'delivery'],
        ['Documentation and hand-over', 'delivery'],
        ['Git · GitHub Actions · CI/CD', 'infra'],
        ['Core Web Vitals · Accessibility · SEO', 'web'],
        ['Cloudflare · DNS', 'infra'],
        ['Email deliverability · SPF, DKIM, DMARC', 'infra'],
        ['Google Workspace administration', 'infra'],
        ['Hosting, FTPS and monitoring', 'infra'],
        ['Network troubleshooting', 'infra'],
      ] as Card[],
    },
  },
  experience: {
    title: 'Experience',
    open: 'Open the BAT DEV workspace',
    items: [
      {
        tag: 'Now',
        role: 'Project manager',
        org: 'A group of fintech companies',
        period: 'Feb 2024 – present',
        text: 'Websites, client portals, payment-provider onboarding, transactional email, telephony and internal tools for a group of fintech brands. I work with developers, vendors and compliance, and build things myself where that saves time.',
        now: true,
        href: '',
      },
      {
        tag: 'Dev',
        role: 'Frontend developer',
        org: 'Freelance, in-house and studio',
        period: 'Before PM · ongoing',
        text: 'More than ten websites from design to launch for brands and small businesses: responsive layouts, static builds, forms, payments, hosting and email. I still build the frontend of my own and the studio’s projects.',
        now: false,
        href: '',
      },
      {
        tag: 'Studio',
        role: 'BAT DEV',
        org: 'Brand and Tech Studio',
        period: '2026',
        text: 'My studio for branding, UI/UX design, development and marketing. Client work includes an online shop with card payments, now on monthly maintenance, and a booking platform for a beauty salon.',
        now: false,
        href: '#studio',
      },
      {
        tag: '2023',
        role: 'IT specialist',
        org: 'NCR Corporation (part-time) · hotel IT support',
        period: 'Jun – Oct 2023',
        text: 'IT infrastructure work at NCR, after IT support at the hotel where I worked.',
        now: false,
        href: '',
      },
      {
        tag: 'Earlier',
        role: 'Conference & banqueting manager',
        org: 'Hotel Zlatibor Mountain Resort & Spa',
        period: 'Mar 2022 – Jul 2023',
        text: 'Planned and ran conferences and banquets at a resort hotel on Zlatibor.',
        now: false,
        href: '',
      },
      {
        tag: 'Education',
        role: 'ICT College of Vocational Studies',
        org: 'Belgrade',
        period: '2017 – 2021',
        text: 'Engineer’s degree in computer and information sciences.',
        now: false,
        href: '',
      },
    ],
  },
  contact: {
    title: 'Let’s talk',
    text: 'Email is the fastest way to reach me. Based in Belgrade and open to new projects.',
    replyTo: 'Reply to',
    assignee: 'Assignee',
    base: 'Base',
    openTo: 'Open to',
    openToValue: 'New projects',
    labels: 'Labels',
    labelValues: ['frontend', 'project management'],
    copy: 'Copy address',
  },
  footer: {
    line: 'Frontend development & project management. Belgrade, open to new projects.',
    back: 'Back to the roadmap',
    top: 'Back to top',
    builtWith: 'Built with Astro',
    source: 'Source on GitHub',
  },
  vis: {
    approved: 'APPROVED',
    vendors: 'vendors cleared',
    days: '10 days after the fix',
    detections: 'detections 5 → 3',
    templates: '28 templates',
    pdfs: 'PDFs in 4 weeks',
    count: '3,430',
    files: '7.5M files · 1.9 TB',
    reminder: 'Reminder',
    reminderText: 'Tomorrow, 10:00',
    booked: 'Booked',
    profile: 'Company profile',
    domains: '13 domains · 7 suites',
  },
  projects: {
    shop: {
      title: 'Online shop with card payments',
      context:
        'A BAT DEV client project: a small Belgrade brand replacing its template store with a shop of its own. The client stays with the studio on monthly maintenance.',
      points: [
        'From first brief to live card payments in about five weeks: a static Astro site with a small serverless API, an order database, and confirmation and back-in-stock emails.',
        'Card payments run through the bank’s 3-D Secure hosted page. The bank’s inspection raised four findings; all were fixed the same day and testing passed.',
        'Moved the domain in one evening (31 DNS records) and kept the old product links working. The first real order came two days after launch.',
        'About 1,000 automated checks cover pages, payments, alerts and email, and product content lives in JSON files for the monthly upkeep.',
      ],
      stack: ['Astro', 'Cloudflare Workers', 'Cloudflare D1', 'Turnstile', 'Resend', 'Playwright'],
      bar: 'BAT DEV · online shop',
      outcome: 'Live card payments five weeks after the first brief; first real order two days after launch; now on monthly maintenance.',
      launch: 'Live, Nov 2026',
    },
    relaunch: {
      title: 'Security-first relaunch of a brand website',
      context:
        'After the previous domain was blocklisted, the brand needed a new site that could not fail the same way. A colleague wrote the page code; I owned the rules, the pipeline and the launch.',
      points: [
        'Set the build rules: nothing reused, no third-party scripts or fonts, a strict Content Security Policy. Reviewed every preview before it shipped.',
        'Built the delivery pipeline: two-stage CI that keeps deploy secrets away from the build, pinned actions, FTPS, a pre-deploy guard and a daily outside monitor.',
        'Set up DNS, DNSSEC, HSTS, and SPF, DKIM and DMARC.',
        'Fixed slow indexing with sitemap dates taken from git history: all 20 URLs were discovered and indexing started within two days.',
      ],
      stack: ['Astro', 'Tailwind CSS', 'GitHub Actions', 'Cloudflare', 'Search Console'],
      bar: 'Brand site relaunch',
      outcome: 'Launched clean on every filtering DNS resolver; indexing started two days after the sitemap fix.',
      launch: 'Launched, Sep 2026',
    },
    incident: {
      title: 'Domain flagged as phishing: root cause, fix, delisting',
      context: 'Customers on some networks suddenly could not open a live site: security vendors and DNS filters had flagged it.',
      points: [
        'Measured who was blocking, resolver by resolver, and traced it to a retired chat widget still embedded on every page; its hostname now pointed at a phishing page.',
        'Removed the embed site-wide and added a strict Content Security Policy and security headers.',
        'Ran delisting requests with about 19 vendors and blocklists; nine cleared the site within ten days of the fix.',
      ],
      stack: ['DNS diagnostics', 'Content-Security-Policy', 'urlscan.io', 'VirusTotal'],
      bar: 'Domain incident',
      outcome: 'Nine security vendors cleared the domain within ten days of the fix.',
      launch: 'Cleared, Sep 2026',
    },
    portal: {
      title: 'Custom theme for a white-label client portal',
      context: 'Two brands’ client portals ran on a vendor’s stock pages, and the only way in was the vendor’s script slots.',
      points: [
        'Rebuilt sign-in, password reset, registration, the dashboard and a mobile menu as an injected stylesheet and script.',
        'For the second brand, shipped three versions in nine days, with a build check that blocks other brand names, unverified claims and external URLs.',
        'Shipped checksums so the vendor can confirm the live portal loads exactly those files, plus a hand-over with mockups and design tokens.',
      ],
      stack: ['CSS', 'JavaScript', 'MutationObserver', 'Node.js', 'Puppeteer'],
      bar: 'Client-portal theme',
      outcome: 'Two branded portals on a vendor platform; three versions in nine days for the second one.',
      launch: 'v1.2, Sep 2026',
    },
    move: {
      title: 'Moving clients off a closing brand',
      context: 'A brand was closing, and its clients needed a working portal and email they could trust within days.',
      points: [
        'Set up an interim client portal on its own domain with the CRM vendor, and one mailbox with aliases.',
        'Built the welcome and password-reset flows and checked in raw headers that SPF, DKIM and DMARC pass.',
        'Produced 28 responsive transactional email templates across two brands.',
      ],
      stack: ['HTML email', 'Google Workspace', 'SPF · DKIM · DMARC', 'CRM workflows'],
      bar: 'Client move + email',
      outcome: 'Portal and email live in one day; every client moved within three days.',
    },
    transcripts: {
      title: 'Automated call transcripts',
      context: 'A retention team reviewed calls by hand: download, convert, upload for transcription, export a PDF.',
      points: [
        'A scheduled job runs twice a day before the team’s reviews, matches each call to the right agent and skips calls under 20 seconds.',
        'Audio goes to an AI transcription service with failover between two accounts; summary and transcript PDFs are filed by date, agent and client.',
        'Fixed a daylight-saving bug in the trigger and traced off-site failures to an office IP allowlist.',
      ],
      stack: ['PowerShell', 'rclone', 'ffmpeg', 'GraphQL API', 'Google Drive'],
      bar: 'Call transcripts',
      outcome: '3,430 transcripts filed automatically in the first four weeks.',
    },
    recordings: {
      title: 'Migration plan for 7.5 million call recordings',
      context: 'The telephony provider asked the company to move its call recordings to its own storage.',
      points: [
        'Measured the job: about 7.5 million files and 1.9 TB across three systems, growing every month.',
        'Specified a four-step script package and runbook: setup, resumable transfer, checksum verification, and a second-disk clone that refuses to run until every check has passed.',
        'Ran a trial transfer and a review of the scripts, and rehearsed a guarded deletion procedure before any real delete.',
      ],
      stack: ['PowerShell', 'rclone (S3 API)', 'Windows', 'NTFS'],
      bar: 'Recording migration',
      outcome: 'Two of the three systems copied and verified so far.',
    },
    callboard: {
      title: 'Live call board for the office TV',
      context: 'The team needed to see who is on a call right now and who is next.',
      points: [
        'A Node.js and Express service reads each agent’s work calendar through a read-only service account and refreshes every 30 seconds.',
        'Internal blocks are greyed out so they don’t count as calls.',
        'Packaged for a mini PC with an offline installer and a one-click kiosk start.',
      ],
      stack: ['Node.js', 'Express', 'Google Calendar API', 'Vanilla JS'],
      bar: 'Office call board',
      outcome: 'Seven agents’ calls on one screen, refreshed every 30 seconds.',
      launch: 'On the office TV',
    },
    kyb: {
      title: 'Payment-provider onboarding',
      context: 'Every new payment provider or e-money institution asks for the same company file, each in its own format.',
      points: [
        'Keep one consolidated company profile and document pack that feeds every new application.',
        'Built scripts that fill application forms and assemble the PDFs, so a new application starts from data, not from scratch.',
        'Answer each provider’s due-diligence questions together with compliance.',
      ],
      stack: ['Node.js', 'PDF tooling', 'KYB'],
      bar: 'Payment-provider onboarding',
      outcome: 'One company profile feeds every new application.',
    },
    domains: {
      title: 'Domains, email and workspace registry',
      context: 'A group of brands means many domains, mail tenants and renewals, and none of them can lapse.',
      points: [
        '13 domains and 7 email-suite subscriptions tracked in one registry, with renewals and owners in one place.',
        'DNS and email authentication (SPF, DKIM, DMARC) set up and checked for each brand.',
        'On-site network troubleshooting when an office line went down.',
      ],
      stack: ['DNS', 'Google Workspace', 'Cloudflare', 'Node.js'],
      bar: 'Domains & email',
      outcome: '13 domains and 7 email-suite subscriptions in one registry.',
    },
    booking: {
      title: 'Booking platform for a beauty salon',
      context: 'Live work from the studio: online booking for a beauty salon, with a dashboard for its staff.',
      points: [
        'Customers book a service and a free slot in a few taps.',
        'Sign-in with a one-time code sent by email.',
        'Web push reminders before appointments.',
        'A staff dashboard for walk-ins and blocked dates, in Serbian and English.',
      ],
      stack: ['Next.js', 'PostgreSQL', 'Vercel'],
      bar: 'BAT DEV · booking platform',
      outcome: 'Customers book a service and a free slot in a few taps.',
      launch: 'Live',
    },
  } as Record<ProjectKey, ProjectCopy>,
};

export type Copy = typeof en;

const sr: Copy = {
  htmlLang: 'sr',
  locale: 'sr-Latn-RS',
  meta: {
    title: 'Dušan Erić · Frontend development i vođenje projekata',
    description:
      'Dušan Erić, frontend developer i projekt menadžer iz Beograda. Njegov rad kao roadmap: plaćanje karticama, sajtovi brendova, client area portali, mejl, infrastruktura i automatizacija, uz njegov studio BAT DEV.',
  },
  skip: 'Preskoči na sadržaj',
  nav: {
    label: 'Glavni meni',
    roadmap: 'Roadmap',
    work: 'Radovi',
    studio: 'Studio',
    skills: 'Veštine',
    experience: 'Iskustvo',
    contact: 'Kontakt',
    menu: 'Meni',
    menuSuffix: '(meni)',
    language: 'Jezik',
  },
  views: {
    timeline: 'Vremenska linija',
    tickets: 'Tiketi',
    workspace: 'Workspace',
    board: 'Tabla',
    changelog: 'Changelog',
    newTicket: 'Novi tiket',
  },
  hero: {
    kicker: 'Beograd · Pravim web i puštam ga u rad',
    headline: 'Frontend development',
    accent: 'i vođenje projekata',
    lead: 'Frontend developer iz Beograda koji je prešao u vođenje projekata. Napravio sam više od deset sajtova, a danas vodim web projekte od prvog zahteva do lansiranja: planiram posao, radim sa vendorima, bankama i hosting provajderima, a frontend i dalje pravim sam. Vodio sam svaki projekat sa ove stranice.',
    props: { status: 'Status', base: 'Lokacija', email: 'Mejl', time: 'Lokalno vreme', studio: 'Studio' },
    open: 'Otvoren za nove projekte',
    baseValue: 'Beograd, Srbija',
    copy: 'Kopiraj',
    copyAria: 'Kopiraj mejl adresu',
    mail: 'Pošaljite mejl',
  },
  board: {
    title: 'Roadmap',
    range: 'po kvartalima',
    legend: 'Legenda',
    project: 'Projekat',
    launch: 'Lansiranje',
    today: 'Danas',
    nextLegend: 'Sledeće',
    lanes: 'Trake',
    hintPointer: 'Pređite mišem preko trake ili je fokusirajte za detalje. Klik otvara tiket.',
    hintTouch: 'Dodirnite traku za detalje, pa otvorite tiket.',
    hintList: 'Dodirnite red da otvorite tiket.',
    openTicket: 'Otvori tiket',
    launchSr: 'Lansiranje: ',
    epic: {
      title: 'Projekt menadžer, grupa fintech firmi',
      label: 'Projekt menadžer · fintech',
      when: 'feb 2024. → sada',
      outcome: 'Sajtovi, client area portali, payment provajderi, mejl i interni alati za grupu fintech brendova.',
      cta: 'Pročitajte changelog',
    },
    devEpic: {
      title: 'Frontend developer: sajtovi za brendove i male firme',
      label: 'Frontend developer · 10+ sajtova',
      when: 'Pre PM-a · i dalje',
      outcome: 'Više od deset sajtova od dizajna do lansiranja. Danas pravim frontend svojih i studijskih projekata.',
      cta: 'Pročitajte changelog',
    },
    nextBar: {
      title: 'Otvoren za nove projekte',
      label: 'Otvoren za nove',
      tail: ' projekte',
      when: 'Od danas',
      status: 'Nije zakazano',
      cta: 'Otvorite tiket',
    },
    facts: [
      { value: '10+', label: 'sajtova, od dizajna do lansiranja' },
      { value: '~5 nedelja', label: 'od prvog zahteva do plaćanja karticama uživo' },
      { value: '3.430', label: 'transkripata poziva automatski za 4 nedelje' },
      { value: '9 za 10 dana', label: 'bezbednosnih vendora skinulo je oznaku sa domena' },
    ],
  },
  lanes: {
    role: 'Uloga',
    web: 'Web i proizvod',
    payments: 'Plaćanja',
    infra: 'Infrastruktura i mejl',
    automation: 'Automatizacija',
    studio: 'Studio',
  },
  status: { live: 'Uživo', shipped: 'Isporučeno', running: 'U toku', ongoing: 'Stalno' },
  ticket: {
    outcome: 'Ishod',
    ac: 'Kriterijumi prihvatanja',
    all: 'svi ',
    met: ' ispunjeni',
    status: 'Status',
    lane: 'Traka',
    timeline: 'Period',
    stack: 'Stack',
    show: 'Prikaži na roadmapu',
    now: 'sada',
    to: 'do',
    attachment: 'Prilog',
  },
  work: {
    title: 'Izdvojeni radovi',
    intro:
      'Svaka traka na roadmapu otvara jedan od ovih tiketa. Na svakom sam bio projekt menadžer; gde je kod pisao kolega, tiket to i kaže.',
  },
  studio: {
    tagline: 'Brand and Tech Studio',
    line: 'Dizajniramo brendove, pravimo interfejse i isporučujemo softver koji ih nosi.',
    me: 'Vodim BAT DEV, studio za brend i tehnologiju. Ispod su dva projekta za klijente: online prodavnica sa plaćanjem karticama, koju i mesečno održavamo, i platforma za zakazivanje za salon lepote.',
    services: ['Brendiranje', 'UI/UX dizajn', 'Development', 'Marketing'],
    servicesAria: 'Usluge studija',
  },
  skills: {
    title: 'Plan, izrada, rad',
    intro: 'Veštine i način rada na jednoj tabli: šta koristim u kojoj fazi projekta i jedno pravilo po kom svaka faza radi.',
    filterAria: 'Istakni veštine po oblasti',
    all: 'Sve',
    policy: 'Pravilo kolone',
    suffix: 'veštine',
    phases: { plan: 'Plan', build: 'Izrada', run: 'Rad' },
    policies: {
      plan: {
        title: 'Krećem od ishoda',
        text: 'Pre tiketa i koda: šta mora da bude tačno na dan lansiranja, ko to odobrava i šta može da pukne usput.',
      },
      build: {
        title: 'Male izmene, provera uživo',
        text: 'Svaka izmena ide zasebno, proveri se na živom sajtu i na telefonu i ima put nazad ako nešto pukne.',
      },
      run: {
        title: 'Ostavljam beleške',
        text: 'Većina onoga što predam ima beleške, skripte i provere, pa radi i kad ja nisam tu.',
      },
    },
    domains: {
      delivery: 'Isporuka',
      web: 'Web i proizvod',
      payments: 'Plaćanja',
      infra: 'Infrastruktura',
      automation: 'Automatizacija',
    },
    cards: {
      plan: [
        ['Definisanje obima i zahteva', 'delivery'],
        ['Specifikacije i kriterijumi prihvatanja', 'delivery'],
        ['Rad sa vendorima i partnerima', 'delivery'],
        ['Saradnja sa compliance-om i pravnom službom', 'delivery'],
        ['Onboarding kod payment provajdera (KYB)', 'payments'],
      ],
      build: [
        ['TypeScript · JavaScript', 'web'],
        ['React · Next.js', 'web'],
        ['Astro · Vite', 'web'],
        ['Tailwind CSS · CSS Grid i Flexbox', 'web'],
        ['Responzivne stranice, prvo za telefon', 'web'],
        ['Node.js · REST API-ji', 'web'],
        ['Plaćanje karticama · 3-D Secure', 'payments'],
        ['Client area portali i podešavanje CRM-a', 'payments'],
        ['Node.js i PowerShell skripte', 'automation'],
        ['Playwright · automatske provere', 'delivery'],
      ],
      run: [
        ['Release management · koordinacija vendora', 'delivery'],
        ['Planiranje lansiranja', 'delivery'],
        ['Dokumentacija i primopredaja', 'delivery'],
        ['Git · GitHub Actions · CI/CD', 'infra'],
        ['Core Web Vitals · pristupačnost · SEO', 'web'],
        ['Cloudflare · DNS', 'infra'],
        ['Isporučivost mejla · SPF, DKIM, DMARC', 'infra'],
        ['Administracija Google Workspace-a', 'infra'],
        ['Hosting, FTPS i monitoring', 'infra'],
        ['Rešavanje mrežnih problema', 'infra'],
      ],
    },
  },
  experience: {
    title: 'Iskustvo',
    open: 'Otvori BAT DEV workspace',
    items: [
      {
        tag: 'Sada',
        role: 'Projekt menadžer',
        org: 'Grupa fintech firmi',
        period: 'feb 2024. – danas',
        text: 'Sajtovi, client area portali, onboarding kod payment provajdera, transakcioni mejlovi, telefonija i interni alati za grupu fintech brendova. Radim sa developerima, vendorima i compliance-om, a stvari pravim i sam kad to štedi vreme.',
        now: true,
        href: '',
      },
      {
        tag: 'Dev',
        role: 'Frontend developer',
        org: 'Freelance, in-house i studio',
        period: 'Pre PM-a · i dalje',
        text: 'Više od deset sajtova od dizajna do lansiranja za brendove i male firme: responzivni layouti, statički buildovi, forme, plaćanja, hosting i mejl. Frontend svojih i studijskih projekata i dalje pravim sam.',
        now: false,
        href: '',
      },
      {
        tag: 'Studio',
        role: 'BAT DEV',
        org: 'Brand and Tech Studio',
        period: '2026',
        text: 'Moj studio za brendiranje, UI/UX dizajn, development i marketing. Među projektima za klijente su online prodavnica sa plaćanjem karticama, koju sada mesečno održavamo, i platforma za zakazivanje za salon lepote.',
        now: false,
        href: '#studio',
      },
      {
        tag: '2023',
        role: 'IT specijalista',
        org: 'NCR Corporation (pola radnog vremena) · IT podrška u hotelu',
        period: 'jun – okt 2023.',
        text: 'IT infrastruktura u NCR-u, posle IT podrške u hotelu u kom sam radio.',
        now: false,
        href: '',
      },
      {
        tag: 'Ranije',
        role: 'Menadžer konferencija i banketa',
        org: 'Hotel Zlatibor Mountain Resort & Spa',
        period: 'mart 2022. – jul 2023.',
        text: 'Planiranje i vođenje konferencija i banketa u resort hotelu na Zlatiboru.',
        now: false,
        href: '',
      },
      {
        tag: 'Obrazovanje',
        role: 'Visoka škola strukovnih studija za informacione i komunikacione tehnologije',
        org: 'ICT College, Beograd',
        period: '2017 – 2021',
        text: 'Diploma inženjera, računarske i informacione nauke.',
        now: false,
        href: '',
      },
    ],
  },
  contact: {
    title: 'Javite se',
    text: 'Mejl je najbrži način da me kontaktirate. Nalazim se u Beogradu i otvoren sam za nove projekte.',
    replyTo: 'Pišite na',
    assignee: 'Zadužen',
    base: 'Lokacija',
    openTo: 'Otvoren za',
    openToValue: 'Nove projekte',
    labels: 'Oznake',
    labelValues: ['frontend', 'vođenje projekata'],
    copy: 'Kopiraj adresu',
  },
  footer: {
    line: 'Frontend development i vođenje projekata. Beograd, otvoren za nove projekte.',
    back: 'Nazad na roadmap',
    top: 'Na vrh',
    builtWith: 'Napravljeno u Astro-u',
    source: 'Kod na GitHub-u',
  },
  vis: {
    approved: 'ODOBRENO',
    vendors: 'vendora očistilo',
    days: '10 dana posle ispravke',
    detections: 'detekcije 5 → 3',
    templates: '28 šablona',
    pdfs: 'PDF-ova za 4 nedelje',
    count: '3.430',
    files: '7,5 mil. fajlova · 1,9 TB',
    reminder: 'Podsetnik',
    reminderText: 'Sutra u 10:00',
    booked: 'Zakazano',
    profile: 'Profil firme',
    domains: '13 domena · 7 paketa',
  },
  projects: {
    shop: {
      title: 'Online prodavnica sa plaćanjem karticama',
      context:
        'Projekat BAT DEV-a za klijenta: mali beogradski brend menja šablonsku prodavnicu svojom. Klijent ostaje sa studijom na mesečnom održavanju.',
      points: [
        'Od prvog zahteva do plaćanja karticama uživo za oko pet nedelja: statički Astro sajt sa malim serverless API-jem, bazom porudžbina i mejlovima za potvrdu i povratak na stanje.',
        'Kartice idu preko bankine 3-D Secure stranice za plaćanje. Bankina inspekcija je našla četiri stavke; sve su ispravljene isti dan i testiranje je prošlo.',
        'Domen je prebačen za jedno veče (31 DNS zapis), a stari linkovi proizvoda i dalje rade. Prva prava porudžbina stigla je dva dana posle lansiranja.',
        'Oko 1.000 automatskih provera pokriva stranice, plaćanja, obaveštenja i mejl, a sadržaj proizvoda je u JSON fajlovima za mesečno održavanje.',
      ],
      stack: ['Astro', 'Cloudflare Workers', 'Cloudflare D1', 'Turnstile', 'Resend', 'Playwright'],
      bar: 'BAT DEV · prodavnica',
      outcome: 'Plaćanje karticama uživo pet nedelja posle prvog zahteva; prva prava porudžbina dva dana posle lansiranja; sada na mesečnom održavanju.',
      launch: 'Uživo, nov 2026.',
    },
    relaunch: {
      title: 'Novi sajt brenda, sa bezbednošću na prvom mestu',
      context:
        'Posle blokade prethodnog domena brendu je trebao nov sajt koji ne može da padne na isti način. Kod stranica je pisao kolega; moja su bila pravila, pipeline i lansiranje.',
      points: [
        'Postavio pravila izrade: ništa preuzeto, bez skripti i fontova trećih strana, strog Content Security Policy. Pregledao svaki preview pre objave.',
        'Napravio pipeline za objavu: CI u dva koraka koji drži tajne za deploy dalje od builda, zakucane verzije akcija, FTPS, proveru pre deploya i dnevni spoljni monitoring.',
        'Podesio DNS, DNSSEC, HSTS, kao i SPF, DKIM i DMARC.',
        'Sporo indeksiranje rešio datumima u sitemap-u izvučenim iz git istorije: svih 20 adresa je pronađeno i indeksiranje je krenulo za dva dana.',
      ],
      stack: ['Astro', 'Tailwind CSS', 'GitHub Actions', 'Cloudflare', 'Search Console'],
      bar: 'Novi sajt brenda',
      outcome: 'Lansiran čist na svim DNS filterima; indeksiranje krenulo dva dana posle ispravke sitemap-a.',
      launch: 'Lansiran, sep 2026.',
    },
    incident: {
      title: 'Domen označen kao phishing: uzrok, ispravka, skidanje sa lista',
      context: 'Korisnici na nekim mrežama odjednom nisu mogli da otvore sajt: bezbednosni vendori i DNS filteri su ga označili.',
      points: [
        'Izmerio ko blokira, resolver po resolver, i našao uzrok: ugašeni chat widget je i dalje bio ugrađen na svakoj stranici, a njegov hostname je sada vodio na phishing stranicu.',
        'Uklonio widget sa celog sajta i dodao strog Content Security Policy i bezbednosna zaglavlja.',
        'Vodio zahteve za skidanje sa lista kod oko 19 vendora i blokliste; devet je očistilo sajt u roku od deset dana od ispravke.',
      ],
      stack: ['DNS dijagnostika', 'Content-Security-Policy', 'urlscan.io', 'VirusTotal'],
      bar: 'Incident sa domenom',
      outcome: 'Devet bezbednosnih vendora skinulo je oznaku sa domena u roku od deset dana od ispravke.',
      launch: 'Očišćen, sep 2026.',
    },
    portal: {
      title: 'Posebna tema za white-label client area portal',
      context: 'Client area portali dva brenda radili su na standardnim stranicama vendora, a jedini pristup bili su vendorovi slotovi za skripte.',
      points: [
        'Prijavu, reset lozinke, registraciju, kontrolnu tablu i meni za telefon napravio iznova kao ubačeni stylesheet i skriptu.',
        'Za drugi brend isporučio tri verzije za devet dana, uz build proveru koja blokira imena drugih brendova, neproverene tvrdnje i spoljne adrese.',
        'Isporučio checksum-ove da vendor može da potvrdi da portal učitava baš te fajlove, i primopredaju sa skicama i dizajn tokenima.',
      ],
      stack: ['CSS', 'JavaScript', 'MutationObserver', 'Node.js', 'Puppeteer'],
      bar: 'Tema za client area',
      outcome: 'Dva brendirana portala na platformi vendora; za drugi tri verzije za devet dana.',
      launch: 'v1.2, sep 2026.',
    },
    move: {
      title: 'Prelazak klijenata sa brenda koji se gasi',
      context: 'Brend se gasio, a njegovim klijentima su za nekoliko dana trebali ispravan portal i mejl kom mogu da veruju.',
      points: [
        'Sa CRM vendorom podigao privremeni client area na posebnom domenu, i jedno sanduče sa aliasima.',
        'Napravio tokove za dobrodošlicu i reset lozinke i u sirovim zaglavljima proverio da SPF, DKIM i DMARC prolaze.',
        'Napravio 28 responzivnih šablona transakcionih mejlova za dva brenda.',
      ],
      stack: ['HTML mejl', 'Google Workspace', 'SPF · DKIM · DMARC', 'CRM tokovi'],
      bar: 'Prelazak klijenata i mejl',
      outcome: 'Portal i mejl uživo za jedan dan; svi klijenti prebačeni za tri dana.',
    },
    transcripts: {
      title: 'Automatski transkripti poziva',
      context: 'Retention tim je pozive pregledao ručno: preuzmi, konvertuj, pošalji na transkripciju, izvezi PDF.',
      points: [
        'Zakazani posao radi dva puta dnevno pre pregleda tima, svaki poziv dodeljuje pravom agentu i preskače pozive kraće od 20 sekundi.',
        'Zvuk ide na AI servis za transkripciju, sa rezervom između dva naloga; PDF-ovi sa rezimeom i transkriptom slažu se po datumu, agentu i klijentu.',
        'Ispravio grešku sa letnjim računanjem vremena u okidaču i našao uzrok grešaka van kancelarije: IP allowlist.',
      ],
      stack: ['PowerShell', 'rclone', 'ffmpeg', 'GraphQL API', 'Google Drive'],
      bar: 'Transkripti poziva',
      outcome: '3.430 transkripata složeno automatski za prve četiri nedelje.',
    },
    recordings: {
      title: 'Plan migracije 7,5 miliona snimaka poziva',
      context: 'Provajder telefonije je tražio da firma prebaci snimke poziva na svoje skladište.',
      points: [
        'Izmerio posao: oko 7,5 miliona fajlova i 1,9 TB na tri sistema, uz rast svakog meseca.',
        'Specificirao paket skripti u četiri koraka i runbook: priprema, prenos koji može da se nastavi, provera checksum-ova i kloniranje na drugi disk koje ne kreće dok sve provere ne prođu.',
        'Uradio probni prenos i pregled skripti, i uvežbao zaštićenu proceduru brisanja pre bilo kakvog pravog brisanja.',
      ],
      stack: ['PowerShell', 'rclone (S3 API)', 'Windows', 'NTFS'],
      bar: 'Migracija snimaka',
      outcome: 'Dva od tri sistema su do sada kopirana i proverena.',
    },
    callboard: {
      title: 'Live tabla poziva za TV u kancelariji',
      context: 'Tim je trebalo da vidi ko je trenutno u pozivu i ko je sledeći.',
      points: [
        'Node.js i Express servis čita radni kalendar svakog agenta preko service accounta samo za čitanje i osvežava se na 30 sekundi.',
        'Interni blokovi su posivljeni, da se ne računaju kao pozivi.',
        'Spakovano za mini PC, sa offline instalacijom i kiosk pokretanjem na jedan klik.',
      ],
      stack: ['Node.js', 'Express', 'Google Calendar API', 'Vanilla JS'],
      bar: 'Tabla poziva',
      outcome: 'Pozivi sedam agenata na jednom ekranu, osveženi na 30 sekundi.',
      launch: 'Na TV-u u kancelariji',
    },
    kyb: {
      title: 'Onboarding kod payment provajdera',
      context: 'Svaki novi payment provajder ili e-money institucija traži isti dosije firme, svaki u svom formatu.',
      points: [
        'Vodim jedan objedinjen profil firme i paket dokumenata koji hrani svaku novu prijavu.',
        'Napravio skripte koje popunjavaju formulare i sklapaju PDF-ove, pa nova prijava kreće od podataka, a ne od nule.',
        'Sa compliance-om odgovaram na due diligence pitanja svakog provajdera.',
      ],
      stack: ['Node.js', 'PDF alati', 'KYB'],
      bar: 'Onboarding provajdera',
      outcome: 'Jedan profil firme hrani svaku novu prijavu.',
    },
    domains: {
      title: 'Registar domena, mejla i workspace naloga',
      context: 'Grupa brendova znači mnogo domena, mail tenanata i obnova, a nijedno ne sme da istekne.',
      points: [
        '13 domena i 7 pretplata na email pakete u jednom registru, sa obnovama i vlasnicima na jednom mestu.',
        'DNS i autentifikacija mejla (SPF, DKIM, DMARC) podešeni i provereni za svaki brend.',
        'Rešavanje mrežnih problema na licu mesta kad je pala linija u kancelariji.',
      ],
      stack: ['DNS', 'Google Workspace', 'Cloudflare', 'Node.js'],
      bar: 'Domeni i mejl',
      outcome: '13 domena i 7 pretplata na email pakete u jednom registru.',
    },
    booking: {
      title: 'Platforma za zakazivanje za salon lepote',
      context: 'Rad studija uživo: online zakazivanje za salon lepote, sa kontrolnom tablom za osoblje.',
      points: [
        'Klijenti biraju uslugu i slobodan termin u nekoliko dodira.',
        'Prijava jednokratnim kodom poslatim na mejl.',
        'Web push podsetnici pre termina.',
        'Tabla za osoblje za klijente bez zakazivanja i blokirane datume, na srpskom i engleskom.',
      ],
      stack: ['Next.js', 'PostgreSQL', 'Vercel'],
      bar: 'BAT DEV · zakazivanje',
      outcome: 'Klijenti biraju uslugu i slobodan termin u nekoliko dodira.',
      launch: 'Uživo',
    },
  },
};

export const copy: Record<Lang, Copy> = { en, sr };
