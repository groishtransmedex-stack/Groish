import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const officeImage = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp';

const FinalCTA = () => {
	const ctaRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] });
	const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);

	return (
		<section ref={ctaRef} className="final-cta relative isolate min-h-[560px] overflow-hidden bg-slate-950 text-white sm:min-h-[640px]">
			<motion.img
				src={officeImage}
				alt="GROISH office interior"
				loading="lazy"
				decoding="async"
				sizes="100vw"
				style={{ y: imageY }}
				className="absolute inset-[-8%] h-[116%] w-[116%] object-cover object-center opacity-75"
			/>
			<div className="absolute inset-0 bg-slate-950/65" />
			<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.58)_48%,rgba(2,6,23,0.82)),linear-gradient(0deg,rgba(2,6,23,0.88),transparent_55%,rgba(2,6,23,0.35))]" />
			<div className="final-cta__light absolute -left-1/4 top-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent shadow-[0_0_44px_rgba(103,232,249,0.7)]" />
			<div className="final-cta__light final-cta__light--secondary absolute -right-1/4 bottom-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent shadow-[0_0_40px_rgba(96,165,250,0.55)]" />

			<div className="container relative mx-auto flex min-h-[560px] items-end px-4 py-16 sm:min-h-[640px] sm:py-24">
				<div className="relative max-w-6xl">

  {/* Animated Background Glow */}
  <motion.div
    animate={{
      opacity: [0.25, 0.55, 0.25],
      scale: [0.9, 1.15, 0.9],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]"
  />

  {/* Eyebrow */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.35 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="mb-6 flex items-center gap-3 sm:mb-8"
  >
    <span className="h-[2px] w-9 rounded-full bg-cyan-400" />

    <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
      The next chapter starts here
    </p>

    <span className="text-cyan-400">✦</span>
  </motion.div>

  {/* Main Heading */}
  <motion.h2
  initial={{ opacity: 0, y: 35, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: false, amount: 0.35 }}
  transition={{
    duration: 0.9,
    delay: 0.08,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative max-w-5xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.065em] text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]"
>
  WE'RE JUST

  <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
    GETTING STARTED.
  </span>
</motion.h2>

  {/* Bottom Content */}
  <div className="mt-9 flex flex-col items-start gap-7 sm:mt-12 sm:flex-row sm:items-center sm:gap-10">

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="max-w-sm text-base leading-8 text-slate-300 sm:text-lg"
    >
      Bring your next idea, challenge, or ambition to the table.
      Let's build something meaningful together.
    </motion.p>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      whileHover={{ y: -5, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="relative"
    >
      {/* Button Glow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-50 blur-md transition-opacity duration-500 hover:opacity-100" />

      <Link
        to="/contact"
        className="magnetic group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-cyan-100/70 bg-gradient-to-r from-white via-cyan-50 to-blue-50 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-[0_15px_45px_rgba(34,211,238,0.15)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(34,211,238,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        data-cursor="Explore"
      >
        <span className="relative z-10">
          Start a Conversation
        </span>

        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-blue-600">
          <ArrowUpRight className="h-4 w-4" />
        </span>

        {/* Shine Effect */}
        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-25deg] bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
      </Link>
    </motion.div>

  </div>

  {/* Bottom Accent */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: 130, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 1, delay: 0.5 }}
    className="mt-10 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent sm:mt-12"
  />

</div>
			</div>
		</section>
	);
};

export default FinalCTA;