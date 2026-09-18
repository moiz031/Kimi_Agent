import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  LineChart, 
  Target,
  Cpu,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Our proprietary AI engine analyzes millions of data points to predict trends and optimize campaigns in real-time.',
  },
  {
    icon: BarChart3,
    title: 'ROI Tracking Dashboard',
    description: 'Track every dollar spent and see exactly how it translates into revenue with our closed-loop attribution system.',
  },
  {
    icon: Target,
    title: 'Predictive Targeting',
    description: 'Machine learning algorithms identify your highest-value prospects before they even start searching.',
  },
  {
    icon: Shield,
    title: 'Fraud Protection',
    description: 'Advanced bot detection and click fraud prevention saves our clients an average of 23% on ad spend.',
  },
  {
    icon: LineChart,
    title: 'Competitive Intelligence',
    description: 'Monitor competitor strategies, keywords, and ad copy to stay one step ahead in your market.',
  },
  {
    icon: Zap,
    title: 'Real-Time Optimization',
    description: 'Campaigns automatically adjust based on performance data, ensuring maximum efficiency 24/7.',
  },
];

const stats = [
  { value: '$2M+', label: 'Worth of Technology Value' },
  { value: '50M+', label: 'Data Points Analyzed Daily' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '3x', label: 'Faster Optimization' },
];

const TechnologySection = () => {
  return (
    <section className="py-20 bg-[#0B1214] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00C7B7]/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full filter blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#00C7B7]/20 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">
              <Cpu className="w-4 h-4 inline mr-2" />
              Proprietary Technology
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              NexGen Analytics Platform™
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              Our proprietary marketing technology platform combines AI, machine learning, and 
              advanced analytics to deliver insights worth over $2 million—available exclusively 
              to our clients at no additional cost.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#06B6D4] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C7B7] to-[#06B6D4] border-2 border-[#0B1214] flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}K+
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">500+</span> businesses trust our platform
              </p>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#00C7B7]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00C7B7] transition-colors">
                  <feature.icon className="w-6 h-6 text-[#00C7B7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
            <Globe className="w-8 h-8 text-[#00C7B7]" />
            <div className="text-left">
              <p className="text-white font-semibold">Want to see our platform in action?</p>
              <p className="text-gray-400 text-sm">Schedule a free demo with our team</p>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 bg-[#00C7B7] text-white font-semibold rounded-lg hover:bg-[#14D9C7] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
