import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap, Shield, Rocket } from 'lucide-react';
import { Tilt } from 'react-tilt';

const WebDevelopment = () => {
  const features = [
    {
      icon: Layout,
      title: 'Custom UI/UX Design',
      description: 'Bespoke, high-converting interfaces tailored perfectly to your brand and user psychology.',
    },
    {
      icon: Code,
      title: 'Modern Architecture',
      description: 'Built on React, Next.js, and scalable cloud infrastructure for maximum reliability.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Flawless responsive experiences across every device, ensuring zero lost conversions.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Load Times',
      description: 'Aggressively optimized performance that keeps bounce rates low and Google rankings high.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced data protection, regular audits, and secure authentication built-in from day one.',
    },
    {
      icon: Rocket,
      title: 'Infinite Scalability',
      description: 'Serverless architectures designed to handle massive traffic spikes without breaking a sweat.',
    },
  ];

  const technologies = [
    'React & Next.js', 'Vue & Nuxt', 'Node.js', 'Python/Django',
    'AWS Cloud', 'Vercel', 'PostgreSQL', 'MongoDB',
  ];

  const services = [
    'High-Conversion Landing Pages',
    'Custom Web Applications',
    'Enterprise E-commerce (Shopify Plus)',
    'Headless CMS Architecture',
    'Custom API Integrations',
    'Legacy System Modernization',
  ];

  return (
    <div className="pt-20 bg-[#0B1214] text-[#F7FAF9]">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-[#12AAD1]/10 bg-tech-waves">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#12AAD1]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#CBD1D8]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AAD1]/10 border border-[#12AAD1]/25 mb-6 text-xs font-bold uppercase tracking-wider text-[#12AAD1]">
                <span className="w-2 h-2 rounded-full bg-[#12AAD1] animate-pulse" />
                Web Development Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Websites Built for <br />
                <span className="text-[#12AAD1]">Maximum ROI</span>
              </h1>
              <p className="text-lg text-[#A3B0B7] mb-8 max-w-xl leading-relaxed">
                We don't just build websites; we build scalable digital assets. High-performance, stunningly designed web applications engineered to convert traffic into revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-teal group flex items-center gap-2">
                  <span>Get Free Technical Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="btn-secondary group flex items-center gap-2">
                  <span>View Our Work</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <Tilt options={{ max: 10, scale: 1.02, speed: 400 }}>
                <div className="relative rounded-2xl overflow-hidden border border-[#12AAD1]/20 shadow-[0_0_50px_rgba(18, 170, 209,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1214] via-transparent to-transparent opacity-60 z-10" />
                  <img
                    src="/portfolio-saas.jpg"
                    alt="Web Development Dashboard"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Floating Tech Badge */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-[#101B1D]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#12AAD1]/30">
                    <Code className="w-5 h-5 text-[#12AAD1]" />
                    <span className="text-white font-semibold text-sm">React / Node Architecture</span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0B1214]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Engineering Excellence
            </h2>
            <p className="text-lg text-[#A3B0B7] max-w-2xl mx-auto">
              Every line of code is written with purpose. We prioritize speed, security, and scalability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#101B1D] rounded-2xl p-8 border border-[#12AAD1]/20 hover:border-[#12AAD1]/50 hover:shadow-[0_0_30px_rgba(18, 170, 209,0.1)] transition-all h-full group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#12AAD1]/20 to-[#12AAD1]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#12AAD1] group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-[#12AAD1] group-hover:text-[#061112]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#12AAD1] transition-colors">{feature.title}</h3>
                  <p className="text-[#A3B0B7] leading-relaxed">{feature.description}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Services Detail */}
      <section className="py-24 bg-[#101B1D] border-y border-[#12AAD1]/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-[#12AAD1]/20 pb-4">
                Development Capabilities
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-[#0B1214] rounded-xl border border-[#12AAD1]/10 hover:border-[#12AAD1]/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#12AAD1] flex-shrink-0" />
                    <span className="text-[#F7FAF9] font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-[#12AAD1]/20 pb-4">
                Modern Tech Stack
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-[#0B1214] rounded-xl p-5 text-center border border-[#CBD1D8]/20 hover:border-[#CBD1D8]/50 transition-colors group">
                    <span className="font-semibold text-[#A3B0B7] group-hover:text-[#CBD1D8] transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-[#12AAD1]/5 border border-[#12AAD1]/20 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code className="w-24 h-24 text-[#12AAD1]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 relative z-10">Don't see your stack?</h4>
                <p className="text-sm text-[#A3B0B7] relative z-10">Our senior engineers are framework-agnostic. We can adapt to or migrate from almost any modern technology environment.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#12AAD1]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#061112] mb-6">
              Ready to Upgrade Your Digital Presence?
            </h2>
            <p className="text-xl text-[#061112]/80 mb-10 max-w-2xl mx-auto font-medium">
              Schedule a technical discovery call to discuss architecture, timelines, and how we can bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1214] text-white font-bold rounded-lg hover:bg-white hover:text-[#0B1214] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
