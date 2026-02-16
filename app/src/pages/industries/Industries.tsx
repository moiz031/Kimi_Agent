import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Home, 
  ShoppingCart, 
  Scale, 
  Utensils, 
  Dumbbell, 
  GraduationCap, 
  Landmark, 
  Cpu, 
  Hotel, 
  HardHat,
  Car,
  Coffee,
  Store,
  Wrench,
  Shield,
  Factory,
  HeartHandshake
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: Heart, name: 'Healthcare', description: 'Digital marketing solutions for medical practices, hospitals, and healthcare providers.', link: '/industries/healthcare', image: '/niche-healthcare.jpg' },
    { icon: Home, name: 'Real Estate', description: 'Marketing strategies that help agents and brokers sell more properties.', link: '/industries/real-estate', image: '/niche-realestate.jpg' },
    { icon: ShoppingCart, name: 'E-Commerce', description: 'Drive online sales with comprehensive e-commerce marketing solutions.', link: '/industries/ecommerce', image: '/niche-ecommerce.jpg' },
    { icon: Scale, name: 'Law Firms', description: 'Legal marketing that attracts high-value clients to your practice.', link: '/industries/law-firms', image: '/niche-law.jpg' },
    { icon: Utensils, name: 'Restaurants', description: 'Fill more tables with targeted restaurant marketing campaigns.', link: '/industries/restaurants', image: '/niche-restaurant.jpg' },
    { icon: Dumbbell, name: 'Fitness', description: 'Grow your gym or fitness studio with powerful digital marketing.', link: '/industries/fitness', image: '/niche-fitness.jpg' },
    { icon: GraduationCap, name: 'Education', description: 'Attract more students with education-focused marketing strategies.', link: '/industries/education', image: '/portfolio-saas.jpg' },
    { icon: Landmark, name: 'Finance', description: 'Build trust and attract clients in the competitive financial sector.', link: '/industries/finance', image: '/portfolio-ecommerce.jpg' },
    { icon: Cpu, name: 'Technology', description: 'B2B marketing solutions for tech companies and SaaS businesses.', link: '/industries/technology', image: '/portfolio-saas.jpg' },
    { icon: Hotel, name: 'Hospitality', description: 'Increase bookings and enhance guest experiences.', link: '/industries/hospitality', image: '/niche-restaurant.jpg' },
    { icon: HardHat, name: 'Construction', description: 'Generate leads and win more contracts for your construction business.', link: '/industries/construction', image: '/portfolio-branding.jpg' },
    // New Industries
    { icon: Car, name: 'Automotive', description: 'Drive more sales and service appointments for dealerships and auto shops.', link: '/industries/automotive', image: '/portfolio-saas.jpg' },
    { icon: Coffee, name: 'Food & Beverage', description: 'Attract more diners and increase orders for restaurants and food brands.', link: '/industries/food-beverage', image: '/niche-restaurant.jpg' },
    { icon: Store, name: 'Franchises', description: 'Scale your franchise brand while maintaining consistency across locations.', link: '/industries/franchises', image: '/portfolio-branding.jpg' },
    { icon: Wrench, name: 'Home Services', description: 'Get more service calls for HVAC, plumbing, electrical, and contractors.', link: '/industries/home-services', image: '/portfolio-construction.jpg' },
    { icon: Shield, name: 'Insurance', description: 'Attract qualified leads and grow your insurance agency book of business.', link: '/industries/insurance', image: '/portfolio-ecommerce.jpg' },
    { icon: Factory, name: 'Manufacturing', description: 'Generate B2B leads and RFQs for your manufacturing company.', link: '/industries/manufacturing', image: '/portfolio-saas.jpg' },
    { icon: HeartHandshake, name: 'Nonprofits', description: 'Amplify your impact with donor acquisition and supporter engagement.', link: '/industries/nonprofits', image: '/portfolio-branding.jpg' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">
              20+ Industries Served
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
              Specialized Solutions For <span className="text-[#426dd8]">Every Industry</span>
            </h1>
            <p className="text-lg text-[#3b4555]">
              We understand the unique challenges of different industries and tailor our 
              strategies to deliver measurable results for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => (
              <Link 
                key={index} 
                to={industry.link} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video overflow-hidden bg-[#f1f1f1]">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#426dd8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#426dd8] transition-colors">
                      <industry.icon className="w-5 h-5 text-[#426dd8] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1f44]">{industry.name}</h3>
                  </div>
                  <p className="text-[#3b4555] mb-4">{industry.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#426dd8] font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1f44]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-400">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Industry Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Client Retention</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss your specific needs 
              and how we can help you grow.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
