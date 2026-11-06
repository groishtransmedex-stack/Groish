import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronDown, CircleDot, Layers3, Sparkles, Target, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdSenseAd from '@/components/AdSenseAd';
import { servicesData } from '@/data/servicesData';
import { servicePageConfig, siteUrl } from '@/data/servicePageConfig';

const Reveal = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
    {children}
  </motion.div>
);

const ServiceDetail = () => {
  const { slug } = useParams();
  const baseService = servicesData[slug];
  const page = servicePageConfig[slug];
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const [activeTab, setActiveTab] = useState('capabilities');
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const visualY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 110]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!baseService || !page?.experience) {
    return <Navigate to="/services" replace />;
  }

  const Icon = baseService.icon;
  const experience = page.experience;
  const relatedServices = Object.values(servicePageConfig)
    .filter((candidate) => candidate.slug !== page.slug)
    .slice(0, 3);
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    serviceType: page.schemaInfo.serviceType,
    description: page.metaDescription,
    url: page.url,
    areaServed: page.schemaInfo.areaServed,
    provider: { '@type': 'Organization', name: 'GROISH', url: siteUrl },
  };
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.seoTitle,
    description: page.metaDescription,
    url: page.url,
    isPartOf: { '@type': 'WebSite', name: 'GROISH', url: siteUrl },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const tabs = {
    capabilities: { label: 'Capabilities', icon: Layers3, items: experience.features },
    deliverables: { label: 'Deliverables', icon: Target, items: experience.deliverables },
    technologies: { label: 'Technology', icon: Workflow, items: page.technologies },
  };

  return (
    <>
      <Helmet>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywords.join(', ')} />
        <link rel="canonical" href={page.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.ogTitle} />
        <meta property="og:description" content={page.ogDescription} />
        <meta property="og:url" content={page.url} />
        <meta property="og:site_name" content="GROISH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.ogTitle} />
        <meta name="twitter:description" content={page.ogDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section ref={heroRef} className="service-hero relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="service-hero__glow service-hero__glow--one" />
        <div className="service-hero__glow service-hero__glow--two" />
        <div className="container relative mx-auto px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
          <Link to="/services" className="mb-16 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white mt-10"><ArrowLeft className="h-4 w-4" /> Back to services</Link>
         <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

  {/* LEFT CONTENT */}
  <motion.div
    initial={{ opacity: 0, x: -100, y: 35, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ type: 'spring', stiffness: 65, damping: 16 }}
  >
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200"
    >
      <Sparkles className="h-4 w-4" />
      {experience.kicker}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.1 }}
      whileHover={{ scale: 1.1, rotate: 8 }}
      className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-lg shadow-cyan-400/10"
    >
      <Icon className="h-8 w-8 text-cyan-200" />
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 55, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false }}
      transition={{ duration: 0.85, delay: 0.15 }}
className="max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-5xl lg:text-4xl"    >
      {page.h1}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
    >
      {page.shortDescription}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="mt-9 flex flex-col gap-3 sm:flex-row"
    >
      <Link to="/contact">
        <motion.div
          whileHover={{ scale: 1.06, y: -5 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Button
            size="lg"
            className="group rounded-full bg-cyan-300 px-7 font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition-all duration-300 hover:bg-cyan-200 hover:shadow-xl hover:shadow-cyan-300/30"
          >
            Discuss your initiative
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </motion.div>
      </Link>

      <motion.a
        href="#approach"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.96 }}
        className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200"
      >
        Explore the approach
      </motion.a>
    </motion.div>
  </motion.div>

  {/* RIGHT VISUAL */}
  <motion.div
    style={{ y: visualY }}
    initial={{ opacity: 0, x: 100, scale: 0.82, rotate: 5, filter: 'blur(12px)' }}
    whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{
      type: 'spring',
      stiffness: 60,
      damping: 15,
      delay: 0.2
    }}
    whileHover={{ scale: 1.015 }}
    className="service-hero__visual relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl sm:min-h-[390px]"
  >
    <motion.div
      animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.08, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="service-visual-grid absolute inset-0 opacity-60"
    />

    <motion.div
      animate={{ rotate: [0, 3, 0], scale: [1, 1.025, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-8 rounded-[1.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-blue-500/5 to-transparent"
    />

    <motion.div
      initial={{ opacity: 0, x: -40, y: -20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="absolute left-8 top-9 max-w-[12rem] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
        Visual direction
      </p>
      <p className="mt-2 text-sm leading-5 text-white/80">
        {experience.imagePrompt.split(',').slice(0, 2).join(',')}
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false }}
      transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.55 }}
      animate={{ y: [0, -12, 0] }}
      whileHover={{ scale: 1.15, rotate: 12 }}
      className="absolute bottom-8 right-8 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10 shadow-lg shadow-cyan-300/10 sm:h-28 sm:w-28"
    >
      <Icon className="h-10 w-10 text-cyan-100 sm:h-12 sm:w-12" />
    </motion.div>
  </motion.div>

</div>
        </div>
      </section>

     <section id="approach" className="service-section overflow-hidden bg-white">
  <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">

    {/* LEFT: SECTION HEADING */}
    <motion.div
      initial={{ opacity: 0, x: -75, y: 25, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 65, damping: 16 }}
      className="lg:sticky lg:top-28 lg:self-start"
    >
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="service-eyebrow"
      >
        01 / Industry context
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 45, filter: 'blur(7px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="service-heading mt-4 !text-3xl !leading-[1.12] sm:!text-4xl lg:!text-5xl"
      >
        Built for the realities behind{' '}
        <span className="text-cyan-600">
          {page.name.toLowerCase()}.
        </span>
      </motion.h2>
    </motion.div>

    {/* RIGHT: INDUSTRY CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 75, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.85, delay: 0.15 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="text-lg leading-8 text-slate-600 sm:text-lg sm:leading-6"
      >
        {experience.industryOverview}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.35 }}
        className="mt-6 leading-6 text-slate-600"
      >
        {page.intro}
      </motion.p>

      {/* PAIN POINT CARDS */}
      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        {baseService.painPoints.map((point, index) => (
          <motion.div
            key={point}
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.92,
              filter: 'blur(6px)'
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)'
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              type: 'spring',
              stiffness: 85,
              damping: 15
            }}
            whileHover={{
              y: -7,
              scale: 1.025,
              borderColor: '#fda4af',
              boxShadow: '0 12px 28px rgba(225, 29, 72, 0.09)'
            }}
            className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-sm leading-6 text-slate-700 transition-colors duration-300"
          >
            {point}
          </motion.div>
        ))}
      </div>
    </motion.div>

  </div>
</section>

     <section className="service-section overflow-hidden bg-slate-950 text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, x: -65, y: 25, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <p className="service-eyebrow text-cyan-200">
        02 / The Groish approach
      </p>

    <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="mt-4 block max-w-4xl !text-3xl !font-extrabold !leading-[1.15] !text-white !opacity-100 sm:!text-4xl lg:!text-5xl"
>
  A focused system for moving from uncertainty to{' '}
  <span className="!text-cyan-400">useful delivery.</span>
</motion.h2>
    </motion.div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
      {baseService.solutions.map((solution, index) => (
        <motion.div
          key={solution.title}
          initial={{
            opacity: 0,
            y: 75,
            scale: 0.88,
            rotateX: 12,
            filter: 'blur(8px)'
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)'
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.75,
            delay: index * 0.15,
            type: 'spring',
            stiffness: 75,
            damping: 15
          }}
          whileHover={{
            y: -12,
            scale: 1.035,
            transition: { duration: 0.25 }
          }}
          className="service-dark-card group"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
            className="inline-block text-sm font-black text-cyan-200"
          >
            0{index + 1}
          </motion.span>

          <h3 className="mt-10 text-xl font-bold transition-colors duration-300 group-hover:text-cyan-300 sm:mt-12">
            {solution.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {solution.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

     <section className="service-section overflow-hidden bg-slate-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, x: -65, y: 25, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <p className="service-eyebrow">
        03 / What the engagement includes
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="service-heading mt-4 max-w-3xl !text-3xl !leading-[1.12] sm:!text-4xl lg:!text-5xl"
      >
        A practical engagement, shaped around{' '}
        <span className="text-cyan-600">your priorities.</span>
      </motion.h2>
    </motion.div>

    <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">

      {/* LEFT: TABS */}
      <motion.div
        initial={{ opacity: 0, x: -75, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 lg:flex-col"
      >
        {Object.entries(tabs).map(([key, tab], index) => {
          const TabIcon = tab.icon;

          return (
            <motion.button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-4 text-left text-sm font-bold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/15'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-cyan-700'
              }`}
            >
              <TabIcon className="h-4 w-4 shrink-0" />
              {tab.label}
            </motion.button>
          );
        })}
      </motion.div>

      {/* RIGHT: CONTENT PANEL */}
      <motion.div
        initial={{ opacity: 0, x: 75, y: 35, scale: 0.94, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.85, delay: 0.25 }}
        className="min-h-[320px] rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 45, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -35, filter: 'blur(5px)' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="mb-8 flex items-center gap-3">
              <motion.span
                initial={{ rotate: -90, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              >
                <CircleDot className="h-5 w-5 text-cyan-500" />
              </motion.span>

              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {tabs[activeTab].label}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tabs[activeTab].items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.025,
                    borderColor: '#67e8f9',
                    boxShadow: '0 10px 25px rgba(8, 145, 178, 0.08)'
                  }}
                  className="rounded-2xl border border-slate-200 p-5 transition-colors duration-300"
                >
                  <Check className="h-5 w-5 text-cyan-600" />

                  <p className="mt-4 font-semibold leading-6 text-slate-800">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </div>
  </div>
</section>

      {slug === 'artificial-intelligence' && <section className="service-section bg-violet-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="service-eyebrow text-violet-200">AI lifecycle and architecture</p><h2 className="service-heading mt-4 text-white">From business problem to an AI capability people can trust.</h2><p className="mt-6 leading-8 text-violet-100">The architecture changes with the use case, but the discipline stays consistent: grounded data, fit-for-purpose models, clear interfaces, measurable evaluation, and a monitored path into the workflow.</p></div><div className="ai-architecture rounded-[2rem] border border-violet-200/20 bg-white/5 p-6 sm:p-8"><div className="grid gap-3 sm:grid-cols-2">{['Business problem', 'Data and knowledge', 'Experimentation', 'Model or assistant', 'API and workflow integration', 'Testing and evaluation', 'Deployment and monitoring', 'Optimization and governance'].map((item, index) => <div key={item} className="ai-architecture__node"><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></div></div></section>}

      {slug === 'ecommerce-development' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="service-eyebrow text-cyan-200">The commerce journey</p><h2 className="service-heading mt-4 text-white">Every touchpoint should help the customer move forward.</h2><p className="mt-6 leading-8 text-blue-100">We connect customer-facing experience design with the systems behind it, so product discovery, transaction confidence, fulfillment, and post-purchase care feel like one journey.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Discover and search', 'Evaluate the product', 'Add to cart', 'Checkout and payment', 'Fulfillment and delivery', 'Account and support', 'Retention and personalization', 'Analytics and optimization'].map((item, index) => <div key={item} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></div>)}</div></div></div></section>}

      {slug === 'gaming-development' && <section className="service-section bg-indigo-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="service-eyebrow text-violet-200">The game development lifecycle</p><h2 className="service-heading mt-4 text-white">Protect the player experience from concept through live updates.</h2><p className="mt-6 leading-8 text-indigo-100">We treat creative direction, gameplay feel, technical performance, online reliability, and player insight as connected parts of the product—not separate phases that only meet at launch.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Concept and audience', 'Prototype and vertical slice', 'Production and content', 'Multiplayer and services', 'QA and optimization', 'Launch and deployment', 'Analytics and player feedback', 'Updates and live operations'].map((item, index) => <div key={item} className="rounded-2xl border border-violet-200/20 bg-white/5 p-5"><span className="text-xs font-black text-violet-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></div>)}</div></div></div></section>}

      {slug === 'iot-development' && <section className="service-section bg-cyan-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="service-eyebrow text-cyan-200">The IoT architecture</p><h2 className="service-heading mt-4 text-white">A secure path from physical signal to operational action.</h2><p className="mt-6 leading-8 text-cyan-100">We design the layers together so device data remains useful, observable, protected, and connected to the decisions, dashboards, and automations that create value.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Physical devices and sensors', 'Connectivity and protocols', 'Gateway and edge processing', 'Cloud ingestion and storage', 'Data processing and analytics', 'Dashboards and APIs', 'Alerts and automation', 'Device management and security'].map((item, index) => <div key={item} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></div>)}</div></div></div></section>}

      {slug === 'quality-assurance' && <section className="service-section bg-slate-900 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The QA lifecycle</p><h2 className="service-heading mt-4 text-white">Quality signals should arrive before the release decision.</h2><p className="mt-6 leading-8 text-slate-300">Our QA lifecycle connects requirements to test evidence, defect learning, regression protection, and release validation so testing remains part of delivery instead of a final inspection.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Requirements and acceptance criteria', 'Test planning and risk mapping', 'Test cases, data, and environments', 'Manual and automated execution', 'Defect resolution and triage', 'Regression and change validation', 'Quality metrics and residual risk', 'Release readiness and sign-off'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'software-development' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">Software architecture and lifecycle</p><h2 className="service-heading mt-4 text-white">From workflow insight to software that can be operated and evolved.</h2><p className="mt-6 leading-8 text-blue-100">We align product discovery, architecture, engineering, testing, deployment, and support so technical decisions remain connected to the people and processes the software exists to serve.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Users, workflows, and requirements', 'Frontend and experience layer', 'Backend services and business rules', 'APIs, data, and integrations', 'Cloud infrastructure and security', 'Testing and observability', 'Deployment and release operations', 'Maintenance and modernization'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'staff-augmentation' && <section className="service-section bg-slate-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">Flexible team extension</p><h2 className="service-heading mt-4 text-white">Add the right specialist without losing the way your team works.</h2><p className="mt-6 leading-8 text-slate-300">The engagement model can change with the roadmap. The constant is clear context, practical collaboration, visible ownership, and a deliberate path for scaling or handing knowledge back to your organization.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Dedicated specialist', 'Part-time specialist', 'Project or milestone team', 'Blended internal and external team', 'Scale-up for launch or peak demand', 'Scale-down after a delivery phase', 'Embedded documentation and pairing', 'Structured transition and handoff'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'ui-ux-services' && <section className="service-section bg-sky-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The design process</p><h2 className="service-heading mt-4 text-white">Move from user insight to a design system people can build with.</h2><p className="mt-6 leading-8 text-sky-100">We keep research, structure, interaction, visual design, validation, accessibility, and handoff connected so the final interface is both desirable for users and practical for the product team.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Research and discovery', 'Experience strategy', 'Wireframes and user flows', 'Interactive prototype', 'Usability and accessibility testing', 'Final responsive design', 'Design system components', 'Development handoff and QA'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'web-development' && <section className="service-section bg-cyan-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">Performance and SEO-ready architecture</p><h2 className="service-heading mt-4 text-white">Make the web experience faster to use and easier to find.</h2><p className="mt-6 leading-8 text-cyan-100">Performance and discoverability are shaped by architecture, content, code, assets, integrations, and hosting. We address them as part of the build rather than as a last-minute checklist.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Responsive and mobile-first behavior', 'Core Web Vitals and loading paths', 'Image, font, script, caching, and rendering strategy', 'Semantic markup and crawlable information architecture', 'Metadata, structured content, canonical routes, and internal linking', 'Accessibility, analytics, monitoring, and real-user feedback'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'call-center-services' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The call-center workflow</p><h2 className="service-heading mt-4 text-white">Every conversation should end with a clear next step.</h2><p className="mt-6 leading-8 text-blue-100">We connect customer intent, agent guidance, verification, resolution, CRM ownership, follow-up, and reporting into a workflow supervisors can coach and customers can feel.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Incoming call or outbound task', 'Agent greeting and intent discovery', 'Verification and context review', 'Resolution, booking, or qualification', 'CRM update and ownership', 'Follow-up task or escalation', 'Quality review and coaching', 'Reporting and service improvement'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{['Response time', 'Resolution rate', 'Service level', 'Customer satisfaction', 'Call abandonment'].map((metric) => <div key={metric} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5"><p className="text-sm font-bold text-cyan-100">{metric}</p><p className="mt-3 text-xs leading-5 text-blue-100">General industry KPI; target and meaning depend on the service model.</p></div>)}</div></div></section>}

      {slug === 'it-support' && <section className="service-section bg-slate-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The incident lifecycle</p><h2 className="service-heading mt-4 text-white">Restore service quickly, then make the next incident less likely.</h2><p className="mt-6 leading-8 text-slate-300">A clear workflow helps support teams balance urgency with safe diagnosis, communication, verification, and learning.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Detection and alert', 'Ticket creation and context', 'Diagnosis and priority', 'Resolution or escalation', 'Verification with user or system', 'Documentation and knowledge update', 'Recurring-issue review', 'Service reporting and improvement'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Critical', 'High', 'Normal', 'Low'].map((priority) => <div key={priority} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5"><p className="font-bold text-cyan-100">{priority} priority</p><p className="mt-3 text-sm leading-6 text-slate-300">Priority is determined by impact, urgency, affected users, risk, and service expectations.</p></div>)}</div></div></section>}

      {slug === 'it-staffing' && <section className="service-section bg-indigo-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-violet-200">The recruitment timeline</p><h2 className="service-heading mt-4 text-white">Move from an open requirement to a confident technical hire.</h2><p className="mt-6 leading-8 text-indigo-100">We keep role clarity, candidate evidence, stakeholder alignment, candidate experience, and onboarding connected so hiring decisions support delivery rather than simply fill a seat.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Requirement and success profile', 'Candidate search and sourcing', 'Initial screening and fit review', 'Technical evaluation', 'Structured interview', 'Selection and offer support', 'Onboarding and first milestone', 'Workforce scaling review'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-violet-200/20 bg-white/5 p-5"><span className="text-xs font-black text-violet-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'end-to-end-sales-cycle-services' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The sales funnel and CRM workflow</p><h2 className="service-heading mt-4 text-white">Make every stage visible, owned, and ready for the next action.</h2><p className="mt-6 leading-8 text-blue-100">We support the operating work around the funnel while keeping methodology, messaging, qualification, and measurement aligned to your specific market and sales motion.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Lead generation and prospect research', 'Qualification and fit review', 'Outreach and response handling', 'Discovery and appointment setting', 'Proposal and commercial coordination', 'Negotiation and decision tracking', 'Conversion and customer handoff', 'Post-sale follow-up and nurture'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{['Lead quality', 'Response and contact activity', 'Stage movement and aging', 'Pipeline coverage', 'Follow-up completion'].map((metric) => <div key={metric} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5"><p className="text-sm font-bold text-cyan-100">{metric}</p><p className="mt-3 text-xs leading-5 text-blue-100">General sales-operations indicator; targets depend on the market and motion.</p></div>)}</div></div></section>}

      {slug === 'blockchain-development' && <section className="service-section bg-slate-950 text-white"><div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="service-eyebrow text-cyan-200">Security is part of the architecture</p><h2 className="service-heading mt-4 text-white">Protect the contract, the keys, the nodes, and the boundaries around them.</h2></div><div className="grid gap-4 sm:grid-cols-2">{['Threat modeling and trust-boundary review', 'Smart-contract unit, integration, and adversarial testing', 'Wallet, identity, permissions, and key-management controls', 'Node, API, dependency, monitoring, and incident-readiness review'].map((item) => <div key={item} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><Check className="h-5 w-5 text-cyan-200" /><p className="mt-4 leading-7 text-slate-200">{item}</p></div>)}</div></div></section>}
<section className="service-section overflow-hidden bg-white">
  <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

    {/* Left content */}
    <div>
      <motion.div
        initial={{ opacity: 1, x: -65, y: 25, filter: "blur(7px)" }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="service-eyebrow">04 / Implementation journey</p>

        <h2 className="service-heading mt-4 max-w-2xl !text-3xl !leading-[1.15] sm:!text-4xl lg:!text-5xl">
          A delivery rhythm that keeps the{" "}
          <span className="text-cyan-600">next decision visible.</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="service-timeline mt-12">
        {experience.timeline.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{
              opacity: 0,
              x: -55,
              y: 25,
              scale: 0.95,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.13,
              ease: "easeOut",
            }}
            whileHover={{
              x: 9,
              scale: 1.015,
              transition: { duration: 0.25 },
            }}
            className="service-timeline__item"
          >
            <motion.span
              initial={{ scale: 0.5, rotate: -35 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: index * 0.13 + 0.15,
              }}
              className="service-timeline__number"
            >
              0{index + 1}
            </motion.span>

            <div>
              <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Before / After card */}
    <motion.div
      initial={{
        opacity: 0,
        x: 75,
        y: 45,
        scale: 0.9,
        rotate: 2,
        filter: "blur(9px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0 25px 55px rgba(8, 145, 178, 0.14)",
        transition: { duration: 0.3 },
      }}
      className="relative self-start overflow-hidden rounded-[2rem] border border-cyan-100 bg-cyan-50 p-8 sm:p-10"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300 blur-3xl"
      />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700"
        >
          Before / after lens
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            Before
          </p>

          <p className="mt-3 text-lg leading-8 text-slate-700">
            {experience.comparison.before}
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="my-8 h-px origin-left bg-cyan-300"
        />

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
            After
          </p>

          <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
            {experience.comparison.after}
          </p>
        </motion.div>
      </div>
    </motion.div>

  </div>
</section>

<section className="service-section service-evolution overflow-hidden bg-slate-950 text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 1, y: 35, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="service-eyebrow text-cyan-200">
        Technology &amp; industry evolution
      </p>

      <h2 className="service-heading mt-4 max-w-4xl !text-3xl !leading-[1.15] !text-white sm:!text-4xl lg:!text-5xl">
        How {page.name.toLowerCase()} evolved into{" "}
        <span className="text-cyan-400">today’s delivery discipline.</span>
      </h2>

      <p className="mt-6 max-w-3xl leading-8 text-slate-300">
        A focused historical view helps explain why the tools, standards,
        platforms, and practices used today matter for this service.
      </p>
    </motion.div>

    {/* Evolution timeline */}
    <div className="service-evolution__track mt-14">
      {page.technologyEvolution.map((milestone, index) => (
        <motion.article
          key={`${milestone.period}-${milestone.title}`}
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
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.14,
            ease: "easeOut",
          }}
          whileHover={{
            y: -8,
            transition: { duration: 0.25 },
          }}
          className="service-evolution__item"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.14 + 0.15 }}
            className="service-evolution__period"
          >
            {milestone.period}
          </motion.span>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 12,
              delay: index * 0.14 + 0.2,
            }}
            className="service-evolution__dot"
          />

          <div className="service-evolution__content">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              {milestone.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              {milestone.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>

  </div>
</section>


<section className="service-section overflow-hidden bg-slate-50">
  <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

    {/* Industries */}
    <div>
      <motion.div
        initial={{ opacity: 1, x: -55, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.75 }}
      >
        <p className="service-eyebrow">05 / Where it creates value</p>

        <h2 className="service-heading mt-4 max-w-xl !text-3xl !leading-[1.15] sm:!text-4xl lg:!text-5xl">
          Designed for teams with{" "}
          <span className="text-cyan-600">real operating pressure.</span>
        </h2>
      </motion.div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {experience.industries.map((industry, index) => (
          <motion.div
            key={industry}
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.9,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: index * 0.09,
            }}
            whileHover={{
              y: -6,
              scale: 1.025,
              borderColor: "#67e8f9",
              boxShadow: "0 12px 28px rgba(8,145,178,0.10)",
            }}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 transition-colors"
          >
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.09 + 0.15, type: "spring" }}
            >
              <Check className="h-4 w-4 text-cyan-600" />
            </motion.span>
            {industry}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Outcomes */}
    <div>
      <motion.div
        initial={{ opacity: 1, x: 55, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.75 }}
      >
        <p className="service-eyebrow">What success looks like</p>

        <h2 className="service-heading mt-4 max-w-xl !text-3xl !leading-[1.15] sm:!text-4xl lg:!text-5xl">
          Outcomes you can evaluate without{" "}
          <span className="text-cyan-600">inflated promises.</span>
        </h2>
      </motion.div>

      <div className="mt-8 space-y-4">
        {baseService.outcomes.map((outcome, index) => (
          <motion.div
            key={outcome}
            initial={{
              opacity: 0,
              x: 55,
              y: 20,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              x: 8,
              scale: 1.015,
              boxShadow: "0 14px 30px rgba(15,23,42,0.08)",
            }}
            className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow"
          >
            <motion.span
              initial={{ scale: 0, rotate: -40 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.12 + 0.2,
                type: "spring",
              }}
            >
              <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
            </motion.span>

            <p className="leading-7 text-slate-700">{outcome}</p>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="border-y border-slate-200 bg-white py-8"
>
  <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <AdSenseAd variant="banner" format="auto" />
  </div>
</motion.div>

<section className="service-section overflow-hidden bg-white">
  <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 1, y: 35, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.75 }}
    >
      <p className="service-eyebrow">
        06 / Frequently asked questions
      </p>

      <h2 className="service-heading mt-4 max-w-3xl !text-3xl !leading-[1.15] sm:!text-4xl lg:!text-5xl">
        Useful answers before the{" "}
        <span className="text-cyan-600">first workshop.</span>
      </h2>
    </motion.div>

    <div className="mt-12 space-y-3">
      {page.faqs.map((faq, index) => (
        <motion.details
          key={faq.question}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.55,
            delay: index * 0.09,
          }}
          whileHover={{
            y: -3,
            borderColor: "#67e8f9",
          }}
          className="group rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 transition-colors"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950">
            <span>{faq.question}</span>

            <ChevronDown className="h-5 w-5 shrink-0 text-cyan-600 transition-transform duration-300 group-open:rotate-180" />
          </summary>

          <motion.div
            initial={false}
            className="overflow-hidden"
          >
            <p className="pr-8 pt-4 leading-7 text-slate-600">
              {faq.answer}
            </p>
          </motion.div>
        </motion.details>
      ))}
    </div>

  </div>
</section>


<section className="service-section service-cta relative overflow-hidden bg-cyan-300">
  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 1, x: -60, y: 30, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <p className="service-eyebrow text-slate-700">
        Ready when the problem is worth solving
      </p>

      <motion.h2
        initial={{ opacity: 1, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.15 }}
        className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
      >
        {experience.ctaTitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.65, delay: 0.3 }}
        className="mt-6 max-w-2xl text-base leading-8 text-slate-800 sm:text-lg"
      >
        Tell us what you are trying to improve, launch, or make possible.
        We will help shape the next useful step.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <Link
          to="/contact"
          className="mt-9 inline-flex items-center rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
        >
          Start a conversation

          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>

    {/* Background glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.3, 0.15],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white blur-3xl"
    />

  </div>
</section>



<section className="service-section overflow-hidden bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 1, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75 }}
      className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
    >
      <div>
        <p className="service-eyebrow">Keep exploring</p>

        <h2 className="service-heading mt-4 !text-3xl !leading-[1.15] sm:!text-4xl lg:!text-5xl">
          Related <span className="text-cyan-600">capabilities.</span>
        </h2>
      </div>

      <Link
        to="/services"
        className="group inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition-colors hover:text-cyan-900"
      >
        View all services

        <motion.span
          className="inline-flex"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </Link>
    </motion.div>

    {/* Related service cards */}
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {relatedServices.map((related, index) => (
        <motion.div
          key={related.slug}
          initial={{
            opacity: 0,
            y: 55,
            scale: 0.92,
            filter: "blur(7px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Link
            to={`/services/${related.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_20px_45px_rgba(8,145,178,0.12)]"
          >
            {/* Hover background glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Related service
                </p>

                <motion.span
                  initial={{ rotate: -35, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.15 + 0.25,
                    type: "spring",
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-cyan-700">
                {related.name}
              </h3>

              <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                {related.shortDescription}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors group-hover:text-cyan-700">
                Explore

                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </div>

            {/* Bottom animated accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: index * 0.15 + 0.3,
              }}
              className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </Link>
        </motion.div>
      ))}
    </div>

  </div>
</section>    </>
  );
};

export default ServiceDetail;