import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, TrendingUp, Palette, Bot, MessageSquare, FileText, Target, Mail, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive growth and maximize ROI across all channels.',
      features: ['Strategy Development', 'Campaign Management', 'Analytics & Reporting', 'Conversion Optimization'],
      link: '/services/digital-marketing',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
      features: ['Custom Development', 'E-commerce Solutions', 'CMS Integration', 'Maintenance & Support'],
      link: '/services/web-development',
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies that improve visibility and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
      link: '/services/seo',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience.',
      features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Social Media Graphics'],
      link: '/services/graphic-design',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Leverage artificial intelligence to automate processes and enhance customer experiences.',
      features: ['Chatbots', 'Process Automation', 'AI Analytics', 'Personalization'],
      link: '/services/ai-automation',
    },
    {
      icon: MessageSquare,
      title: 'Social Media',
      description: 'Build and engage your community across all major social media platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Social', 'Influencer Marketing'],
      link: '/services/social-media',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Compelling content that tells your story and drives meaningful engagement.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Content Strategy'],
      link: '/services/content-marketing',
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Strategic paid advertising campaigns that deliver measurable results and ROI.',
      features: ['Google Ads', 'Social Ads', 'Display Advertising', 'Retargeting'],
      link: '/services/ppc-advertising',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions.',
      features: ['Campaign Design', 'Automation', 'List Management', 'A/B Testing'],
      link: '/services/email-marketing',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1214] mb-6">
              Comprehensive <span className="text-[#00C7B7]">Digital Solutions</span>
            </h1>
            <p className="text-lg text-[#A8B7B5]">
              From strategy to execution, we offer a full suite of digital marketing services 
              tailored to help your business grow and succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#EFF6FF] rounded-2xl p-8 group hover:bg-[#0B1214] transition-colors duration-500"
              >
                <div className="w-14 h-14 bg-[#00C7B7]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00C7B7] transition-colors">
                  <service.icon className="w-7 h-7 text-[#00C7B7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1214] mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#A8B7B5] mb-6 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#A8B7B5] group-hover:text-gray-300 transition-colors">
                      <CheckCircle className="w-4 h-4 text-[#00C7B7] group-hover:text-[#06B6D4] transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#00C7B7] font-semibold group-hover:text-[#06B6D4] transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1214] mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-[#A8B7B5] max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { number: '01', title: 'Discover', description: 'Understand your business, goals, and target audience' },
              { number: '02', title: 'Strategize', description: 'Develop a customized plan aligned with your objectives' },
              { number: '03', title: 'Execute', description: 'Implement campaigns with precision and expertise' },
              { number: '04', title: 'Optimize', description: 'Continuously improve based on data and insights' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#00C7B7]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-[#0B1214] mb-2">{step.title}</h3>
                <p className="text-[#A8B7B5]">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1214] mb-4">
              Specialized Solutions
            </h2>
            <p className="text-lg text-[#A8B7B5] max-w-2xl mx-auto">
              We understand the unique challenges of different industries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              'Healthcare', 'Real Estate', 'E-Commerce', 'Law Firms',
              'Restaurants', 'Fitness', 'Education', 'Finance',
              'Technology', 'Hospitality', 'Construction', 'Retail',
            ].map((industry, index) => (
              <Link
                key={index}
                to={`/industries/${industry.toLowerCase().replace(' ', '-')}`}
                className="bg-[#EFF6FF] rounded-xl p-6 text-center hover:bg-[#00C7B7] hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group"
              >
                <span className="font-semibold text-[#0B1214] group-hover:text-white transition-colors">
                  {industry}
                </span>
              </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] text-[#0B1214] font-bold rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

