import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target,
  Phone,
  UtensilsCrossed,
  Star,
  Calendar
} from 'lucide-react';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const FoodBeverage = () => {
  const challenges = [
    {
      title: 'High Competition',
      description: 'Standing out in a saturated market with countless dining options.',
    },
    {
      title: 'Customer Loyalty',
      description: 'Building repeat business in an industry with low barriers to switching.',
    },
    {
      title: 'Online Reviews',
      description: 'Managing reputation across multiple review platforms effectively.',
    },
    {
      title: 'Seasonal Trends',
      description: 'Adapting marketing to seasonal menus, holidays, and local events.',
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Local SEO for Restaurants',
      description: 'Dominate "near me" searches and Google Maps with optimized local presence.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Mouth-watering content that drives engagement and foot traffic.',
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Build a 5-star reputation with strategic review generation and response.',
    },
    {
      icon: Calendar,
      title: 'Event Marketing',
      description: 'Promote special events, tastings, and seasonal offerings effectively.',
    },
  ];

  const results = [
    { value: '+320%', label: 'Increase in Online Orders' },
    { value: '+185%', label: 'More Reservations' },
    { value: '4.7/5', label: 'Average Rating' },
    { value: '+240%', label: 'Social Engagement' },
  ];

  const services = [
    'Restaurant SEO',
    'Social Media Management',
    'Online Ordering Optimization',
    'Reputation Management',
    'Email Marketing',
    'PPC Advertising',
    'Influencer Partnerships',
    'Menu Photography',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-[#0B1214]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00C7B7]/30 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <UtensilsCrossed className="w-5 h-5 text-[#06B6D4]" />
                <span className="text-sm font-medium text-white">Industry Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Food & Beverage Marketing
              </h1>
              
              <p className="text-lg text-gray-300 mb-8">
                Attract more diners, increase online orders, and build a loyal customer base 
                with specialized digital marketing for restaurants, cafes, and food brands.
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
                title="Get Your Free Restaurant Marketing Audit"
                subtitle="Discover how to attract more diners and increase orders."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#00C7B7]">
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
      <section className="section-padding section-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-4">
              Challenges We Solve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1214] mb-4">
              Restaurant Marketing Challenges
            </h2>
            <p className="text-lg text-[#A8B7B5] max-w-2xl mx-auto">
              We understand the unique obstacles food and beverage businesses face
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
                className="p-8 bg-[#F1F5F9] rounded-2xl"
              >
                <h3 className="text-xl font-bold text-[#0B1214] mb-3">{challenge.title}</h3>
                <p className="text-[#A8B7B5]">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1214] mb-4">
              Marketing Solutions for Food & Beverage
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
                <div className="w-14 h-14 bg-[#00C7B7]/10 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-[#00C7B7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1214] mb-3">{solution.title}</h3>
                <p className="text-[#A8B7B5]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1214] mb-6">
                Comprehensive F&B Marketing Services
              </h2>
              <p className="text-lg text-[#A8B7B5] mb-8">
                From social media to SEO, we offer a full suite of digital marketing services 
                tailored specifically for food and beverage businesses.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C7B7] flex-shrink-0" />
                    <span className="text-[#0B1214]">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F1F5F9] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#0B1214] mb-6">
                Why F&B Businesses Choose Us
              </h3>
              <div className="space-y-4">
                {[
                  '12+ years of restaurant marketing experience',
                  'Proven track record with 300+ F&B clients',
                  'Food photography and content creation',
                  'Understanding of dining trends',
                  'Integration with reservation platforms',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#00C7B7] flex-shrink-0 mt-0.5" />
                    <span className="text-[#A8B7B5]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1214]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Fill More Tables?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s discuss how we can help your restaurant or food brand attract more customers 
                and increase revenue. Get a free custom marketing strategy today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#06B6D4] text-[#0B1214] font-bold rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2">
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

export default FoodBeverage;

