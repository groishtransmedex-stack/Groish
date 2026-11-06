
import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, Blocks, Building2, Code2, HeartPulse, Layers3, Network, Rocket, Scale, ShoppingBag, Target, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdSenseAd from '@/components/AdSenseAd';

const assets = {
  hero: '/optimized-images/IMG_6236.webp',
  webcore: '/optimized-images/IMG_6247.webp',
  transmedex: '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp',
  ecommerce: '/optimized-images/IMG_6262.webp',
  operations: '/optimized-images/IMG_6258.webp',
};

const companies = [
  {
    key: 'webcore', number: '01', name: 'WebCore360', focus: 'Digital & Technology', meta: 'Lahore · Technology operations', image: assets.webcore, alt: 'GROISH workspace representing WebCore360 technology operations', icon: Code2, accent: 'from-sky-500/80 via-cyan-400/20 to-transparent', url: 'https://www.webcore360.com/',
    profile: 'WebCore360 is the technology-led business in the GROISH ecosystem, working across websites, software, digital products, search, and online growth.',
    spotlight: { focus: 'Build digital foundations that are useful, discoverable, and ready to evolve.', market: 'Organizations, brands, and teams that need dependable digital delivery.', strengths: 'Technical execution, web thinking, product-minded problem solving, and digital growth.', operations: 'Web development, software delivery, SEO, digital marketing, branding, PPC, and related growth work.', capabilities: ['Web development', 'Software solutions', 'SEO & search', 'Digital marketing', 'Branding', 'PPC'] },
  },
  {
    key: 'transmedex', number: '02', name: 'TransMedEx', focus: 'Healthcare & RCM', meta: 'United States · Healthcare support', image: assets.transmedex, alt: 'GROISH United States office representing TransMedEx healthcare support', icon: HeartPulse, accent: 'from-emerald-500/80 via-teal-400/20 to-transparent', url: 'https://www.transmedex.org/',
    profile: 'TransMedEx is the healthcare operations business, focused on the processes behind revenue-cycle performance and administrative support.',
    spotlight: { focus: 'Make essential healthcare business processes more organized, accurate, and dependable.', market: 'Healthcare organizations and practices requiring revenue-cycle and operational support.', strengths: 'Domain-focused workflows, process discipline, coding and billing knowledge, and operational consistency.', operations: 'Revenue-cycle management, medical billing, coding, credentialing, and healthcare operational support.', capabilities: ['Revenue-cycle management', 'Medical billing', 'Medical coding', 'Credentialing', 'Healthcare support', 'Operational workflows'] },
  },
  {
    key: 'ecommerce', number: '03', name: 'E-commerce / Amazon Operations', focus: 'Digital Commerce', meta: 'Global marketplaces · Commerce operations', image: assets.ecommerce, alt: 'GROISH office interior representing e-commerce and Amazon operations', icon: ShoppingBag, accent: 'from-indigo-500/80 via-cyan-400/20 to-transparent', url: '/courses/ecommerce-startup',
    profile: 'The e-commerce and Amazon operations business works around the practical systems that help products move from research to marketplace growth.',
    spotlight: { focus: 'Turn marketplace complexity into clearer product, catalog, advertising, and growth operations.', market: 'Entrepreneurs, brands, and online businesses building or improving marketplace channels.', strengths: 'Marketplace awareness, product thinking, listing detail, advertising coordination, and catalog discipline.', operations: 'Product research, private label, listings, advertising, catalog management, fulfillment coordination, and growth.', capabilities: ['Marketplace operations', 'Product research', 'Private label', 'Listing optimization', 'Advertising / PPC', 'Catalog management'] },
  },
];

const differences = [
  ['WebCore360', 'Digital & Technology', 'Builds the digital layer: websites, software, online experiences, search visibility, and growth infrastructure.', Code2],
  ['TransMedEx', 'Healthcare & RCM', 'Supports the operational layer behind healthcare administration, billing, coding, credentialing, and revenue-cycle work.', HeartPulse],
  ['E-commerce / Amazon Operations', 'Digital Commerce', 'Coordinates the marketplace layer: products, catalogs, listings, advertising, fulfillment workflows, and commerce growth.', ShoppingBag],
];

const process = [
  ['Opportunity', 'Recognize a market need, capability gap, or practical problem worth developing.', Target],
  ['Strategy', 'Define the business focus, operating model, customer context, and first priorities.', Network],
  ['Build', 'Assemble specialist capability, systems, workflows, and a clear way of working.', Blocks],
  ['Launch', 'Put the offer, team, and operating rhythm into the market with focused intent.', Rocket],
  ['Operate', 'Create ownership and repeatable execution around the work customers depend on.', Workflow],
  ['Optimize', 'Use learning from the operation to improve quality, clarity, and efficiency.', BarChart3],
  ['Scale', 'Extend proven capabilities through stronger systems, teams, partnerships, and reach.', Layers3],
];

const principles = [
  ['Shared technology', 'Capabilities and systems can travel across the group where they create useful leverage.', Code2],
  ['Management perspective', 'A broader view helps each business make decisions with both focus and context.', Target],
  ['Operational knowledge', 'Lessons from one operating environment can inform better questions in another.', Workflow],
  ['Scalable systems', 'Processes are shaped to support consistency without removing the character of each business.', Scale],
];

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.14 });
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState('down');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest !== previous) {
      setScrollDirection(latest > previous ? 'down' : 'up');
    }
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: scrollDirection === 'down' ? 34 : -34 }
      }
      transition={{
        duration: 0.68,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const Explore = ({ company, light = false }) => company.url.startsWith('http') ? (
  <Button asChild variant="outline" className={light ? 'border-slate-300 bg-white text-slate-950 hover:bg-cyan-50' : 'border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white'}>
    <a href={company.url} target="_blank" rel="noreferrer noopener" aria-label={`Explore ${company.name}`}>
      Explore <ArrowUpRight className="ml-2 h-4 w-4" />
    </a>
  </Button>
) : (
  <Button asChild variant="outline" className={light ? 'border-slate-300 bg-white text-slate-950 hover:bg-cyan-50' : 'border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white'}>
    <Link to={company.url} aria-label={`Explore ${company.name}`}>
      Explore <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
);

const OurCompanies = () => {
  const [activeCompany, setActiveCompany] = useState('webcore');
  const active = companies.find((company) => company.key === activeCompany) || companies[0];
  const ActiveIcon = active.icon;

  return (
    <main id="inside-groish" className="overflow-hidden bg-slate-950 font-['Manrope'] text-white -mt-[76px] sm:-mt-[74px] lg:-mt-[86px]">
      <section
        aria-labelledby="companies-hero-heading"
        className="group relative isolate flex min-h-[620px] items-center overflow-hidden bg-slate-950 sm:min-h-[680px] lg:min-h-[760px]"
      >
        {/* Background Image */}
        <motion.img
          src={assets.hero}
          alt="GROISH workspace representing a diversified business ecosystem"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.78)_50%,rgba(2,6,23,0.55)_100%),linear-gradient(0deg,#020617_0%,transparent_45%)]" />

        {/* Animated Glow Effects */}
        <motion.div
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px] sm:h-96 sm:w-96"
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -bottom-32 left-[20%] h-72 w-72 rounded-full bg-blue-600/15 blur-[100px]"
          animate={{
            x: [0, 40, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative Orb */}
        <motion.div
          className="pointer-events-none absolute right-[12%] top-24 hidden h-44 w-44 rounded-full border border-cyan-200/20 bg-cyan-300/[0.04] shadow-[0_0_70px_rgba(34,211,238,0.12)] backdrop-blur-sm lg:block"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-4 rounded-full border border-dashed border-cyan-200/20 animate-[spin_25s_linear_infinite]" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_8px_rgba(34,211,238,0.35)]" />
        </motion.div>

        {/* Centered Content */}
        <div className="container relative z-10 mx-auto flex min-h-[620px] items-center justify-center px-5 pb-16 pt-32 text-center sm:min-h-[680px] sm:px-8 sm:pb-20 lg:min-h-[760px] lg:px-8 mt-10">

          <motion.div
            className="mx-auto w-full max-w-4xl text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.16,
                },
              },
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>

              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cyan-100 sm:text-xs sm:tracking-[0.26em]">
                Inside GROISH · The Companies Destination
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="companies-hero-heading"
              variants={{
                hidden: { opacity: 0, y: 45, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-7 max-w-4xl text-[2.65rem] font-extrabold leading-[1.04] tracking-[-0.055em] text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.4)] sm:mt-8 sm:text-6xl sm:leading-[1.02] md:text-7xl lg:text-[5.7rem]"
            >
              One Group
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-300 bg-clip-text pb-2 text-transparent">
                Multiple Businesses
              </span>
              <span className="block text-white">
                Shared Direction
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
            >
              GROISH operates a diversified ecosystem of specialized businesses,
              each built around a distinct market, capability set, and way of
              creating value.
            </motion.p>

            {/* Animated Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 100, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-transparent"
            />

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group/btn h-12 w-full rounded-full bg-white px-7 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-[0_12px_35px_rgba(34,211,238,0.25)] sm:w-auto"
              >
                <a href="#ecosystem">
                  See the ecosystem
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group/btn h-12 w-full rounded-full border border-white/25 bg-white/[0.07] px-7 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white sm:w-auto"
              >
                <Link to="/contact">
                  Talk to GROISH
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </section>

      <section
  id="ecosystem"
  aria-labelledby="ecosystem-heading"
  className="relative isolate overflow-hidden border-y border-white/10 bg-slate-950 py-20 sm:py-28 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <Reveal className="mx-auto max-w-3xl text-center">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mx-auto inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-4 py-2 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
          <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
        </span>

        <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-xs sm:tracking-[0.28em]">
          GROISH Business Ecosystem
        </p>
      </motion.div>

      <motion.h2
        id="ecosystem-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-6 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl md:text-6xl"
      >
        One center.
        <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-300 bg-clip-text pb-2 text-transparent">
          Three specialized directions.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
      >
        GROISH is the parent organization at the center. Its businesses branch
        into different markets while benefiting from a connected perspective,
        shared support, and focused execution.
      </motion.p>

      {/* Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 85 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-transparent"
      />
    </Reveal>

    {/* Ecosystem Diagram */}
    <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">

      {/* Connecting Lines - Desktop */}
      <div className="pointer-events-none absolute left-1/2 top-[44%] hidden h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent lg:block" />

      {/* Animated Vertical Connection */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[44%] hidden h-24 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/70 to-transparent lg:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />

      {/* Center GROISH Circle */}
      <div className="relative z-10 mb-12 flex justify-center lg:absolute lg:left-1/2 lg:top-[44%] lg:mb-0 lg:-translate-x-1/2 lg:-translate-y-1/2">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
        >

          {/* Outer Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-300/40"
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_5px_rgba(34,211,238,0.4)]" />
          </motion.div>

          {/* Inner Orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-3 rounded-full border border-blue-400/20"
          >
            <span className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_4px_rgba(59,130,246,0.4)]" />
          </motion.div>

          {/* Center Circle */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(34,211,238,0.10)",
                "0 0 65px rgba(34,211,238,0.25)",
                "0 0 30px rgba(34,211,238,0.10)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-cyan-200/40 bg-slate-900/95 text-center backdrop-blur-xl sm:h-36 sm:w-36"
          >
            <Building2 className="h-6 w-6 text-cyan-300 sm:h-8 sm:w-8" />

            <span className="mt-2 text-base font-black tracking-wide text-white sm:text-xl">
              GROISH
            </span>

            <span className="mt-1 text-[0.48rem] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[0.58rem] sm:tracking-[0.2em]">
              Parent organization
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Business Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

        {companies.map((company, index) => {
          const Icon = company.icon;
          const isActive = activeCompany === company.key;

          return (
            <motion.div
              key={company.key}
              initial={{
                opacity: 0,
                y: 65,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -9,
                transition: { duration: 0.3 },
              }}
              className="relative h-full"
            >
              {/* Glow */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-[1.8rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent opacity-0 blur-md transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "group-hover:opacity-100"
                }`}
              />

              <button
                type="button"
                onClick={() => setActiveCompany(company.key)}
                aria-pressed={isActive}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border text-left transition-all duration-500 ${
                  isActive
                    ? "border-cyan-300/60 bg-cyan-300/[0.09] shadow-[0_0_45px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/[0.045] hover:border-cyan-300/35 hover:bg-white/[0.07]"
                }`}
              >

                {/* Active Top Border */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 right-0 top-0 z-20 h-[2px] origin-left bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                />

                {/* Image */}
                <div className="relative h-48 overflow-hidden sm:h-52">

                  <motion.img
                    src={company.image}
                    alt={company.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-br ${company.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-50`} />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Card Content */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">

                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cyan-100/90">
                      {company.number} / {company.focus}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-white sm:text-3xl">
                      {company.name}
                    </h3>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex flex-1 items-center justify-between gap-4 p-5 sm:p-6">

                  <p className="text-sm leading-6 text-slate-300">
                    {company.profile}
                  </p>

                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                      scale: isActive ? 1.12 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      isActive
                        ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200"
                        : "border-white/10 bg-white/5 text-cyan-200 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`h-[2px] w-full origin-left bg-gradient-to-r from-cyan-300 via-blue-500 to-transparent transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>

     
<section aria-labelledby="profiles-heading" className="bg-white py-20 text-slate-950 sm:py-28 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700"
      >
        Our Companies
      </motion.p>

      <motion.h2
        id="profiles-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl"
      >
        Three businesses. Three operating identities.
      </motion.h2>
    </Reveal>

    <div className="mt-12 space-y-6 sm:mt-16">
      {companies.map((company, index) => (
        <Reveal key={company.key} delay={index * 0.12}>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group relative grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 hover:border-cyan-300/70 hover:shadow-[0_25px_65px_rgba(8,145,178,0.12)] sm:rounded-[2rem] lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px]">
              <motion.img
                src={company.image}
                alt={company.alt}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className={`absolute inset-0 bg-gradient-to-br ${company.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-60`} />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8"
              >
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cyan-100">
                  {company.number} · {company.meta}
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                  {company.name}
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-cyan-300 transition-all duration-500 group-hover:w-24" />
              </motion.div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                  {company.focus}
                </p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.65, delay: 0.15 }}
                  className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                >
                  {company.profile}
                </motion.p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {company.spotlight.capabilities.map((capability, capabilityIndex) => (
                    <motion.span
                      key={capability}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: capabilityIndex * 0.06 }}
                      whileHover={{ y: -3 }}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
                    >
                      {capability}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Explore company={company} light />
              </div>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


<section aria-labelledby="difference-heading" className="relative overflow-hidden bg-slate-100 py-20 text-slate-950 sm:py-28 lg:py-32">
  <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-[100px]" />

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700"
      >
        What Makes Each Business Different
      </motion.p>

      <motion.h2
        id="difference-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl"
      >
        Distinct purpose inside one ecosystem.
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 65 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
      />
    </Reveal>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {differences.map(([title, focus, description, Icon], index) => (
        <Reveal key={title} delay={index * 0.12}>
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -7 }}
            className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_25px_55px_rgba(8,145,178,0.12)] sm:p-8"
          >
            <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-700 group-hover:w-full" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-700">
                0{index + 1}
              </span>

              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 transition-colors duration-300 group-hover:bg-cyan-100"
              >
                <Icon className="h-6 w-6 text-cyan-700" />
              </motion.div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-8 text-xl font-bold tracking-[-0.035em] transition-colors duration-300 group-hover:text-cyan-800 sm:text-2xl"
            >
              {title}
            </motion.h3>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              {focus}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-sm leading-7 text-slate-600"
            >
              {description}
            </motion.p>

            <div className="mt-7 h-px w-full bg-slate-100 transition-colors duration-500 group-hover:bg-cyan-200" />
          </motion.article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


<section aria-labelledby="process-heading" className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 lg:py-32">
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-300"
      >
        How GROISH Builds Businesses
      </motion.p>

      <motion.h2
        id="process-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
      >
        From opportunity to <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">operating scale.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
      >
        The sequence is not a rigid formula. It is a practical way to move an idea from possibility into a specialized business with a stronger operating foundation.
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 65 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
      />
    </Reveal>

    <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-7">
      <div className="pointer-events-none absolute left-[7%] right-[7%] top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block" />

      {process.map(([title, description, Icon], index) => (
        <Reveal key={title} delay={index * 0.1}>
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -7, scale: 1.02 }}
            className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-all duration-500 hover:border-cyan-300/50 hover:bg-cyan-400/[0.07] hover:shadow-[0_15px_45px_rgba(34,211,238,0.09)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold tracking-[0.1em] text-cyan-300 transition-all duration-300 group-hover:bg-cyan-300 group-hover:text-slate-950">
                0{index + 1}
              </span>

              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5"
              >
                <Icon className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300" />
              </motion.div>
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-7 text-base font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-3 text-sm leading-6 text-slate-400"
            >
              {description}
            </motion.p>

            <div className="mt-6 h-0.5 w-8 rounded-full bg-cyan-400/40 transition-all duration-500 group-hover:w-full group-hover:bg-cyan-300" />
          </motion.article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


<section aria-labelledby="advantage-heading" className="relative overflow-hidden bg-white py-20 text-slate-950 sm:py-28 lg:py-32">
  <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-[100px]" />

  <div className="container relative mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
    <Reveal>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700 lg:text-left"
      >
        The GROISH Advantage
      </motion.p>

      <motion.h2
        id="advantage-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="mt-4 text-center text-3xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-left lg:text-5xl"
      >
        A broader group view. <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">A sharper business focus.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-center text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-left"
      >
        Being part of a broader group gives each business access to perspective beyond its immediate lane. GROISH can connect management thinking, technology experience, operational knowledge, digital capabilities, and scalable systems while allowing each business to retain its own purpose.
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 65 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 lg:mx-0"
      />
    </Reveal>

    <div className="grid gap-4 sm:grid-cols-2">
      {principles.map(([title, description, Icon], index) => (
        <Reveal key={title} delay={index * 0.1}>
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -7 }}
            className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-500 hover:border-cyan-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,145,178,0.11)] sm:p-6"
          >
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-cyan-100/40 transition-all duration-500 group-hover:h-28 group-hover:w-28" />

            <motion.div
              whileHover={{ rotate: 10, scale: 1.12 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100"
            >
              <Icon className="h-5 w-5 text-cyan-700" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mt-5 text-base font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:text-cyan-800 sm:text-lg"
            >
              {title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative mt-2 text-sm leading-6 text-slate-600"
            >
              {description}
            </motion.p>

            <div className="relative mt-6 h-0.5 w-8 rounded-full bg-cyan-400/50 transition-all duration-500 group-hover:w-full" />
          </motion.article>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <div className="border-y border-slate-200 bg-slate-50 py-8">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdSenseAd variant="banner" format="auto" />
        </div>
      </div>


<section
  aria-labelledby="spotlight-heading"
  className="relative overflow-hidden bg-slate-100 py-20 text-slate-950 sm:py-28 lg:py-32"
>
  <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-[100px]" />
  <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-300/10 blur-[100px]" />

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

    <Reveal className="mx-auto max-w-3xl text-center lg:text-left">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700"
      >
        Business Spotlight
      </motion.p>

      <motion.h2
        id="spotlight-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl"
      >
        Look closer at the operating identity.
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 65 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 lg:mx-0"
      />
    </Reveal>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(8,145,178,0.12)] sm:mt-14 sm:rounded-[2rem]"
    >

      {/* Business Tabs */}
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/70">
        {companies.map((company, index) => (
          <motion.button
            type="button"
            key={company.key}
            onClick={() => setActiveCompany(company.key)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ backgroundColor: "rgba(236,254,255,0.8)" }}
            whileTap={{ scale: 0.97 }}
            className={`relative min-w-[50%] flex-1 border-b-2 px-3 py-4 text-center text-xs font-semibold transition-all duration-300 sm:min-w-0 sm:px-6 sm:py-5 sm:text-sm ${
              activeCompany === company.key
                ? "border-cyan-600 bg-cyan-50 text-slate-950"
                : "border-transparent text-slate-500 hover:text-slate-950"
            }`}
            aria-selected={activeCompany === company.key}
          >
            {company.name}

            {activeCompany === company.key && (
              <motion.span
                layoutId="spotlight-active-tab"
                className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-cyan-600"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Spotlight Content */}
      <div className="grid gap-7 p-4 sm:gap-9 sm:p-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-10">

        {/* Business Image */}
        <motion.div
          key={active.key + "-image"}
          initial={{ opacity: 0, scale: 0.94, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-slate-950 sm:min-h-[340px] lg:min-h-full"
        >
          <motion.img
            key={active.image}
            src={active.image}
            alt={active.alt}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, 35vw"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className={`absolute inset-0 bg-gradient-to-br ${active.accent} opacity-75 transition-opacity duration-500 group-hover:opacity-55`} />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7"
          >
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cyan-100 sm:text-xs">
              {active.focus}
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
              {active.name}
            </h3>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 55 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-4 h-1 rounded-full bg-cyan-300"
            />
          </motion.div>
        </motion.div>

        {/* Business Details */}
        <motion.div
          key={active.key + "-details"}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex min-w-0 flex-col justify-center"
        >

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ActiveIcon className="h-6 w-6 text-cyan-700" />
            </motion.div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
              Business focus
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-base font-medium leading-7 text-slate-800 sm:text-lg sm:leading-8"
          >
            {active.spotlight.focus}
          </motion.p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/50"
            >
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                Target market
              </dt>

              <dd className="mt-2 text-sm leading-6 text-slate-600">
                {active.spotlight.market}
              </dd>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/50"
            >
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                Core strengths
              </dt>

              <dd className="mt-2 text-sm leading-6 text-slate-600">
                {active.spotlight.strengths}
              </dd>
            </motion.div>

          </dl>

          {/* Technology / Operations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ y: -4 }}
            className="group mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/50 sm:p-5"
          >
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
              Technology / operations
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {active.spotlight.operations}
            </p>

            <div className="mt-3 h-0.5 w-8 rounded-full bg-cyan-400/60 transition-all duration-500 group-hover:w-16" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7"
          >
            <Explore company={active} light />
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  </div>
</section>


      
{/* GROISH FUTURE SECTION */}
<section
  aria-labelledby="future-heading"
  className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
>
  {/* Animated background */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.55, 0.3],
        x: [0, 35, 0],
        y: [0, -25, 0],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[100px] sm:h-[480px] sm:w-[480px]"
    />

    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.45, 0.2],
        x: [0, -30, 0],
        y: [0, 25, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-blue-600/20 blur-[100px] sm:h-[480px] sm:w-[480px]"
    />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1),rgba(2,6,23,0.75))]" />
    <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:65px_65px]" />
  </div>

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-4xl text-center">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.65 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-5 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
        </span>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-100 sm:text-xs">
          GROISH Future
        </p>
        <span className="text-cyan-300">✦</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="future-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-[3.6rem]"
      >
        The ecosystem keeps{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
          developing.
        </span>
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 85, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,0.6)]"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
      >
        GROISH is continuously exploring new business opportunities,
        technologies, partnerships, and ways to make specialized operations
        more useful. The future is approached through careful learning,
        practical building, and room for the right ideas to take shape.
      </motion.p>

      {/* Feature Pills */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.3,
            },
          },
        }}
        className="mt-9 flex flex-wrap justify-center gap-3"
      >
        {[
          "New capabilities",
          "Better systems",
          "Useful partnerships",
          "More possibilities",
        ].map((item, index) => (
          <motion.span
            key={item}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.94 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{
              y: -5,
              scale: 1.04,
              borderColor: "rgba(103,232,249,0.65)",
            }}
            transition={{ duration: 0.3 }}
            className="group cursor-default rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-slate-200 shadow-[0_5px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-100 sm:px-5 sm:text-sm"
          >
            <span className="mr-2 text-cyan-400 transition-transform duration-300 group-hover:rotate-90">
              ✦
            </span>
            {item}
          </motion.span>
        ))}
      </motion.div>
    </Reveal>
  </div>
</section>


{/* COMPANIES CTA SECTION */}
<section
  aria-labelledby="companies-cta-heading"
  className="relative overflow-hidden bg-white py-20 text-slate-950 sm:py-24 lg:py-28"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.35, 0.65, 0.35],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-100 blur-[90px] sm:h-[420px] sm:w-[420px]"
    />

    <motion.div
      animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.25, 0.5, 0.25],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-36 -left-32 h-80 w-80 rounded-full bg-blue-100 blur-[90px] sm:h-[420px] sm:w-[420px]"
    />
  </div>

  <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-4xl">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-5 py-2.5 shadow-[0_8px_28px_rgba(15,23,42,0.16)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
        </span>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-100 sm:text-xs">
          The companies behind GROISH
        </p>
        <span className="text-cyan-300">✦</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="companies-cta-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.6rem]"
      >
        Explore the Businesses{" "}
        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Behind GROISH.
        </span>
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 85, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
      >
        See how specialized businesses can move in different directions while
        remaining connected by a broader operating perspective.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-slate-950 to-blue-950 px-7 text-white shadow-[0_10px_30px_rgba(15,23,42,0.2)] transition-all duration-300 hover:from-blue-950 hover:to-slate-900 hover:shadow-[0_14px_35px_rgba(37,99,235,0.25)] sm:w-auto"
          >
            <a href="#ecosystem">
              Explore Our Companies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-slate-300 bg-white/70 px-7 text-slate-950 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50 hover:text-blue-950 sm:w-auto"
          >
            <Link to="/contact">
              Contact GROISH
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Reveal>
  </div>
</section>


      
    </main>
  );
};

export default OurCompanies;
