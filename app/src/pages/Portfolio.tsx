import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, BarChart3, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Design', 'Marketing', 'Branding', 'SEO', 'Social Media'];

  const projects = [
    {
      id: 1,
      image: '/portfolio-ecommerce.jpg',
      title: 'E-commerce Revolution',
      category: 'Web Design',
      client: 'ShopMax',
      description: 'Complete e-commerce platform redesign resulting in 300% increase in online sales.',
      results: [
        { label: 'Sales Increase', value: '300%' },
        { label: 'Conversion Rate', value: '4.5%' },
        { label: 'Page Speed', value: '95/100' },
      ],
    },
    {
      id: 2,
      image: '/portfolio-branding.jpg',
      title: 'Brand Transformation',
      category: 'Branding',
      client: 'TechStart Inc.',
      description: 'Complete rebrand for a tech startup, including logo, identity, and brand guidelines.',
      results: [
        { label: 'Brand Awareness', value: '+150%' },
        { label: 'Social Engagement', value: '+200%' },
        { label: 'Lead Generation', value: '+85%' },
      ],
    },
    {
      id: 3,
      image: '/portfolio-seo.jpg',
      title: 'SEO Dominance',
      category: 'SEO',
      client: 'GrowthLabs',
      description: 'Comprehensive SEO strategy that achieved #1 rankings for 50+ competitive keywords.',
      results: [
        { label: 'Keywords Ranked', value: '50+' },
        { label: 'Organic Traffic', value: '+400%' },
        { label: 'ROI', value: '650%' },
      ],
    },
    {
      id: 4,
      image: '/portfolio-social.jpg',
      title: 'Social Media Campaign',
      category: 'Social Media',
      client: 'Fashion Forward',
      description: 'Viral social media campaign that generated 2M+ engagements in just 30 days.',
      results: [
        { label: 'Engagements', value: '2M+' },
        { label: 'Followers Gained', value: '150K' },
        { label: 'Reach', value: '10M+' },
      ],
    },
    {
      id: 5,
      image: '/portfolio-saas.jpg',
      title: 'Enterprise SaaS Platform',
      category: 'Web Design',
      client: 'CloudTech Solutions',
      description: 'Custom SaaS dashboard design and development for enterprise clients.',
      results: [
        { label: 'User Adoption', value: '95%' },
        { label: 'Task Efficiency', value: '+60%' },
        { label: 'Client Satisfaction', value: '98%' },
      ],
    },
    {
      id: 6,
      image: '/portfolio-content.jpg',
      title: 'Content Strategy Success',
      category: 'Marketing',
      client: 'InfoHub',
      description: 'Content marketing strategy that achieved 10x organic traffic growth.',
      results: [
        { label: 'Traffic Growth', value: '10x' },
        { label: 'Articles Published', value: '200+' },
        { label: 'Avg. Position', value: '#3' },
      ],
    },
    {
      id: 7,
      image: '/niche-healthcare.jpg',
      title: 'Healthcare Digital Presence',
      category: 'Web Design',
      client: 'MedCare Plus',
      description: 'Complete digital transformation for a healthcare provider network.',
      results: [
        { label: 'Appointment Bookings', value: '+180%' },
        { label: 'Patient Engagement', value: '+120%' },
        { label: 'Online Reviews', value: '4.8/5' },
      ],
    },
    {
      id: 8,
      image: '/niche-realestate.jpg',
      title: 'Real Estate Lead Generation',
      category: 'Marketing',
      client: 'Premier Properties',
      description: 'Digital marketing campaign that generated 500+ qualified leads monthly.',
      results: [
        { label: 'Monthly Leads', value: '500+' },
        { label: 'Cost Per Lead', value: '-40%' },
        { label: 'Conversion Rate', value: '12%' },
      ],
    },
    {
      id: 9,
      image: '/niche-restaurant.jpg',
      title: 'Restaurant Brand Awareness',
      category: 'Social Media',
      client: 'Gourmet Bistro',
      description: 'Social media strategy that increased foot traffic by 75%.',
      results: [
        { label: 'Foot Traffic', value: '+75%' },
        { label: 'Social Followers', value: '50K' },
        { label: 'Review Rating', value: '4.9/5' },
      ],
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
              Results That <span className="text-[#426dd8]">Speak</span> for Themselves
            </h1>
            <p className="text-lg text-[#3b4555]">
              Explore our latest work and see how we&apos;ve helped businesses achieve 
              their digital marketing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[#426dd8] text-white'
                    : 'bg-gray-100 text-[#3b4555] hover:bg-[#426dd8]/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#426dd8] text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-[#426dd8] font-medium mb-2">{project.client}</p>
                    <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{project.title}</h3>
                    <p className="text-[#3b4555] text-sm mb-6">{project.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <p className="text-lg font-bold text-[#426dd8]">{result.value}</p>
                          <p className="text-xs text-[#3b4555]">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 text-[#426dd8] font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1f44]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: TrendingUp, value: '500+', label: 'Projects Completed' },
              { icon: Users, value: '98%', label: 'Client Satisfaction' },
              { icon: BarChart3, value: '300%', label: 'Avg. ROI Increase' },
              { icon: Globe, value: '50+', label: 'Industries Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-[#ffc225] mx-auto mb-4" />
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
