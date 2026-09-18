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
         
        {/* Subtle Tech Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00C7B7]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D6A84A]/5 rounded-full blur-[140px] pointer-events-none" />

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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C7B7]/10 border border-[#00C7B7]/25 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#00C7B7] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C7B7]">
                  Digital Marketing Agency
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              >
                Digital Marketing <br />
                That <span className="text-[#00C7B7]">Drives Revenue</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-base sm:text-lg text-[#A8B7B5] mb-8 max-w-xl leading-relaxed"
              >
                Data-driven strategies, AI-powered insights, and performance marketing solutions that help your business grow faster and smarter.
              </motion.p>

              {/* CTAs (Reference Style) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link to="/contact" className="btn-teal group flex items-center gap-2">
                  <span>Get Free Marketing Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-secondary group flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#D6A84A]" />
                  <span>Our Services</span>
                </Link>
              </motion.div>

              {/* Social Proof (Team Avatars + Trust Label) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  <img src="/user-photo.jpg" alt="Team" className="w-9 h-9 rounded-full border-2 border-[#0B1214] object-cover" />
                  <img src="/team-creative.jpg" alt="Team" className="w-9 h-9 rounded-full border-2 border-[#0B1214] object-cover" />
                  <img src="/team-strategy.jpg" alt="Team" className="w-9 h-9 rounded-full border-2 border-[#0B1214] object-cover" />
                  <img src="/team-account.jpg" alt="Team" className="w-9 h-9 rounded-full border-2 border-[#0B1214] object-cover" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#A8B7B5]">
                  Trusted by <strong className="text-white font-bold">500+</strong> Businesses Worldwide
                </span>
              </motion.div>
            </motion.div>

            {/* Right Analytics Dashboard Grid (Matching Reference Image 2) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              
              {/* Card 1: Total Revenue (Teal Bar Chart) */}
              <div className="card-dark p-5 bg-[#101B1D] border border-[#00C7B7]/20 rounded-2xl relative overflow-hidden group">
                <div className="text-xs font-semibold text-[#A8B7B5] mb-1">Total Revenue</div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">$150M+</div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#00C7B7] mb-4">
                  <span>+28.4%</span>
                  <span className="font-normal text-[#A8B7B5]">From Last Month</span>
                </div>
                
                {/* SVG Teal Bar Chart */}
                <div className="flex items-end gap-1.5 h-16 pt-2">
                  {[35, 45, 30, 60, 50, 75, 65, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#00C7B7]/20 hover:bg-[#00C7B7] transition-all rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Card 2: Leads Generated (Gold Line Chart - Matching Reference) */}
              <div className="card-gold p-5 bg-[#101B1D] border border-[#D6A84A]/30 rounded-2xl relative overflow-hidden group">
                <div className="text-xs font-semibold text-[#A8B7B5] mb-1">Leads Generated</div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">21M+</div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#D6A84A] mb-4">
                  <span>+35.1%</span>
                  <span className="font-normal text-[#A8B7B5]">From Last Month</span>
                </div>

                {/* SVG Gold Graph Line */}
                <div className="h-16 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                    <path
                      d="M0,35 Q20,25 40,28 T80,10 T100,5"
                      fill="none"
                      stroke="#D6A84A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="5" r="4" fill="#D6A84A" className="animate-ping" />
                    <circle cx="100" cy="5" r="3" fill="#D6A84A" />
                  </svg>
                </div>
              </div>

              {/* Card 3: ROAS (Teal Circular Ring Chart) */}
              <div className="card-dark p-5 bg-[#101B1D] border border-[#00C7B7]/20 rounded-2xl relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#A8B7B5] mb-1">ROAS</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">850%+</div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#00C7B7]">
                    <span>+18.2%</span>
                    <span className="font-normal text-[#A8B7B5]">From Last Month</span>
                  </div>
                </div>

                {/* SVG Circular Ring Chart */}
                <div className="flex justify-end mt-2">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(0,199,183,0.15)"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#00C7B7"
                        strokeWidth="3.5"
                        strokeDasharray="85, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 4: Growth Rate (Team Avatars) */}
              <div className="card-dark p-5 bg-[#101B1D] border border-[#00C7B7]/20 rounded-2xl relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#A8B7B5] mb-1">Growth Rate</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">95%</div>
                  <div className="text-xs text-[#A8B7B5]">From Last Year</div>
                </div>

                <div className="flex -space-x-2 mt-4">
                  <img src="/user-photo.jpg" alt="Team" className="w-7 h-7 rounded-full border-2 border-[#101B1D] object-cover" />
                  <img src="/team-creative.jpg" alt="Team" className="w-7 h-7 rounded-full border-2 border-[#101B1D] object-cover" />
                  <img src="/team-strategy.jpg" alt="Team" className="w-7 h-7 rounded-full border-2 border-[#101B1D] object-cover" />
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
            <p className="text-base sm:text-lg text-[#A8B7B5] max-w-2xl mx-auto">
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
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark p-8 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00C7B7]/10 border border-[#00C7B7]/25 flex items-center justify-center mb-6 group-hover:bg-[#00C7B7] transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-[#00C7B7] group-hover:text-[#061112] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C7B7] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A8B7B5] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/5 text-[#A8B7B5] text-xs rounded-md border border-white/5">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C7B7] group-hover:text-[#14D9C7] transition-all"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
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
            <p className="text-base sm:text-lg text-[#A8B7B5] max-w-2xl mx-auto">
              We understand the unique competitive dynamics of your industry and tailor strategies accordingly.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <Link
                key={i}
                to={ind.link}
                className="card-dark p-6 text-center hover:border-[#00C7B7]/40 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <h4 className="text-base font-bold text-white group-hover:text-[#00C7B7] transition-colors">{ind.name}</h4>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CASE STUDIES SECTION ───────────────────────────────────────── */}
      <CaseStudies />

      {/* ── 7. TECHNOLOGY SECTION ─────────────────────────────────────────── */}
      <TechnologySection />

    </div>
  );
};

export default Home;
