import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TestimonialCarousel from './TestimonialCarousel';

gsap.registerPlugin(ScrollTrigger);

const projectSpotlights = [
  {
    id: 1,
    title: 'Enterprise SaaS Platform & Design System',
    industry: 'Technology & Cloud',
    service: 'Full-Stack Web Engineering',
    image: '/portfolio-saas.jpg',
    features: [
      'Sub-second Core Web Vitals & TTFB',
      'Modular Tailwind & Component Architecture',
      'End-to-End Type Safety with TypeScript',
      'Reactive Analytics & Data Visualizations',
    ],
    stack: ['Vite', 'React 19', 'Tailwind', 'Framer Motion'],
    metric: '99/100',
    metricLabel: 'Performance Target',
  },
  {
    id: 2,
    title: 'Next-Gen E-Commerce Architecture',
    industry: 'Retail & Consumer Brands',
    service: 'Headless Storefront',
    image: '/portfolio-ecommerce.jpg',
    features: [
      'Edge-Cached Product Catalogs',
      'Instant Search & Faceted Filtering',
      'Custom Stripe Checkout Pipeline',
      'Automated Stock & Order Synchronization',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    metric: '< 1.2s',
    metricLabel: 'Average Page Load',
  },
  {
    id: 3,
    title: 'HIPAA-Aligned Telehealth Web Portal',
    industry: 'Healthcare & Wellness',
    service: 'Web App & Workflow Automation',
    image: '/niche-healthcare.jpg',
    features: [
      'Encrypted Patient Intake Flows',
      'Automated SMS & Calendar Confirmation Sync',
      'Accessible WCAG AA Compliant UI',
      'Secure Provider Dashboard Architecture',
    ],
    stack: ['React', 'Node.js', 'Twilio API', 'Supabase'],
    metric: '100%',
    metricLabel: 'WCAG Accessible',
  },
  {
    id: 4,
    title: 'Commercial Construction & Infrastructure Portal',
    industry: 'Infrastructure & Engineering',
    service: 'High-Conversion Architecture',
    image: '/niche-realestate.jpg',
    features: [
      'Interactive Bid Estimation Calculator',
      'High-Resolution Lazy-Loaded Portfolio Gallery',
      'Automated Lead Qualification Routing',
      'Local Search Engine Schema Architecture',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'GSAP'],
    metric: '24/7',
    metricLabel: 'Automated Pipeline',
  },
];

const CaseStudies = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pin = triggerRef.current;
      const scrollSection = sectionRef.current;
      if (!pin || !scrollSection) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const totalScroll = scrollSection.scrollWidth - window.innerWidth + 120;
        gsap.to(scrollSection, {
          x: () => -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: triggerRef }
  );

  return (
    <div className="bg-[#0B1214] text-white">
      {/* Pinned GSAP Scroll Section */}
      <div ref={triggerRef} className="overflow-hidden">
        <div className="min-h-screen flex flex-col justify-center py-16">
          {/* Header */}
          <div className="container-custom mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AAD1]/10 border border-[#12AAD1]/20 text-[#12AAD1] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Engineering Showcases
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Featured Project Architectures
                </h2>
                <p className="text-sm sm:text-base text-[#A3B0B7] mt-2 max-w-xl">
                  Scroll horizontally to explore our production-grade web builds, automated pipelines, and digital growth engines.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-[#CBD1D8] uppercase tracking-widest font-mono">
                <span>Scroll Down to Pan</span>
                <ArrowRight className="w-4 h-4 text-[#12AAD1]" />
              </div>
            </div>
          </div>

          {/* Horizontal Row (Animated with GSAP ScrollTrigger) */}
          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row flex-nowrap gap-6 md:gap-8 px-4 sm:px-6 md:px-12 w-full md:w-max"
          >
            {projectSpotlights.map((project) => (
              <div
                key={project.id}
                className="w-full md:w-[460px] lg:w-[500px] shrink-0 rounded-2xl bg-[#101B1D] border border-[#CBD1D8]/20 hover:border-[#12AAD1]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-2xl group"
              >
                {/* Image & Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B1D] via-[#101B1D]/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-[#0B1214]/80 backdrop-blur-md rounded-full border border-white/10 text-[11px] font-semibold text-[#CBD1D8]">
                      {project.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold text-[#12AAD1] uppercase tracking-wider block mb-1">
                      {project.service}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5 mb-6">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD1D8]">
                        <CheckCircle2 className="w-4 h-4 text-[#12AAD1] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    {/* Key Metric & Tech Stack */}
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1214] border border-white/5 mb-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#A3B0B7]">
                          {project.metricLabel}
                        </div>
                        <div className="text-lg font-bold text-white">{project.metric}</div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#12AAD1]/10 border border-[#12AAD1]/20 text-[10px] font-mono text-[#12AAD1]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/portfolio"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#CBD1D8]/10 hover:bg-[#12AAD1] hover:text-[#061112] text-white font-semibold text-xs transition-all duration-200"
                    >
                      <span>Explore Technical Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link with Magnetic Spring CTA */}
          <div className="container-custom mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                to="/portfolio"
                className="btn-teal inline-flex items-center gap-2 hover:shadow-glow-teal"
              >
                <span>View Full Architecture Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Partnership Principles Section */}
      <div className="py-24 border-t border-white/5 bg-[#0B1214]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CBD1D8]/10 border border-[#CBD1D8]/20 text-[#CBD1D8] text-xs font-semibold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5 text-[#CBD1D8]" />
              Collaboration Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Build &amp; Partner
            </h2>
            <p className="text-base text-[#A3B0B7] max-w-xl mx-auto">
              Our working commitments ensure transparency, direct communication, and uncompromised code quality.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
