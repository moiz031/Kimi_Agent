import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const RealEstate = () => {
  const services = [
    'Real Estate SEO',
    'Property Listing Optimization',
    'PPC for Realtors',
    'Social Media Marketing',
    'Lead Generation',
    'Website Design',
    'Virtual Tours',
    'Reputation Management',
  ];

  const results = [
    { metric: '500+', label: 'Leads/Month' },
    { metric: '300%', label: 'Listing Views' },
    { metric: '200+', label: 'Agents Helped' },
    { metric: '40%', label: 'Cost Per Lead ↓' },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-6">Real Estate Marketing</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1214] leading-tight mb-6">Sell More <span className="text-[#00C7B7]">Properties</span> Faster</h1>
              <p className="text-lg text-[#A8B7B5] mb-8">Digital marketing strategies that help real estate agents and brokers generate qualified leads and close more deals.</p>
              <Link to="/contact" className="btn-primary">Get More Leads <ArrowRight className="w-5 h-5" /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src="/niche-realestate.jpg" alt="Real Estate Marketing" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0B1214]">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#06B6D4] mb-1">{result.metric}</p>
                <p className="text-gray-400 text-sm">{result.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1214] mb-4">Real Estate Marketing Services</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#EFF6FF] rounded-xl p-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#00C7B7] flex-shrink-0" />
                <span className="text-[#A8B7B5] font-medium">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Sell More Homes?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] text-[#0B1214] font-bold rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;

