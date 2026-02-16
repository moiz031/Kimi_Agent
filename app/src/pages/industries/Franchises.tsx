import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Target,
  Phone,
  Store,
  MapPin,
  Globe,
  BarChart3
} from 'lucide-react';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const Franchises = () => {
  const challenges = [
    {
      title: 'Brand Consistency',
      description: 'Maintaining consistent branding and messaging across multiple locations.',
    },
    {
      title: 'Local Marketing',
      description: 'Balancing corporate strategy with location-specific marketing needs.',
    },
    {
      title: 'Multi-Location SEO',
      description: 'Ranking in local searches for each franchise location effectively.',
    },
    {
      title: 'Scalable Systems',
      description: 'Implementing marketing systems that can scale across the franchise network.',
    },
  ];

  const solutions = [
    {
      icon: Globe,
      title: 'Franchise SEO Strategy',
      description: 'Comprehensive SEO that balances national brand presence with local search dominance for each location.',
    },
    {
      icon: MapPin,
      title: 'Local Marketing Automation',
      description: 'Automated systems to manage local listings, reviews, and content across all franchise locations.',
    },
    {
      icon: BarChart3,
      title: 'Franchise Analytics Dashboard',
      description: 'Unified reporting that shows performance across all locations with individual location insights.',
    },
    {
      icon: Target,
      title: 'Brand Compliance Tools',
      description: 'Systems to ensure brand consistency while allowing local customization and flexibility.',
    },
  ];

  const results = [
    { value: '+245%', label: 'Local Search Visibility' },
    { value: '+178%', label: 'Location-Based Leads' },
    { value: '50+', label: 'Markets Served' },
    { value: '98%', label: 'Brand Consistency Score' },
  ];

  const services = [
    'Franchise SEO',
    'Multi-Location PPC',
    'Brand Management',
    'Local Listings Management',
    'Review Aggregation',
    'Franchise Portal Development',
    'Marketing Automation',
    'Performance Analytics',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-[#0a1f44]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#426dd8]/30 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Store className="w-5 h-5 text-[#ffc225]" />
                <span className="text-sm font-medium text-white">Industry Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Franchise Digital Marketing
              </h1>
              
              <p className="text-lg text-gray-300 mb-8">
                Scale your franchise brand with marketing systems that maintain consistency 
                while empowering local success across all your locations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+1-800-555-0199" className="btn-secondary bg-white/10 text-white border-white/30">
                  <Phone className="w-5 h-5" />
                  (800) 555-0199
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <LeadCaptureForm 
                title="Get Your Free Franchise Marketing Audit"
                subtitle="Discover how to scale your franchise marketing effectively."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#426dd8]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Challenges We Solve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Franchise Marketing Challenges
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              We understand the unique obstacles franchise businesses face
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-[#f1f1f1] rounded-2xl"
              >
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{challenge.title}</h3>
                <p className="text-[#3b4555]">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Marketing Solutions for Franchises
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-[#426dd8]/10 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-[#426dd8]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{solution.title}</h3>
                <p className="text-[#3b4555]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                Comprehensive Franchise Marketing Services
              </h2>
              <p className="text-lg text-[#3b4555] mb-8">
                From brand management to local marketing, we offer a full suite of services 
                tailored specifically for franchise businesses.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#426dd8] flex-shrink-0" />
                    <span className="text-[#0a1f44]">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f1f1f1] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">
                Why Franchises Choose Us
              </h3>
              <div className="space-y-4">
                {[
                  '10+ years of franchise marketing experience',
                  'Proven track record with 100+ franchise brands',
                  'Scalable systems for any network size',
                  'Dedicated franchise marketing specialists',
                  'Integration with major franchise platforms',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#426dd8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#3b4555]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1f44]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Scale Your Franchise?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s discuss how we can help your franchise brand grow while maintaining 
                consistency across all locations. Get a free custom strategy today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors inline-flex items-center gap-2">
                  Get Free Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadCaptureForm 
                variant="card"
                title="Start Growing Your Franchise"
                subtitle="Fill out the form and we'll contact you within 24 hours."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchises;
