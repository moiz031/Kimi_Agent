import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
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
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#426dd8] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-[#0a1f44]' : 'text-[#0a1f44]'}`}>
              NexGen
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
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-[#426dd8]/10 ${
                    isScrolled ? 'text-[#0a1f44]' : 'text-[#0a1f44]'
                  } ${location.pathname === link.path ? 'text-[#426dd8]' : ''}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-[#3b4555] hover:bg-[#f2f7ff] hover:text-[#426dd8] transition-colors"
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-[#0a1f44]">
              <Phone className="w-4 h-4 text-[#426dd8]" />
              (123) 456-7890
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#426dd8] text-white text-sm font-semibold rounded-lg hover:bg-[#0a1f44] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0a1f44]"
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
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-3 text-[#0a1f44] font-medium"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 border-l-2 border-[#426dd8]/20 ml-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-2 text-sm text-[#3b4555]"
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
                className="block mt-4 px-6 py-3 bg-[#426dd8] text-white text-center font-semibold rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
