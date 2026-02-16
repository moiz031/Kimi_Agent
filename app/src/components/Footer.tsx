import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'SEO Services', path: '/services/seo' },
      { name: 'Graphic Design', path: '/services/graphic-design' },
      { name: 'AI Automation', path: '/services/ai-automation' },
      { name: 'Social Media', path: '/services/social-media' },
    ],
    industries: [
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Real Estate', path: '/industries/real-estate' },
      { name: 'E-Commerce', path: '/industries/ecommerce' },
      { name: 'Law Firms', path: '/industries/law-firms' },
      { name: 'Restaurants', path: '/industries/restaurants' },
      { name: 'Fitness', path: '/industries/fitness' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0a1f44] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#426dd8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl text-white">NexGen</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your digital presence with data-driven marketing strategies 
              that deliver measurable results. We help businesses grow through 
              innovative digital solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#426dd8] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ffc225] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-5">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ffc225] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ffc225] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-5">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#426dd8] transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#426dd8] text-white font-semibold rounded-lg hover:bg-[#ffc225] hover:text-[#0a1f44] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="mailto:info@nexgen.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@nexgen.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                New York, NY 10001
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} NexGen Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
