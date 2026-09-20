import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "For SEO, it typically takes 3-6 months to see significant movement. For PPC and paid social campaigns, we often generate qualified leads within the first 2-4 weeks of launch."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in Healthcare, Real Estate, E-commerce, Law Firms, and B2B SaaS. However, our data-driven frameworks can be adapted to almost any competitive industry."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No. While we recommend 6-12 month engagements for maximum impact (especially for SEO), we operate on flexible month-to-month terms for most paid media services."
  },
  {
    question: "Will I have a dedicated account manager?",
    answer: "Yes, every client is assigned a dedicated strategist who acts as your primary point of contact and coordinates our specialists to execute your campaigns."
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="surface-panel p-8">
      <h3 className="text-xl font-bold text-white mb-6">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#12AAD1]/10 pb-4 last:border-0 last:pb-0">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
              <span className={`font-medium transition-colors ${activeIndex === index ? 'text-[#12AAD1]' : 'text-white group-hover:text-[#12AAD1]/80'}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className={`w-5 h-5 ${activeIndex === index ? 'text-[#12AAD1]' : 'text-[#A3B0B7]'}`} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-sm text-[#A3B0B7] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
