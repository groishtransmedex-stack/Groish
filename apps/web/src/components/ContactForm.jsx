import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { servicesData } from '@/data/servicesData';
import { servicePageConfig } from '@/data/servicePageConfig';

const initialForm = { name: '', email: '', company: '', service: '', message: '' };

const ContactForm = ({ compact = false }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submissionError, setSubmissionError] = useState('');

  const serviceOptions = useMemo(
    () => Object.entries(servicesData).map(([slug, service]) => ({ slug, label: servicePageConfig[slug]?.name || service.title })),
    []
  );

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!formData.service) nextErrors.service = 'Select a service interest.';
    if (formData.message.trim().length < 20) nextErrors.message = 'Add at least 20 characters about your project.';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmissionError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setStatus('loading');
    setSubmissionError('');
    fetch('/hcgi/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, service: servicePageConfig[formData.service]?.name || formData.service }),
    })
      .then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.errors?.join(' ') || result.error || 'Unable to send your inquiry.');
        setStatus('success');
        setFormData(initialForm);
        toast({ title: 'Message sent', description: 'Thanks for reaching out. We will be in touch soon.' });
      })
      .catch((error) => {
        setStatus('idle');
        setSubmissionError(error.message || 'Unable to send your inquiry. Please try again.');
        toast({ title: 'Message not sent', description: error.message, variant: 'destructive' });
      });
  };

  return (
  

    <motion.div
  initial={{ opacity: 0, x: -85, y: 45, scale: 0.94, filter: 'blur(10px)' }}
  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
  viewport={{ once: false, amount: 0.12 }}
  transition={{ type: 'spring', stiffness: 65, damping: 16, mass: 0.9 }}
  className={`contact-form-card overflow-hidden p-0 ${compact ? 'border-white/10 bg-white/95' : ''}`}
>
  {/* Animated Header */}
  <div className="relative overflow-hidden bg-slate-950 px-6 py-7 text-white sm:px-8 sm:py-8">
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl"
    />

    <motion.div
      initial={{ opacity: 0, x: -45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative flex items-start justify-between gap-5"
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
          Start an inquiry
        </p>

        <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Tell us what you are building.
        </h2>

        <p className="mt-3 max-w-xl leading-7 text-slate-300">
          A few details help us route your request to the right team faster.
        </p>
      </div>

      <motion.span
        animate={{ y: [0, -7, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300 sm:block"
      >
        <Send className="h-5 w-5" />
      </motion.span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="relative mt-7 flex items-center gap-2 text-xs font-bold text-slate-400"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
        1
      </span>
      <span>Project details</span>
      <span className="mx-1 h-px w-8 bg-white/20" />
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
        2
      </span>
      <span>Conversation</span>
    </motion.div>
  </div>

  <form onSubmit={handleSubmit} noValidate className="space-y-7 p-6 sm:p-8">

    {/* Your Details */}
    <motion.div
      initial={{ opacity: 0, x: -45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
        Your details
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2">

        <motion.label
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.12, duration: 0.65 }}
          whileHover={{ y: -3 }}
          className="contact-label"
        >
          Full Name <span>*</span>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.name ? 'border-rose-400' : 'border-slate-200'}`}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />

          {errors.name && <em>{errors.name}</em>}
        </motion.label>

        <motion.label
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.25, duration: 0.65 }}
          whileHover={{ y: -3 }}
          className="contact-label"
        >
          Email Address <span>*</span>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.email ? 'border-rose-400' : 'border-slate-200'}`}
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && <em>{errors.email}</em>}
        </motion.label>

      </div>
    </motion.div>

    {/* Project Overview */}
    <motion.div
      initial={{ opacity: 0, x: 45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
        Project overview
      </p>

      <div className="mt-4 space-y-5">

        <motion.label
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.65 }}
          whileHover={{ y: -3 }}
          className="contact-label block"
        >
          Company Name

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            placeholder="Your company"
            autoComplete="organization"
          />
        </motion.label>

        <motion.label
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.22, duration: 0.65 }}
          whileHover={{ y: -3 }}
          className="contact-label block"
        >
          Service Interest <span>*</span>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.service ? 'border-rose-400' : 'border-slate-200'}`}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.label}
              </option>
            ))}
          </select>

          {errors.service && <em>{errors.service}</em>}
        </motion.label>

        <motion.label
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.34, duration: 0.7 }}
          whileHover={{ y: -3 }}
          className="contact-label block"
        >
          Project Details <span>*</span>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`mt-2 min-h-40 w-full resize-y rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.message ? 'border-rose-400' : 'border-slate-200'}`}
            placeholder="Tell us what you are trying to build, improve, or solve."
            aria-invalid={Boolean(errors.message)}
          />

          {errors.message && <em>{errors.message}</em>}
        </motion.label>

      </div>
    </motion.div>

    {/* Submit Area */}
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      className="border-t border-slate-200 pt-6"
    >
      <motion.div
        whileHover={{ scale: 1.025, y: -4 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Button
          type="submit"
          size="lg"
          disabled={status === 'loading'}
          className="group w-full rounded-2xl bg-slate-950 py-6 font-bold text-white shadow-lg shadow-slate-950/20 transition-all duration-300 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-700/30"
        >
          {status === 'loading' ? 'Preparing your inquiry…' : 'Send Inquiry'}

          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700"
          >
            <CheckCircle2 className="h-4 w-4" />
            Your message was sent successfully.
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {submissionError && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="mt-4 text-sm font-semibold text-rose-600"
          >
            {submissionError}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Your inquiry is sent securely to the GROISH team.
      </p>
    </motion.div>

  </form>
</motion.div>
  );
};

export default ContactForm;
