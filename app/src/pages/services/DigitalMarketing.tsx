import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Target, BarChart3, Users, Globe, Zap } from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategy Development',
      description: 'Custom digital marketing strategies aligned with your business goals and target audience.',
    },
    {
      icon: Globe,
      title: 'Multi-Channel Campaigns',
      description: 'Integrated campaigns across search, social, email, and display channels.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure campaign performance and ROI.',
    },
    {
      icon: Users,
      title: 'Audience Targeting',
      description: 'Precision targeting to reach your ideal customers at the right time.',
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Continuous testing and optimization to maximize conversion rates.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Scaling',
      description: 'Strategies to scale your marketing efforts as your business grows.',
    },
  ];

  const services = [
    'Search Engine Marketing (SEM)',
    'Social Media Advertising',
    'Display & Video Advertising',
    'Email Marketing Campaigns',
    'Content Marketing',
    'Influencer Marketing',
    'Affiliate Marketing',
    'Marketing Automation',
  ];

  const results = [
    { metric: '300%', label: 'Average ROI Increase' },
    { metric: '2M+', label: 'Leads Generated' },
    { metric: '500+', label: 'Campaigns Managed' },
    { metric: '98%', label: 'Client Retention' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">
                Digital Marketing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1214] leading-tight mb-6">
                Drive Growth With <span className="text-[#00C7B7]">Strategic</span> Digital Marketing
              </h1>
              <p className="text-lg text-[#A8B7B5] mb-8">
                Comprehensive digital marketing solutions that connect your brand with the right 
                audience, drive qualified traffic, and deliver measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/portfolio-social.jpg"
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-12 bg-[#0B1214]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#06B6D4] mb-1">{result.metric}</p>
                <p className="text-gray-400 text-sm">{result.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1214] mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-[#A8B7B5] max-w-2xl mx-auto">
              A comprehensive suite of services designed to drive growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-[#EFF6FF] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#00C7B7]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#00C7B7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1214] mb-3">{feature.title}</h3>
                <p className="text-[#A8B7B5]">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/portfolio-ecommerce.jpg"
                alt="Marketing Services"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">
                Full-Service Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1214] mb-6">
                Everything You Need to Succeed Online
              </h2>
              <p className="text-[#A8B7B5] mb-8">
                Our comprehensive digital marketing services cover every aspect of your 
                online presence, ensuring a cohesive and effective strategy.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C7B7] flex-shrink-0" />
                    <span className="text-[#A8B7B5]">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1214] mb-4">
              How We Deliver Results
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-5 gap-8"
          >
            {[
              { step: '01', title: 'Research', desc: 'Market & competitor analysis' },
              { step: '02', title: 'Strategy', desc: 'Custom plan development' },
              { step: '03', title: 'Execute', desc: 'Campaign implementation' },
              { step: '04', title: 'Monitor', desc: 'Performance tracking' },
              { step: '05', title: 'Optimize', desc: 'Continuous improvement' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00C7B7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h4 className="font-bold text-[#0B1214] mb-1">{item.title}</h4>
                <p className="text-sm text-[#A8B7B5]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a digital marketing strategy that drives real results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] text-[#0B1214] font-bold rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;

