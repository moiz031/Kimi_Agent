import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Zap, Crown, Building2 } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: Sparkles,
      description: 'Perfect for small businesses just getting started',
      monthlyPrice: 999,
      yearlyPrice: 799,
      features: [
        'Social Media Management (2 platforms)',
        'Basic SEO Optimization',
        'Monthly Performance Report',
        'Email Support',
        'Content Creation (4 posts/month)',
        'Google My Business Setup',
      ],
      notIncluded: [
        'PPC Campaign Management',
        'Website Development',
        'Dedicated Account Manager',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Zap,
      description: 'Ideal for growing businesses seeking expansion',
      monthlyPrice: 2499,
      yearlyPrice: 1999,
      features: [
        'Social Media Management (4 platforms)',
        'Advanced SEO Strategy',
        'Weekly Performance Reports',
        'Priority Email & Phone Support',
        'Content Creation (12 posts/month)',
        'Google Ads Management ($1K budget)',
        'Website Maintenance',
        'Monthly Strategy Call',
      ],
      notIncluded: [
        'Custom Web Development',
        'Dedicated Account Manager',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'Comprehensive solution for established businesses',
      monthlyPrice: 4999,
      yearlyPrice: 3999,
      features: [
        'Social Media Management (All platforms)',
        'Enterprise SEO Strategy',
        'Real-time Dashboard Access',
        '24/7 Priority Support',
        'Unlimited Content Creation',
        'Google Ads Management ($5K budget)',
        'Custom Web Development',
        'Dedicated Account Manager',
        'Weekly Strategy Calls',
        'Competitor Analysis',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
    },
    {
      name: 'Custom',
      icon: Building2,
      description: 'Tailored solutions for large organizations',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Everything in Enterprise',
        'Multi-location Management',
        'White-label Solutions',
        'API Access',
        'Custom Integrations',
        'On-site Training',
        'SLA Guarantee',
        'Executive Reporting',
      ],
      notIncluded: [],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  const addOns = [
    {
      name: 'Additional Ad Spend',
      price: '15% of spend',
      description: 'Management fee for ad budgets above plan limits',
    },
    {
      name: 'Extra Content Pieces',
      price: '$150 each',
      description: 'Additional blog posts, videos, or graphics',
    },
    {
      name: 'Website Updates',
      price: '$100/hour',
      description: 'Custom development and design changes',
    },
    {
      name: 'Crisis Management',
      price: '$2,500',
      description: 'Emergency PR and reputation management',
    },
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
              Pricing Plans
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
              Transparent <span className="text-[#426dd8]">Pricing</span> for Every Business
            </h1>
            <p className="text-lg text-[#3b4555] mb-8">
              Choose the plan that fits your needs. All plans include our core features 
              and dedicated support.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#426dd8] text-white'
                    : 'text-[#3b4555] hover:text-[#426dd8]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#426dd8] text-white'
                    : 'text-[#3b4555] hover:text-[#426dd8]'
                }`}
              >
                Yearly
                <span className="px-2 py-0.5 bg-[#ffc225] text-[#0a1f44] text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-[#0a1f44] text-white scale-105 shadow-2xl'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#ffc225] text-[#0a1f44] text-sm font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-white/10' : 'bg-[#426dd8]/10'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-[#ffc225]' : 'text-[#426dd8]'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#0a1f44]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-[#3b4555]'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-[#0a1f44]'}`}>
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className={plan.popular ? 'text-gray-300' : 'text-[#3b4555]'}>
                        /month
                      </span>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-[#ffc225] mt-1">
                          Billed annually (${plan.yearlyPrice! * 12}/year)
                        </p>
                      )}
                    </>
                  ) : (
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-[#0a1f44]'}`}>
                      Custom
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-[#ffc225]' : 'text-[#426dd8]'
                      }`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-[#3b4555]'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-50">
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'border-gray-500' : 'border-gray-300'
                      }`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-500' : 'text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-[#ffc225] text-[#0a1f44] hover:bg-white'
                      : 'bg-[#426dd8] text-white hover:bg-[#0a1f44]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
              Optional Add-ons
            </h2>
            <p className="text-[#3b4555]">
              Enhance your plan with these additional services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-[#0a1f44] mb-2">{addon.name}</h4>
                <p className="text-[#426dd8] font-bold mb-2">{addon.price}</p>
                <p className="text-sm text-[#3b4555]">{addon.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#3b4555]">
              Got questions? We&apos;ve got answers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No, we don\'t charge any setup fees. You only pay the monthly subscription cost.',
              },
              {
                q: 'What\'s your cancellation policy?',
                a: 'You can cancel anytime with 30 days notice. We\'ll continue service until the end of your billing period.',
              },
              {
                q: 'Do you offer custom packages?',
                a: 'Absolutely! Contact us to discuss your specific needs and we\'ll create a tailored solution.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-[#f2f7ff] rounded-xl p-6">
                <h4 className="font-semibold text-[#0a1f44] mb-3">{faq.q}</h4>
                <p className="text-[#3b4555] text-sm">{faq.a}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your needs and find the perfect plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
