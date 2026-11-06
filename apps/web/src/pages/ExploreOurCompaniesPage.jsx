import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, Code2, FileCheck2, HeartPulse, ReceiptText, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AdSenseAd from '@/components/AdSenseAd';

const companies = [
  {
    name: 'WebCore360',
    category: 'Digital & Technology',
    description: 'Digital products, websites, software, search, and growth systems for organizations ready to move forward.',
    icon: Code2,
    accent: 'from-sky-500 to-cyan-400',
    image: '/optimized-images/IMG_6247.webp',
    alt: 'Modern workspace representing WebCore360 digital solutions and business growth operations',
    logo: 'W360',
    href: 'https://webcore360.com/',
  },
  {
    name: 'TransMedEx',
    category: 'Healthcare & RCM',
    description: 'TransMedEx is a healthcare revenue cycle management and medical billing solutions company built around accuracy, consistency, and dependable operations.',
    icon: HeartPulse,
    accent: 'from-emerald-500 to-teal-400',
    image: '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp',
    alt: 'Professional office environment representing TransMedEx healthcare revenue cycle operations',
    logo: 'TMX',
    href: 'https://www.transmedex.org/',
  },
];

const transmedexServices = [
  ['Medical billing', ReceiptText],
  ['Medical coding', FileCheck2],
  ['Claims management', ShieldCheck],
  ['Denial management', BadgeCheck],
  ['Credentialing', Stethoscope],
];

const webcoreServices = ['Web development', 'Software solutions', 'Digital growth'];

const revealTransition = { duration: 0.58, ease: [0.22, 1, 0.36, 1] };

const Reveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const offset = direction === 'left' ? -28 : direction === 'right' ? 28 : 22;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === 'up' ? 0 : offset, y: direction === 'up' ? offset : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
};

const MotionLink = motion(Link);

const ExploreOurCompaniesPage = () => (
  <div className="groish-page-shell bg-slate-100 pt-20 text-slate-950">
    <Helmet>
      <title>Explore Our Companies | GROISH</title>
      <meta name="description" content="Explore WebCore360 and TransMedEx, the specialized businesses GROISH is building across technology and healthcare operations." />
      <link rel="canonical" href="https://groish.com/explore-our-companies" />
      <meta property="og:title" content="Explore Our Companies | GROISH" />
      <meta property="og:description" content="Meet the specialized businesses operating across the GROISH ecosystem." />
      <meta property="og:url" content="https://groish.com/explore-our-companies" />
      <meta property="og:type" content="website" />
    </Helmet>

    <main>
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(59,130,246,0.16),transparent_34%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full border border-cyan-300/30 bg-cyan-200/[0.12] blur-[1px]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-10 left-[12%] h-24 w-24 rounded-full border border-blue-300/30 bg-blue-300/[0.12]" aria-hidden="true" />
       <div className="container relative mx-auto flex min-h-[480px] items-center justify-center px-4 py-20 text-center sm:min-h-[560px] sm:px-6 sm:py-28 lg:min-h-[620px] lg:px-8 lg:py-32">

  {/* Animated background glow */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.22, 0.1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[100px] sm:h-96 sm:w-96"
  />

  <motion.div
    className="relative z-10 mx-auto w-full max-w-4xl"
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.15,
        },
      },
    }}
  >
    {/* Eyebrow */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: revealTransition,
        },
      }}
      className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-600 sm:text-xs sm:tracking-[0.3em]"
    >
      GROISH Business Ecosystem
    </motion.p>

    {/* Heading */}
    <motion.h1
      variants={{
        hidden: { opacity: 0, y: 35, scale: 0.96, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            ...revealTransition,
            duration: 0.85,
          },
        },
      }}
      className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl lg:text-7xl"
    >
      Explore Our{" "}
      <span className="text-cyan-600">Companies</span>
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: {
          opacity: 1,
          y: 0,
          transition: revealTransition,
        },
      }}
      className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8"
    >
      Our growing business ecosystem consists of specialized companies
      created to provide focused solutions across different industries.
    </motion.p>

    {/* Buttons */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: {
          opacity: 1,
          y: 0,
          transition: revealTransition,
        },
      }}
      className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
    >
      <Button
        asChild
        size="lg"
        className="w-full bg-slate-950 text-white shadow-lg transition-colors hover:bg-cyan-700 sm:w-auto"
      >
        <motion.a
          href="#companies"
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center"
        >
          Explore Our Companies
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="w-full border-slate-300 bg-white/60 text-slate-700 transition-colors hover:border-cyan-400 hover:bg-cyan-50 hover:text-slate-950 sm:w-auto"
      >
        <MotionLink
          to="/contact"
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center"
        >
          Talk to GROISH
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </MotionLink>
      </Button>
    </motion.div>

    {/* Bottom accent */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mx-auto mt-10 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
    />
  </motion.div>
</div>
      </section>

      <motion.section aria-labelledby="transmedex-feature-heading" className="overflow-hidden border-b border-slate-200 bg-slate-100 text-slate-950" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.08 }} transition={revealTransition}>
        <div className="container mx-auto grid max-w-7xl items-stretch lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="group relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
            <motion.img src="/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp" alt="Healthcare operations team environment representing TransMedEx" loading="eager" decoding="async" sizes="(max-width: 1024px) 100vw, 45vw" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.02 }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/75 via-teal-900/25 to-transparent" />
            <motion.div className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ ...revealTransition, delay: 0.2 }} aria-hidden="true" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/55 px-4 py-3 text-white backdrop-blur-md sm:bottom-8 sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-black tracking-[-0.04em] text-slate-950">TMX</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">Healthcare RCM</span>
            </div>
          </div>
          <div className="flex items-center px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
  <Reveal className="w-full max-w-2xl" direction="left">

    {/* Company label */}
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.65 }}
      className="flex flex-wrap items-center gap-3 text-emerald-700"
    >
      <motion.span
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: false }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        <HeartPulse className="h-5 w-5" />
      </motion.span>

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.28em]">
        Featured company · TransMedEx
      </p>
    </motion.div>

    {/* Heading */}
    <motion.h2
      id="transmedex-feature-heading"
      initial={{ opacity: 0, y: 35, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.12 }}
      className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl"
    >
      Healthcare revenue cycle management,{" "}
      <span className="text-emerald-700">
        made more dependable.
      </span>
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="mt-5 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8"
    >
      TransMedEx is a specialized healthcare revenue cycle management and
      medical billing solutions company helping providers bring more
      clarity, consistency, and control to essential billing operations.
    </motion.p>

    {/* Services */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
          },
        },
      }}
      className="mt-6 flex flex-wrap gap-2"
    >
      {transmedexServices.map(([service, Icon], index) => (
        <motion.span
          key={service}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              scale: 0.9,
            },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.45 },
            },
          }}
          whileHover={{
            y: -4,
            scale: 1.04,
            borderColor: "#6ee7b7",
            boxShadow: "0 8px 20px rgba(5,150,105,0.10)",
          }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors"
        >
          <Icon className="h-3.5 w-3.5 text-emerald-700" />
          {service}
        </motion.span>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.65, delay: 0.4 }}
    >
      <Button
        asChild
        className="mt-8 w-full bg-emerald-700 text-white shadow-md transition-all hover:bg-emerald-800 hover:shadow-lg sm:w-auto"
      >
        <motion.a
          href="https://www.transmedex.org/"
          target="_blank"
          rel="noreferrer noopener"
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center"
        >
          Visit TransMedEx

          <motion.span
            className="ml-2 inline-flex"
            whileHover={{ x: 5, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </Button>
    </motion.div>

  </Reveal>
</div>
        </div>
      </motion.section>

      <motion.section aria-labelledby="webcore-feature-heading" className="overflow-hidden border-b border-white/10 bg-slate-950 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.08 }} transition={{ ...revealTransition, delay: 0.06 }}>
        <div className="container mx-auto grid max-w-7xl items-stretch lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
         <div className="flex items-center px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
  <Reveal className="w-full max-w-2xl" direction="right">

    {/* Company label */}
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.65 }}
      className="flex flex-wrap items-center gap-3 text-cyan-300"
    >
      <motion.span
        initial={{ scale: 0, rotate: 45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: false }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        <Code2 className="h-5 w-5" />
      </motion.span>

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.28em]">
        Featured company · WebCore360
      </p>
    </motion.div>

    {/* Heading */}
    <motion.h2
      id="webcore-feature-heading"
      initial={{ opacity: 0, y: 35, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.12 }}
      className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
    >
      Digital solutions that move{" "}
      <span className="text-cyan-300">businesses forward.</span>
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="mt-5 text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8"
    >
      WebCore360 is a specialized digital solutions and business growth
      company helping organizations build stronger digital foundations,
      solve practical technology challenges, and create momentum online.
    </motion.p>

    {/* Services */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
          },
        },
      }}
      className="mt-6 flex flex-wrap gap-2"
    >
      {webcoreServices.map((service, index) => (
        <motion.span
          key={service}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              scale: 0.9,
            },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.45 },
            },
          }}
          whileHover={{
            y: -4,
            scale: 1.04,
            borderColor: "rgba(103,232,249,0.7)",
            backgroundColor: "rgba(34,211,238,0.12)",
            boxShadow: "0 8px 20px rgba(6,182,212,0.12)",
          }}
          className="rounded-full border border-cyan-300/20 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors"
        >
          {service}
        </motion.span>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.65, delay: 0.4 }}
    >
      <Button
        asChild
        className="mt-8 w-full bg-cyan-300 text-slate-950 shadow-md transition-all hover:bg-cyan-200 hover:shadow-lg sm:w-auto"
      >
        <motion.a
          href="https://webcore360.com/"
          target="_blank"
          rel="noreferrer noopener"
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center"
        >
          Visit WebCore360

          <motion.span
            className="ml-2 inline-flex"
            whileHover={{ x: 5, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </Button>
    </motion.div>

  </Reveal>
</div>
          <div className="group relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
            <motion.img src="/optimized-images/IMG_6247.webp" alt="Modern digital workspace representing WebCore360 solutions and business growth" loading="lazy" decoding="async" sizes="(max-width: 1024px) 100vw, 45vw" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.02 }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/45 via-blue-950/30 to-slate-950/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(125,211,252,0.35),transparent_28%)]" />
            <motion.div className="absolute left-0 right-0 top-1/2 h-px origin-right bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ ...revealTransition, delay: 0.24 }} aria-hidden="true" />
            <div className="absolute right-6 top-6 flex items-center gap-3 rounded-2xl border border-cyan-200/25 bg-slate-950/60 px-4 py-3 text-white backdrop-blur-md sm:right-8 sm:top-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-black tracking-[-0.04em] text-slate-950">W360</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Digital growth</span>
            </div>
          </div>
        </div>
      </motion.section>

     <motion.section
  aria-labelledby="vision-heading"
  className="relative overflow-hidden border-b border-slate-200 bg-white py-16 text-slate-950 sm:py-20"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.16 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Background glow */}
  <motion.div
    className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/60 blur-[90px]"
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.5, 0.85, 0.5],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    aria-hidden="true"
  />

  <motion.div
    className="absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-blue-100/60 blur-[90px]"
    animate={{
      x: [0, -30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    aria-hidden="true"
  />

  <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">

      {/* Eyebrow */}
      <motion.p
        className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-700 sm:text-xs"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        The GROISH philosophy
      </motion.p>

      {/* Heading */}
      <motion.h2
        id="vision-heading"
        className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-slate-900 sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        One Vision.{" "}
        <span className="text-cyan-600">
          Specialized Expertise.
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.75, delay: 0.35 }}
      >
        Although TransMedEx and WebCore360 operate in different areas, both
        are built around combining expertise, technology, innovation, and
        client-focused solutions to help businesses grow and operate more
        efficiently.
      </motion.p>

      {/* Animated accent line */}
      <div className="mx-auto mt-8 flex items-center justify-center gap-2">
        <motion.div
          className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.span
          className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 200, delay: 0.55 }}
        />

        <motion.div
          className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </div>
  </div>
</motion.section>

      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <AdSenseAd variant="banner" format="auto" />
        </div>
      </section>

      <motion.section
  id="companies"
  className="relative overflow-hidden bg-white py-20 text-slate-950 sm:py-24"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.08 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Background decoration */}
  <motion.div
    className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/60 blur-[100px]"
    animate={{ x: [0, 35, 0], y: [0, 25, 0] }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-100/50 blur-[110px]"
    animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">

      <motion.div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 shadow-sm shadow-cyan-100/60"
        initial={{ opacity: 0, y: 20, scale: 0.75, rotate: -12 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, type: "spring", stiffness: 140 }}
      >
        <Building2 className="h-7 w-7 text-cyan-700" />
      </motion.div>

      <motion.p
        className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-700 sm:text-xs"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        The GROISH portfolio
      </motion.p>

      <motion.h2
        className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-slate-900 sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Built around useful{" "}
        <span className="text-cyan-600">specialization.</span>
      </motion.h2>

      <motion.p
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.32 }}
      >
        Each company has a distinct role, market, and operating identity.
        Together, WebCore360 and TransMedEx represent how GROISH turns
        capabilities into focused businesses.
      </motion.p>

      {/* Heading accent */}
      <motion.div
        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-200 via-cyan-600 to-blue-400"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 65, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.4 }}
      />
    </div>

    {/* Company cards */}
    <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">

      {companies.map((company, index) => {
        const Icon = company.icon;

        return (
          <motion.article
            key={company.name}
            className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-colors duration-500 hover:border-cyan-200 hover:shadow-[0_25px_65px_rgba(8,145,178,0.13)]"
            initial={{
              opacity: 0,
              y: 55,
              scale: 0.94,
              filter: "blur(7px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            {/* Image area */}
            <div className="relative min-h-[250px] overflow-hidden sm:min-h-[300px]">

              <motion.img
                src={company.image}
                alt={company.alt}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Company accent overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${company.accent} opacity-55 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-slate-950/10" />

              {/* Animated glow */}
              <motion.div
                className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-cyan-300/20 blur-[75px]"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Company identity badge */}
              <motion.div
                className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/65 px-3 py-2.5 text-white shadow-lg backdrop-blur-xl sm:left-7 sm:top-7"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: 0.25 + index * 0.15 }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-black tracking-[-0.04em] text-slate-950">
                  {company.logo}
                </span>

                <Icon className="h-5 w-5 text-cyan-200" />
              </motion.div>

              {/* Image heading */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <motion.p
                  className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200 sm:text-xs"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.35 + index * 0.15 }}
                >
                  {company.category}
                </motion.p>

                <motion.h3
                  className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-white drop-shadow-lg sm:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.45 + index * 0.15 }}
                >
                  {company.name}
                </motion.h3>

                <motion.div
                  className="mt-3 h-0.5 rounded-full bg-gradient-to-r from-cyan-300 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: 55 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.55 + index * 0.15 }}
                />
              </div>

              {/* Image border */}
              <div className="pointer-events-none absolute inset-0 border-b border-white/10" />
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col p-5 sm:p-7">

              <motion.p
                className="flex-1 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: 0.25 + index * 0.15 }}
              >
                {company.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                className="mt-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.65, delay: 0.35 + index * 0.15 }}
              >
                <Button
                  asChild
                  className="w-full rounded-xl bg-slate-950 px-6 py-5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-700/20 sm:w-auto"
                >
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit {company.name}

                    <motion.span
                      className="ml-2 inline-flex"
                      whileHover={{ x: 4, y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.article>
        );
      })}
    </div>
  </div>
</motion.section>

     {/* Go Deeper Section */}
<motion.section
  className="relative isolate overflow-hidden border-t border-white/10 bg-slate-900 py-20 text-white sm:py-24"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.12 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Background glow */}
  <motion.div
    className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-[100px]"
    animate={{
      x: [0, 40, 0],
      y: [0, 25, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[110px]"
    animate={{
      x: [0, -35, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">

      <motion.p
        className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Go deeper
      </motion.p>

      <motion.h2
        className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        See how the{" "}
        <span className="text-cyan-300">GROISH ecosystem</span>{" "}
        fits together.
      </motion.h2>

      <motion.p
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.35 }}
      >
        Visit the dedicated Companies experience for the full ecosystem map,
        operating model, business differences, and spotlight details.
      </motion.p>

      {/* Accent line */}
      <motion.div
        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-300"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 65, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* CTA */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 22, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <Button
          asChild
          size="lg"
          className="group w-full rounded-xl bg-white px-7 py-6 font-bold text-slate-950 shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-cyan-100 hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)] sm:w-auto"
        >
          <Link to="/companies#inside-groish">
            Open Inside GROISH
            <motion.span
              className="ml-2 inline-flex"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </Button>
      </motion.div>
    </div>
  </div>
</motion.section>


{/* Final CTA Section */}
<motion.section
  aria-labelledby="explore-final-cta-heading"
  className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.12 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Background gradients */}
  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.18),transparent_32%)]"
    aria-hidden="true"
  />

  {/* Animated glow elements */}
  <motion.div
    className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-[100px]"
    animate={{
      x: [0, 45, 0],
      y: [0, 25, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[110px]"
    animate={{
      x: [0, -40, 0],
      y: [0, -25, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl">

      <motion.p
        className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Explore the ecosystem
      </motion.p>

      <motion.h2
        id="explore-final-cta-heading"
        className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.85, delay: 0.2 }}
      >
        Find the Right Company{" "}
        <span className="text-cyan-300">for Your Needs.</span>
      </motion.h2>

      <motion.p
        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.35 }}
      >
        Explore the specialized companies within the GROISH business
        ecosystem and connect with the team best aligned to your goals.
      </motion.p>

      {/* Animated accent */}
      <motion.div
        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 75, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.4 }}
      />

      {/* CTA Buttons */}
      <motion.div
        className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        <Button
          asChild
          size="lg"
          className="group w-full rounded-xl bg-emerald-500 px-7 py-6 font-bold text-white shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25 sm:w-auto"
        >
          <a
            href="https://www.transmedex.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit TransMedEx
            <motion.span
              className="ml-2 inline-flex"
              whileHover={{ x: 4, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </a>
        </Button>

        <Button
          asChild
          size="lg"
          className="group w-full rounded-xl bg-cyan-300 px-7 py-6 font-bold text-slate-950 shadow-lg shadow-cyan-400/15 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-xl hover:shadow-cyan-400/25 sm:w-auto"
        >
          <a
            href="https://webcore360.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit WebCore360
            <motion.span
              className="ml-2 inline-flex"
              whileHover={{ x: 4, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </a>
        </Button>
      </motion.div>
    </div>
  </div>
</motion.section>
    </main>
  </div>
);

export default ExploreOurCompaniesPage;
