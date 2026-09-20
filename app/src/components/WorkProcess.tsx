import { motion } from 'framer-motion';
import { Lightbulb, Cog, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: '1. Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and competitors to craft a bespoke roadmap.'
  },
  {
    icon: Cog,
    title: '2. Setup & Implementation',
    description: 'Our team builds the infrastructure—from website optimization to tracking pixels and automation workflows.'
  },
  {
    icon: Rocket,
    title: '3. Launch & Scale',
    description: 'We execute high-impact campaigns across targeted channels to drive qualified traffic and leads.'
  },
  {
    icon: BarChart,
    title: '4. Analyze & Optimize',
    description: 'Continuous A/B testing and data analysis ensure we maximize ROI and reduce acquisition costs.'
  }
];

const WorkProcess = () => {
  return (
    <section className="py-24 bg-[#0B1214] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#12AAD1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#12AAD1] font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How We Drive <span className="text-gradient">Revenue</span>
          </h2>
          <p className="text-lg text-[#A3B0B7] max-w-2xl mx-auto">
            A proven, four-step framework designed to eliminate guesswork and deliver predictable, scalable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#12AAD1]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#101B1D] border border-[#12AAD1]/20 flex items-center justify-center mb-6 shadow-lg group-hover:border-[#12AAD1]/50 group-hover:-translate-y-2 transition-all duration-300 relative z-10">
                <step.icon className="w-10 h-10 text-[#12AAD1] group-hover:text-white transition-colors" />
                
                {/* Ping animation behind icon */}
                <div className="absolute inset-0 rounded-2xl bg-[#12AAD1]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '2s' }} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#12AAD1] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#A3B0B7] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
