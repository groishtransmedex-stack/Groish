import React from 'react';
import { Helmet } from 'react-helmet';
import { coursesData } from '@/data/coursesData';
import EnrollmentForm from '@/components/EnrollmentForm';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import AdSenseAd from '@/components/AdSenseAd';
import { motion } from 'framer-motion';
const AmazonPPCPage = () => {
  const course = coursesData.find(c => c.slug === 'amazon-ppc');

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20 bg-slate-50">
      <Helmet>
        <title>{course.title} Course in Pakistan | Groish</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-slate-300 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm"><Award className="w-4 h-4 text-blue-400" /> Certified</span>
              <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm"><Users className="w-4 h-4 text-blue-400" /> 500+ Students</span>
              <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm"><ShieldCheck className="w-4 h-4 text-green-400" /> Money-Back Guarantee</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <img src={course.image} alt={course.title} loading="eager" fetchPriority="high" decoding="async" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover" />
          </div>
        </div>
      </div> */}

<motion.section
  className="relative isolate overflow-hidden bg-slate-950 py-14 text-white sm:py-18 lg:py-24"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.12 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Animated background */}
  <motion.div
    className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px] sm:h-80 sm:w-80"
    animate={{
      x: [0, 35, 0],
      y: [0, 25, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[100px] sm:h-80 sm:w-80"
    animate={{
      x: [0, -35, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-10 lg:gap-16 lg:px-8">

    {/* Course content */}
    <div className="w-full max-w-xl text-center md:text-left">

      <motion.div
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-xs"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
        Professional learning
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="mb-5 text-3xl font-extrabold leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.18 }}
      >
        {course.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mb-7 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        {course.description}
      </motion.p>

      {/* Course badges */}
      <motion.div
        className="mb-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.35,
            },
          },
        }}
      >
        {[
          {
            label: "Certified",
            Icon: Award,
            color: "text-blue-300",
          },
          {
            label: "500+ Students",
            Icon: Users,
            color: "text-cyan-300",
          },
          {
            label: "Money-Back Guarantee",
            Icon: ShieldCheck,
            color: "text-emerald-300",
          },
        ].map(({ label, Icon, color }) => (
          <motion.span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-slate-200 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 sm:px-3.5 sm:text-sm"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4, scale: 1.04 }}
          >
            <Icon className={`h-4 w-4 shrink-0 ${color}`} />
            {label}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="mx-auto h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent md:mx-0"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 100, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.55 }}
      />
    </div>

    {/* Course image */}
    <motion.div
      className="group relative mx-auto h-64 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:h-80 md:h-[340px] lg:h-[420px]"
      initial={{ opacity: 0, x: 55, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <motion.img
        src={course.image}
        alt={course.title}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-slate-950/50" />

      {/* Animated glow */}
      <motion.div
        className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-[75px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Image badge */}
      <motion.div
        className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2.5 text-white shadow-lg backdrop-blur-xl sm:bottom-5 sm:left-5 sm:px-4 sm:py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.55 }}
      >
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-[10px]">
          Learn. Grow. Succeed.
        </p>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-500 group-hover:border-cyan-300/40" />
    </motion.div>
  </div>
</motion.section>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Master the intricacies of Amazon Sponsored Ads. This {course.duration} course equips you with the analytical skills required to manage high-budget campaigns and deliver outstanding ROAS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Key Outcomes</h2>
            <ul className="space-y-3">
              {course.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.modules.map((module, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm font-medium text-slate-800">
                  Module {i + 1}: {module}
                </div>
              ))}
            </div>
          </section>

          <div className="my-6">
            <AdSenseAd variant="card" format="auto" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <EnrollmentForm preselectedCourse={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonPPCPage;