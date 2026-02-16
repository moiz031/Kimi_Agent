import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  BarChart3, 
  Globe, 
  Zap, 
  MessageSquare,
  Phone,
  CheckCircle,
  Star,
  Target,
  Cpu
} from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import TrustBadges from '../components/TrustBadges';
import CaseStudies from '../components/CaseStudies';
import TechnologySection from '../components/TechnologySection';
import LeadCaptureForm from '../components/LeadCaptureForm';

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

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: 'Results-Driven Approach',
      description: 'We focus on metrics that matter—revenue, leads, and ROI—not just vanity metrics.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Get a dedicated account manager backed by specialists in SEO, PPC, content, and design.',
    },
    {
      icon: Award,
      title: 'Award-Winning Agency',
      description: 'Recognized as a top digital marketing agency with 50+ industry awards and certifications.',
    },
    {
      icon: Clock,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and monthly reports so you always know how your campaigns perform.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your business, goals, target audience, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Crafting a customized roadmap with clear KPIs, timelines, and budget allocation.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Implementing campaigns with precision, using proven methodologies and best practices.',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous A/B testing and refinement based on data and performance insights.',
    },
    {
      number: '05',
      title: 'Reporting',
      description: 'Transparent communication with detailed analytics and actionable recommendations.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVentures',
      company: 'Technology',
      content: 'Working with NexGen transformed our digital presence completely. Our leads increased by 400% in just six months, and our ROI has never been better.',
      image: '/team-creative.jpg',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthLabs',
      company: 'SaaS',
      content: 'Their data-driven approach and transparent reporting gave us complete confidence. The results exceeded all expectations—we\'re now ranking #1 for our key terms.',
      image: '/team-strategy.jpg',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StyleBrand',
      company: 'E-commerce',
      content: 'Professional, creative, and results-focused. They understood our vision and delivered beyond what we imagined. Our online sales have tripled since partnering with them.',
      image: '/team-account.jpg',
      rating: 5,
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Digital Agency Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#426dd8]/10 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-[#426dd8] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#426dd8]">#1 Rated Digital Agency in USA</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] leading-tight mb-6"
              >
                Digital Marketing That{' '}
                <span className="text-[#426dd8]">Drives Revenue</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-lg text-[#3b4555] mb-8 max-w-xl"
              >
                We help businesses grow through data-driven digital marketing strategies. 
                $150M+ revenue generated for our clients. 95% client retention rate.
              </motion.p>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {['SEO', 'PPC', 'Web Design', 'Social Media', 'AI Automation'].map((item, i) => (
                  <span key={i} className="flex items-center gap-1 text-sm text-[#3b4555]">
                    <CheckCircle className="w-4 h-4 text-[#426dd8]" />
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/contact" className="btn-primary animate-cta-pulse">
                  Get Free Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  <Play className="w-5 h-5" />
                  View Case Studies
                </Link>
              </motion.div>

              {/* Phone CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="flex items-center gap-2 text-[#3b4555]"
              >
                <Phone className="w-5 h-5 text-[#426dd8]" />
                <span>Call us: </span>
                <a href="tel:+1-800-555-0199" className="font-semibold text-[#0a1f44] hover:text-[#426dd8]">
                  (800) 555-0199
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <LeadCaptureForm 
                title="Get Your Free Marketing Audit"
                subtitle="Discover opportunities to grow your business. Free custom report within 24 hours."
                buttonText="Get My Free Audit"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Services Section */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              Full-Service Digital Marketing
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              Everything you need to grow your business online, from strategy to execution
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
                className="bg-white rounded-2xl p-8 card-hover group"
              >
                <div className="w-14 h-14 bg-[#426dd8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#426dd8] transition-colors">
                  <service.icon className="w-7 h-7 text-[#426dd8] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{service.title}</h3>
                <p className="text-[#3b4555] mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-[#f1f1f1] text-[#3b4555] text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#426dd8] font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary inline-flex">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              Specialized Industry Expertise
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              We understand the unique challenges of your industry and tailor strategies accordingly
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  to={industry.link}
                  className="block p-6 bg-[#f1f1f1] rounded-2xl text-center hover:bg-[#426dd8] group transition-all duration-300"
                >
                  <span className="text-4xl mb-3 block">{industry.icon}</span>
                  <h3 className="font-semibold text-[#0a1f44] group-hover:text-white transition-colors">
                    {industry.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/industries" className="btn-secondary inline-flex">
              View All Industries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <TechnologySection />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
                Why NexGen
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-6">
                Why Businesses Choose NexGen
              </h2>
              <p className="text-lg text-[#3b4555] mb-8">
                We&apos;re not just another digital marketing agency. We&apos;re your growth partner, 
                committed to delivering measurable results that impact your bottom line.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#426dd8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#426dd8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a1f44] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#3b4555]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/about-team.jpg"
                alt="NexGen Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#426dd8] rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0a1f44]">4.9/5</div>
                    <div className="text-sm text-[#3b4555]">Average Client Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              How We Work
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              A proven 5-step process that delivers consistent, measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-[#426dd8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44] mb-2">{step.title}</h3>
                <p className="text-sm text-[#3b4555]">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#426dd8] to-[#426dd8]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#0a1f44]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-[#ffc225] text-sm font-semibold rounded-full mb-4">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it—hear from businesses we&apos;ve helped grow
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ffc225] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-[#426dd8]">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f1f1f1]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-[#3b4555] mb-8">
                Let&apos;s discuss how we can help you achieve your digital marketing goals. 
                Get a free custom proposal tailored to your business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Free Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+1-800-555-0199" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Call (800) 555-0199
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadCaptureForm 
                variant="card"
                title="Get Your Free Proposal"
                subtitle="Fill out the form and we'll send you a custom marketing plan within 24 hours."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
