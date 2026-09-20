import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Zap, 
  MessageSquare,
  Star,
  Target,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import TrustBadges from '../components/TrustBadges';
import CaseStudies from '../components/CaseStudies';
import TechnologySection from '../components/TechnologySection';
import ParticlesBackground from '../components/ParticlesBackground';
import WorkProcess from '../components/WorkProcess';
import { Tilt } from 'react-tilt';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive qualified traffic, leads, and revenue growth',
      link: '/services/digital-marketing',
      features: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
    },
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Custom websites and applications built for performance and conversions',
      link: '/services/web-development',
      features: ['Custom Design', 'E-commerce', 'Web Apps', 'CMS'],
    },
    {
      icon: BarChart3,
      title: 'SEO Optimization',
      description: 'Data-driven strategies to dominate search rankings and drive organic growth',
      link: '/services/seo',
      features: ['Technical SEO', 'Local SEO', 'E-commerce SEO', 'AI Search'],
    },
    {
      icon: Cpu,
      title: 'AI Automation',
      description: 'Leverage artificial intelligence to streamline operations and boost efficiency',
      link: '/services/ai-automation',
      features: ['Chatbots', 'Predictive Analytics', 'Process Automation', 'AI Content'],
    },
    {
      icon: MessageSquare,
      title: 'Social Media',
      description: 'Build brand presence and engage audiences across all major platforms',
      link: '/services/social-media',
      features: ['Strategy', 'Content Creation', 'Advertising', 'Community'],
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns across Google & social',
      link: '/services/ppc-advertising',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Retargeting'],
    },
  ];

  const industries = [
    { name: 'Healthcare', link: '/industries/healthcare', icon: '🏥' },
    { name: 'Real Estate', link: '/industries/real-estate', icon: '🏢' },
    { name: 'E-commerce', link: '/industries/ecommerce', icon: '🛒' },
    { name: 'Law Firms', link: '/industries/law-firms', icon: '⚖️' },
    { name: 'Restaurants', link: '/industries/restaurants', icon: '🍽️' },
    { name: 'Technology', link: '/industries/technology', icon: '💻' },
    { name: 'Finance', link: '/industries/finance', icon: '💰' },
    { name: 'Education', link: '/industries/education', icon: '🎓' },
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
    <div className="bg-[#0B1214] text-[#F7FAF9] pt-20">
      
      {/* ── 1. HERO SECTION (Matching Reference Image 2) ────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-12 pb-20 bg-tech-waves">
         
        {/* Particles Background */}
        <ParticlesBackground />
        
        {/* Animated Gradient Glow Blobs (Step 8) */}
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-[#12AAD1]/20 to-[#3DD6F0]/15 rounded-full blur-3xl pointer-events-none -z-0"
        />
        <motion.div
          animate={{ x: [0, -35, 25, 0], y: [0, 25, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-12 w-[480px] h-[480px] bg-gradient-to-bl from-[#3DD6F0]/15 to-[#12AAD1]/10 rounded-full blur-3xl pointer-events-none -z-0"
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, 30, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-[360px] h-[360px] bg-gradient-to-br from-[#12AAD1]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-6"
            >
              {/* Badge (Reference Style) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AAD1]/10 border border-[#12AAD1]/25 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#12AAD1] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#12AAD1]">
                  Digital Marketing & Technology Agency
                </span>
              </motion.div>

              {/* Headline with Text Reveal */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } }
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-2"
              >
                {['Growth', 'Strategies', 'Built', 'To', 'Drive', 'Real', 'Business', 'Results'].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className={i >= 4 ? "text-[#12AAD1]" : ""}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-base sm:text-lg text-[#A3B0B7] mb-8 max-w-xl leading-relaxed"
              >
                Modern web engineering, AI-driven automation, and performance marketing architectures engineered to help your business scale with precision.
              </motion.p>

              {/* CTAs (Magnetic Framer Motion) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to="/contact" className="btn-teal group flex items-center gap-2 hover:shadow-glow-teal">
                    <span>Talk to Our Experts</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to="/contact" className="btn-secondary group flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#CBD1D8] group-hover:translate-x-1 transition-transform" />
                    <span>Contact Us</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Client Avatars Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="flex items-center gap-4 pt-6 border-t border-white/10"
              >
                <div className="flex -space-x-3">
                  <img loading="lazy" src="/user-photo.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0B1214] object-cover" />
                  <img loading="lazy" src="/team-ceo.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0B1214] object-cover" />
                  <img loading="lazy" src="/team-developer.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0B1214] object-cover" />
                  <img loading="lazy" src="/team-creative.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0B1214] object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#CBD1D8] text-[#CBD1D8]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#A3B0B7]">
                    Modern Engineering &bull; Dedicated Support
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Analytics Dashboard Grid (Honest Metrics) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              
              {/* Card 1: Response Time SLA */}
              <div className="card-dark p-5 bg-[#101B1D] border border-[#12AAD1]/20 rounded-2xl relative overflow-hidden group">
                <div className="text-xs font-semibold text-[#A3B0B7] mb-1">Response Time SLA</div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">&lt; 2 Hours</div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#12AAD1] mb-4">
                  <span>Direct Slack / WhatsApp Support</span>
                </div>
                
                {/* SVG Teal Bar Chart */}
                <div className="flex items-end gap-1.5 h-16 pt-2">
                  {[35, 45, 30, 60, 50, 75, 65, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#12AAD1]/20 hover:bg-[#12AAD1] transition-all rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Card 2: Code & Asset Rights */}
              <div className="card-gold p-5 bg-[#101B1D] border border-[#CBD1D8]/30 rounded-2xl relative overflow-hidden group">
                <div className="text-xs font-semibold text-[#A3B0B7] mb-1">Asset & Code Rights</div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#CBD1D8] mb-4">
                  <span>Full Client Ownership</span>
                </div>

                {/* SVG Chrome Graph Line */}
                <div className="h-16 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                    <path
                      d="M0,35 Q20,25 40,28 T80,10 T100,5"
                      fill="none"
                      stroke="#CBD1D8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="5" r="4" fill="#CBD1D8" className="animate-ping" />
                    <circle cx="100" cy="5" r="3" fill="#CBD1D8" />
                  </svg>
                </div>
              </div>

              {/* Card 3: Performance Target */}
              <div className="card-dark p-5 bg-[#101B1D] border border-[#12AAD1]/20 rounded-2xl relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#A3B0B7] mb-1">Performance Target</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">95+</div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#12AAD1]">
                    <span>Lighthouse Optimized</span>
                  </div>
                </div>

                {/* SVG Circular Ring Chart */}
                <div className="flex justify-end mt-2">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(18, 170, 209,0.15)"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#12AAD1"
                        strokeWidth="3.5"
                        strokeDasharray="95, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 4: Foundation Year & Modern Standards */}
              <div className="card-dark p-5 bg-[#101B1D] border border-[#12AAD1]/20 rounded-2xl relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#A3B0B7] mb-1">Foundation</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">2025</div>
                  <div className="text-xs text-[#A3B0B7]">Modern Architecture & AI</div>
                </div>

                <div className="flex -space-x-2 mt-4">
                  <img loading="lazy" src="/user-photo.jpg" alt="Team" className="w-7 h-7 rounded-full border-2 border-[#101B1D] object-cover" />
                  <img loading="lazy" src="/team-creative.jpg" alt="Team" className="w-7 h-7 rounded-full border-2 border-[#101B1D] object-cover" />
                  <img loading="lazy" src="/team-strategy.jpg" alt="Team" className="w-7 h-7 rounded-full border-2 border-[#101B1D] object-cover" />
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. STATS COUNTER SECTION ─────────────────────────────────────── */}
      <StatsCounter />

      {/* ── 3. TRUST BADGES SECTION ──────────────────────────────────────── */}
      <TrustBadges />

      {/* ── 4. SERVICES SECTION ──────────────────────────────────────────── */}
      <section className="section-padding bg-[#0B1214] border-t border-white/5">
        <div className="container-custom">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="badge-teal mb-4">
              Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Full-Service Digital Marketing
            </h2>
            <p className="text-base sm:text-lg text-[#A3B0B7] max-w-2xl mx-auto">
              Everything you need to grow your business online, from data-driven strategy to precision execution.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <Tilt key={index} options={{ max: 15, scale: 1.05, speed: 400, glare: true, 'max-glare': 0.1 }}>
                <motion.div
                  variants={itemVariants}
                  className="group relative bg-[#101B1D] rounded-2xl p-8 border border-[#12AAD1]/20 hover:border-[#12AAD1]/50 hover:shadow-[0_0_40px_rgba(18, 170, 209,0.15)] transition-all duration-300 h-full flex flex-col"
                >
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#12AAD1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-xl bg-[#12AAD1]/10 border border-[#12AAD1]/25 flex items-center justify-center mb-6 group-hover:bg-[#12AAD1] group-hover:scale-110 transition-all duration-300 relative z-10">
                    <service.icon className="w-6 h-6 text-[#12AAD1] group-hover:text-[#061112] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#12AAD1] transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A3B0B7] mb-6 leading-relaxed relative z-10 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/5 text-[#A3B0B7] text-xs rounded-md border border-white/5">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#12AAD1] group-hover:text-[#3DD6F0] transition-all relative z-10 mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-teal inline-flex items-center gap-2">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5. INDUSTRIES GRID SECTION ────────────────────────────────────── */}
      <section className="section-padding bg-[#101B1D] border-t border-white/5">
        <div className="container-custom">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge-gold mb-4">
              Specialized Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-[#A3B0B7] max-w-2xl mx-auto">
              We understand the unique competitive dynamics of your industry and tailor strategies accordingly.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <Link
                key={i}
                to={ind.link}
                className="card-dark p-6 text-center hover:border-[#12AAD1]/40 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <h4 className="text-base font-bold text-white group-hover:text-[#12AAD1] transition-colors">{ind.name}</h4>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CASE STUDIES SECTION ───────────────────────────────────────── */}
      <CaseStudies />

      {/* ── 7. TECHNOLOGY SECTION ─────────────────────────────────────────── */}
      <TechnologySection />

      {/* ── 7.5 WORK PROCESS SECTION ─────────────────────────────────────────── */}
      <WorkProcess />

    </div>
  );
};

export default Home;
