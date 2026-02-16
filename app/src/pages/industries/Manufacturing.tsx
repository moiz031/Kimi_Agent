import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Target,
  Phone,
  Factory,
  Cog,
  Globe,
  BarChart3
} from 'lucide-react';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const Manufacturing = () => {
  const challenges = [
    {
      title: 'Long Sales Cycles',
      description: 'Nurturing leads through complex, multi-month B2B sales processes.',
    },
    {
      title: 'Technical Content',
      description: 'Creating content that speaks to engineers, procurement, and C-level executives.',
    },
    {
      title: 'Niche Targeting',
      description: 'Reaching highly specific decision-makers in specialized industries.',
    },
    {
      title: 'Global Competition',
      description: 'Competing with manufacturers from around the world on quality and price.',
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: 'B2B Lead Generation',
      description: 'Targeted campaigns that reach decision-makers at the right stage of the buying process.',
    },
    {
      icon: Cog,
      title: 'Technical Content Marketing',
      description: 'Create authoritative content that demonstrates your expertise and capabilities.',
    },
    {
      icon: Globe,
      title: 'Industrial SEO',
      description: 'Rank for industry-specific keywords that buyers use when searching for manufacturers.',
    },
    {
      icon: BarChart3,
      title: 'Account-Based Marketing',
      description: 'Precision targeting of high-value accounts with personalized campaigns.',
    },
  ];

  const results = [
    { value: '+245%', label: 'Qualified B2B Leads' },
    { value: '+178%', label: 'RFQ Submissions' },
    { value: '-38%', label: 'Cost Per Lead' },
    { value: '+156%', label: 'Organic Traffic' },
  ];

  const services = [
    'Industrial SEO',
    'B2B PPC Advertising',
    'Content Marketing',
    'LinkedIn Marketing',
    'Trade Show Marketing',
    'Website Design',
    'Marketing Automation',
    'Analytics & Reporting',
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
                <Factory className="w-5 h-5 text-[#ffc225]" />
                <span className="text-sm font-medium text-white">Industry Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Manufacturing Marketing
              </h1>
              
              <p className="text-lg text-gray-300 mb-8">
                Generate more qualified B2B leads and RFQs with digital marketing strategies 
                designed specifically for manufacturers and industrial companies.
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
                title="Get Your Free Manufacturing Marketing Audit"
                subtitle="Discover how to generate more B2B leads and RFQs."
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
              Manufacturing Marketing Challenges
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              We understand the unique obstacles manufacturers face in the digital landscape
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
              Marketing Solutions for Manufacturers
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
                Comprehensive Manufacturing Marketing Services
              </h2>
              <p className="text-lg text-[#3b4555] mb-8">
                From industrial SEO to B2B lead generation, we offer a full suite of digital 
                marketing services tailored specifically for manufacturers.
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
                Why Manufacturers Choose Us
              </h3>
              <div className="space-y-4">
                {[
                  '12+ years of manufacturing marketing experience',
                  'Proven track record with 200+ industrial clients',
                  'Understanding of long B2B sales cycles',
                  'Technical content expertise',
                  'Integration with ERP and CRM systems',
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
                Ready for More B2B Leads?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s discuss how we can help your manufacturing company generate more 
                qualified leads and RFQs. Get a free custom strategy today.
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
                title="Start Growing Your Business"
                subtitle="Fill out the form and we'll contact you within 24 hours."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
