import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@nexgen.com',
      link: 'mailto:info@nexgen.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '(123) 456-7890',
      link: 'tel:+1234567890',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Digital Street, New York, NY 10001',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  const services = [
    'Digital Marketing',
    'Web Development',
    'SEO Services',
    'Graphic Design',
    'AI Automation',
    'Social Media Marketing',
    'Content Marketing',
    'PPC Advertising',
    'Email Marketing',
    'Other',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
              Let&apos;s Start a <span className="text-[#426dd8]">Conversation</span>
            </h1>
            <p className="text-lg text-[#3b4555]">
              Have a project in mind? We&apos;d love to hear from you. Send us a message 
              and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#426dd8]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#426dd8] transition-colors">
                  <info.icon className="w-6 h-6 text-[#426dd8] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#0a1f44] mb-1">{info.title}</h3>
                <p className="text-sm text-[#3b4555]">{info.content}</p>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-6">
                Send Us a Message
              </h2>
              <p className="text-[#3b4555] mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0a1f44] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0a1f44] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0a1f44] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0a1f44] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a1f44] mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a1f44] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-[#f1f1f1] rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#426dd8] mx-auto mb-4" />
                  <p className="text-[#3b4555]">Interactive Map</p>
                  <p className="text-sm text-gray-400">123 Digital Street, New York, NY 10001</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#f2f7ff] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                  Connect With Us
                </h3>
                <p className="text-[#3b4555] mb-6">
                  Follow us on social media for the latest updates, insights, and digital marketing tips.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md hover:bg-[#426dd8] hover:text-white transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-[#426dd8] group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    'How long does it take to see results?',
                    'What industries do you work with?',
                    'How much do your services cost?',
                  ].map((question, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#426dd8] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3b4555]">{question}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation call with one of our experts.
            </p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
