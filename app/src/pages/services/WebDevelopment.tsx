import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap, Shield, Rocket } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      icon: Layout,
      title: 'Custom Design',
      description: 'Unique, brand-focused designs that stand out and engage your audience.',
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code built with modern technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Responsive designs that work perfectly on all devices and screen sizes.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast load times optimized for user experience and SEO.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Robust security measures to protect your data and users.',
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Built to grow with your business and handle increased traffic.',
    },
  ];

  const technologies = [
    'React & Next.js', 'Vue.js', 'Node.js', 'Python',
    'WordPress', 'Shopify', 'AWS & Cloud', 'MongoDB',
  ];

  const services = [
    'Custom Website Development',
    'E-commerce Solutions',
    'Web Application Development',
    'CMS Integration',
    'API Development',
    'Website Maintenance',
    'Performance Optimization',
    'Website Migration',
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
                Web Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1214] leading-tight mb-6">
                Build <span className="text-[#00C7B7]">Powerful</span> Digital Experiences
              </h1>
              <p className="text-lg text-[#A8B7B5] mb-8">
                Custom websites and web applications built with cutting-edge technologies 
                to deliver exceptional user experiences and drive business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/portfolio-saas.jpg"
                alt="Web Development"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
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
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1214] mb-4">
              Development Excellence
            </h2>
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

      {/* Services & Tech Stack */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">
                Our Services
              </span>
              <h2 className="text-3xl font-bold text-[#0B1214] mb-6">
                Comprehensive Web Solutions
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C7B7] flex-shrink-0" />
                    <span className="text-[#A8B7B5]">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">
                Tech Stack
              </span>
              <h2 className="text-3xl font-bold text-[#0B1214] mb-6">
                Technologies We Use
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <span className="font-medium text-[#0B1214]">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] text-[#0B1214] font-bold rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

