import { motion } from 'framer-motion';
import { Award, Star, Shield, CheckCircle2 } from 'lucide-react';

const partners = [
  { name: 'Google Premier Partner', badge: 'GOOGLE PREMIER PARTNER' },
  { name: 'Meta Business Partner', badge: 'META BUSINESS PARTNER' },
  { name: 'Microsoft Advertising Partner', badge: 'MICROSOFT PARTNER' },
  { name: 'Shopify Partner', badge: 'SHOPIFY PARTNER' },
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
    <section className="py-20 bg-[#0B1214]">
      <div className="container-custom">
        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C7B7]/10 text-[#00C7B7] text-sm font-semibold rounded-full mb-5 border border-[#00C7B7]/20">
            <Shield className="w-4 h-4" />
            Trusted By Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Certified Partner With Leading Platforms
          </h2>
          <p className="text-[#A8B7B5] text-sm max-w-xl mx-auto">
            We hold elite certifications with the world's top advertising and marketing platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="px-5 py-3 rounded-xl border border-[#00C7B7]/15 bg-[#101B1D] font-semibold text-xs tracking-widest uppercase text-[#A8B7B5] hover:border-[#00C7B7]/40 hover:text-[#00C7B7] transition-all duration-300 cursor-default"
            >
              <CheckCircle2 className="w-3.5 h-3.5 inline mr-2 text-[#00C7B7]/60" />
              {partner.badge}
            </motion.div>
          ))}
        </motion.div>

        {/* Awards & Reviews Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#00C7B7]/15 bg-[#101B1D] p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#D6A84A]/15 border border-[#D6A84A]/25 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#D6A84A]" />
              </span>
              Awards & Recognition
            </h3>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0B1214] border border-white/5 hover:border-[#00C7B7]/20 transition-colors"
                >
                  <span className="font-semibold text-sm text-[#E5EDEC]">{award.name}</span>
                  <span className="px-3 py-1 bg-[#00C7B7]/10 text-[#00C7B7] text-xs font-bold rounded-full border border-[#00C7B7]/20">
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
            className="rounded-2xl border border-[#00C7B7]/15 bg-[#101B1D] p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#00C7B7]/10 border border-[#00C7B7]/25 flex items-center justify-center">
                <Star className="w-5 h-5 text-[#00C7B7] fill-[#00C7B7]" />
              </span>
              Client Reviews
            </h3>
            <div className="space-y-3">
              {reviewPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0B1214] border border-white/5 hover:border-[#D6A84A]/20 transition-colors"
                >
                  <span className="font-semibold text-sm text-[#E5EDEC]">{platform.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#D6A84A] font-bold text-sm">{platform.rating}</span>
                      <Star className="w-3.5 h-3.5 text-[#D6A84A] fill-[#D6A84A]" />
                    </div>
                    <span className="text-xs text-[#A8B7B5]">{platform.reviews} reviews</span>
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
          <p className="text-sm text-[#A8B7B5] mb-6 uppercase tracking-widest font-semibold">
            Trusted by 500+ businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-40">
            {['TechVentures', 'GrowthLabs', 'StyleBrand', 'BuildRight', 'MedCare Plus', 'EduSmart'].map((client, index) => (
              <span key={index} className="text-lg font-bold text-white tracking-wide">{client}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
