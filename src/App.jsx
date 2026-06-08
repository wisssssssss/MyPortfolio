import './App.css';

// ─── DATA ──────────────────────────────────────────────
const projects = [
  {
    category: 'E-commerce',
    badge: 'Featured Project',
    title: 'Mayormoto',
    desc: 'A full-featured motorcycle parts & accessories e-commerce platform with an integrated POS system. Both systems sync in real-time through a shared inventory, so stock is always accurate across online and in-store sales.',
    tags: ['Next.js', 'FastAPI', 'Tailwind', 'Prisma', 'Redis', 'PostgreSQL', 'TanStack', 'Redux', 'Vercel'],
    href: 'https://mayormoto.me',
  },
];

const services = [
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    title: 'Web Design & Development',
    desc: 'End-to-end website creation — from wireframes to live, responsive sites that look sharp on every device.',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>,
    title: 'UI / UX Design',
    desc: 'Clean interface design guided by user behavior — reducing friction and guiding visitors toward clear actions.',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    title: 'Performance & Optimization',
    desc: 'Auditing and improving existing sites for speed, SEO, and Core Web Vitals. Faster pages convert better.',
  },
];

const stack = [
  { name: 'HTML5',      icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M6 2l2.4 26L16 30l7.6-2L26 2H6z" fill="#E44D26"/><path d="M16 27.9l6.1-1.7 2-22.2H16v23.9z" fill="#F16529"/><path d="M16 13.5h-4.1l-.3-3.2H16V7.1H8.2l.1 1.1.9 10.5H16v-3.2zm0 8.7l-.1.1-3.2-.9-.2-2.3H9.2l.4 4.7 6.4 1.8v-3.4z" fill="#EBEBEB"/><path d="M16 13.5v3.2h3.8l-.4 4.1-3.4.9v3.4l6.4-1.8.1-.5.9-10.5.1-1h-.8H16zm0-6.4v3.2h7.4l.1-1.1.1-1.5.1-1.6H16v.9-.9z" fill="#fff"/></svg> },
  { name: 'CSS3',       icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M6 2l2.4 26L16 30l7.6-2L26 2H6z" fill="#1572B6"/><path d="M16 27.9l6.1-1.7 2-22.2H16v23.9z" fill="#33A9DC"/><path d="M16 13.2h4.2l-.3 3.4-3.9 1.1v3.4l7.2-2 .1-.9 1-11.5.1-1H16v3.2h4.5l-.2 2.3H16v3z" fill="#fff"/><path d="M16 13.2v3H11.9l-.3-3.4H16zm-.1 4.5l-.1.1-3.1-.9-.2-2.1H9.3l.4 4.6 6.2 1.7v-3.4z" fill="#EBEBEB"/></svg> },
  { name: 'JavaScript', icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="2" fill="#F7DF1E"/><path d="M9.5 25.8l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7v-9.2h2.8v9.3c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4.2-2.4zM19 25.5l2.3-1.3c.6 1 1.3 1.7 2.6 1.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-2-1.8l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.5-3.5 3.9-3.5 1.7 0 2.9.6 3.8 2.1l-2.1 1.4c-.5-.8-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.2 1.7 1.7l.7.3c2.3 1 3.6 2 3.6 4.3 0 2.5-1.9 3.7-4.5 3.7-2.5 0-4.1-1.2-4.8-2.9z" fill="#323330"/></svg> },
  { name: 'React',      icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><circle cx="16" cy="16" r="2.8" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg> },
  { name: 'Node.js',    icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><path d="M16 3L4 10v12l12 7 12-7V10L16 3z" fill="#3C873A"/><path d="M22 19.5c0 .8-.4 1.5-1.1 1.9-.5.3-1.1.4-1.8.4-1.4 0-2.5-.6-3-1.8l1.5-.9c.3.6.7 1 1.5 1 .7 0 1.1-.4 1.1-1.1V13h1.8v6.5zM14.5 21.8c-1.7 0-2.9-.8-3.4-2l1.5-.9c.4.7.9 1.1 1.9 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.6-1.4l-.6-.2c-1.6-.7-2.6-1.5-2.6-3.3 0-1.6 1.2-2.9 3.1-2.9 1.4 0 2.3.5 3 1.7l-1.5.9c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.4l.6.2c1.9.8 2.9 1.6 2.9 3.4 0 2-1.5 3-3.5 3z" fill="white"/></svg> },
  { name: 'MySQL',      icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><ellipse cx="16" cy="10" rx="10" ry="4" fill="#00758F"/><path d="M6 10v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4c0 2.2-4.5 4-10 4S6 12.2 6 10z" fill="#00618A"/><path d="M6 18v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4c0 2.2-4.5 4-10 4S6 20.2 6 18z" fill="#00618A"/><path d="M6 14v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4c0 2.2-4.5 4-10 4S6 16.2 6 14z" fill="#00758F"/></svg> },
  { name: 'Figma',      icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><rect x="9" y="2" width="7" height="9" rx="3.5" fill="#F24E1E"/><rect x="16" y="2" width="7" height="9" rx="3.5" fill="#FF7262"/><rect x="9" y="11" width="7" height="9" rx="3.5" fill="#A259FF"/><rect x="9" y="20" width="7" height="9" rx="3.5" fill="#0ACF83"/><circle cx="19.5" cy="15.5" r="3.5" fill="#1ABCFE"/></svg> },
  { name: 'PHP',        icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><ellipse cx="16" cy="16" rx="14" ry="8" fill="#8892BF"/><text x="16" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="white">PHP</text></svg> },
  { name: 'Git',        icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><path d="M29.5 14.6L17.4 2.5a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 012.1 3.2 2 2 0 01-2.8-2l-2.7-2.7v7.1a2 2 0 01.5 3.8 2 2 0 01-2.4-1.9 2 2 0 011.1-1.8v-7.2a2 2 0 01-1.1-2.6L13 7.2 2.5 17.7a1.7 1.7 0 000 2.4l12.1 12.1a1.7 1.7 0 002.4 0l12.5-12.5a1.7 1.7 0 000-2.4" fill="#F05032"/></svg> },
  { name: 'Tailwind CSS', icon: <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5"><path d="M16 6.4c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.187 3.051 2.163C18.194 14.126 19.704 15.68 23.2 15.68c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.187-3.051-2.163C21.006 7.954 19.496 6.4 16 6.4zM8 15.68c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.187 3.051 2.163 1.543 1.563 3.053 3.117 6.549 3.117 4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.187-3.051-2.163C13.006 17.234 11.496 15.68 8 15.68z" fill="#38BDF8"/></svg> },
];

// ─── GRID BACKGROUND ───────────────────────────────────
function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div className="grid-lines absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F7F6F3] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7F6F3] to-transparent" />
    </div>
  );
}

// ─── NAV ───────────────────────────────────────────────
function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E4E2DB] bg-[rgba(247,246,243,0.85)] backdrop-blur-md">
      <div className="max-w-[960px] mx-auto px-10 h-[76px] flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="p-[2px] rounded-full bg-gradient-to-br from-[#E4E2DB] to-[#9C9C96] flex-shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-[#2C2C2A] border-2 border-[#F7F6F3]">
              {/* ✅ FIX: image moved to public/ folder, path updated */}
              <img src="/MyPortfolio/202109235.JPG" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-px">
            <span className="font-sans text-[14px] font-medium tracking-[0.01em] text-[#18181A]">
              Luis Javier Calinga
            </span>
            <span className="font-sans text-[11px] font-light tracking-[0.04em] text-[#9C9C96]">
              Web Developer · Cavite, Philippines
            </span>
          </div>
        </div>

        {/* Links */}
        <ul className="flex gap-8 list-none m-0 p-0">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────
function Hero() {
  return (
    <section className="grid grid-cols-2 gap-20 py-24 items-end max-md:grid-cols-1 max-md:gap-10 max-md:py-14">

      {/* Left */}
      <div>
        <div className="anim-1 inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-[#9C9C96] mb-6">
          <span className="badge-dot w-1.5 h-1.5 rounded-full bg-green-500" />
          Available for projects
        </div>

        <h1 className="anim-2 font-serif text-[3.1rem] font-normal leading-[1.15] tracking-[-0.01em] text-[#18181A] mb-6 max-md:text-[2.3rem]">
          Crafting minimal,<br />
          <em className="italic text-[#52524E]">purposeful</em> web experiences
        </h1>

        <p className="anim-3 font-sans text-[15px] leading-[1.8] max-w-[380px] text-[#52524E] mb-9">
          I design and build clean, fast websites for businesses and creators who believe that simplicity is the ultimate form of clarity.
        </p>

        <div className="anim-4 flex gap-4 items-center">
          <a
            href="#contact"
            className="inline-block font-sans text-[13px] font-medium tracking-[0.04em] px-6 py-[11px] rounded-[3px] bg-[#18181A] text-[#F7F6F3] no-underline transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
          >
            Start a project
          </a>
          <a href="#work" className="btn-ghost">View my work →</a>
        </div>
      </div>

      {/* Right – stat cards */}
      <div className="anim-5 flex flex-col gap-3 pb-2">
        {[
          { label: 'Years of experience', value: '4+',  note: 'Building for web since 2021' },
          { label: 'Projects delivered',  value: '20+', note: 'Across PH & international clients' },
        ].map((s) => (
          <div
            key={s.label}
            className="flex justify-between items-end px-6 py-[22px] border border-[#E4E2DB] rounded-md bg-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md"
          >
            <div>
              <span className="block font-sans text-[11px] tracking-[0.06em] uppercase text-[#9C9C96] mb-1.5">
                {s.label}
              </span>
              <span className="font-serif text-[2.1rem] leading-none text-[#18181A]">
                {s.value}
              </span>
            </div>
            <span className="font-sans text-[12px] text-right max-w-[100px] leading-[1.5] text-[#9C9C96]">
              {s.note}
            </span>
          </div>
        ))}

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5">
          {['HTML / CSS', 'JavaScript', 'React', 'Figma', 'Node.js', 'MySQL'].map((tag) => (
            <span
              key={tag}
              className="font-sans text-[11px] tracking-[0.05em] uppercase border border-[#E4E2DB] rounded-[3px] px-2.5 py-1.5 text-[#52524E] bg-white/60 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DIVIDER ───────────────────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-[#E4E2DB]" />;
}

// ─── TECH STACK ────────────────────────────────────────
function TechStack() {
  return (
    <div className="py-14 flex flex-col gap-6">
      <span className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#9C9C96]">
        Technologies I work with
      </span>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-2 px-3.5 py-2.5 border border-[#E4E2DB] rounded-[4px] bg-white/70 backdrop-blur-sm cursor-default transition-all duration-200 hover:border-[#9C9C96] hover:-translate-y-0.5 hover:shadow-md"
          >
            {s.icon}
            <span className="font-sans text-[12px] font-medium tracking-[0.02em] text-[#52524E] whitespace-nowrap">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ────────────────────────────────────
function SectionHeader({ num, label, title }) {
  return (
    <div className="flex items-center justify-between pt-16 pb-10">
      <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#9C9C96]">
        {`${num} — `}{label}
      </span>
      <h2 className="font-serif text-[1.75rem] font-normal tracking-[-0.01em] text-[#18181A] m-0">
        {title}
      </h2>
    </div>
  );
}

// ─── WORK ──────────────────────────────────────────────
function Work() {
  return (
    <div id="work" className="mb-20">
      <SectionHeader num="01" label="Selected Work" title="Recent project" />
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-[#E4E2DB] bg-white/70 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-xl hover:bg-white/90 hover:-translate-y-0.5"
          >
            {/* Top badges */}
            <div className="flex items-center gap-3 mb-5">
              <span className="font-sans text-[12px] font-medium px-3 py-1 rounded-full bg-[#18181A] text-[#F7F6F3]">
                {p.category}
              </span>
              <span className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#9C9C96]">
                {p.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-[2rem] font-normal text-[#18181A] mb-3 mt-0">
              {p.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-[14px] leading-[1.8] text-[#52524E] mb-6 max-w-[520px]">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-sans text-[12px] border border-[#E4E2DB] rounded-full px-3 py-1 text-[#52524E] bg-[#F7F6F3]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[13px] font-medium px-5 py-2.5 rounded-lg border border-[#E4E2DB] bg-white text-[#18181A] no-underline transition-all duration-200 hover:bg-[#18181A] hover:text-[#F7F6F3] hover:border-[#18181A]"
            >
              Live Demo
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SERVICES ──────────────────────────────────────────
function Services() {
  return (
    <div id="services" className="mb-20">
      <SectionHeader num="02" label="What I offer" title="Services" />
      <div className="grid grid-cols-3 gap-0.5 max-md:grid-cols-1">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-[#E4E2DB] p-8 bg-white/60 backdrop-blur-sm transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
          >
            <div className="text-[#9C9C96] mb-5">{s.icon}</div>
            <h4 className="font-sans text-[14px] font-medium text-[#18181A] m-0 mb-2.5">{s.title}</h4>
            <p className="font-sans text-[13px] leading-[1.7] text-[#52524E] m-0">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT ─────────────────────────────────────────────
function About() {
  const details = [
    { label: 'Location',  value: 'Cavite, Philippines' },
    { label: 'Education', value: 'BS in Information Technology' },
    { label: 'Languages', value: 'Filipino (native) · English (fluent)' },
    { label: 'Work type', value: 'Freelance / Remote · Open to full-time' },
    {
      label: 'LinkedIn',
      value: (
        <a
          href="https://www.linkedin.com/in/luis-javier-calinga-636396354"
          target="_blank" rel="noreferrer"
          className="text-[#18181A] no-underline border-b border-[#E4E2DB] transition-colors duration-200 hover:border-[#52524E]"
        >
          Luis Javier Calinga →
        </a>
      ),
    },
  ];

  return (
    <div id="about" className="mb-20">
      <SectionHeader num="03" label="Who I am" title="About me" />
      <div className="grid grid-cols-2 gap-20 items-start max-md:grid-cols-1 max-md:gap-8">

        {/* Text */}
        <div>
          <h3 className="font-serif text-[1.45rem] font-normal text-[#18181A] mt-0 mb-5">
            Building the web, one careful detail at a time.
          </h3>
          {[
            "I'm Luis — a web developer based in Cavite, Philippines. I started building websites in college and fell in love with the intersection of logic and design. For me, a great website isn't just functional — it's felt.",
            "I work best with founders, freelancers, and small businesses who want something thoughtful and professional without the agency price tag. My process is collaborative, transparent, and detail-obsessed.",
            "When I'm not pushing pixels, I'm studying new front-end techniques, contributing to open source, or exploring Cavite's local food scene.",
          ].map((text, i) => (
            <p key={i} className="font-sans text-[14px] leading-[1.85] text-[#52524E] mb-3.5 last:mb-0">{text}</p>
          ))}
        </div>

        {/* Details */}
        <div>
          {details.map((d, i) => (
            <div
              key={d.label}
              className={`py-5 border-t border-[#E4E2DB] ${i === details.length - 1 ? 'border-b' : ''}`}
            >
              <span className="block font-sans text-[10px] tracking-[0.08em] uppercase text-[#9C9C96] mb-1.5">
                {d.label}
              </span>
              <span className="font-sans text-[14px] text-[#18181A]">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT ───────────────────────────────────────────
function Contact() {
  const items = [
    { label: 'Email',         href: 'mailto:infoljccalinga@gmail.com',                              value: 'infoljccalinga@gmail.com' },
    { label: 'Phone / Viber', href: 'tel:+639056959869',                                            value: '0905 695 9869' },
    { label: 'LinkedIn',      href: 'https://www.linkedin.com/in/luis-javier-calinga-636396354',    value: 'View profile →', external: true },
    { label: 'Location',      value: 'Cavite, Philippines', static: true },
  ];

  return (
    <div id="contact" className="contact-dark -mx-10 px-10 py-20 max-md:-mx-6 max-md:px-6 max-md:py-14">
      <div className="max-w-[960px] mx-auto grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-9">

        <div>
          <h2 className="font-serif text-[2.3rem] font-normal leading-[1.2] text-[#F7F6F3] m-0 mb-5">
            Let's build something{' '}
            <em className="italic text-[#9A9A94]">worth remembering.</em>
          </h2>
          <p className="font-sans text-[14px] leading-[1.8] text-[#9A9A94] m-0">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div>
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex justify-between items-center py-[18px] border-t border-[#2C2C2A] ${i === items.length - 1 ? 'border-b' : ''}`}
            >
              <span className="font-sans text-[10px] tracking-[0.08em] uppercase text-[#5A5A56]">
                {item.label}
              </span>
              {item.static ? (
                <span className="font-sans text-[14px] text-[#F7F6F3]">{item.value}</span>
              ) : (
                <a
                  href={item.href}
                  className="font-sans text-[14px] text-[#F7F6F3] no-underline border-b border-[#2C2C2A] pb-px transition-colors duration-200 hover:border-[#5A5A56]"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                >
                  {item.value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ────────────────────────────────────────────
function Footer() {
  return (
    <footer className="-mx-10 px-10 py-6 flex items-center border-t border-[#2C2C2A] bg-[#18181A] max-md:-mx-6 max-md:px-6">
      <div className="max-w-[960px] mx-auto w-full flex justify-between items-center">
        <p className="font-sans text-[12px] text-[#5A5A56] m-0">© 2026 Luis Javier Calinga. All rights reserved.</p>
        <p className="font-sans text-[12px] text-[#5A5A56] m-0">Designed & built with care.</p>
      </div>
    </footer>
  );
}

// ─── ROOT ──────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div className="relative bg-[#F7F6F3] text-[#18181A] min-h-screen">
      <GridBackground />
      <Nav />
      <div className="relative z-10 max-w-[960px] mx-auto px-10 max-md:px-6">
        <Hero />
        <Divider />
        <TechStack />
        <Divider />
        <Work />
        <Divider />
        <Services />
        <Divider />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}