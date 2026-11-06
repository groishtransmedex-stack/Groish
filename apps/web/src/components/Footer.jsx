
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About GROISH', to: '/about' },
  { label: 'Our Companies', to: '/companies#inside-groish' },
  { label: 'Clients & Case Studies', to: '/clients' },
  { label: 'KK Mart Launch', to: '/clients/kk-mart' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  { label: 'All Services', to: '/services' },
  { label: 'Amazon FBA Wholesale', to: '/courses/amazon-fba-wholesale' },
  { label: 'Amazon Private Label', to: '/courses/amazon-private-label' },
  { label: 'Amazon PPC Mastery', to: '/courses/amazon-ppc' },
];

const socialLinks = [
  [Facebook, 'https://www.facebook.com/share/1EkTBobYsg/', 'Facebook'],
  [Instagram, 'https://www.instagram.com/_groish_?igsi=MTUxZnN4ZmlnbzV0eg==', 'Instagram'],
  [Linkedin, 'https://www.linkedin.com/company/110667603/admin/dashboard/', 'LinkedIn'],
];

const reveal = {
  hidden: { opacity: 0, y: 45, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Footer = () => (
  <footer className="relative isolate overflow-hidden bg-[#080f20] text-slate-300">

    {/* Animated Background Effects */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
          scale: [1, 1.25, 1]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -65, 0],
          y: [0, 45, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.10),transparent_55%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:55px_55px] opacity-30" />
    </div>

    {/* Animated Top Border */}
    <div className="relative h-px w-full overflow-hidden bg-white/10">
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.8)]"
      />
    </div>

    {/* Footer Main Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.16 }
        }
      }}
      className="container relative mx-auto grid gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:py-20"
    >

      {/* Brand Column */}
      <motion.div variants={reveal}>
        <Link
          to="/"
          className="group inline-flex items-center gap-3"
          aria-label="GROISH home"
        >
          <motion.img
            src="/groish-logo-white.png"
            alt="GROISH"
            width="132"
            height="44"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
            className="block h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <p className="mt-6 max-w-sm font-['Manrope'] text-sm leading-7 text-slate-400">
          GROISH is the parent business group behind multiple specialized companies across technology, growth, healthcare, e-commerce, and education.
        </p>

        {/* Social Links */}
        <div className="mt-7 flex items-center gap-3" aria-label="Social links">
          {socialLinks.map(([Icon, href, label], index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{
                y: -7,
                scale: 1.12,
                rotate: 5
              }}
              whileTap={{ scale: 0.92 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 shadow-lg transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_8px_25px_rgba(34,211,238,0.15)]"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-7 h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent"
        />
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={reveal}>
        <h3 className="font-['Manrope'] text-sm font-extrabold uppercase tracking-[0.16em] text-white">
          Quick Links
        </h3>

        <motion.ul
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.09 }
            }
          }}
          className="mt-6 space-y-3.5 text-sm text-slate-400"
        >
          {quickLinks.map((link) => (
            <motion.li key={link.label} variants={listItem}>
              <Link
                to={link.to}
                className="group inline-flex items-center gap-2 font-['Manrope'] transition-all duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                <span className="h-1 w-1 rounded-full bg-slate-600 transition-all duration-300 group-hover:h-1.5 group-hover:w-1.5 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Companies & Services */}
      <motion.div variants={reveal}>
        <h3 className="font-['Manrope'] text-sm font-extrabold uppercase tracking-[0.16em] text-white">
          Our Companies
        </h3>

        <motion.ul
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="mt-6 space-y-3.5 text-sm text-slate-400"
        >
          <motion.li variants={listItem}>
            <a
              href="https://webcore360.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-['Manrope'] transition-all duration-300 hover:translate-x-2 hover:text-cyan-300"
            >
              <span className="h-1 w-1 rounded-full bg-slate-600 transition-all group-hover:bg-cyan-400" />
              Webcore360
            </a>
          </motion.li>

          <motion.li variants={listItem}>
            <a
              href="https://transmedex.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-['Manrope'] transition-all duration-300 hover:translate-x-2 hover:text-cyan-300"
            >
              <span className="h-1 w-1 rounded-full bg-slate-600 transition-all group-hover:bg-cyan-400" />
              TransMedEx
            </a>
          </motion.li>
        </motion.ul>

        <h3 className="mt-9 font-['Manrope'] text-sm font-extrabold uppercase tracking-[0.16em] text-white">
          Services
        </h3>

        <motion.ul
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.09 }
            }
          }}
          className="mt-6 space-y-3.5 text-sm text-slate-400"
        >
          {services.map((link) => (
            <motion.li key={link.label} variants={listItem}>
              <Link
                to={link.to}
                className="group inline-flex items-center gap-2 font-['Manrope'] transition-all duration-300 hover:translate-x-2 hover:text-cyan-300"
              >
                <span className="h-1 w-1 rounded-full bg-slate-600 transition-all group-hover:bg-cyan-400" />
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Contact Column */}
      <motion.div variants={reveal}>
        <h3 className="font-['Manrope'] text-sm font-extrabold uppercase tracking-[0.16em] text-white">
          Contact
        </h3>

        <ul className="mt-6 space-y-5 text-sm text-slate-400">

          <motion.li
            whileHover={{ x: 5 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-400/[0.08] text-cyan-300 transition-all duration-300 hover:bg-cyan-400/15">
              <Mail className="h-4 w-4" />
            </span>

            <a
              href="mailto:info@groish.com"
              className="break-all font-['Manrope'] transition-colors hover:text-cyan-300"
            >
              info@groish.com
            </a>
          </motion.li>

          <motion.li
            whileHover={{ x: 5 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-400/[0.08] text-cyan-300">
              <Phone className="h-4 w-4" />
            </span>

            <span className="font-['Manrope']">
              03286672129
            </span>
          </motion.li>

          <motion.li
            whileHover={{ x: 5 }}
            className="pt-1"
          >
            <motion.a
              href="https://wa.me/923286672129"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 font-['Manrope'] font-semibold text-emerald-300 shadow-[0_5px_20px_rgba(16,185,129,0.05)] transition-all duration-300 hover:border-emerald-300/50 hover:bg-emerald-500/20 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </motion.a>
          </motion.li>

        </ul>
      </motion.div>
    </motion.div>

    {/* Bottom Bar */}
    <div className="relative border-t border-white/10 bg-slate-950/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="font-['Manrope'] text-xs leading-6 text-slate-500"
        >
          © {new Date().getFullYear()} GROISH. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-500"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Built for growth. Designed for impact.
        </motion.div>

      </div>
    </div>

  </footer>
);

export default Footer;
