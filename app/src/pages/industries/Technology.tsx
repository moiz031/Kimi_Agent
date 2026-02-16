import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Technology = () => {
  const services = ['B2B Marketing', 'Product Launches', 'Content Marketing', 'Developer Relations', 'PPC Advertising', 'SEO for SaaS', 'Account-Based Marketing', 'Event Marketing'];
  const results = [
    { metric: '400%', label: 'MQL Growth' },
    { metric: '200+', label: 'Tech Clients' },
    { metric: '50M+', label: 'Funding Raised' },
    { metric: '90%', label: 'Client Retention' },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">Tech Marketing</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] leading-tight mb-6">Scale Your <span className="text-[#426dd8]">Tech Company</span></h1>
              <p className="text-lg text-[#3b4555] mb-8">B2B marketing strategies that help technology companies acquire customers, drive adoption, and accelerate growth.</p>
              <Link to="/contact" className="btn-primary">Scale Your Business <ArrowRight className="w-5 h-5" /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src="/portfolio-saas.jpg" alt="Technology Marketing" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0a1f44]">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#ffc225] mb-1">{result.metric}</p>
                <p className="text-gray-400 text-sm">{result.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">Tech Marketing Services</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#f2f7ff] rounded-xl p-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#426dd8] flex-shrink-0" />
                <span className="text-[#3b4555] font-medium">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Accelerate Growth?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
