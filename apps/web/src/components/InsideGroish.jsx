import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPin, X } from 'lucide-react';
const lahore01 = '/optimized-images/IMG_6236.webp';
const lahore02 = '/optimized-images/IMG_6238.webp';
const lahore03 = '/optimized-images/IMG_6240.webp';
const lahore04 = '/optimized-images/IMG_6247.webp';
const lahore05 = '/optimized-images/IMG_6248.webp';
const lahore06 = '/optimized-images/IMG_6258.webp';
const lahore07 = '/optimized-images/IMG_6259.webp';
const lahore08 = '/optimized-images/IMG_6262.webp';
const usa01 = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp';
const usa02 = '/company-images/image.png';

const galleryImages = [
	{ src: lahore01, alt: 'GROISH Lahore team working in the office', location: 'LAHORE, PAKISTAN', label: 'A collaborative workspace where strategy and execution meet.', featured: true },
	{ src: lahore02, alt: 'GROISH Lahore office workspace', location: 'LAHORE, PAKISTAN', label: 'Studio-like focus areas built for growth operations.' },
	{ src: lahore03, alt: 'GROISH Lahore team workspace', location: 'LAHORE, PAKISTAN', label: 'A quiet room for planning campaigns and product work.' },
	{ src: lahore04, alt: 'GROISH Lahore office team environment', location: 'LAHORE, PAKISTAN', label: 'Every desk is placed to support collaboration and clarity.' },
	{ src: lahore05, alt: 'GROISH Lahore office interior', location: 'LAHORE, PAKISTAN', label: 'Natural light, thoughtful details, and a calm corporate tone.' },
	{ src: lahore06, alt: 'GROISH Lahore collaborative workspace', location: 'LAHORE, PAKISTAN', label: 'Teams design growth journeys together around shared screens.' },
	{ src: lahore07, alt: 'GROISH Lahore office meeting area', location: 'LAHORE, PAKISTAN', label: 'A place for strategy conversations and executive reviews.' },
	{ src: lahore08, alt: 'GROISH Lahore team office', location: 'LAHORE, PAKISTAN', label: 'Every image tells the story of GROISH’s hands-on execution.', reverse: true },
	{ src: usa01, alt: 'GROISH USA office reception area', location: 'UNITED STATES', label: 'The USA presence anchors GROISH as an international operator.' },
	// { src: usa02, alt: 'GROISH USA office exterior', location: 'UNITED STATES', label: 'A premium corporate exterior with space reserved for what comes next.' },
];

const InsideGroish = () => {
	const [activeImage, setActiveImage] = useState(null);
	const [progress, setProgress] = useState(0);
	const carouselRef = useRef(null);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;
		let frame = 0;

		const updateProgress = () => {
			const scrollLeft = carousel.scrollLeft;
			const maxScroll = carousel.scrollWidth - carousel.clientWidth;
			setProgress(maxScroll > 0 ? Math.min(1, scrollLeft / maxScroll) : 0);
		};
		const handleScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				updateProgress();
				frame = 0;
			});
		};

		carousel.addEventListener('scroll', handleScroll, { passive: true });
		updateProgress();

		return () => {
			carousel.removeEventListener('scroll', handleScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);

	useEffect(() => {
		if (!activeImage) return undefined;
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') setActiveImage(null);
		};
		document.body.classList.add('gallery-modal-open');
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.body.classList.remove('gallery-modal-open');
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [activeImage]);

	return (
		<section className="overflow-hidden bg-slate-950 py-24 text-white sm:py-28" id="inside-groish-gallery">
			<div className="container mx-auto px-4">
				<motion.div
  className="mb-12 flex flex-col items-center justify-center gap-6 text-center"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <div className="mx-auto max-w-3xl text-center">
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300"
    >
      Inside GROISH
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-3xl font-semibold font-['Manrope'] tracking-tight sm:text-3xl"
    >
      A cinematic gallery of the GROISH story.
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.9 }}
      className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
    >
      Explore the authentic spaces and people shaping GROISH through premium visual moments, motion and depth.
    </motion.p>
  </div>
</motion.div>

			<div className="relative w-full overflow-hidden py-8">
  <style>{`
    @keyframes groishGallerySlider {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .groish-gallery-track {
      display: flex;
      width: max-content;
      animation: groishGallerySlider 35s linear infinite alternate;
      will-change: transform;
    }

    .groish-gallery-track:hover {
      animation-play-state: paused;
    }
  `}</style>

  <div className="groish-gallery-track">
    {[0, 1].map((group) => (
      <div
        key={group}
        className="flex shrink-0 gap-5 pr-5"
      >
        {galleryImages.map((image, index) => (
          <motion.button
            key={`${group}-${image.src}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            className="group relative h-[380px] w-[300px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 sm:h-[440px] sm:w-[350px] lg:h-[460px] lg:w-[370px]"
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                {image.location}
              </p>

              <h3 className="mt-3 text-lg font-semibold leading-7 text-white sm:text-xl">
                {image.label}
              </h3>

              <p className="mt-3 text-sm text-slate-300">
                Touch to enlarge
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    ))}
  </div>
</div>

				<div className="mt-6 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 shadow-[0_18px_50px_rgba(15,23,42,0.15)] backdrop-blur-sm sm:px-6">
					<span className="font-semibold text-slate-100">Premium documentary gallery</span>
					<span className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 sm:flex">Swipe to navigate • Tap to view fullscreen</span>
				</div>

				
			</div>
		</section>
	);
};

export default InsideGroish;