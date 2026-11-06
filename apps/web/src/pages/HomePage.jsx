import React, { lazy, Suspense, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSlider from '@/components/HeroSlider';
import WhatWeDo from '@/components/WhatWeDo';
import GroishEcommerce from '@/components/GroishEcommerce';
import EcosystemMarquee from '@/components/EcosystemMarquee';
import AdSenseAd from '@/components/AdSenseAd';

const InsideGroish = lazy(() => import('@/components/InsideGroish'));
const KKMartCaseStudy = lazy(() => import('@/components/KKMartCaseStudy'));
const GlobalPresence = lazy(() => import('@/components/GlobalPresence'));
const AboutGroish = lazy(() => import('@/components/AboutGroish'));
const ContactForm = lazy(() => import('@/components/ContactForm'));

const lahoreOffice = '/optimized-images/IMG_6247.webp';
const officeWorkspace = '/optimized-images/IMG_6258.webp';
const officeInterior = '/optimized-images/IMG_6262.webp';
const usaOffice = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp';
import { ArrowUpRight, CheckCircle2, Code2, Globe2, GraduationCap, Headphones, Layers3, LineChart } from 'lucide-react';

const HomePage = () => {
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setLoadBelowFold(true);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleScroll, { passive: true });
    // Fallback if no interaction
    const timer = setTimeout(handleScroll, 3000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whyStories = [
    {
      number: '01',
      title: 'Specialized Businesses',
      description: 'Focused companies bring sharper expertise, practical depth, and the right capabilities to every challenge.',
      image: lahoreOffice,
      icon: Layers3,
      label: 'Focused capability',
    },
    {
      number: '02',
      title: 'Shared Vision',
      description: 'Every company moves with a common direction: create meaningful value for businesses, people, and partners.',
      image: officeWorkspace,
      icon: LineChart,
      label: 'One connected direction',
    },
    {
      number: '03',
      title: 'Global Mindset',
      description: 'Local understanding and global perspective work together to help ambitious ideas travel further.',
      image: usaOffice,
      icon: Globe2,
      label: 'Local roots, global outlook',
    },
    {
      number: '04',
      title: 'Continuous Growth',
      description: 'We keep learning, improving, and building the systems that turn momentum into long-term progress.',
      image: officeInterior,
      icon: ArrowUpRight,
      label: 'Always moving forward',
    },
  ];

  const valueStreams = [
    { title: 'Build', description: 'Technology, web development, and digital growth capabilities for modern businesses.', icon: Code2 },
    { title: 'Support', description: 'Healthcare, medical billing, and business support designed around dependable operations.', icon: Headphones },
    { title: 'Grow', description: 'Amazon services and e-commerce expertise that help businesses move with clarity.', icon: LineChart },
    { title: 'Learn', description: 'Practical Amazon education and training for people building their next opportunity.', icon: GraduationCap },
  ];

  return (
    <div className="groish-page-shell pt-20">
      <Helmet>
        <title>GROISH | Building Businesses. Creating Possibilities.</title>
        <meta name="description" content="GROISH brings together technology, healthcare support, e-commerce, digital growth, and education to help ideas move forward." />
        <link rel="canonical" href="https://groish.com/" />
        <meta property="og:title" content="GROISH | Building Businesses. Creating Possibilities." />
        <meta property="og:description" content="Discover GROISH and the capabilities helping ambitious ideas move forward." />
        <meta property="og:url" content="https://groish.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Corporation',
          name: 'GROISH',
          url: 'https://groish.com/',
          description: 'GROISH brings together technology, healthcare support, e-commerce, digital growth, and education to help ideas move forward.',
          subOrganization: [
            { '@type': 'Organization', name: 'WebCore360' },
            { '@type': 'Organization', name: 'TransMedEx' },
            { '@type': 'Organization', name: 'E-commerce / Amazon Operations' },
          ],
        })}</script>
      </Helmet>

      <HeroSlider />

      <EcosystemMarquee />

      <section className="groish-light-band overflow-hidden bg-white py-20 sm:py-28">
        <div className="container relative mx-auto px-4">
          <div className="mb-12 max-w-3xl mx-auto text-center sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-7 inline-flex"
            >
              <div className="relative group rounded-full p-[1.5px] overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.18),0_8px_30px_rgba(15,23,42,0.10)]">

                {/* Animated running gradient border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#0f172a,#2563eb,#60a5fa,#1d4ed8,#0f172a)]"
                />

                {/* Badge background */}
                <div className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-3">

                  {/* Glowing indicator */}
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-70" />
                    <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                  </span>

                  <p className="premium-eyebrow mb-0 font-['Manrope'] text-xs font-bold tracking-[0.15em] text-blue-100">
                    The GROISH difference
                  </p>

                  <span className="text-blue-400 text-xs">✦</span>
                </div>
              </div>
            </motion.div>

            <h2 className="premium-section-title max-w-1xl mx-auto text-3xl sm:text-5xl font-['Manrope']">
              Built as a group. Designed to move businesses forward.
            </h2>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">

            <div className="flex flex-col gap-3">
              {whyStories.map((story, index) => {
                const Icon = story.icon;
                const isActive = activeWhyIndex === index;

                return (
                  <motion.button
                    key={story.number}
                    type="button"
                    onClick={() => setActiveWhyIndex(index)}
                    onMouseEnter={() => setActiveWhyIndex(index)}
                    onFocus={() => setActiveWhyIndex(index)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.985 }}
                    className={`relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 sm:p-7 ${isActive
                        ? "border-blue-300/80 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-[0_12px_35px_rgba(37,99,235,0.12)]"
                        : "border-transparent bg-slate-50/50 hover:border-slate-200 hover:bg-white"
                      }`}
                    aria-pressed={isActive}
                  >
                    <motion.span
                      animate={{
                        color: isActive ? "#2563eb" : "#94a3b8",
                        scale: isActive ? 1.1 : 1
                      }}
                      className="text-xs font-extrabold tracking-[0.18em]"
                    >
                      {story.number}
                    </motion.span>

                    <span className={`flex-1 font-['Manrope'] text-xl tracking-[-0.045em] sm:text-3xl ${isActive ? "font-extrabold text-slate-950" : "font-bold text-slate-500"
                      }`}>
                      {story.title}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isActive ? 0 : -45,
                        scale: isActive ? 1 : 0.9
                      }}
                      transition={{ duration: 0.4 }}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${isActive
                          ? "bg-blue-600 text-white shadow-[0_5px_18px_rgba(37,99,235,0.35)]"
                          : "bg-white text-slate-400 shadow-sm"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={whyStories[activeWhyIndex].image}
                  src={whyStories[activeWhyIndex].image}
                  alt={whyStories[activeWhyIndex].title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  initial={{ opacity: 0, scale: 1.08, x: 24 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.04, x: -24 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={whyStories[activeWhyIndex].number}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{whyStories[activeWhyIndex].label}</p>
                    <p className="mt-3 max-w-xl text-lg leading-7 text-white/85 sm:text-xl">{whyStories[activeWhyIndex].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-[0.2em] text-white/80 backdrop-blur sm:right-7 sm:top-7">{whyStories[activeWhyIndex].number} / 04</div>
            </div>
          </div>
        </div>
      </section>

      <div className="groish-section-frame">
        <WhatWeDo />

        <Suspense fallback={<div className="min-h-[250px]" />}>
          <AboutGroish />
        </Suspense>

        <GroishEcommerce />

        <Suspense fallback={<div className="min-h-[350px]" />}>
          <InsideGroish />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px] bg-slate-950" />}>
          <KKMartCaseStudy />
        </Suspense>

        <Suspense fallback={<div className="min-h-[250px]" />}>
          <GlobalPresence />
        </Suspense>
      </div>

      <section className="groish-light-band relative overflow-hidden bg-slate-50 py-20 sm:py-24">
  {/* Background Effects */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[100px]" />

  <div className="container relative z-10 mx-auto px-4">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="premium-eyebrow"
      >
        Our operating model
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="premium-section-title text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
      >
        How GROISH <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">creates value</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="premium-section-copy mx-auto mt-4 max-w-xl"
      >
        A connected group of capabilities, brought together for businesses and people at different stages of growth.
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 85 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
      />
    </motion.div>

    {/* Value Cards */}
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {valueStreams.map(({ title, description, icon: Icon }, index) => (
        <motion.div
          key={title}
          initial={{
            opacity: 0,
            y: 55,
            scale: 0.92,
            rotateX: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -12,
            scale: 1.035,
            transition: { duration: 0.3 },
          }}
          className="group relative"
        >
          {/* Card Glow */}
          <div className="absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-br from-blue-400/0 via-cyan-400/0 to-blue-500/0 opacity-0 blur-md transition-all duration-500 group-hover:from-blue-400/50 group-hover:via-cyan-400/40 group-hover:to-blue-500/50 group-hover:opacity-100" />

          <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-[0_25px_55px_rgba(37,99,235,0.13)]">

            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 shadow-sm ring-1 ring-blue-100 transition-all duration-500 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
            >
              <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
            </motion.div>

            {/* Card Content */}
            <h3 className="mt-8 text-xl font-extrabold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-700">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {description}
            </p>

            {/* Bottom Accent */}
            <div className="mt-6 h-[2px] w-10 rounded-full bg-blue-200 transition-all duration-500 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      <section className="groish-light-band relative overflow-hidden bg-white py-20 sm:py-24">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-[100px]" />
  <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-[100px]" />

  <div className="container relative z-10 mx-auto px-4">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <p className="premium-eyebrow">
        Our Learning Process
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="premium-section-title text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
      >
        A simple path to <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">traction</span>
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 85 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
      />
    </motion.div>

    {/* Learning Steps */}
    <div className="relative mx-auto max-w-5xl">

      {/* Connecting Line - Desktop */}
      <div className="absolute left-[10%] right-[10%] top-[29px] hidden h-[2px] overflow-hidden bg-slate-200 md:block">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
        />
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5 md:gap-4">

        {["Enrollment", "Live Classes", "Practical Tasks", "Account Setup", "First Sale"].map((step, i) => (
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: i * 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.045,
              transition: { duration: 0.25 },
            }}
            className="group relative"
          >
            <div className="relative flex h-full flex-col items-center rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-blue-50 via-white to-white p-6 shadow-[0_16px_30px_rgba(15,23,42,0.05)] transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-[0_22px_45px_rgba(37,99,235,0.13)]">

              {/* Step Number */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(59,130,246,0.08)",
                    "0 0 0 9px rgba(59,130,246,0)",
                    "0 0 0 0px rgba(59,130,246,0.08)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
                className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-blue-950 text-lg font-extrabold text-white shadow-[0_10px_25px_rgba(15,23,42,0.2)] ring-4 ring-white transition-all duration-500 group-hover:from-blue-600 group-hover:to-cyan-500"
              >
                {i + 1}
              </motion.div>

              {/* Step Title */}
              <p className="text-center text-sm font-extrabold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-base">
                {step}
              </p>

              {/* Bottom Accent */}
              <div className="mt-4 h-[3px] w-8 rounded-full bg-blue-200 transition-all duration-500 group-hover:w-14 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400" />

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* <section className="bg-slate-100/50 py-8 border-y border-slate-200/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <AdSenseAd variant="banner" format="auto" />
        </div>
      </section> */}

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative overflow-hidden border-y border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.2),transparent_38%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_45%,#f8fafc_100%)] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-[-10%] top-1/2 h-px w-[120%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/70 to-transparent opacity-25 shadow-[0_0_44px_rgba(96,165,250,0.45)]"
          />
          <div
            className="absolute right-[12%] top-8 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl"
          />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-blue-600">A connected ecosystem</p>
            <h2 className="text-3xl font-black tracking-[-0.07em] text-slate-950 sm:text-6xl">Enter the GROISH business ecosystem.</h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {[{ name: 'Webcore360', image: lahoreOffice, tone: 'from-blue-500/35 via-transparent to-transparent' }, { name: 'TransMedEx', image: usaOffice, tone: 'from-emerald-500/35 via-transparent to-transparent' }].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.tone}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-100/80">GROISH company</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">{item.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_30%)]" />
        <div className="container relative mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="premium-eyebrow !text-cyan-300">Ready to start</p>
              <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">Have a challenge worth solving?</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">Tell us what you are building, improving, or scaling. Our team will help you find the right next step across the GROISH ecosystem.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> Clear, practical recommendations</li>
                <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> Specialized teams for each need</li>
                <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> A focused path forward</li>
              </ul>
            </div>
            <div>
              {loadBelowFold ? (
                <Suspense fallback={<div className="h-96" />}>
                  <ContactForm compact />
                </Suspense>
              ) : (
                <div className="h-96 rounded-2xl bg-white/5 border border-white/10" />
              )}
            </div>
          </div>
        </div>
      </section> */}
      <section className="group relative isolate overflow-hidden bg-slate-950 py-14 text-white sm:py-16 lg:py-20">

  {/* Background Gradients */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(ellipse_at_90%_80%,rgba(37,99,235,0.22),transparent_35%)]" />

  {/* Animated Background Orbs */}
  <motion.div
    animate={{
      x: [0, 35, 0],
      y: [0, -25, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
  />

  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 30, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[110px]"
  />

  {/* Background Grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:55px_55px]" />

  <div className="container relative z-10 mx-auto max-w-6xl px-4">

    {/* Main Grid */}
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full pt-2 lg:sticky lg:top-24"
      >

        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-blue-950/90 via-slate-900 to-cyan-950/80 px-5 py-3 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
          </span>

          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-200">
            Ready to start
          </span>

          <span className="text-cyan-400">✦</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-[-0.055em] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.3)] sm:text-5xl lg:text-6xl"
        >
          Have a challenge
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            worth solving?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg"
        >
          Tell us what you are building, improving, or scaling. Our team will
          help you find the right next step across the GROISH ecosystem.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"
        />

        {/* Benefits */}
        <div className="mt-9 space-y-4">
          {[
            "Clear, practical recommendations",
            "Specialized teams for each need",
            "A focused path forward",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: 0.35 + index * 0.15,
              }}
              whileHover={{ x: 7 }}
              className="group/item flex items-center gap-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition-all duration-300 group-hover/item:border-cyan-300/60 group-hover/item:bg-cyan-400/20 group-hover/item:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <span className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover/item:text-cyan-200 sm:text-base">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-9 text-xs font-medium tracking-wide text-slate-500"
        >
          One conversation. Clear direction. Better possibilities.
        </motion.p>

      </motion.div>

      {/* RIGHT CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full min-w-0"
      >

        {/* Form Glow */}
        <div className="absolute -inset-[1px] rounded-[1.8rem] bg-gradient-to-br from-cyan-400/40 via-blue-500/20 to-cyan-400/30 opacity-70 blur-sm" />

        {/* Form Container */}
        <div className="relative w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/90 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-3">

          {/* Top Accent */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {loadBelowFold ? (
            <Suspense
              fallback={
                <div className="flex min-h-96 items-center justify-center rounded-2xl bg-white/5">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
                    Loading contact form...
                  </div>
                </div>
              }
            >
              <ContactForm compact />
            </Suspense>
          ) : (
            <div className="flex min-h-96 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 animate-pulse rounded-full border border-cyan-400/30 bg-cyan-400/10" />
                <p className="text-sm font-medium text-slate-400">
                  Contact form will load here
                </p>
              </div>
            </div>
          )}

        </div>
      </motion.div>

    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;