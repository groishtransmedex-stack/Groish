import React from 'react';
import { Helmet } from 'react-helmet';
import { coursesData } from '@/data/coursesData';
import EnrollmentForm from '@/components/EnrollmentForm';
import { CheckCircle2, Award, Users, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigate } from 'react-router-dom';
import AdSenseAd from '@/components/AdSenseAd';
import { motion } from 'framer-motion';

const AmazonFBAWholesalePage = () => {
  const course = coursesData.find(c => c.slug === 'amazon-fba-wholesale');

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20 bg-slate-50">
      <Helmet>
        <title>{course.title} Course in Pakistan | Groish</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="bg-slate-900 text-white py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16
              }
            }
          }}
          className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 45, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.9, ease: 'easeOut' }
                }
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Manrope'] leading-tight tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
            >
              {course.title}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 }
                }
              }}
              className="text-base sm:text-lg text-slate-300 mb-6 font-['Manrope'] leading-relaxed"
            >
              {course.description}
            </motion.p>

            {/* Course Highlights */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 }
                }
              }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: Award, label: 'Certified', color: 'text-blue-400' },
                { icon: Users, label: '500+ Students', color: 'text-blue-400' },
                { icon: ShieldCheck, label: 'Money-Back Guarantee', color: 'text-green-400' }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.span
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 25, scale: 0.85 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.55, ease: 'easeOut' }
                      }
                    }}
                    whileHover={{ y: -5, scale: 1.06 }}
                    className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-xs sm:text-sm font-['Manrope'] transition-all duration-300 hover:bg-slate-700 hover:shadow-[0_5px_20px_rgba(59,130,246,0.2)]"
                  >
                    <Icon className={`w-4 h-4 ${item.color}`} />
                    {item.label}
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 }
                }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#enroll"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 font-bold font-['Manrope'] shadow-[0_8px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.4)] transition-all duration-300"
                >
                  Enroll Now
                </Button>
              </motion.a>

              <motion.a
                href="https://wa.me/923286672129"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 font-bold font-['Manrope'] gap-2 shadow-[0_8px_25px_rgba(34,197,94,0.2)] hover:shadow-[0_12px_30px_rgba(34,197,94,0.35)] transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.9,
              filter: 'blur(8px)'
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: 'blur(0px)'
            }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: 'easeOut'
            }}
            className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl group"
          >
            <motion.img
              src={course.image}
              alt={course.title}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.08 }}
              className="w-full h-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-blue-900/10 pointer-events-none" />

            {/* Animated Border Glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.65, 0.2]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 rounded-xl border border-blue-300/40 pointer-events-none shadow-[inset_0_0_30px_rgba(59,130,246,0.15)]"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Course Overview */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="text-xl sm:text-2xl font-bold mb-6 font-['Manrope'] text-slate-900"
            >
              Course Overview
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 font-['Manrope']"
            >
              Our {course.title} program is designed for aspiring entrepreneurs in Pakistan looking to build a sustainable business on Amazon. We focus on real-world application, teaching you how to find authorized distributors, negotiate profitable deals, and scale operations.
            </motion.p>
          </motion.section>

          {/* Key Outcomes */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.7 }}
              className="text-xl sm:text-2xl font-bold mb-6 font-['Manrope'] text-slate-900"
            >
              Key Outcomes
            </motion.h2>

            <ul className="space-y-3">
              {course.outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -35, scale: 0.96 },
                    visible: { opacity: 1, x: 0, scale: 1 }
                  }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  whileHover={{ x: 6 }}
                  className="group flex items-start gap-3 text-sm sm:text-base text-slate-700 font-['Manrope']"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" />
                  <span className="leading-relaxed">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Course Modules */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.7 }}
              className="text-xl sm:text-2xl font-bold mb-6 font-['Manrope'] text-slate-900"
            >
              Course Modules
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.modules.map((module, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 35, scale: 0.94 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.25 }
                  }}
                  className="group relative overflow-hidden bg-white p-4 rounded-lg border border-slate-200 shadow-sm font-medium text-sm sm:text-base text-slate-800 font-['Manrope'] transition-all duration-300 hover:border-blue-300 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-50 opacity-70 transition-transform duration-500 group-hover:scale-[2]" />

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="leading-relaxed">
                      Module {i + 1}: {module}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <div className="my-6">
            <AdSenseAd variant="card" format="auto" />
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Have Questions? Let's Talk!</h3>
            <p className="text-slate-600 mb-6">Our experts are available to guide you through the enrollment process and answer any queries you might have.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/923286672129" target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto font-bold"><MessageCircle className="w-5 h-5 mr-2" /> 03286672129</Button>
              </a>
              <div className="flex items-center gap-2 text-slate-600 font-medium px-4">
                <MapPin className="text-blue-600" /> DHA Phase 4, Lahore
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1" id="enroll">
          <div className="sticky top-24">
            <EnrollmentForm preselectedCourse={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonFBAWholesalePage;