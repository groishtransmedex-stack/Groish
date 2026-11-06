// import React, { useEffect, useRef, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
// import { servicesData } from '@/data/servicesData';

// const navItems = [
//   { label: 'About', to: '/about' },
//   { label: 'Companies', to: '/companies#inside-groish' },
//   { label: 'Clients', to: '/clients' },
//   { label: 'Contact', to: '/contact' },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const servicesMenuRef = useRef(null);
//   const location = useLocation();

//   // Close menus on route change
//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setServicesMenuOpen(false);
//     setMobileServicesOpen(false);
//   }, [location.pathname, location.hash]);

//   // Lock body scroll on mobile menu open
//   useEffect(() => {
//     document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
//     return () => document.body.classList.remove('mobile-menu-open');
//   }, [mobileMenuOpen]);

//   // Handle outside click & escape key for dropdown
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
//         setServicesMenuOpen(false);
//       }
//     };
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') setServicesMenuOpen(false);
//     };
//     document.addEventListener('mousedown', handleOutsideClick);
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setMobileServicesOpen(false);
//   };

//   const isServicesActive = location.pathname.startsWith('/services');

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 h-[72px] sm:h-[76px] border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all">
//       <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* Left: Logo */}
//         <div className="flex items-center">
//           <Link
//             to="/"
//             className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
//             aria-label="GROISH Home"
//           >
//             <img
//               src="/groish-logo.png"
//               alt="GROISH"
//               width="132"
//               height="44"
//               decoding="async"
//               className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
//               onError={(e) => {
//                 // Fallback to company-images copy if needed
//                 if (!e.currentTarget.src.includes('company-images')) {
//                   e.currentTarget.src = '/company-images/Groish Logo.png';
//                 }
//               }}
//             />
//           </Link>
//         </div>

//         {/* Center: Desktop Navigation */}
//         <nav className="hidden items-center justify-center gap-1 lg:gap-2 xl:gap-4 md:flex">
//           {/* About */}
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
//                 isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <span className="relative flex items-center">
//                 About
//                 {isActive && (
//                   <motion.span
//                     layoutId="navbar-active-pill"
//                     className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
//                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </span>
//             )}
//           </NavLink>

//           {/* Companies */}
//           <NavLink
//             to="/companies#inside-groish"
//             className={({ isActive }) =>
//               `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
//                 isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <span className="relative flex items-center">
//                 Companies
//                 {isActive && (
//                   <motion.span
//                     layoutId="navbar-active-pill"
//                     className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
//                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </span>
//             )}
//           </NavLink>

//           {/* Clients */}
//           <NavLink
//             to="/clients"
//             className={({ isActive }) =>
//               `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
//                 isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <span className="relative flex items-center">
//                 Clients
//                 {isActive && (
//                   <motion.span
//                     layoutId="navbar-active-pill"
//                     className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
//                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </span>
//             )}
//           </NavLink>

//           {/* Services with Dropdown */}
//           <div ref={servicesMenuRef} className="relative">
//             <button
//               type="button"
//               aria-expanded={servicesMenuOpen}
//               aria-haspopup="true"
//               onClick={() => setServicesMenuOpen((prev) => !prev)}
//               className={`group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
//                 isServicesActive || servicesMenuOpen
//                   ? 'text-blue-600 font-semibold bg-blue-50/60'
//                   : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
//               }`}
//             >
//               <span>Services</span>
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform duration-200 ${
//                   servicesMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-slate-700'
//                 }`}
//               />
//               {isServicesActive && (
//                 <motion.span
//                   layoutId="navbar-active-pill"
//                   className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
//                   transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                 />
//               )}
//             </button>

//             <AnimatePresence>
//               {servicesMenuOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 8, scale: 0.98 }}
//                   transition={{ duration: 0.18, ease: 'easeOut' }}
//                   className="absolute left-1/2 top-full bg-slate-300 mt-3 w-[min(780px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-slate-200/90 bg-white/98 p-5 text-slate-900 shadow-2xl shadow-slate-950/10 backdrop-blur-xl"
//                 >
//                   <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3  px-2.5 backdrop-blur-sm">
//                     <div>
//                       <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">Our Capabilities</p>
//                       <p className="mt-0.5 text-xs text-slate-500">Explore enterprise solutions and specialized growth services</p>
//                     </div>
//                     <Link
//                       to="/services"
//                       onClick={() => setServicesMenuOpen(false)}
//                       className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
//                     >
//                       All Services
//                       <ArrowRight className="h-3 w-3" />
//                     </Link>
//                   </div>

//                   <div className="grid max-h-[min(60vh,460px)] grid-cols-2 gap-2 overflow-y-auto pr-1 lg:grid-cols-3 custom-scrollbar">
//                     {Object.entries(servicesData).map(([slug, service]) => (
//                       <Link
//                         key={slug}
//                         to={`/services/${slug}`}
//                         onClick={() => setServicesMenuOpen(false)}
//                         className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-blue-50/80"
//                       >
//                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
//                           <service.icon className="h-4 w-4" />
//                         </div>
//                         <div className="min-w-0 flex-1">
//                           <span className="block text-xs font-semibold leading-tight text-slate-800 group-hover:text-blue-900">
//                             {service.title}
//                           </span>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Contact */}
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
//                 isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <span className="relative flex items-center">
//                 Contact
//                 {isActive && (
//                   <motion.span
//                     layoutId="navbar-active-pill"
//                     className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
//                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </span>
//             )}
//           </NavLink>
//         </nav>

//         {/* Right: CTA Button */}
//         <div className="hidden items-center md:flex">
//           <Link
//             to="/explore-our-companies"
//             className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-2.5 text-xs lg:text-sm font-semibold text-white shadow-[0_10px_25px_-5px_rgba(15,23,42,0.3)] transition-all duration-200 hover:bg-blue-600 hover:shadow-blue-500/25 active:scale-[0.98]"
//           >
//             <span>Explore Our Companies</span>
//             <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
//           </Link>
//         </div>

//         {/* Mobile Hamburger Toggle Button */}
//         <button
//           type="button"
//           aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//           aria-expanded={mobileMenuOpen}
//           aria-controls="mobile-navigation"
//           className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
//           onClick={() => setMobileMenuOpen((prev) => !prev)}
//         >
//           {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </div>

//       {/* Mobile Drawer Navigation */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: 'easeInOut' }}
//             id="mobile-navigation"
//             className="fixed inset-x-0 top-[72px] sm:top-[76px] max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-slate-200/80 bg-white/98 shadow-2xl backdrop-blur-xl md:hidden"
//           >
//             <div className="container mx-auto space-y-1.5 px-4 py-4 sm:px-6">
//               <NavLink
//                 to="/about"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
//                     isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
//                   }`
//                 }
//               >
//                 <span>About</span>
//                 <ArrowRight className="h-4 w-4 text-slate-400" />
//               </NavLink>

//               <NavLink
//                 to="/companies#inside-groish"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
//                     isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
//                   }`
//                 }
//               >
//                 <span>Companies</span>
//                 <ArrowRight className="h-4 w-4 text-slate-400" />
//               </NavLink>

//               <NavLink
//                 to="/clients"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
//                     isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
//                   }`
//                 }
//               >
//                 <span>Clients</span>
//                 <ArrowRight className="h-4 w-4 text-slate-400" />
//               </NavLink>

//               {/* Mobile Services Accordion */}
//               <div className="rounded-xl border border-slate-100 bg-slate-50/70 overflow-hidden">
//                 <button
//                   type="button"
//                   aria-expanded={mobileServicesOpen}
//                   onClick={() => setMobileServicesOpen((prev) => !prev)}
//                   className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-slate-700 transition-colors hover:text-slate-950"
//                 >
//                   <span className={isServicesActive ? 'text-blue-600 font-semibold' : ''}>Services</span>
//                   <ChevronDown
//                     className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
//                       mobileServicesOpen ? 'rotate-180 text-blue-600' : ''
//                     }`}
//                   />
//                 </button>

//                 <AnimatePresence initial={false}>
//                   {mobileServicesOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden border-t border-slate-200/60 bg-white px-3 py-2"
//                     >
//                       <Link
//                         to="/services"
//                         onClick={closeMobileMenu}
//                         className="mb-2 flex items-center justify-between rounded-lg bg-blue-50/70 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100/70"
//                       >
//                         <span>View All Services</span>
//                         <ArrowRight className="h-3.5 w-3.5" />
//                       </Link>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-60 overflow-y-auto">
//                         {Object.entries(servicesData).map(([slug, service]) => (
//                           <Link
//                             key={slug}
//                             to={`/services/${slug}`}
//                             onClick={closeMobileMenu}
//                             className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
//                           >
//                             <service.icon className="h-3.5 w-3.5 shrink-0 text-blue-600" />
//                             <span className="truncate">{service.title}</span>
//                           </Link>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <NavLink
//                 to="/contact"
//                 onClick={closeMobileMenu}
//                 className={({ isActive }) =>
//                   `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
//                     isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
//                   }`
//                 }
//               >
//                 <span>Contact</span>
//                 <ArrowRight className="h-4 w-4 text-slate-400" />
//               </NavLink>

//               {/* Mobile CTA */}
//               <div className="pt-2">
//                 <Link
//                   to="/explore-our-companies"
//                   onClick={closeMobileMenu}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-600"
//                 >
//                   <span>Explore Our Companies</span>
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesMenuRef = useRef(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target)
      ) {
        setServicesMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const navClass = ({ isActive }) =>
    `relative flex items-center rounded-full px-4 py-2.5 text-[13px] xl:text-sm font-semibold tracking-[-0.01em] transition-all duration-300 ${
      isActive
        ? 'text-blue-700'
        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-blue-50 text-blue-700'
        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
    }`;

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 14,
      scale: 0.97,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.035,
      },
    },
    exit: {
      opacity: 0,
      y: 8,
      scale: 0.98,
      filter: 'blur(3px)',
      transition: { duration: 0.16 },
    },
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22 },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -12,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.055,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.18 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25 },
    },
  };

  return (
<header
  className="!fixed !inset-x-0 !top-0 !z-[100] !border-0 !bg-transparent !p-0 !shadow-none mt-5"
  style={{ background: 'transparent' }}
>
        <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="container mx-auto relative"
      >
        {/* Animated Navbar Glow */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-[24px]  opacity-80 blur-[1px]" />

        <div className="relative flex h-[68px] items-center justify-between rounded-[23px] border border-white/80 bg-white/90 px-4 shadow-[0_12px_45px_-15px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:h-[74px] sm:px-6 lg:px-7">

          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link
              to="/"
              aria-label="GROISH Home"
              className="group flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <motion.img
                src="/groish-logo.png"
                alt="GROISH"
                width="132"
                height="44"
                decoding="async"
                whileHover={{ scale: 1.055 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="h-8 w-auto object-contain sm:h-9 md:h-10"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('company-images')) {
                    e.currentTarget.src = '/company-images/Groish Logo.png';
                  }
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-1.5 xl:gap-2">

            <NavLink to="/about" className={navClass}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <motion.span
                      layoutId="groish-nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/companies#inside-groish" className={navClass}>
              {({ isActive }) => (
                <>
                  Companies
                  {isActive && (
                    <motion.span
                      layoutId="groish-nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/clients" className={navClass}>
              {({ isActive }) => (
                <>
                  Clients
                  {isActive && (
                    <motion.span
                      layoutId="groish-nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* Services Dropdown */}
            <div ref={servicesMenuRef} className="relative">
              <motion.button
                type="button"
                aria-expanded={servicesMenuOpen}
                aria-haspopup="true"
                onClick={() => setServicesMenuOpen((prev) => !prev)}
                whileTap={{ scale: 0.96 }}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] xl:text-sm font-semibold transition-all duration-300 ${
                  isServicesActive || servicesMenuOpen
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-950'
                }`}
              >
                Services
                <motion.span
                  animate={{ rotate: servicesMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {servicesMenuOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-1/2 top-full mt-4 w-[min(780px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-5 text-slate-900 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.28)] backdrop-blur-2xl"
                  >
                    {/* Dropdown Header */}
                    <div className="mb-4 flex items-center justify-between border-b border-slate-100 px-2 pb-4">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-600">
                          Our Capabilities
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Explore enterprise solutions and specialized growth services
                        </p>
                      </div>

                      <Link
                        to="/services"
                        onClick={() => setServicesMenuOpen(false)}
                        className="group inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 transition-all hover:bg-blue-600 hover:text-white"
                      >
                        All Services
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Services Grid */}
                    <motion.div
                      variants={dropdownVariants}
                      className="grid max-h-[min(60vh,460px)] grid-cols-2 gap-2 overflow-y-auto pr-1 lg:grid-cols-3 custom-scrollbar"
                    >
                      {Object.entries(servicesData).map(([slug, service]) => (
                        <motion.div key={slug} variants={serviceItemVariants}>
                          <Link
                            to={`/services/${slug}`}
                            onClick={() => setServicesMenuOpen(false)}
                            className="group flex h-full items-center gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/80 hover:shadow-sm"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                              <service.icon className="h-4 w-4" />
                            </div>

                            <span className="min-w-0 text-xs font-semibold leading-relaxed text-slate-700 transition-colors group-hover:text-blue-800">
                              {service.title}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className={navClass}>
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <motion.span
                      layoutId="groish-nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 items-center md:flex">
            <Link
              to="/explore-our-companies"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-3 text-xs font-bold text-white shadow-[0_8px_25px_-8px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.5)] active:scale-95 lg:text-sm"
            >
              <motion.span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'linear',
                }}
              />
              <span className="relative">Explore Our Companies</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -80, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 80, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-3 top-[calc(100%+10px)] max-h-[calc(100dvh-105px)] overflow-y-auto rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_25px_65px_-18px_rgba(15,23,42,0.25)] backdrop-blur-2xl sm:inset-x-5 md:hidden"
          >
            <div className="space-y-1.5">

              <motion.div variants={mobileItemVariants}>
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={mobileNavClass}
                >
                  About
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </NavLink>
              </motion.div>

              <motion.div variants={mobileItemVariants}>
                <NavLink
                  to="/companies#inside-groish"
                  onClick={closeMobileMenu}
                  className={mobileNavClass}
                >
                  Companies
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </NavLink>
              </motion.div>

              <motion.div variants={mobileItemVariants}>
                <NavLink
                  to="/clients"
                  onClick={closeMobileMenu}
                  className={mobileNavClass}
                >
                  Clients
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </NavLink>
              </motion.div>

              {/* Mobile Services */}
              <motion.div
                variants={mobileItemVariants}
                className="overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70"
              >
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700"
                >
                  <span className={isServicesActive ? 'text-blue-700' : ''}>
                    Services
                  </span>

                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200/70 bg-white p-3">
                        <Link
                          to="/services"
                          onClick={closeMobileMenu}
                          className="mb-2 flex items-center justify-between rounded-lg bg-blue-50 px-3 py-2.5 text-xs font-bold text-blue-700 transition-colors hover:bg-blue-100"
                        >
                          View All Services
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        <div className="grid max-h-60 grid-cols-1 gap-1 overflow-y-auto sm:grid-cols-2">
                          {Object.entries(servicesData).map(([slug, service]) => (
                            <Link
                              key={slug}
                              to={`/services/${slug}`}
                              onClick={closeMobileMenu}
                              className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-xs font-medium text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-700"
                            >
                              <service.icon className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:scale-110" />
                              <span className="truncate">{service.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={mobileItemVariants}>
                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={mobileNavClass}
                >
                  Contact
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </NavLink>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div variants={mobileItemVariants} className="pt-2">
                <Link
                  to="/explore-our-companies"
                  onClick={closeMobileMenu}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:bg-blue-600 active:scale-[0.98]"
                >
                  Explore Our Companies
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 border-t border-slate-100 pt-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Built for growth. Designed for impact.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
