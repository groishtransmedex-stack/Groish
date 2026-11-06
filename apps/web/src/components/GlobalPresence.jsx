import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin, Plus } from 'lucide-react';
const lahoreOffice = '/optimized-images/IMG_6247.webp';
const usaOfficeInterior = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp';

const locations = [
	{ country: 'Pakistan', city: 'LAHORE, PAKISTAN', note: 'GROISH team presence', accent: 'bg-blue-500' },
	{ country: 'USA', city: 'UNITED STATES', note: 'GROISH office presence', accent: 'bg-amber-500' },
];

const GlobalPresence = () => {
	const presenceRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: presenceRef, offset: ['start end', 'end start'] });
	const presenceY = useTransform(scrollYProgress, [0, 1], [0, -16]);

	return (
		<section ref={presenceRef} className="overflow-hidden bg-slate-900 py-24 text-white sm:py-28">
			<div className="container mx-auto px-4">
				<div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						<p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300 ml-2">Global Presence</p>

						<motion.div
							initial={{ opacity: 0, y: 45 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
							className="max-w-3xl"
						>
							<motion.h2
								initial={{ opacity: 0, y: 25 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{ duration: 0.8, delay: 0.15 }}
								className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-6xl"
							>
								Close to the work.
								<span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
									Connected to the world.
								</span>
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: false }}
								transition={{ duration: 0.8, delay: 0.35 }}
								className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base lg:text-lg"
							>
								GROISH brings together teams and capabilities across Pakistan and the USA,
								connecting local expertise with global opportunities.
							</motion.p>

							{/* Animated Accent */}
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: 90 }}
								viewport={{ once: false }}
								transition={{ duration: 1, delay: 0.5 }}
								className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"
							/>
						</motion.div>


						<div className="mt-9 space-y-3">
							{locations.map((location, index) => (
								<motion.div
									key={location.country}
									className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] p-4"
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.45, delay: index * 0.1 }}
								>
									<div className="flex items-center gap-3"><span className={`h-2.5 w-2.5 rounded-full ${location.accent}`} /><div><div className="text-sm font-semibold text-white">{location.country}</div><div className="mt-0.5 text-sm text-slate-300">{location.city}</div></div></div>
									<span className="text-xs text-slate-500">{location.note}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
					<motion.div
						className="relative min-h-[510px]"
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Main Circle */}
						<div className="absolute left-1/2 top-1/2 h-[min(82vw,440px)] w-[min(82vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_35%_30%,rgba(103,232,249,0.22),rgba(15,23,42,0.05)_48%,rgba(2,6,23,0.8)_74%)] shadow-[0_0_100px_rgba(34,211,238,0.12)]">

							{/* Rotating Dashed Orbit */}
							<div className="global-presence-orbit absolute inset-5 rounded-full border border-dashed border-cyan-200/20 motion-safe:animate-[spin_28s_linear_infinite]" />

							{/* Inner Circle */}
							<div className="absolute inset-[18%] rounded-full border border-white/10" />

							{/* Connecting Line */}
							<motion.svg
								viewBox="0 0 100 100"
								preserveAspectRatio="none"
								className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
								animate={
									reduceMotion
										? { opacity: 0.7 }
										: { opacity: [0.35, 1, 0.35] }
								}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<defs>
									<linearGradient
										id="groish-connection-gradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="0%"
									>
										<stop offset="0%" stopColor="#60A5FA" />
										<stop offset="50%" stopColor="#67E8F9" />
										<stop offset="100%" stopColor="#FBBF24" />
									</linearGradient>
								</defs>

								<line
									x1="30.4"
									y1="35.4"
									x2="71.6"
									y2="40.4"
									stroke="url(#groish-connection-gradient)"
									strokeWidth="0.35"
									strokeLinecap="round"
								/>
							</motion.svg>

							{/* Pakistan Blue Dot */}
							<motion.div
								className="absolute left-[30.4%] top-[35.4%] z-[2] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_6px_rgba(96,165,250,0.4)]"
								animate={
									reduceMotion
										? { scale: 1 }
										: { scale: [1, 1.25, 1] }
								}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>

							{/* USA Yellow Dot */}
							<motion.div
								className="absolute left-[71.6%] top-[40.4%] z-[2] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_18px_6px_rgba(251,191,36,0.4)]"
								animate={
									reduceMotion
										? { scale: 1 }
										: { scale: [1, 1.25, 1] }
								}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
							/>
						</div>

						{/* Pakistan Floating Card */}
						<motion.div
							className="absolute left-2 top-16 hidden w-52 rounded-xl border border-white/10 bg-slate-800/90 p-3 shadow-xl backdrop-blur-md sm:block"
							animate={
								reduceMotion
									? { y: 0 }
									: { y: [0, -12, 0] }
							}
							transition={{
								duration: 3.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<div className="flex items-center gap-2 text-xs font-semibold text-white">
								<MapPin className="h-4 w-4 text-blue-400" />
								Pakistan
							</div>

							<div className="mt-1 pl-6 text-sm text-slate-300">
								Lahore
							</div>
						</motion.div>

						{/* USA Floating Card */}
						<motion.div
							className="absolute bottom-48 right-2 hidden w-52 rounded-xl border border-white/10 bg-slate-800/90 p-3 shadow-xl backdrop-blur-md sm:block"
							animate={
								reduceMotion
									? { y: 0 }
									: { y: [0, 12, 0] }
							}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<div className="flex items-center gap-2 text-xs font-semibold text-white">
								<MapPin className="h-4 w-4 text-amber-400" />
								USA
							</div>

							<div className="mt-1 pl-6 text-sm text-slate-300">
								United States
							</div>
						</motion.div>

						{/* Office Images */}
						<div className="absolute bottom-0 left-1/2 grid w-full max-w-xl -translate-x-1/2 grid-cols-2 gap-3 sm:gap-4">

							{/* Lahore Office */}
							<motion.div
								className="groish-photo-shell group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800"
								data-variant="a"
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
							>
								<motion.img
									src={lahoreOffice}
									alt="GROISH Lahore office presence"
									loading="lazy"
									decoding="async"
									sizes="(max-width: 640px) 42vw, 260px"
									className="groish-photo-media h-28 sm:h-36"
									animate={
										reduceMotion
											? { y: 0, scale: 1.03 }
											: { y: [0, -10, 0], scale: 1.03 }
									}
									transition={{
										duration: 9,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									whileHover={{ scale: 1.08, x: 4, y: -6 }}
								/>

								<div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/90 to-transparent" />

								<div className="absolute inset-x-0 bottom-0 z-[2] p-3">
									<div className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-100/80">
										Lahore
									</div>
									<div className="mt-1 text-sm font-bold text-white">
										PAKISTAN
									</div>
								</div>
							</motion.div>

							{/* USA Office */}
							<motion.div
								className="groish-photo-shell group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800"
								data-variant="b"
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{
									duration: 0.8,
									delay: 0.08,
									ease: "easeOut",
								}}
							>
								<motion.img
									src={usaOfficeInterior}
									alt="GROISH USA office interior"
									loading="lazy"
									decoding="async"
									sizes="(max-width: 640px) 42vw, 260px"
									className="groish-photo-media h-28 sm:h-36"
									animate={
										reduceMotion
											? { y: 0, scale: 1.05 }
											: { y: [0, -12, 0], scale: 1.05 }
									}
									transition={{
										duration: 10,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									whileHover={{ scale: 1.1, x: -5, y: -5 }}
								/>

								<div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/90 to-transparent" />

								<div className="absolute inset-x-0 bottom-0 z-[2] p-3">
									<div className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-100/80">
										United States
									</div>
									<div className="mt-1 text-sm font-bold text-white">
										USA
									</div>
								</div>
							</motion.div>

						</div>
					</motion.div>
				</div>

				{/* <div className="mt-5 grid gap-4 sm:grid-cols-2">
					<div className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500"><div><Plus className="mx-auto mb-2 h-5 w-5" /><div className="text-sm font-semibold text-slate-700">USA office front / exterior photo</div><div className="mt-1 text-xs">Reserved for the next provided image</div></div></div>
					<div className="flex min-h-32 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center"><div><div className="text-sm font-semibold text-slate-900">A connected presence</div><div className="mt-1 text-xs text-slate-500">Pakistan and United States</div><ArrowUpRight className="mx-auto mt-3 h-4 w-4 text-blue-600" /></div></div>
				</div> */}
			</div>
		</section>
	);
};

export default GlobalPresence;