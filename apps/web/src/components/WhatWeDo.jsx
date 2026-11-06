import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Code2, HeartPulse, LineChart, GraduationCap, Store } from 'lucide-react';

const capabilities = [
	{ title: 'Digital Growth', icon: LineChart, accent: 'text-blue-600 bg-blue-50 group-hover:bg-blue-600' },
	{ title: 'Technology & Web Development', icon: Code2, accent: 'text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600' },
	{ title: 'Healthcare & Medical Billing', icon: HeartPulse, accent: 'text-rose-600 bg-rose-50 group-hover:bg-rose-600' },
	{ title: 'Amazon Services', icon: Store, accent: 'text-amber-600 bg-amber-50 group-hover:bg-amber-500' },
	{ title: 'Amazon Education & Training', icon: GraduationCap, accent: 'text-violet-600 bg-violet-50 group-hover:bg-violet-600' },
	{ title: 'Business Support', icon: BriefcaseBusiness, accent: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600' },
];

const WhatWeDo = () => {
	return (
		
<section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
	{/* Background effects */}
	<div className="pointer-events-none absolute inset-0">
		<div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-[100px]" />
		<div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />
		<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.07),transparent_45%)]" />
	</div>

	<div className="pointer-events-none absolute left-0 top-[48%] h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

	<div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

		{/* Section heading */}
		<motion.div
			className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
			initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			viewport={{ once: false, amount: 0.25 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
		>
			<div className="relative mb-5 inline-flex items-center gap-3 overflow-hidden rounded-full border border-blue-400/20 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-5 py-2.5 shadow-[0_8px_30px_rgba(37,99,235,0.2)]">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />

				<span className="relative flex h-2 w-2">
					<span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-70" />
					<span className="relative h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
				</span>

				<p className="relative mb-0 font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 sm:text-xs">
					Our capabilities
				</p>

				<span className="relative text-xs text-cyan-300">✦</span>
			</div>

			<motion.h2
				className="font-['Manrope'] text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[2.8rem]"
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.4 }}
				transition={{ duration: 0.65, delay: 0.12 }}
			>
				What We <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Do</span>
			</motion.h2>

			<motion.p
				className="mx-auto mt-4 max-w-xl font-['Manrope'] text-sm leading-7 text-slate-500 sm:text-base"
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.4 }}
				transition={{ duration: 0.65, delay: 0.22 }}
			>
				Practical expertise across the services that help ideas, businesses, and people move forward.
			</motion.p>

			<motion.div
				className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
				initial={{ width: 0, opacity: 0 }}
				whileInView={{ width: 64, opacity: 1 }}
				viewport={{ once: false }}
				transition={{ duration: 0.7, delay: 0.3 }}
			/>
		</motion.div>

		{/* Capability cards */}
		<motion.div
			className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.12 }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: 0.12,
					},
				},
			}}
		>
			{capabilities.map((capability, index) => {
				const Icon = capability.icon;

				return (
					<motion.div
						key={capability.title}
						variants={{
							hidden: { opacity: 0, y: 35, scale: 0.96 },
							visible: {
								opacity: 1,
								y: 0,
								scale: 1,
								transition: { duration: 0.65, ease: "easeOut" },
							},
						}}
						whileHover={{ y: -9, scale: 1.015 }}
						className="group relative min-h-[205px] overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-[0_22px_55px_rgba(37,99,235,0.13)] sm:p-7"
					>
						{/* Hover glow */}
						<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/25 group-hover:scale-150" />

						<div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

						<div className="relative z-10 flex items-center justify-between">
							<span className="font-['Manrope'] text-xs font-bold tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
								{String(index + 1).padStart(2, "0")}
							</span>

							<span className="text-sm text-slate-300 transition-all duration-300 group-hover:rotate-45 group-hover:text-blue-500">
								✦
							</span>
						</div>

						<div className="relative z-10 mt-7 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-blue-300 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-[0_8px_22px_rgba(37,99,235,0.25)]">
							<Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[-8deg]" />
						</div>

						<div className="relative z-10 mt-7 border-t border-slate-100 pt-5">
							<h3 className="font-['Manrope'] text-lg font-bold leading-snug tracking-[-0.025em] text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-xl">
								{capability.title}
							</h3>

							<div className="mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-16" />
						</div>
					</motion.div>
				);
			})}
		</motion.div>
	</div>
</section>

	);
};

export default WhatWeDo;