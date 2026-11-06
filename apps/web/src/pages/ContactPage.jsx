import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Globe2, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import AdSenseAd from '@/components/AdSenseAd';
import { siteUrl } from '@/data/servicePageConfig';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Groish | Start a Business Conversation</title>
        <meta name="description" content="Contact Groish about technology, customer operations, staffing, AI, ecommerce, software, and growth services. Tell us what you are building or improving." />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Groish | Start a Business Conversation" />
        <meta property="og:description" content="Connect with Groish about technology and business operations services." />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:site_name" content="GROISH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Groish" />
        <meta name="twitter:description" content="Start a conversation about your next business or technology initiative." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Groish',
          url: `${siteUrl}/contact`,
          description: 'Contact Groish about technology and business operations services.',
          mainEntity: {
            '@type': 'Organization',
            name: 'GROISH',
            url: siteUrl,
            email: 'info@groish.com',
            areaServed: ['North America', 'Europe', 'United Arab Emirates', 'Pakistan']
          }
        })}</script>
      </Helmet>

      <section className="contact-hero relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="contact-hero__glow contact-hero__glow--one" />
        <div className="contact-hero__glow contact-hero__glow--two" />
       <div className="container relative mx-auto flex min-h-[380px] items-center justify-center px-4 pb-20 pt-20 text-center sm:min-h-[440px] sm:px-6 lg:min-h-[520px] lg:px-8 lg:pb-28 lg:pt-28">

  {/* Background glow */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.12, 0.25, 0.12],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[100px] sm:h-80 sm:w-80"
  />

  <motion.div
    initial={{ opacity: 0, y: 45, scale: 0.96, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="relative z-10 mx-auto w-full max-w-4xl"
  >
    {/* Eyebrow */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-200 sm:mb-6 sm:text-xs sm:tracking-[0.3em] mt-12"
    >
      Let’s build the next useful step
    </motion.p>

    {/* Main heading */}
    <motion.h1
      initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay: 0.35 }}
      className="text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
    >
      Get in <span className="text-cyan-300">Touch.</span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55 }}
      className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
    >
      Bring us the challenge, opportunity, or operation you want to improve.
      We’ll help turn the conversation into a clear next step.
    </motion.p>

    {/* Animated bottom accent */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mx-auto mt-8 h-1 w-16 origin-center rounded-full bg-cyan-400 sm:w-20"
    />
  </motion.div>
</div>
      </section>

    <section className="contact-section overflow-hidden bg-white">
  <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">

    {/* LEFT: Contact Information */}
    <motion.div
      initial={{ opacity: 0, x: -100, y: 35, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ type: 'spring', stiffness: 65, damping: 16 }}
    >
      <motion.p
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="contact-eyebrow"
      >
        Contact information
      </motion.p>
<motion.h2
  initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  viewport={{ once: false }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="contact-heading mt-4 !text-4xl !leading-[1.12] sm:!text-5xl"
>
  A real conversation starts{' '}
  <span className="text-cyan-600">with context.</span>
</motion.h2>

      <div className="mt-10 space-y-4">

        {/* Email Card */}
        <motion.a
          href="mailto:info@groish.com"
          initial={{ opacity: 0, x: -65, y: 25, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1, type: 'spring', stiffness: 80 }}
          whileHover={{ x: 9, scale: 1.02 }}
          className="contact-info-card group"
        >
          <motion.span
            whileHover={{ rotate: 12, scale: 1.15 }}
            className="contact-icon"
          >
            <Mail className="h-5 w-5" />
          </motion.span>

          <span>
            <strong>Email</strong>
            <span className="mt-1 block text-lg font-semibold text-slate-950">
              info@groish.com
            </span>
            <small>Direct line to our business development team.</small>
          </span>

          <motion.span
            whileHover={{ x: 6 }}
            className="contact-card-arrow"
          >
            <ArrowRight />
          </motion.span>
        </motion.a>

        {/* Operational Hours */}
        <motion.div
          initial={{ opacity: 0, x: -65, y: 25, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.25, type: 'spring', stiffness: 80 }}
          whileHover={{ x: 9, scale: 1.02 }}
          className="contact-info-card group"
        >
          <motion.span
            whileHover={{ rotate: -12, scale: 1.15 }}
            className="contact-icon"
          >
            <Clock3 className="h-5 w-5" />
          </motion.span>

          <span>
            <strong>Operational hours</strong>
            <span className="mt-1 block font-semibold text-slate-950">
              6:00 PM–3:00 AM Pakistan Standard Time
            </span>
            <small>
              Shifted hours designed for practical overlap with international clients.
            </small>
          </span>
        </motion.div>

        {/* Global Presence */}
        <motion.div
          initial={{ opacity: 0, x: -65, y: 25, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.4, type: 'spring', stiffness: 80 }}
          whileHover={{ x: 9, scale: 1.02 }}
          className="contact-info-card group"
        >
          <motion.span
            whileHover={{ rotate: 12, scale: 1.15 }}
            className="contact-icon"
          >
            <Globe2 className="h-5 w-5" />
          </motion.span>

          <span>
            <strong>Global presence</strong>
            <span className="mt-1 block font-semibold text-slate-950">
              Lahore, Pakistan
            </span>
            <small>
              Service coverage across North America, Europe, and UAE.
            </small>
          </span>

          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="contact-card-map"
          >
            <MapPin />
          </motion.span>
        </motion.div>

      </div>

      {/* Overlap Card */}
      <motion.div
        initial={{ opacity: 0, y: 65, scale: 0.92, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, delay: 0.25, type: 'spring', stiffness: 75 }}
        whileHover={{ y: -7, scale: 1.015 }}
        className="contact-overlap-card mt-8"
      >
        <motion.span
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <ShieldCheck className="h-6 w-6 shrink-0 text-cyan-700" />
        </motion.span>

        <div>
          <h3>Why the time overlap matters?</h3>
          <p>
            Our shifted operational hours allow the team to work with clients
            during their working hours, provide same-day follow-ups, respond
            quickly, and solve issues in real time.
          </p>
        </div>
      </motion.div>
    </motion.div>

    {/* RIGHT: Contact Form */}
    <motion.div
      initial={{ opacity: 0, x: 100, y: 35, scale: 0.94, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        type: 'spring',
        stiffness: 65,
        damping: 16,
        delay: 0.15
      }}
    >
      <ContactForm />
    </motion.div>

  </div>
</section>

      <div className="border-y border-slate-200 bg-slate-50 py-8">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdSenseAd variant="banner" format="auto" />
        </div>
      </div>

      <section className="contact-lower-section"><div className="container relative mx-auto px-4 py-20 text-center sm:px-6 lg:px-8"><p className="contact-eyebrow">The next chapter starts with a useful question</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl">Ready to improve your operations?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Explore our capabilities or start the conversation directly with the team.</p><Link to="/services" className="mt-8 inline-flex items-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">Explore services <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>
    </>
  );
};

export default ContactPage;