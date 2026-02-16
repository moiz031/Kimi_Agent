import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const SocialMedia = () => {
  const services = ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Marketing', 'Social Analytics', 'Reputation Management', 'Contest & Campaigns', 'Video Content'];
  const platforms = ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest'];
  
  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">Social Media</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] leading-tight mb-6">Build Your <span className="text-[#426dd8]">Social</span> Presence</h1>
              <p className="text-lg text-[#3b4555] mb-8">Engage your audience, build brand awareness, and drive conversions through strategic social media marketing.</p>
              <Link to="/contact" className="btn-primary">Grow Your Following <ArrowRight className="w-5 h-5" /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src="/portfolio-social.jpg" alt="Social Media Marketing" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">Platforms We Manage</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-[#f2f7ff] rounded-xl px-8 py-4">
                <span className="text-[#0a1f44] font-semibold">{platform}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">Our Services</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-center gap-3">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Go Viral?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
