import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'UI/UX Design', path: '/services/graphic-design' },
      { name: 'Web Engineering', path: '/services/web-development' },
      { name: 'SEO & Search GEO', path: '/services/seo' },
      { name: 'AI Automation', path: '/services/ai-automation' },
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'PPC Advertising', path: '/services/ppc-advertising' },
    ],
    work: [
      { name: 'Featured Works', path: '/portfolio' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Client Testimonials', path: '/portfolio' },
      { name: 'Agency Architecture', path: '/about' },
    ],
    about: [
      { name: 'Our Story', path: '/about' },
      { name: 'Careers (Hiring)', path: '/careers' },
      { name: 'Pricing Tiers', path: '/pricing' },
      { name: 'Contact Us', path: '/contact' },
    ],
    resources: [
      { name: 'Blog & Insights', path: '/blog' },
      { name: 'Technical Docs', path: '/blog' },
      { name: 'Industry Benchmarks', path: '/about' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#E8EFE9] dark:bg-[#060D0F] text-slate-800 dark:text-slate-300 relative border-t border-slate-200/80 dark:border-white/5 transition-colors">
      <div className="container-custom py-16 lg:py-20">
        
        {/* Top Newsletter & Brand Banner */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pb-14 border-b border-slate-300/60 dark:border-white/10 mb-14">
          <div className="lg:col-span-6">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img
                src="/logo.png"
                alt="Mentinox Solutions Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Turning ambitious visions into intelligent digital realities with high-performance web engineering, bespoke AI systems, and scalable growth architectures.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full relative">
              <input
                type="email"
                placeholder="Subscribe to our weekly digest"
                className="w-full px-5 py-3.5 rounded-full bg-white dark:bg-[#101D21] border border-slate-300/80 dark:border-white/10 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none focus:border-[#1CA88C]"
              />
            </div>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0B3B2C] hover:bg-[#124B38] text-white text-xs font-bold whitespace-nowrap shadow-md transition-all">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-[#0B3B2C] dark:hover:text-[#20C997] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Work
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.work.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-[#0B3B2C] dark:hover:text-[#20C997] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.about.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-[#0B3B2C] dark:hover:text-[#20C997] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-xs mb-5">
              <a href="mailto:mentinoxsolutions@gmail.com" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0B3B2C] dark:hover:text-[#20C997]">
                <Mail className="w-3.5 h-3.5 text-[#1CA88C]" />
                mentinoxsolutions@gmail.com
              </a>
              <a href="tel:+923309999149" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0B3B2C] dark:hover:text-[#20C997]">
                <Phone className="w-3.5 h-3.5 text-[#1CA88C]" />
                +92 330 9999149 (WhatsApp)
              </a>
              <a href="tel:+923215204240" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0B3B2C] dark:hover:text-[#20C997]">
                <Phone className="w-3.5 h-3.5 text-[#1CA88C]" />
                +92 321 5204240 (Direct)
              </a>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#1CA88C]" />
                Pakistan (Global Remote)
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#101D21] border border-slate-300/80 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0B3B2C] transition-all"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-300/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mentinox Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
