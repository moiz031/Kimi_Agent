import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'TechVentures Inc.',
    industry: 'Technology',
    service: 'SEO & Content Marketing',
    image: '/portfolio-saas.jpg',
    results: [
      { icon: TrendingUp, value: '+427%', label: 'Organic Traffic' },
      { icon: Target, value: '+68%', label: 'Conversion Rate' },
    ],
    testimonial: 'NexGen transformed our digital presence completely. Our organic traffic skyrocketed within 6 months.',
    author: 'Sarah Mitchell, CEO',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    client: 'MedCare Plus',
    industry: 'Healthcare',
    service: 'PPC & Landing Pages',
    image: '/portfolio-healthcare.jpg',
    results: [
      { icon: DollarSign, value: '$2.4M', label: 'Revenue Generated' },
      { icon: Users, value: '-45%', label: 'Cost Per Lead' },
    ],
    testimonial: 'The ROI we\'ve seen from our PPC campaigns has been incredible. Best investment we\'ve made.',
    author: 'Dr. James Wilson, Director',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    client: 'BuildRight Construction',
    industry: 'Construction',
    service: 'Web Design & Local SEO',
    image: '/portfolio-construction.jpg',
    results: [
      { icon: TrendingUp, value: '+312%', label: 'Lead Generation' },
      { icon: Target, value: '#1', label: 'Local Rankings' },
    ],
    testimonial: 'Our new website and local SEO strategy brought in more qualified leads than ever before.',
    author: 'Mike Thompson, Owner',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 4,
    client: 'E-Shop Plus',
    industry: 'E-commerce',
    service: 'Digital Marketing',
    image: '/portfolio-ecommerce.jpg',
    results: [
      { icon: DollarSign, value: '+380%', label: 'Online Sales' },
      { icon: Users, value: '+250%', label: 'New Customers' },
    ],
    testimonial: 'Our online sales have never been better. NexGen delivered beyond our expectations.',
    author: 'Emily Chen, Marketing Director',
    color: 'from-purple-500 to-purple-700',
  },
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-[#f1f1f1]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
            Real results from real clients. See how we&apos;ve helped businesses like yours achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-60`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white">{study.client}</h3>
                  <p className="text-white/80 text-sm">{study.service}</p>
                </div>
              </div>

              {/* Results */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-[#f1f1f1] rounded-xl">
                      <result.icon className="w-6 h-6 text-[#426dd8] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-[#0a1f44]">{result.value}</div>
                      <div className="text-sm text-[#3b4555]">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-[#3b4555] italic mb-4 border-l-4 border-[#426dd8] pl-4">
                  &ldquo;{study.testimonial}&rdquo;
                </blockquote>
                <p className="text-sm text-[#0a1f44] font-semibold">— {study.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#426dd8] text-white font-semibold rounded-lg hover:bg-[#3a5ec0] transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
