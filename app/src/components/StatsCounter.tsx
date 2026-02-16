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
}

const stats: StatItem[] = [
  { 
    icon: DollarSign, 
    value: 150, 
    suffix: 'M+', 
    prefix: '$',
    label: 'Revenue Generated', 
    description: 'For our clients in the last 5 years'
  },
  { 
    icon: Target, 
    value: 2, 
    suffix: 'M+', 
    label: 'Leads Driven', 
    description: 'Qualified leads for businesses'
  },
  { 
    icon: Briefcase, 
    value: 850, 
    suffix: '+', 
    label: 'Projects Delivered', 
    description: 'Successful campaigns completed'
  },
  { 
    icon: Users, 
    value: 95, 
    suffix: '%', 
    label: 'Client Retention', 
    description: 'Industry average: 50%'
  },
  { 
    icon: Star, 
    value: 98, 
    suffix: '%', 
    label: 'Client Satisfaction', 
    description: 'Based on post-project surveys'
  },
  { 
    icon: Award, 
    value: 15, 
    suffix: '+', 
    label: 'Years Experience', 
    description: 'Digital marketing excellence'
  },
  { 
    icon: TrendingUp, 
    value: 350, 
    suffix: '%', 
    label: 'Avg. ROI Increase', 
    description: 'For our ongoing clients'
  },
  { 
    icon: Clock, 
    value: 50, 
    suffix: 'K+', 
    label: 'Hours of Expertise', 
    description: 'Combined team experience'
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

    const duration = 2000;
    const steps = 60;
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
    <section ref={ref} className="py-16 bg-[#0a1f44] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#426dd8] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#ffc225] rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-[#ffc225] text-sm font-semibold rounded-full mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just promise results—we deliver them. Here&apos;s what we&apos;ve achieved for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-[#426dd8]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#426dd8]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  isInView={isInView} 
                />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
