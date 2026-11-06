import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, BarChart3, Blocks, BrainCircuit, Building2, Check,
  Globe2, Layers3, LineChart, Network, Rocket, ShieldCheck, ShoppingBag,
  Sparkles, Target, TrendingUp, Workflow,
} from 'lucide-react';
import AdSenseAd from '@/components/AdSenseAd';

const officeMeet = '/optimized-images/IMG_6236.webp';
const officeMeetMobile = '/optimized-images/IMG_6236-mobile.webp';
const officeTeam = '/optimized-images/IMG_6247.webp';
const officeTeamMobile = '/optimized-images/IMG_6247-mobile.webp';
const officeWorkspace = '/optimized-images/IMG_6258.webp';
const officeWorkspaceMobile = '/optimized-images/IMG_6258-mobile.webp';
const officeInterior = '/optimized-images/IMG_6262.webp';

const businesses = [
  {
    name: 'WebCore360',
    eyebrow: 'Digital & technology',
    description: 'Digital, web, software, and technology solutions that help organizations build useful products and operate with more clarity.',
    capabilities: ['Web and software delivery', 'Product design and engineering', 'Technology operations'],
    image: officeWorkspace,
    srcSet: `${officeWorkspaceMobile} 768w, ${officeWorkspace} 1200w`,
    width: 1200,
    height: 1600,
    alt: 'Modern GROISH workspace representing WebCore360 technology operations',
    icon: Network,
    href: '/services',
    linkLabel: 'Explore technology services',
  },

  {
    name: 'TransMedEx',
    eyebrow: 'Healthcare business support',
    description: 'Healthcare revenue-cycle management, medical billing, and business support delivered through focused processes and operational discipline.',
    capabilities: ['Revenue-cycle operations', 'Medical billing support', 'Healthcare business services'],
    image: officeTeam,
    srcSet: `${officeTeamMobile} 768w, ${officeTeam} 1200w`,
    width: 1200,
    height: 900,
    alt: 'GROISH team collaborating in an office representing TransMedEx operations',
    icon: ShieldCheck,
    href: 'https://transmedex.com',
    linkLabel: 'Visit TransMedEx',
    external: true,
  },
  {
    name: 'Amazon / E-commerce Operations',
    eyebrow: 'Digital commerce',
    description: 'E-commerce, marketplace operations, product management, and online business growth for brands building their next channel.',
    capabilities: ['Marketplace operations', 'Product and catalog management', 'Amazon education and growth'],
    image: officeInterior,
    width: 1200,
    height: 900,
    alt: 'GROISH office interior representing digital commerce and e-commerce operations',
    icon: ShoppingBag,
    href: '/courses/ecommerce-startup',
    linkLabel: 'Explore e-commerce operations',
  },
];

const principles = [
  { title: 'Innovation', description: 'We look for useful, responsible ways to turn ideas, technology, and insight into better business outcomes.', icon: Sparkles },
  { title: 'Reliability', description: 'We earn trust through clear ownership, dependable execution, and processes people can rely on every day.', icon: ShieldCheck },
  { title: 'Scalability', description: 'We build teams, systems, and operating models that can adapt as opportunities and requirements change.', icon: Layers3 },
  { title: 'Long-Term Growth', description: 'We prefer durable capabilities and compounding value over short-term activity without direction.', icon: TrendingUp },
];

const flow = [
  { label: 'GROISH', detail: 'Parent company', icon: Building2 },
  { label: 'Strategy & Management', detail: 'Direction, shared systems, and operating discipline', icon: Target },
  { label: 'Specialized Businesses', detail: 'Focused teams and domain expertise', icon: Blocks },
  { label: 'Clients & Markets', detail: 'Useful products, services, and growth', icon: Globe2 },
];

const organizationSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: 'GROISH',
  url: 'https://groish.com/about',
  description: 'GROISH is a parent company building and managing specialized businesses across technology, business services, healthcare support, and e-commerce.',
  email: 'info@groish.com',
  brand: { '@type': 'Brand', name: 'GROISH' },
  subOrganization: businesses.map((business) => ({ '@type': 'Organization', name: business.name })),
});

const Reveal = ({ children, className = '', delay = 0 }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '16%']);

  return (
    <>
      <Helmet>
        <title>About GROISH | Building Businesses. Creating Possibilities.</title>
        <meta name="description" content="GROISH is the parent company behind WebCore360, TransMedEx, and Amazon/e-commerce operations, building specialized businesses across technology, business services, and digital commerce." />
        <link rel="canonical" href="https://groish.com/about" />
        <meta property="og:title" content="About GROISH | Building Businesses. Creating Possibilities." />
        <meta property="og:description" content="Discover how GROISH builds and manages specialized businesses across technology, business services, healthcare support, and e-commerce." />
        <meta property="og:url" content="https://groish.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{organizationSchemaJson}</script>
      </Helmet>

      <main className="about-page">
        <section ref={heroRef} className="about-hero relative isolate overflow-hidden bg-slate-950 text-white">
          <motion.div 
            className="about-hero__image absolute inset-0" 
            style={{ y: heroImageY, willChange: reduceMotion ? 'auto' : 'transform' }}
          >
            <img 
              src={officeMeet} 
              srcSet={`${officeMeetMobile} 768w, ${officeMeet} 1200w`}
              alt="GROISH team workspace supporting a connected business ecosystem" 
              className="h-full w-full object-cover" 
              loading="eager" 
              fetchPriority="high" 
              decoding="async"
              width={1200}
              height={900}
              sizes="100vw"
            />
          </motion.div>
          <div className="about-hero__overlay absolute inset-0" />
          <div className="about-hero__grid absolute inset-0" aria-hidden="true" />
          <div className="about-hero__orb about-hero__orb--one" aria-hidden="true" />
          <div className="about-hero__orb about-hero__orb--two" aria-hidden="true" />
          <div className="container relative mx-auto flex min-h-[720px] items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
           
<div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
  <Reveal>
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center"
    >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="about-eyebrow text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-sm"
      >
        The company behind the capabilities
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="about-hero__title mx-auto mt-5 max-w-4xl text-center text-4xl font-extrabold leading-[1.08] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Building Businesses Creating Possibilities
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-200 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
      >
        GROISH is the parent company behind multiple technology, business-services, and e-commerce ventures. We build focused businesses, connect the right capabilities, and create practical paths for long-term growth.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
      >
        <Link
          to="#our-businesses"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_8px_25px_-8px_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_12px_30px_-8px_rgba(103,232,249,0.4)] sm:w-auto"
        >
          Meet our businesses
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/contact"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-white/20 sm:w-auto"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.div>
  </Reveal>
</div>

          </div>
        </section>

        <section className="about-section bg-white">
         
<section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
  {/* Background Effects */}
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      {/* Left: Heading */}
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-blue-50 px-5 py-2.5 shadow-[0_5px_20px_-10px_rgba(37,99,235,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
              Who We Are
            </span>
          </div>

          <h2 className="about-heading max-w-xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
  A parent company with a
  <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
    builder’s mindset.
  </span>
</h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
          />
        </motion.div>
      </Reveal>

      {/* Right: Description */}
      <Reveal delay={0.12}>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-5 top-1 h-20 w-1 rounded-full bg-gradient-to-b from-blue-600 to-cyan-400" />

          <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            GROISH develops, operates, and supports specialized businesses
            across technology, business process services, digital solutions,
            and e-commerce. Our role is to create the direction, systems, and
            operating support that let each business stay focused on the people
            and markets it serves.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
            That means combining entrepreneurial energy with practical
            management: identifying opportunities, assembling specialist
            teams, building repeatable processes, and continuously improving
            the way work gets done.
          </p>

          {/* Capability Pills */}
          <div className="mt-9 flex flex-wrap gap-3">
            {[
              'Technology',
              'Business Services',
              'Digital Operations',
              'E-commerce',
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.1,
                }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group inline-flex cursor-default items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-[0_5px_18px_-12px_rgba(15,23,42,0.3)] transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-[0_8px_22px_-10px_rgba(37,99,235,0.35)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-300 group-hover:scale-150" />
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Reveal>

    </div>
  </div>
</section>

        </section>

        <section id="our-businesses" className="about-section about-businesses bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <Reveal className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
  >
    <motion.p
      className="about-eyebrow inline-block"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Our businesses
    </motion.p>

    <motion.h2
      className="about-heading mx-auto mt-5 max-w-2xl text-center text-3xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-5xl"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Different disciplines. One connected direction.
    </motion.h2>

    <motion.p
      className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.35 }}
    >
      Each GROISH business has a distinct role, domain, and operating focus.
      Together, they form a broader platform for building useful capabilities
      and serving evolving markets.
    </motion.p>
  </motion.div>
</Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {businesses.map((business, index) => {
                const Icon = business.icon;
                return (
                  <Reveal key={business.name} delay={index * 0.08} className="h-full">
                    <article className="about-business-card group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
                      <div className="about-business-card__image relative h-64 overflow-hidden">
                        <img 
                          src={business.image} 
                          srcSet={business.srcSet}
                          alt={business.alt} 
                          width={business.width || 1200}
                          height={business.height || 900}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
                          loading="lazy" 
                          decoding="async" 
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur"><Icon className="h-5 w-5" /></div>
                        <p className="absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{business.eyebrow}</p>
                      </div>
                      <div className="flex h-[calc(100%-16rem)] flex-col p-7">
                        <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{business.name}</h3>
                        <p className="mt-4 leading-7 text-slate-600">{business.description}</p>
                        <ul className="mt-6 space-y-3 text-sm text-slate-700">
                          {business.capabilities.map((capability) => <li key={capability} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />{capability}</li>)}
                        </ul>
                        <div className="mt-auto pt-8">
                          {business.external ? <a href={business.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-slate-950">{business.linkLabel} <ArrowUpRight className="h-4 w-4" /></a> : <Link to={business.href} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-slate-950">{business.linkLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
  {/* Background effects */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
    <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
      }}
    />
  </div>

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section heading */}
    <Reveal className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          How GROISH works
        </p>

        <h2 className="about-heading about-heading--dark mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
          A shared engine behind{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            specialized businesses.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          GROISH gives each business room to develop its own expertise while
          providing the strategic and operational structure needed to move
          with confidence.
        </p>
      </motion.div>
    </Reveal>

    {/* Flow items */}
    <div className="about-flow mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
      {flow.map((item, index) => {
        const Icon = item.icon;

        return (
          <React.Fragment key={item.label}>
            <motion.div
              className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center shadow-[0_15px_45px_-25px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-blue-500/[0.08] hover:shadow-[0_20px_55px_-20px_rgba(34,211,238,0.2)]"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              {/* Top accent */}
              <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-300 transition-all duration-500 group-hover:w-full" />

              {/* Step number */}
              <span className="absolute right-5 top-4 text-xs font-bold tracking-widest text-slate-600">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-300/50 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-lg font-extrabold tracking-tight text-white sm:text-xl">
                {item.label}
              </h3>

              <p className="mt-3 max-w-[15rem] text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
            </motion.div>

            {/* Connector for desktop */}
            {index < flow.length - 1 && (
              <div
                className="hidden items-center justify-center text-cyan-400/70 lg:hidden"
                aria-hidden="true"
              >
                <ArrowRight className="h-5 w-5" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
</section>

       

        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
  <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-blue-100/60 blur-[100px]" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="about-eyebrow inline-block">What we believe</p>

        <h2 className="about-heading mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
          Principles that shape the way we build.
        </h2>
      </motion.div>
    </Reveal>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
      {principles.map((principle, index) => {
        const Icon = principle.icon;

        return (
          <motion.article
            key={principle.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_-25px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_25px_55px_-25px_rgba(37,99,235,0.25)] sm:p-8"
          >
            <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-950">
              {principle.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {principle.description}
            </p>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>

<div className="border-y border-slate-200/80 bg-slate-50/80 py-8 sm:py-10">
  <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <AdSenseAd variant="banner" format="auto" />
  </div>
</div>

<section className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/70 py-20 sm:py-24 lg:py-28">
  <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />

  <div className="container relative z-10 mx-auto grid items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">

    <Reveal>
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <p className="about-eyebrow inline-block">Our approach</p>

        <h2 className="about-heading mt-5 text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
          From opportunity to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            operating momentum.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          GROISH identifies opportunities, builds specialized teams and technology,
          establishes scalable processes, and continuously improves operations.
          We stay close to the work so strategy becomes something teams can use,
          not just something written down.
        </p>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          {[
            "Identify the opportunity",
            "Build the right capability",
            "Establish repeatable systems",
            "Improve with real feedback",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-extrabold text-white shadow-md shadow-blue-500/20">
                0{index + 1}
              </span>
              <span className="text-sm font-bold text-slate-700">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Reveal>

    <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl">
      <motion.div
        initial={{ opacity: 0, x: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-xl" />

        <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:border-[8px]">
          <img
            src={officeInterior}
            alt="GROISH office interior representing structured operations and collaboration"
            className="h-[22rem] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[28rem]"
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="absolute -bottom-7 left-4 right-4 rounded-2xl border border-cyan-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.13)] sm:left-auto sm:right-[-20px] sm:min-w-[260px]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
              <Workflow className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-950">
                Built for momentum
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Clear direction. Practical systems.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Reveal>
  </div>
</section>
<section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[110px]" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="about-eyebrow inline-block">
        One company Multiple capabilities
      </p>

      <h2 className="about-heading mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
        An ecosystem designed to{" "}
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
          connect expertise.
        </span>
      </h2>
    </Reveal>

    <Reveal delay={0.12} className="mx-auto mt-14 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-8 lg:p-12"
      >
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <div className="about-ecosystem">
          <motion.div
            className="about-ecosystem__center"
            animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.12)", "0 0 40px rgba(34,211,238,0.22)", "0 0 20px rgba(59,130,246,0.12)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Building2 className="h-8 w-8" />
            <span>GROISH</span>
            <small>Shared direction and support</small>
          </motion.div>

          <div className="about-ecosystem__line about-ecosystem__line--one" aria-hidden="true" />
          <div className="about-ecosystem__line about-ecosystem__line--two" aria-hidden="true" />
          <div className="about-ecosystem__line about-ecosystem__line--three" aria-hidden="true" />

          <motion.div
            className="about-ecosystem__node about-ecosystem__node--one"
            whileHover={{ y: -7, scale: 1.04 }}
            transition={{ duration: 0.25 }}
          >
            <Network className="h-6 w-6" />
            <strong>WebCore360</strong>
            <span>Technology</span>
          </motion.div>

          <motion.div
            className="about-ecosystem__node about-ecosystem__node--two"
            whileHover={{ y: -7, scale: 1.04 }}
            transition={{ duration: 0.25 }}
          >
            <ShieldCheck className="h-6 w-6" />
            <strong>TransMedEx</strong>
            <span>Business support</span>
          </motion.div>

          <motion.div
            className="about-ecosystem__node about-ecosystem__node--three"
            whileHover={{ y: -7, scale: 1.04 }}
            transition={{ duration: 0.25 }}
          >
            <ShoppingBag className="h-6 w-6" />
            <strong>E-commerce</strong>
            <span>Digital commerce</span>
          </motion.div>
        </div>
      </motion.div>
    </Reveal>
  </div>
</section>
<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
  <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">

    <Reveal className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="relative isolate min-h-[330px] overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] sm:min-h-[390px] sm:p-12"
      >
        <div className="about-vision__orb pointer-events-none" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-blue-300/10" />

        <div className="relative z-10 flex h-full min-h-[250px] flex-col justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
            <Rocket className="h-8 w-8 text-cyan-300" />
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            Our vision
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Build what{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              lasts.
            </span>
          </h2>

          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
        </div>
      </motion.div>
    </Reveal>

    <Reveal delay={0.12}>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <p className="about-eyebrow inline-block">A long-term view</p>

        <h2 className="about-heading mt-5 text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
          Sustainable businesses.{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Technology-driven solutions. Lasting value.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Our vision is to build sustainable businesses, develop technology-driven
          solutions, expand into new markets, and create long-term value for the
          people and organizations connected to GROISH.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { label: "Sustainable growth", Icon: BarChart3 },
            { label: "Useful innovation", Icon: BrainCircuit },
            { label: "New possibilities", Icon: LineChart },
          ].map(({ label, Icon }, index) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-cyan-300 hover:bg-cyan-50"
            >
              <Icon className="h-4 w-4 text-blue-600" />
              {label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  </div>
</section>

        <section className="about-cta relative overflow-hidden bg-slate-950 text-white">
          <div className="about-cta__glow" aria-hidden="true" />
          <div className="container relative mx-auto px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-28">
            <Reveal><p className="about-eyebrow text-cyan-200">Start the next chapter</p><h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-6xl">Let’s Build What’s Next.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Talk with us about partnerships, technology projects, business services, or the next opportunity worth building.</p><div className="mt-10 flex flex-wrap justify-center gap-4"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-1">Start a conversation <ArrowRight className="h-4 w-4" /></Link><Link to="#our-businesses" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20">Explore our businesses <ArrowUpRight className="h-4 w-4" /></Link></div></Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;