import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin, Youtube, AlertCircle, MessageCircle } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Initialize EmailJS (replace with your actual public key when ready)
      emailjs.init("YOUR_PUBLIC_KEY");
      
      // We are sending a structured email to your address
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to_email: 'mentinoxsolutions@gmail.com'
        }
      );
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMsg('Failed to send message. Please try emailing us directly at mentinoxsolutions@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'mentinoxsolutions@gmail.com',
      link: 'mailto:mentinoxsolutions@gmail.com',
      isWhatsApp: false,
    },
    {
      icon: Phone,
      title: 'Call Us (Primary)',
      content: '+92 330 9999149',
      link: 'tel:+923309999149',
      isWhatsApp: false,
    },
    {
      icon: Phone,
      title: 'Direct Line',
      content: '+92 321 5204240',
      link: 'tel:+923215204240',
      isWhatsApp: false,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      content: 'Instant 24/7 Response',
      link: 'https://wa.me/923309999149',
      isWhatsApp: true,
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
            <span className="inline-block px-4 py-2 bg-[#1CA88C]/10 text-[#1CA88C] text-sm font-semibold rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1214] mb-6">
              Let&apos;s Start a <span className="text-[#1CA88C]">Conversation</span>
            </h1>
            <p className="text-lg text-[#64748B] mb-8">
              Have a project in mind? We&apos;d love to hear from you. Send us a message 
              and we&apos;ll respond as soon as possible.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923309999149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold rounded-full shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp (+92 330 9999149)</span>
              </a>
              <a
                href="tel:+923215204240"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-full border border-slate-200 shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#1CA88C]" />
                <span>Call Direct: +92 321 5204240</span>
              </a>
            </div>
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
                target={info.isWhatsApp ? "_blank" : undefined}
                rel={info.isWhatsApp ? "noopener noreferrer" : undefined}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  info.isWhatsApp
                    ? 'bg-[#0B3B2C] text-white hover:bg-[#124B38]'
                    : 'bg-white rounded-2xl'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  info.isWhatsApp
                    ? 'bg-[#25D366] text-white'
                    : 'bg-[#1CA88C]/10 text-[#1CA88C] group-hover:bg-[#1CA88C] group-hover:text-white'
                }`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-semibold mb-1 ${info.isWhatsApp ? 'text-white' : 'text-[#0B1214]'}`}>{info.title}</h3>
                <p className={`text-sm ${info.isWhatsApp ? 'text-emerald-200 font-medium' : 'text-[#64748B]'}`}>{info.content}</p>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding section-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#0B1214] mb-6">
                Send Us a Message
              </h2>
              <p className="text-[#64748B] mb-8">
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
                      <label className="block text-sm font-medium text-[#0B1214] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1CA88C] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1214] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1CA88C] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0B1214] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1CA88C] transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1214] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1CA88C] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B1214] mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1CA88C] transition-colors"
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
                    <label className="block text-sm font-medium text-[#0B1214] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1CA88C] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
                  </button>

                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errorMsg}
                    </motion.div>
                  )}
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
              <div className="surface-panel h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#1CA88C] mx-auto mb-4" />
                  <p className="text-[#64748B]">Interactive Map</p>
                  <p className="text-sm text-[#64748B]">123 Digital Street, New York, NY 10001</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="surface-panel p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Connect With Us
                </h3>
                <p className="text-[#64748B] mb-6">
                  Follow us on social media for the latest updates, insights, and digital marketing tips.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md hover:bg-[#1CA88C] hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group"
                    >
                      <social.icon className="w-5 h-5 text-[#1CA88C] group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <FAQAccordion />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation call with one of our experts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923309999149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp (0330 9999149)</span>
              </a>
              <a
                href="tel:+923309999149"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1518] text-white font-bold rounded-xl hover:bg-[#16272C] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+92 330 9999149</span>
              </a>
              <a
                href="tel:+923215204240"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-[#1CA88C]" />
                <span>+92 321 5204240</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
