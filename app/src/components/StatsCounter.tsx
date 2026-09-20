import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Layers, Sparkles } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description?: string;
  isChrome?: boolean;
}

const stats: StatItem[] = [
  { 
    icon: Sparkles, 
    value: 2025, 
    suffix: '', 
    label: 'Founded', 
    description: 'Built on modern web & AI standards',
    isChrome: true
  },
  { 
    icon: Layers, 
    value: 10, 
    suffix: '+', 
    label: 'Core Capabilities', 
    description: 'Full-funnel engineering & acquisition'
  },
  { 
    icon: Clock, 
    value: 2, 
    suffix: 'hr SLA', 
    prefix: '< ',
    label: 'Response Commitment', 
    description: 'Direct senior strategist communication',
    isChrome: true
  },
  { 
    icon: Shield, 
    value: 100, 
    suffix: '%', 
    label: 'Code & Asset Ownership', 
    description: 'Full source code & asset transfer'
  },
];

const AnimatedCounter = ({ 
  value, 
  suffix, 
  prefix = '',
  isInView 
}: { 
  value: number; 
  suffix: string; 
  prefix?: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-[#0B1214] border-t border-white/5">
      
      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #12AAD1, transparent)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #CBD1D8, transparent)', filter: 'blur(100px)' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-teal mb-4">
            Defensible Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Transparent Agency Standards
          </h2>
          <p className="text-base sm:text-lg text-[#A3B0B7] max-w-2xl mx-auto">
            We operate with honest commitments, modern engineering, and complete client asset ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group bg-[#101B1D] ${
                stat.isChrome ? 'border border-[#CBD1D8]/30 hover:border-[#CBD1D8]/60' : 'border border-[#12AAD1]/20 hover:border-[#12AAD1]/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                stat.isChrome ? 'bg-[#CBD1D8]/10 border border-[#CBD1D8]/30' : 'bg-[#12AAD1]/10 border border-[#12AAD1]/25'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.isChrome ? 'text-[#CBD1D8]' : 'text-[#12AAD1]'}`} />
              </div>

              <div className={`text-3xl sm:text-4xl font-black mb-1.5 ${stat.isChrome ? 'text-[#CBD1D8]' : 'text-white'}`}>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  isInView={isInView} 
                />
              </div>

              <div className="text-white font-semibold mb-1 text-sm">{stat.label}</div>
              <div className="text-xs text-[#A3B0B7]">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
