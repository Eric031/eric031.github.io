export type Lang = 'en' | 'sr';

export const name = 'Dušan Erić';
export const email = 'dule.eric98@gmail.com';
export const github = 'https://github.com/Eric031';
export const repo = 'https://github.com/Eric031/eric031.github.io';

interface Fact {
  value: string;
  label: string;
}

interface WorkItem {
  title: string;
  context: string;
  points: string[];
  stack: string[];
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface Principle {
  title: string;
  text: string;
}

interface Role {
  role: string;
  org: string;
  period: string;
  text: string;
}

interface Content {
  meta: { title: string; description: string };
  skip: string;
  nav: { label: string; work: string; skills: string; experience: string; contact: string };
  langSwitch: { href: string; short: string; label: string; lang: Lang };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    facts: Fact[];
  };
  work: { title: string; intro: string; stackLabel: string; items: WorkItem[] };
  skills: { title: string; groups: SkillGroup[] };
  approach: { title: string; items: Principle[] };
  experience: { title: string; items: Role[] };
  contact: { title: string; text: string };
  footer: { builtWith: string; source: string };
}

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: 'Dušan Erić · Technical Project Manager & Web Developer',
      description:
        'Technical project manager and web developer. Websites, client portals, payment integrations and automation for fintech and local businesses.',
    },
    skip: 'Skip to content',
    nav: { label: 'Main', work: 'Work', skills: 'Skills', experience: 'Experience', contact: 'Contact' },
    langSwitch: { href: '/sr/', short: 'SR', label: 'Srpski', lang: 'sr' },
    hero: {
      eyebrow: 'Technical Project Manager · Web Developer',
      title: 'I take technical projects from brief to launch.',
      lead: 'Three years running projects in fintech and online brokerage: websites, client portals, payment-provider onboarding, telephony and the infrastructure underneath. I plan the work, deal with vendors and compliance, and write the code myself when that is the fastest way forward.',
      primary: 'See selected work',
      secondary: 'Email me',
      facts: [
        { value: '3+ years', label: 'as a project manager in fintech' },
        { value: '7.55M files', label: 'of call recordings migrated, 1.91 TB in total' },
        { value: '12 domains', label: 'and their Google Workspace tenants, maintained day to day' },
      ],
    },
    work: {
      title: 'Selected work',
      intro: 'Brand and client names are left out on purpose. I am happy to walk through any of these in detail.',
      stackLabel: 'Stack',
      items: [
        {
          title: 'Brand websites, rebuilt and deployed on every push',
          context: 'Marketing sites for a group of fintech brands and for local businesses.',
          points: [
            'Rebuilt older WordPress and PHP sites as fast static builds in Astro and plain HTML, CSS and JavaScript.',
            'Set up CI/CD so a push to main publishes the site: GitHub Actions to FTPS on cPanel, and Cloudflare Workers.',
            'Multilingual pages, legal documents, and forms wired into the tools teams already use, such as a careers form that keeps feeding HR’s Google Sheet through Apps Script.',
          ],
          stack: ['Astro', 'HTML/CSS/JS', 'Tailwind CSS', 'GitHub Actions', 'Cloudflare', 'Apps Script'],
        },
        {
          title: 'Online store with card payments',
          context: 'Rebrand and web shop for a local brand.',
          points: [
            'Built the shop in Astro on Cloudflare Workers.',
            'Integrated the bank’s card payment gateway and took it through the bank’s test phase.',
            'Launched to production with live orders.',
          ],
          stack: ['Astro', 'Cloudflare Workers', 'Payment gateway'],
        },
        {
          title: 'Interim client portal during a platform shutdown',
          context: 'Clients had to be moved off a trading platform that was closing down.',
          points: [
            'Stood up a separate client area on its own domain for the transition period.',
            'Branded transactional email with SPF, DKIM and DMARC on a dedicated Google Workspace.',
            'Coordinated the platform vendor and the domain and email setup.',
          ],
          stack: ['Client portal', 'DNS', 'SPF / DKIM / DMARC', 'Google Workspace'],
        },
        {
          title: 'Payment-provider onboarding',
          context: 'Merchant onboarding (KYB) with payment service providers and e-money institutions.',
          points: [
            'Ran onboarding end to end: company profile, merchant applications, policies and provider follow-ups.',
            'Built one consolidated company profile that every new application draws from.',
            'Automated the paperwork with Node.js scripts that fill in and generate the PDF forms.',
          ],
          stack: ['KYB', 'Node.js', 'PDF automation'],
        },
        {
          title: 'Call recordings: daily transcripts and a 1.9 TB migration',
          context: 'A sales and retention team working on a cloud phone system.',
          points: [
            'Scheduled PowerShell job that pulls the day’s recordings from the PBX, sends them to AI transcription and files PDF transcripts in Google Drive.',
            'Migrated 7.55 million recordings (1.91 TB) off the telephony provider to local storage with a set of transfer scripts.',
          ],
          stack: ['PowerShell', 'AI transcription', 'Google Drive'],
        },
        {
          title: 'Live call board for the office TV',
          context: 'The team needed to see who is on a call right now and who is next.',
          points: [
            'Node.js service that reads every agent’s Google Calendar through a service account with domain-wide delegation.',
            'Shows the live status, the next call and the day’s count, refreshing every 30 seconds.',
          ],
          stack: ['Node.js', 'Express', 'Google Calendar API'],
        },
        {
          title: 'Domains, email and network',
          context: 'The infrastructure behind several brands and an office.',
          points: [
            'Maintain 12 domains and Google Workspace tenants: DNS, mail routing and transactional email.',
            'Traced a browser security warning on a brand site to a third-party script still loading through a dangling DNS record, and cleaned it up.',
            'Found the cause of intermittent outages on the office’s dual-WAN FortiGate: a dead fibre link that still looked up through its media converter.',
          ],
          stack: ['DNS', 'Google Workspace', 'Cloudflare', 'FortiGate'],
        },
      ],
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Project & product',
          items: [
            'Scoping and requirements',
            'Vendor and partner management',
            'Launch planning and coordination',
            'Specs, documentation and acceptance testing',
            'Working with compliance and legal',
          ],
        },
        {
          title: 'Web development',
          items: [
            'Astro, HTML, CSS, JavaScript, TypeScript',
            'Tailwind CSS',
            'Responsive, multilingual sites',
            'Forms and API integrations',
            'SEO and performance basics',
          ],
        },
        {
          title: 'Payments & fintech',
          items: [
            'PSP and EMI onboarding (KYB)',
            'Card payment gateway integration',
            'Client areas and trading-platform CRMs',
            'Transactional email for brands',
          ],
        },
        {
          title: 'Infrastructure & automation',
          items: [
            'GitHub Actions CI/CD',
            'Cloudflare: Workers, Pages, DNS',
            'cPanel and FTPS hosting',
            'Google Workspace administration',
            'Node.js and PowerShell scripting',
            'FortiGate firewall and dual WAN',
          ],
        },
      ],
    },
    approach: {
      title: 'How I work',
      items: [
        {
          title: 'Start from the outcome',
          text: 'Before tickets or code: what has to be true on launch day, who signs it off, and what can break on the way.',
        },
        {
          title: 'Get the first one right',
          text: 'The first item of any series gets tested properly before the rest go out. A mistake in the first one repeats in every one after it.',
        },
        {
          title: 'Leave notes behind',
          text: 'Everything I hand over comes with notes on how it runs and how to fix it, so it does not depend on me being around.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Technical Project Manager',
          org: 'Fintech and online brokerage',
          period: '3+ years · current',
          text: 'Websites, client portals, payment-provider onboarding, telephony and internal tools for a group of online trading brands. I coordinate developers, vendors and compliance, and build things myself where that saves time.',
        },
        {
          role: 'Web Developer',
          org: 'Freelance and in-house',
          period: 'Alongside PM work',
          text: 'Websites and web shops for local businesses: static builds, CI/CD, forms and payment integrations.',
        },
        {
          role: 'Management',
          org: 'Hospitality (hotel)',
          period: 'Before tech',
          text: 'Day-to-day operations and team management in a hotel.',
        },
      ],
    },
    contact: {
      title: 'Let’s talk',
      text: 'Email is the fastest way to reach me. Based in Serbia and open to remote work.',
    },
    footer: { builtWith: 'Built with Astro', source: 'Source on GitHub' },
  },

  sr: {
    meta: {
      title: 'Dušan Erić · Tehnički projekt menadžer i web developer',
      description:
        'Tehnički projekt menadžer i web developer. Sajtovi, client area portali, integracije plaćanja i automatizacija za fintech i lokalne firme.',
    },
    skip: 'Preskoči na sadržaj',
    nav: { label: 'Glavni meni', work: 'Radovi', skills: 'Veštine', experience: 'Iskustvo', contact: 'Kontakt' },
    langSwitch: { href: '/', short: 'EN', label: 'English', lang: 'en' },
    hero: {
      eyebrow: 'Tehnički projekt menadžer · Web developer',
      title: 'Vodim tehničke projekte od prvog zahteva do lansiranja.',
      lead: 'Poslednje tri godine vodim projekte u fintechu i online brokerskom poslovanju: sajtove, client area portale, onboarding kod payment provajdera, telefoniju i infrastrukturu ispod svega toga. Planiram posao, radim sa vendorima i compliance-om, a kod pišem sam kad je to najbrži put.',
      primary: 'Pogledajte radove',
      secondary: 'Pošaljite mejl',
      facts: [
        { value: '3+ godine', label: 'kao projekt menadžer u fintechu' },
        { value: '7,55M fajlova', label: 'snimaka poziva migrirano, ukupno 1,91 TB' },
        { value: '12 domena', label: 'sa Google Workspace nalozima koje svakodnevno održavam' },
      ],
    },
    work: {
      title: 'Izdvojeni radovi',
      intro: 'Imena brendova i klijenata su namerno izostavljena. Svaki od ovih projekata rado objasnim detaljnije.',
      stackLabel: 'Tehnologije',
      items: [
        {
          title: 'Sajtovi brendova, napravljeni iznova i objavljeni na svaki push',
          context: 'Marketinški sajtovi za grupu fintech brendova i za lokalne firme.',
          points: [
            'Stare WordPress i PHP sajtove napravio sam iznova kao brze statičke buildove u Astro-u i čistom HTML-u, CSS-u i JavaScript-u.',
            'Podesio CI/CD tako da se sajt objavi sam na svaki push na main: GitHub Actions na FTPS (cPanel) i Cloudflare Workers.',
            'Višejezične stranice, pravna dokumenta i forme povezane sa alatima koje timovi već koriste, na primer forma za posao koja i dalje puni HR-ovu Google tabelu preko Apps Script-a.',
          ],
          stack: ['Astro', 'HTML/CSS/JS', 'Tailwind CSS', 'GitHub Actions', 'Cloudflare', 'Apps Script'],
        },
        {
          title: 'Online prodavnica sa plaćanjem karticama',
          context: 'Rebrend i web shop za lokalni brend.',
          points: [
            'Napravio prodavnicu u Astro-u na Cloudflare Workers-u.',
            'Integrisao bankin payment gateway za kartice i prošao bankino testiranje.',
            'Pustio prodavnicu u produkciju, sa pravim porudžbinama.',
          ],
          stack: ['Astro', 'Cloudflare Workers', 'Payment gateway'],
        },
        {
          title: 'Privremeni client area tokom gašenja platforme',
          context: 'Klijente je trebalo prebaciti sa trading platforme koja se gasila.',
          points: [
            'Podigao poseban client area na sopstvenom domenu za prelazni period.',
            'Transakcioni mejlovi pod brendom, sa SPF, DKIM i DMARC zapisima, na posebnom Google Workspace-u.',
            'Koordinisao vendora platforme i podešavanje domena i mejla.',
          ],
          stack: ['Client portal', 'DNS', 'SPF / DKIM / DMARC', 'Google Workspace'],
        },
        {
          title: 'Onboarding kod payment provajdera',
          context: 'Merchant onboarding (KYB) kod payment service provajdera i e-money institucija.',
          points: [
            'Vodio onboarding od početka do kraja: profil firme, merchant aplikacije, politike i komunikaciju sa provajderima.',
            'Napravio jedan objedinjeni profil firme iz kog se puni svaka nova aplikacija.',
            'Automatizovao papirologiju Node.js skriptama koje popunjavaju i generišu PDF formulare.',
          ],
          stack: ['KYB', 'Node.js', 'PDF automatizacija'],
        },
        {
          title: 'Snimci poziva: dnevni transkripti i migracija od 1,9 TB',
          context: 'Prodajni i retention tim koji radi na cloud telefoniji.',
          points: [
            'Zakazani PowerShell posao koji svakog dana povuče snimke sa PBX-a, pošalje ih na AI transkripciju i složi PDF transkripte u Google Drive.',
            'Migrirao 7,55 miliona snimaka (1,91 TB) sa telefonskog provajdera na lokalne diskove, setom skripti za prenos.',
          ],
          stack: ['PowerShell', 'AI transkripcija', 'Google Drive'],
        },
        {
          title: 'Live tabla poziva za TV u kancelariji',
          context: 'Tim je trebalo da vidi ko je trenutno u pozivu i ko je sledeći.',
          points: [
            'Node.js servis koji čita Google Calendar svih agenata preko service account-a sa domain-wide delegation-om.',
            'Prikazuje trenutni status, sledeći poziv i broj poziva za dan, uz osvežavanje na 30 sekundi.',
          ],
          stack: ['Node.js', 'Express', 'Google Calendar API'],
        },
        {
          title: 'Domeni, mejl i mreža',
          context: 'Infrastruktura iza više brendova i jedne kancelarije.',
          points: [
            'Održavam 12 domena i Google Workspace naloga: DNS, rutiranje mejla i transakcione mejlove.',
            'Našao uzrok bezbednosnog upozorenja browsera na sajtu brenda: skripta treće strane se i dalje učitavala preko zaboravljenog (dangling) DNS zapisa. Uklonio sam je i očistio DNS.',
            'Našao uzrok povremenih prekida interneta na kancelarijskom FortiGate-u sa dva linka: optički link je bio mrtav, a preko media konvertora je i dalje izgledao aktivno.',
          ],
          stack: ['DNS', 'Google Workspace', 'Cloudflare', 'FortiGate'],
        },
      ],
    },
    skills: {
      title: 'Veštine',
      groups: [
        {
          title: 'Projekti i proizvod',
          items: [
            'Definisanje obima i zahteva',
            'Rad sa vendorima i partnerima',
            'Planiranje i koordinacija lansiranja',
            'Specifikacije, dokumentacija i testiranje prijema',
            'Saradnja sa compliance-om i pravnom službom',
          ],
        },
        {
          title: 'Web development',
          items: [
            'Astro, HTML, CSS, JavaScript, TypeScript',
            'Tailwind CSS',
            'Responzivni, višejezični sajtovi',
            'Forme i API integracije',
            'Osnove SEO-a i performansi',
          ],
        },
        {
          title: 'Plaćanja i fintech',
          items: [
            'Onboarding kod PSP i EMI provajdera (KYB)',
            'Integracija payment gateway-a za kartice',
            'Client area portali i CRM-ovi trading platformi',
            'Transakcioni mejlovi za brendove',
          ],
        },
        {
          title: 'Infrastruktura i automatizacija',
          items: [
            'GitHub Actions CI/CD',
            'Cloudflare: Workers, Pages, DNS',
            'cPanel i FTPS hosting',
            'Administracija Google Workspace-a',
            'Node.js i PowerShell skripte',
            'FortiGate firewall i dva WAN linka',
          ],
        },
      ],
    },
    approach: {
      title: 'Kako radim',
      items: [
        {
          title: 'Krećem od ishoda',
          text: 'Pre tiketa i koda: šta mora da bude tačno na dan lansiranja, ko to odobrava i šta može da pukne usput.',
        },
        {
          title: 'Prvi komad mora da bude ispravan',
          text: 'Prvi primerak svake serije temeljno testiram pre ostalih. Greška u prvom se ponovi u svakom sledećem.',
        },
        {
          title: 'Ostavljam beleške',
          text: 'Sve što predam ima beleške o tome kako radi i kako se popravlja, da ne zavisi od toga da li sam ja tu.',
        },
      ],
    },
    experience: {
      title: 'Iskustvo',
      items: [
        {
          role: 'Tehnički projekt menadžer',
          org: 'Fintech i online brokersko poslovanje',
          period: '3+ godine · trenutno',
          text: 'Sajtovi, client area portali, onboarding kod payment provajdera, telefonija i interni alati za grupu online trading brendova. Koordinišem developere, vendore i compliance, a stvari pravim i sam kad to štedi vreme.',
        },
        {
          role: 'Web developer',
          org: 'Freelance i u firmi',
          period: 'Paralelno sa PM poslom',
          text: 'Sajtovi i web shopovi za lokalne firme: statički buildovi, CI/CD, forme i integracije plaćanja.',
        },
        {
          role: 'Menadžment',
          org: 'Ugostiteljstvo (hotel)',
          period: 'Pre IT-a',
          text: 'Svakodnevno vođenje operative i tima u hotelu.',
        },
      ],
    },
    contact: {
      title: 'Javite se',
      text: 'Mejl je najbrži način da me kontaktirate. Nalazim se u Srbiji i otvoren sam za remote posao.',
    },
    footer: { builtWith: 'Napravljeno u Astro-u', source: 'Kod na GitHub-u' },
  },
};
