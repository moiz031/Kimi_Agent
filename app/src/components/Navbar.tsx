import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'SEO Optimization', path: '/services/seo' },
        { name: 'Graphic Design', path: '/services/graphic-design' },
        { name: 'AI Automation', path: '/services/ai-automation' },
        { name: 'Social Media', path: '/services/social-media' },
        { name: 'Content Marketing', path: '/services/content-marketing' },
        { name: 'PPC Advertising', path: '/services/ppc-advertising' },
        { name: 'Email Marketing', path: '/services/email-marketing' },
      ],
    },
    {
      name: 'Industries',
      path: '/industries',
      dropdown: [
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'Real Estate', path: '/industries/real-estate' },
        { name: 'E-Commerce', path: '/industries/ecommerce' },
        { name: 'Law Firms', path: '/industries/law-firms' },
        { name: 'Restaurants', path: '/industries/restaurants' },
        { name: 'Fitness', path: '/industries/fitness' },
        { name: 'Education', path: '/industries/education' },
        { name: 'Finance', path: '/industries/finance' },
        { name: 'Technology', path: '/industries/technology' },
        { name: 'Hospitality', path: '/industries/hospitality' },
        { name: 'Construction', path: '/industries/construction' },
      ],
    },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Resources', path: '/blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1214]/95 backdrop-blur-xl border-b border-[#00C7B7]/15 shadow-2xl'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Matching Reference Gold Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="NexGen digital agency home">
            <div className="relative w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#D6A84A] to-[#E5C36A] shadow-[0_0_18px_rgba(214,168,74,0.28)] transition-transform duration-300 group-hover:scale-105">
              <span className="text-[#061112] font-black text-lg">N</span>
              <span className="absolute bottom-1 right-1 block w-2 h-2 rounded-full bg-[#00C7B7] shadow-[0_0_10px_rgba(0,199,183,0.35)]" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Nex<span className="text-[#00C7B7]">Gen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-[#00C7B7] bg-[#00C7B7]/10'
                      : 'text-[#F7FAF9] hover:text-[#00C7B7] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-[#00C7B7]' : 'text-slate-400'}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-[#101B1D] rounded-2xl overflow-hidden border border-[#00C7B7]/20 shadow-2xl"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm font-medium text-[#A8B7B5] hover:bg-[#00C7B7]/10 hover:text-[#00C7B7] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Action: Gold CTA (Matching Reference Image) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-gold text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1214] border-t border-[#00C7B7]/20"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-2.5 px-3 font-medium rounded-lg transition-colors text-sm ${
                      location.pathname === link.path
                        ? 'text-[#00C7B7] bg-[#00C7B7]/10'
                        : 'text-white hover:text-[#00C7B7]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 border-l border-[#00C7B7]/20 ml-3 mt-1 mb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-1.5 text-sm text-[#A8B7B5] hover:text-[#00C7B7]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block mt-4 px-6 py-3 btn-gold text-center font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
