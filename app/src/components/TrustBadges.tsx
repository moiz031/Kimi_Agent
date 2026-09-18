import { motion } from 'framer-motion';

const partners = [
  { name: 'Google Premier Partner', badge: 'GOOGLE PREMIER PARTNER' },
  { name: 'Meta Business Partner', badge: 'META BUSINESS PARTNER' },
  { name: 'Microsoft Advertising Partner', badge: 'MICROSOFT PARTNER' },
  { name: 'Shopify Partner', badge: 'SHOIFY PARTNER' },
  { name: 'HubSpot Partner', badge: 'HUBSPOT PARTNER' },
  { name: 'Semrush Certified', badge: 'SEMRUSH CERTIFIED' },
];

const awards = [
  { name: 'Clutch Top 1000', year: '2024' },
  { name: 'Inc. 5000', year: '2023' },
  { name: 'Best SEO Agency', year: '2024' },
  { name: 'Top Digital Agency', year: '2024' },
];

const reviewPlatforms = [
  { name: 'Google', rating: '4.9', reviews: '250+' },
  { name: 'Clutch', rating: '4.9', reviews: '180+' },
  { name: 'G2', rating: '4.8', reviews: '120+' },
  { name: 'Trustpilot', rating: '4.9', reviews: '200+' },
];

const TrustBadges = () => {
  return (
    <section className="py-16 section-surface">
      <div className="container-custom">
        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-4">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1214] mb-8">
            Certified Partner With Leading Platforms
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="surface-panel px-6 py-3 font-semibold text-sm tracking-wide text-[#A8B7B5] hover:border-[#00C7B7] hover:text-[#00C7B7] cursor-default"
            >
              {partner.badge}
            </motion.div>
          ))}
        </motion.div>

        {/* Awards & Reviews Row */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-panel p-8"
          >
            <h3 className="text-xl font-bold text-[#0B1214] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#06B6D4] rounded-full flex items-center justify-center text-sm">🏆</span>
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <span className="font-semibold text-[#0B1214]">{award.name}</span>
                  <span className="px-3 py-1 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Review Ratings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-panel p-8"
          >
            <h3 className="text-xl font-bold text-[#0B1214] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#06B6D4] rounded-full flex items-center justify-center text-sm">⭐</span>
              Client Reviews
            </h3>
            <div className="space-y-4">
              {reviewPlatforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <span className="font-semibold text-[#0B1214]">{platform.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <span className="text-[#06B6D4] font-bold">{platform.rating}</span>
                      <svg className="w-4 h-4 text-[#06B6D4] fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#A8B7B5]">{platform.reviews} reviews</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#A8B7B5] mb-6 uppercase tracking-wider">Trusted by 500+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {['TechVentures', 'GrowthLabs', 'StyleBrand', 'BuildRight', 'MedCare Plus', 'EduSmart'].map((client, index) => (
              <span key={index} className="text-xl font-bold text-[#0B1214]">{client}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
