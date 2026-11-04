import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  MapPin,
  CheckCircle2,
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
  Compass,
  Code2,
  Rocket
} from 'lucide-react';
import CountUp from '../components/CountUp';

const Home = () => {
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const clientLogos = [
    { name: 'Logoipsum', text: '❖ Logoipsum' },
    { name: 'SaaSify', text: '⬢ SaaSify' },
    { name: 'TechFlow', text: '✦ TechFlow' },
    { name: 'Miloove', text: '❋ Miloove' },
    { name: 'NexusScale', text: '◈ NexusScale' },
    { name: 'CloudPeak', text: '▲ CloudPeak' },
  ];

  const services = [
    {
      title: 'Web Development',
      category: 'High Performance & Scale',
      description: 'Ultra-fast React 19 & Next.js architectures, custom API integrations, edge caching, and sub-second Core Web Vitals.',
      image: '/portfolio-saas.jpg',
      tags: ['Next.js 15', 'React 19', 'Full-Stack'],
      link: '/services/web-development'
    },
    {
      title: 'AI Automation',
      category: 'Intelligent Workflows',
      description: 'Autonomous AI agents, intelligent lead scoring pipelines, self-executing CRM workflows, and custom LLM architectures.',
      image: '/portfolio-seo.jpg',
      tags: ['AI Agents', 'CRM Workflows', 'API Pipelines'],
      link: '/services/ai-automation'
    },
    {
      title: 'Digital Marketing',
      category: 'Full-Funnel Growth',
      description: 'Data-backed conversion funnels, multichannel client acquisition campaigns, and measurable revenue growth strategies.',
      image: '/niche-ecommerce.jpg',
      tags: ['Funnel CRO', 'Growth Strategy', 'Attribution'],
      link: '/services/digital-marketing'
    },
    {
      title: 'SEO Optimization',
      category: 'Organic Search Authority',
      description: 'Comprehensive technical audits, programmatic SEO, keyword clustering, and high-authority outreach to dominate Google page 1.',
      image: '/portfolio-content.jpg',
      tags: ['Technical SEO', 'Keyword Ranking', 'Organic Velocity'],
      link: '/services/seo'
    },
    {
      title: 'PPC Advertising',
      category: 'Paid Traffic & ROAS',
      description: 'High-intent Google Ads, YouTube, and Meta ad campaigns engineered with strict ROI controls and precision audience targeting.',
      image: '/portfolio-ecommerce.jpg',
      tags: ['Google Ads', 'Meta Scaling', 'High ROAS'],
      link: '/services/ppc-advertising'
    },
    {
      title: 'Graphic Design',
      category: 'Branding & UI/UX Systems',
      description: 'Bespoke brand identities, high-converting Figma UI/UX design systems, modern typography, and marketing assets.',
      image: '/portfolio-branding.jpg',
      tags: ['Brand Identity', 'Figma Systems', 'UI/UX Prototypes'],
      link: '/services/graphic-design'
    },
  ];

  const recentProjects = [
    {
      title: 'Modern Real Estate Platform',
      category: 'Website UI/UX Design — Real Estate',
      duration: '3 weeks',
      tag: 'clean design',
      metric: '+140% Qualified Inquiries',
      description: 'With our expertise in UI/UX design, we engineered an intuitive, high-performance real estate portal that outshined competitors with lightning-fast filter pipelines.',
      image: '/niche-realestate.jpg',
      link: '/portfolio'
    },
    {
      title: 'Headless E-Commerce Flagship',
      category: 'E-Commerce Architecture — Global Brand',
      duration: '4 weeks',
      tag: 'e-commerce',
      metric: '+35% Sales Velocity',
      description: 'We designed a sleek, responsive e-commerce platform that boosted mobile checkouts by 35%, featuring instantaneous edge-cached catalogs and customized Stripe integrations.',
      image: '/portfolio-ecommerce.jpg',
      link: '/portfolio'
    },
    {
      title: 'Enterprise SaaS Analytics Suite',
      category: 'Full-Stack Web Engineering — Cloud Tech',
      duration: '6 weeks',
      tag: 'saas dashboard',
      metric: '99/100 Core Web Vitals',
      description: 'End-to-end cloud platform featuring reactive charting, sub-second TTFB, and an enterprise design system empowering over 50,000 active monthly corporate users.',
      image: '/portfolio-saas.jpg',
      link: '/portfolio'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategic Roadmap',
      phase: 'Sprint 01',
      duration: '3–5 Days',
      description: 'Comprehensive technical consultation, competitor benchmark audits, and user flow mapping to engineer an airtight technical scope.',
      deliverables: ['Architecture Blueprint', 'Conversion Funnel Audit', 'Interactive Timeline'],
      image: '/portfolio-branding.jpg',
      badge: 'Discovery & Strategy',
      stat: '100% Scope Clarity',
      icon: Compass
    },
    {
      step: '02',
      title: 'High-Fidelity UI/UX & Prototyping',
      phase: 'Sprint 02',
      duration: '1–2 Weeks',
      description: 'Tailored Figma design systems built with high aesthetic fidelity, mobile responsiveness, and conversion-tested user flows.',
      deliverables: ['Custom Figma System', 'Interactive Prototype', 'WCAG AA Accessibility'],
      image: '/portfolio-saas.jpg',
      badge: 'Design System',
      stat: 'Sub-Pixel Precision',
      icon: Layers
    },
    {
      step: '03',
      title: 'Full-Stack Engineering & AI Workflows',
      phase: 'Sprint 03',
      duration: '2–4 Weeks',
      description: 'Clean, type-safe development using React 19, Next.js, and edge architecture with autonomous workflows and sub-second API pipelines.',
      deliverables: ['Clean Next.js Codebase', 'Autonomous AI Workflows', '100% Code IP Rights'],
      image: '/portfolio-ecommerce.jpg',
      badge: 'Production Engineering',
      stat: '< 0.8s TTFB',
      icon: Code2
    },
    {
      step: '04',
      title: 'Rigorous QA, Launch & Ongoing Scale',
      phase: 'Sprint 04',
      duration: 'Continuous Growth',
      description: 'Multi-device load testing, SEO indexing verification, and continuous performance telemetry to keep your brand at peak velocity.',
      deliverables: ['99+ Core Web Vitals', '24/7 Priority SLA', 'Bi-weekly Telemetry Reports'],
      image: '/hero-bg.jpg',
      badge: 'Deployment & SLA',
      stat: '99.9% Uptime',
      icon: Rocket
    }
  ];

  const industriesShowcase = [
    {
      title: 'E-Commerce & High-Volume Retail',
      category: 'Headless Digital Commerce',
      stat: '+185% Sales Velocity',
      description: 'High-converting edge-cached storefronts with frictionless checkout pipelines, instant search, and automated inventory sync.',
      tags: ['Next.js Commerce', 'Stripe Architecture', 'Sub-second Checkout'],
      image: '/niche-ecommerce.jpg',
      link: '/industries/ecommerce'
    },
    {
      title: 'Enterprise SaaS & Cloud Portals',
      category: 'Scalable Web Platforms',
      stat: '99/100 Core Web Vitals',
      description: 'Multi-tenant analytics dashboards, reactive real-time telemetry, and bulletproof enterprise client authentication.',
      tags: ['React 19', 'Live Telemetry', 'Role-Based Access'],
      image: '/portfolio-saas.jpg',
      link: '/industries/technology'
    },
    {
      title: 'Real Estate & High-Ticket Ventures',
      category: 'Property & Lead Portals',
      stat: '3.4x Qualified Leads',
      description: 'Intuitive property filtering engines, interactive maps, and automated lead capture with direct WhatsApp routing.',
      tags: ['Instant Map Filter', 'Lead Scoring', 'CRM Automations'],
      image: '/niche-realestate.jpg',
      link: '/industries/real-estate'
    },
    {
      title: 'Healthcare & Life Sciences',
      category: 'Secure Patient Experiences',
      stat: '100% HIPAA-Ready UX',
      description: 'Encrypted patient intake systems, seamless doctor scheduling pipelines, and accessible, reassuring medical portal UX.',
      tags: ['HIPAA Standards', 'Encrypted Intake', 'Telehealth UX'],
      image: '/niche-healthcare.jpg',
      link: '/industries/healthcare'
    }
  ];

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#071013] text-[#111827] dark:text-[#F1F5F9] transition-colors duration-300">
      
      {/* ── 1. HERO SECTION (Direct Match to Reference Image) ───────────────── */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#E2EDE5] dark:bg-[#0A161A] border-b border-[#0B3B2C]/10 dark:border-white/5 transition-colors">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Headline & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3B2C]/10 dark:bg-emerald-500/10 border border-[#0B3B2C]/15 text-[#0B3B2C] dark:text-[#20C997] text-xs font-bold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1CA88C] animate-pulse" />
                <span>Turning Ambitious Visions Into Intelligent Digital Realities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#0E1B18] dark:text-white leading-[1.12] mb-6 tracking-tight">
                Making the best out of your idea —{' '}
                <span className="font-editorial text-[#0B3B2C] dark:text-[#20C997] font-normal block sm:inline">
                  digital growth beyond
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
                We help businesses grow through innovative design, data-driven marketing, and technology-driven strategies engineered for measurable revenue.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0B1518] hover:bg-[#16272C] text-white text-sm font-semibold shadow-lg shadow-black/15 transition-all"
                  >
                    Get Started
                  </Link>
                </motion.div>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#0E1B18] dark:text-white hover:text-[#0B3B2C] dark:hover:text-[#20C997] transition-colors group"
                >
                  <span>See my work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Product Preview Card + Testimonial Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col items-center"
            >
              {/* Product Card (grow.ai) */}
              <div className="w-full max-w-md bg-white dark:bg-[#101D21] rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-black/5 dark:border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5 mb-5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1CA88C]" />
                    <span className="font-bold text-slate-800 dark:text-slate-100">grow.ai</span>
                  </div>
                  <div className="flex gap-3 text-[11px]">
                    <span className="hover:text-slate-800 cursor-pointer">Platform</span>
                    <span className="hover:text-slate-800 cursor-pointer">Community</span>
                    <span className="hover:text-slate-800 cursor-pointer">Pricing</span>
                  </div>
                </div>

                <div className="relative mb-5">
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                    optimizing<br />social media
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute right-2 top-2 w-14 h-14 rounded-full bg-[#E2EDE5]/90 dark:bg-slate-800/90 backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-5 h-5 text-[#0B3B2C] dark:text-[#20C997] fill-current ml-0.5" />
                  </div>

                  {/* Mini Visual Chart Bar & Pie */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 dark:bg-[#0A161A] rounded-xl flex items-end gap-1.5 h-16">
                      {[30, 50, 40, 75, 60, 95, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#1CA88C] rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-[#0A161A] rounded-xl flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-[#1CA88C] border-t-amber-400 border-r-[#0B3B2C] animate-spin-slow" />
                    </div>
                  </div>
                </div>

                {/* Simulated Input Field */}
                <div className="flex items-center gap-2 p-1.5 bg-slate-50 dark:bg-[#0A161A] rounded-full border border-slate-200/80 dark:border-white/10">
                  <input
                    type="text"
                    readOnly
                    placeholder="Enter your email address"
                    className="w-full bg-transparent px-3 text-xs text-slate-600 dark:text-slate-300 outline-none"
                  />
                  <button className="px-4 py-1.5 rounded-full bg-[#0B3B2C] text-white text-xs font-semibold shrink-0">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="w-full max-w-md mt-4 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#101D21]/95 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg"
              >
                <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 italic mb-3 leading-relaxed">
                  "I just wanted to take a moment to express my sincere appreciation for the incredible work you have done for us."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img src="/user-photo.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src="/team-ceo.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src="/team-developer.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src="/founder.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <span className="text-[#1CA88C]">★ 4.9</span>
                    <span>166k+ Happy Clients</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── 2. CLIENT LOGOS MARQUEE (Social Proof) ─────────────────────────── */}
      <section className="py-9 bg-white dark:bg-[#071013] border-b border-slate-200/80 dark:border-white/5 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-around gap-8 text-sm tracking-wide">
            {clientLogos.map((logo, idx) => (
              <span key={idx} className="text-slate-800 dark:text-slate-200 font-bold hover:text-[#0B3B2C] dark:hover:text-[#20C997] transition-colors cursor-default">
                {logo.text}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ── 3. DEEP EMERALD STATS BANNER (With Animated Count-Up Numbers) ─── */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#0B3B2C] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle Textured Background Wave */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#20C997] via-transparent to-transparent" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* 3 Metrics with CountUp */}
              <div className="lg:col-span-7 grid grid-cols-3 gap-4 sm:gap-6 border-b lg:border-b-0 lg:border-r border-white/15 pb-8 lg:pb-0 lg:pr-8">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1">
                    <CountUp end={124} suffix="k+" />
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-100/75 leading-tight">Tailored websites designs</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1">
                    <CountUp end={1.30} suffix="x" decimals={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-100/75 leading-tight">Fast, responsive optimized</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1">
                    <CountUp end={2} suffix="M" />
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-100/75 leading-tight">Targeted campaigns converts</div>
                </div>
              </div>

              {/* Right Blurb with Pin Icon */}
              <div className="lg:col-span-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#20C997]" />
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Innovative mobile apps and web platforms built to engage and delight. Seamless user interfaces and scalable back-end systems, attention to detail, creativity, and transparent communication.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* ── 4. OUR SERVICES (With Authentic Visual Mockups in Every Card) ──── */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#071013] border-b border-slate-200/80 dark:border-white/5 transition-colors">
        <div className="container-custom">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B18] dark:text-white leading-tight mb-4">
                Our services —{' '}
                <span className="font-editorial text-[#0B3B2C] dark:text-[#20C997] font-normal block sm:inline">
                  helps you grow fast
                </span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Here we specialize in creating exceptional digital experiences. Our team of expert designers focuses on crafting intuitive, visually stunning, and user-friendly interfaces.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1518] dark:bg-white text-white dark:text-[#0B1518] text-sm font-semibold shadow-md shrink-0"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Service Cards Grid (Visual Preview Image in Each Card) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl bg-white dark:bg-[#101D21] border border-slate-200/90 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <Link to={item.link} className="flex flex-col justify-between h-full">
                {/* Visual Image Preview */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#1CA88C] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#1CA88C]/10 text-[#1CA88C] flex items-center justify-center shrink-0 group-hover:bg-[#1CA88C] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 5. RECENT PROJECTS (With Realistic Laptop Mockup & Live Previews) ─ */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0A161A] border-b border-slate-200/80 dark:border-white/5 transition-colors">
        <div className="container-custom">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B18] dark:text-white leading-tight mb-4">
              Recent projects —{' '}
              <span className="font-editorial text-[#0B3B2C] dark:text-[#20C997] font-normal block sm:inline">
                in depth works
              </span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We designed sleek, responsive digital systems that boosted sales velocity and customer engagement. Optimized for mobile shopping with a seamless checkout process and user-friendly UX.
            </p>
          </div>

          {/* Project Display: Left Laptop Mockup + Right Details Card */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Realistic Laptop Device Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex justify-center"
            >
              <div className="w-full max-w-xl">
                {/* Laptop Screen Frame */}
                <div className="rounded-t-2xl bg-[#1e293b] p-3 shadow-2xl border border-slate-700/80">
                  <div className="flex items-center gap-1.5 mb-2 px-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] text-slate-400 mx-auto font-mono">mentinox-preview.app</span>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 bg-slate-900">
                    <img
                      src={recentProjects[activeProjectTab].image}
                      alt={recentProjects[activeProjectTab].title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                </div>
                {/* Laptop Base Bottom Bar */}
                <div className="h-4 bg-slate-700 rounded-b-xl shadow-lg relative">
                  <div className="w-20 h-1.5 bg-slate-500 rounded-full mx-auto" />
                </div>
              </div>
            </motion.div>

            {/* Right: Interactive Case Study Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-white dark:bg-[#101D21] p-8 border border-slate-200/90 dark:border-white/10 shadow-lg">
                
                {/* Tabs to Switch Projects */}
                <div className="flex gap-2 mb-6">
                  {recentProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProjectTab(idx)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                        activeProjectTab === idx
                          ? 'bg-[#0B3B2C] text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      Project 0{idx + 1}
                    </button>
                  ))}
                </div>

                <div className="text-xs font-bold text-[#1CA88C] uppercase tracking-wider mb-2">
                  {recentProjects[activeProjectTab].category}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {recentProjects[activeProjectTab].title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {recentProjects[activeProjectTab].description}
                </p>

                <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-white/5 mb-6">
                  <div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">
                      {recentProjects[activeProjectTab].metric}
                    </div>
                    <div className="text-[11px] text-slate-500">Key Outcome</div>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {recentProjects[activeProjectTab].duration}
                    </div>
                    <div className="text-[11px] text-slate-500">Timeline</div>
                  </div>
                </div>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3B2C] dark:text-[#20C997] hover:underline"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ── 6. AGENCY CULTURE ("We understand all business is unique") ─────── */}
      {/* ── 7. OUR EXECUTION PROCESS (Interactive Step-by-Step Sprint Flow) ── */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0A161A] border-b border-slate-200/80 dark:border-white/5 transition-colors">
        <div className="container-custom">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1CA88C]/10 border border-[#1CA88C]/20 text-[#0B3B2C] dark:text-[#20C997] text-xs font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B18] dark:text-white leading-tight mb-4">
              Our execution process —{' '}
              <span className="font-editorial text-[#0B3B2C] dark:text-[#20C997] font-normal block sm:inline">
                from concept to scaled impact
              </span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              A transparent, battle-tested engineering sprint framework that removes guesswork and guarantees production excellence.
            </p>
          </div>

          {/* Interactive Steps Grid: Left Step Buttons + Right Interactive Visual Showcase */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Steps Selector Cards */}
            <div className="lg:col-span-6 space-y-4">
              {processSteps.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeProcessStep === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveProcessStep(idx)}
                    whileHover={{ x: 4 }}
                    className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'bg-white dark:bg-[#101D21] border-[#1CA88C] shadow-xl'
                        : 'bg-white/60 dark:bg-[#071013]/60 border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 hover:bg-white'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1CA88C]" />
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#0B3B2C] text-[#20C997]'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                            isActive ? 'text-[#0E1B18] dark:text-white' : 'text-slate-700 dark:text-slate-300'
                          }`}>
                            {item.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-[#1CA88C] bg-[#1CA88C]/10 px-2.5 py-0.5 rounded-full">
                            {item.duration}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.deliverables.map((del, dIdx) => (
                            <span key={dIdx} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-[#1CA88C]" />
                              <span>{del}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Dynamic Visual Preview Showcase Card */}
            <div className="lg:col-span-6">
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#101D21] border border-slate-200/90 dark:border-white/10 shadow-2xl p-4 sm:p-5"
              >
                {/* Visual Image */}
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={processSteps[activeProcessStep].image}
                    alt={processSteps[activeProcessStep].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white shadow-lg flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#1CA88C]" />
                      <span>{processSteps[activeProcessStep].badge}</span>
                    </span>
                  </div>

                  {/* Floating Bottom Metric & Status */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono">Performance Metric</div>
                      <div className="text-base sm:text-lg font-bold">{processSteps[activeProcessStep].stat}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-slate-200">{processSteps[activeProcessStep].phase}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Step {activeProcessStep + 1} of {processSteps.length} • Dedicated Sprint Team
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1CA88C] hover:text-[#0B3B2C] dark:hover:text-[#20C997] transition-colors"
                  >
                    <span>Request Sprint Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 8. EXTRA VISUAL SECTION: INDUSTRIES WE EMPOWER (Rich Bento Grid with Images & Animations) ── */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#071013] border-b border-slate-200/80 dark:border-white/5 transition-colors">
        <div className="container-custom">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3B2C]/10 dark:bg-emerald-500/10 border border-[#0B3B2C]/20 text-[#0B3B2C] dark:text-[#20C997] text-xs font-bold tracking-wide uppercase mb-4">
                <Rocket className="w-3.5 h-3.5" />
                <span>Specialized Domain Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B18] dark:text-white leading-tight mb-4">
                Industries we empower —{' '}
                <span className="font-editorial text-[#0B3B2C] dark:text-[#20C997] font-normal block sm:inline">
                  bespoke digital excellence
                </span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                We engineer category-defining digital ecosystems tailored to the exact regulatory, architectural, and behavioral dynamics of your vertical.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1518] dark:bg-white text-white dark:text-[#0B1518] text-sm font-semibold shadow-md shrink-0"
              >
                <span>View all industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* 4 Rich Visual Bento Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {industriesShowcase.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-slate-50 dark:bg-[#101D21] border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Image Banner with Zoom & Overlay */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  {/* Floating Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[11px] font-bold text-slate-900 dark:text-slate-100 shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Floating Performance Metric Pill */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#0B3B2C]/90 backdrop-blur-md text-xs font-black text-[#20C997] border border-[#20C997]/30 shadow-lg flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{item.stat}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#1CA88C] transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-9 h-9 rounded-full bg-[#1CA88C]/10 text-[#1CA88C] flex items-center justify-center shrink-0 group-hover:bg-[#1CA88C] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/80 dark:border-white/5">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 8. CONTACT CTA BANNER (With Authentic Team Working Photograph) ─── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="rounded-[2.5rem] bg-[#DDEBE0] dark:bg-[#101D21] p-8 sm:p-12 lg:p-14 border border-black/5 dark:border-white/10 shadow-lg">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1B18] dark:text-white leading-tight mb-6">
                  Have any idea to work on? —{' '}
                  <span className="font-editorial text-[#0B3B2C] dark:text-[#20C997] font-normal block sm:inline">
                    lets get started
                  </span>
                </h2>

                <p className="text-base text-slate-700 dark:text-slate-300 max-w-lg mb-8 leading-relaxed">
                  Start your transformation with an engineering sprint plan, transparent milestones, and complete client code ownership.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0B1518] hover:bg-[#16272C] text-white text-sm font-semibold shadow-md"
                    >
                      Get Started
                    </Link>
                  </motion.div>

                  <a
                    href="https://wa.me/923309999149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold hover:bg-white transition-colors"
                  >
                    <span>WhatsApp Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Authentic Team Collaboration Photo */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
                  <img
                    src="/hero-bg.jpg"
                    alt="Mentinox Solutions Leadership"
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
