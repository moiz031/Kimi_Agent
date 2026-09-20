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
    <footer className="bg-[#0B1214] text-white relative">
      
      {/* Top Gradient Accent Line (Teal -> Gold) */}
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, #12AAD1 0%, #CBD1D8 100%)' }} />

      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img
                src="/logo.png"
                alt="Noryxa Agency Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-[#12AAD1] font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              WE BUILD • WE AUTOMATE • WE GROW
            </p>
            
            <p className="text-[#A3B0B7] mb-6 leading-relaxed text-sm max-w-sm">
              Transform your digital presence with data-driven marketing strategies and AI automation engines that deliver measurable enterprise revenue growth.
            </p>
            
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#101B1D] border border-[#12AAD1]/20 text-[#A3B0B7] hover:text-[#061112] hover:bg-[#12AAD1] hover:border-[#12AAD1] transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-5 text-white uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A3B0B7] hover:text-[#12AAD1] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-5 text-white uppercase tracking-wider text-xs">Industries</h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A3B0B7] hover:text-[#12AAD1] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-5 text-white uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#A3B0B7] hover:text-[#12AAD1] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-5 text-white uppercase tracking-wider text-xs">Stay Updated</h4>
            <p className="text-[#A3B0B7] text-xs mb-4">
              Subscribe to our AI marketing insights newsletter.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#101B1D] border border-[#12AAD1]/20 text-white placeholder-[#A3B0B7]/60 focus:outline-none focus:border-[#12AAD1] text-xs transition-colors"
              />
              <button
                type="submit"
                className="w-full btn-teal py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                {!subscribed && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A3B0B7]">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:noryxadigital@gmail.com" className="flex items-center gap-1.5 hover:text-[#12AAD1] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#12AAD1]" />
                noryxadigital@gmail.com
              </a>
              <a href="tel:+923309999149" className="flex items-center gap-1.5 hover:text-[#12AAD1] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#12AAD1]" />
                +92 330 9999149
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#12AAD1]" />
                Pakistan
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container-custom py-4">
          <p className="text-center text-xs text-[#A3B0B7]/60">
            © {new Date().getFullYear()} Noryxa Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
