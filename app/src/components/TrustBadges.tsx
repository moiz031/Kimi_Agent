import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Clock, Code2, Zap, Layers, Sparkles } from 'lucide-react';

const capabilities = [
  'Modern Web Architecture',
  'Performance SEO & Core Web Vitals',
  'AI-Powered Workflow Automation',
  'Sub-2-Hour Response Commitment',
  '100% Source Code Ownership',
  'High-Converting UI/UX Design',
  'Direct Senior Engineer Support',
  'Agile Sprint Delivery',
  'Data-Driven Acquisition',
  'Transparent Metrics & Reporting',
];

const agencyCommitments = [
  {
    title: 'Founded 2025',
    detail: 'Built natively on modern web standards, Vite, React, and AI-driven workflows.',
    icon: Sparkles,
  },
  {
    title: '< 2-Hour Response Time',
    detail: 'Direct access to senior engineers and strategists with no account managers in between.',
    icon: Clock,
  },
  {
    title: '100% Source Code Ownership',
    detail: 'Full transfer of code, design systems, and platform credentials upon deployment.',
    icon: Code2,
  },
  {
    title: 'Milestone-Based Delivery',
    detail: 'Clear sprint deliverables, weekly staging previews, and transparent accountability.',
    icon: Shield,
  },
];

const technicalStandards = [
  {
    title: 'Lighthouse 95+ Score Target',
    detail: 'Engineered for near-instant loading, mobile responsiveness, and clean SEO architecture.',
    icon: Zap,
  },
  {
    title: '10+ Core Capabilities',
    detail: 'Full-funnel digital services covering design, frontend, backend, analytics, and ads.',
    icon: Layers,
  },
  {
    title: 'Production-Grade Security',
    detail: 'Strict best practices for API keys, headers, sanitized inputs, and SSL configurations.',
    icon: CheckCircle2,
  },
  {
    title: 'Zero Vendor Lock-In',
    detail: 'Standardized tooling and documentation that your team can run or expand anytime.',
    icon: CheckCircle2,
  },
];

const TrustBadges = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-slate-200 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1CA88C]/10 text-[#1CA88C] text-sm font-semibold rounded-full mb-4 border border-[#1CA88C]/20">
            <Shield className="w-4 h-4" />
            Honest Standards & Execution
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Defensible Commitments, Modern Technology
          </h2>
          <p className="text-[#64748B] text-sm md:text-base max-w-xl mx-auto">
            We operate with transparent engineering, clear response guarantees, and 100% client asset ownership.
          </p>
        </motion.div>

        {/* Infinite Auto-Scrolling Marquee using framer-motion */}
        <div className="mb-16 relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B1214] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B1214] to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
          >
            {[...capabilities, ...capabilities].map((item, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-xl border border-[#CBD1D8]/20 bg-white font-medium text-xs tracking-wider uppercase text-[#CBD1D8] hover:text-[#1CA88C] hover:border-[#1CA88C]/50 hover:bg-[#1CA88C]/5 transition-all duration-300 cursor-default flex items-center gap-2.5 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1CA88C]" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Standards & SLA Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Agency Commitments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#CBD1D8]/20 bg-white p-6 sm:p-8 hover:border-[#CBD1D8]/40 transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#CBD1D8]/10 border border-[#CBD1D8]/25 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#CBD1D8]" />
              </span>
              Our Service Commitments
            </h3>
            <div className="space-y-4">
              {agencyCommitments.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200 hover:border-[#CBD1D8]/25 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <item.icon className="w-4 h-4 text-[#CBD1D8]" />
                    <span className="font-semibold text-sm text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#64748B] pl-6.5 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Standards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#1CA88C]/20 bg-white p-6 sm:p-8 hover:border-[#1CA88C]/40 transition-colors"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#1CA88C]/10 border border-[#1CA88C]/25 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#1CA88C]" />
              </span>
              Technical Delivery Standards
            </h3>
            <div className="space-y-4">
              {technicalStandards.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200 hover:border-[#1CA88C]/25 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <item.icon className="w-4 h-4 text-[#1CA88C]" />
                    <span className="font-semibold text-sm text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#64748B] pl-6.5 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reverse Marquee for Core Tech Stack & Tools */}
        <div className="mt-14 relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B1214] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B1214] to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ ease: 'linear', duration: 32, repeat: Infinity }}
          >
            {[
              'React 19 & TypeScript',
              'Tailwind CSS',
              'Framer Motion',
              'GSAP Animations',
              'Next.js Fullstack',
              'PostgreSQL & Supabase',
              'Python Automation',
              'Vite Fast Bundling',
              'React 19 & TypeScript',
              'Tailwind CSS',
              'Framer Motion',
              'GSAP Animations',
              'Next.js Fullstack',
              'PostgreSQL & Supabase',
              'Python Automation',
              'Vite Fast Bundling',
            ].map((stack, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg border border-slate-200 bg-white/70 text-xs font-mono tracking-wider text-[#64748B] hover:text-[#1CA88C] hover:border-[#1CA88C]/30 transition-all duration-300"
              >
                {stack}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
