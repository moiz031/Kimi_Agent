import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award, Clock, DollarSign, Target, Briefcase, Star } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description?: string;
  isGold?: boolean;
}

const stats: StatItem[] = [
  { 
    icon: DollarSign, 
    value: 150, 
    suffix: 'M+', 
    prefix: '$',
    label: 'Revenue Generated', 
    description: 'For clients in last 5 years',
    isGold: true
  },
  { 
    icon: Target, 
    value: 21, 
    suffix: 'M+', 
    label: 'Leads Driven', 
    description: 'Qualified digital prospects'
  },
  { 
    icon: Briefcase, 
    value: 850, 
    suffix: '+', 
    label: 'Projects Delivered', 
    description: 'High-performance builds'
  },
  { 
    icon: Users, 
    value: 95, 
    suffix: '%', 
    label: 'Client Retention', 
    description: 'Industry benchmark: 50%'
  },
  { 
    icon: Star, 
    value: 98, 
    suffix: '%', 
    label: 'Client Satisfaction', 
    description: 'Surveys post-delivery'
  },
  { 
    icon: Award, 
    value: 15, 
    suffix: '+', 
    label: 'Years Experience', 
    description: 'Digital excellence'
  },
  { 
    icon: TrendingUp, 
    value: 850, 
    suffix: '%+', 
    label: 'Average ROAS', 
    description: 'Targeted campaigns',
    isGold: true
  },
  { 
    icon: Clock, 
    value: 50, 
    suffix: 'K+', 
    label: 'Hours Expertise', 
    description: 'Engineering team time'
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
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #00C7B7, transparent)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D6A84A, transparent)', filter: 'blur(100px)' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-base sm:text-lg text-[#A8B7B5] max-w-2xl mx-auto">
            We don&apos;t just promise results—we deliver them with data-driven precision.
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
                stat.isGold ? 'border border-[#D6A84A]/30 hover:border-[#D6A84A]/60' : 'border border-[#00C7B7]/15 hover:border-[#00C7B7]/40'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                stat.isGold ? 'bg-[#D6A84A]/10 border border-[#D6A84A]/30' : 'bg-[#00C7B7]/10 border border-[#00C7B7]/25'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.isGold ? 'text-[#D6A84A]' : 'text-[#00C7B7]'}`} />
              </div>

              <div className={`text-3xl sm:text-4xl font-black mb-1.5 ${stat.isGold ? 'text-[#D6A84A]' : 'text-white'}`}>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  isInView={isInView} 
                />
              </div>

              <div className="text-white font-semibold mb-1 text-sm">{stat.label}</div>
              <div className="text-xs text-[#A8B7B5]">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
