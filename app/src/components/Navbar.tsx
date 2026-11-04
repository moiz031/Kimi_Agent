import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
          ? 'bg-[#FAF9F6]/95 dark:bg-[#0A1417]/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-white/10 shadow-sm'
          : 'bg-[#FAF9F6]/85 dark:bg-[#0A1417]/85 backdrop-blur-md border-b border-slate-200/60 dark:border-white/5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Mentinox Solutions home">
            <img
              src="/logo.png"
              alt="Mentinox Solutions Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
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
                      ? 'text-[#1CA88C] bg-[#1CA88C]/10 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:text-[#1CA88C] hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-[#1CA88C]' : 'text-slate-400'}`} />
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
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#101D21] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-[#1CA88C]/10 hover:text-[#1CA88C] transition-colors"
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

          {/* Right Action: Theme Switcher & Animated CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle Light / Dark mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-[#1CA88C] dark:hover:text-[#20C997] shadow-sm hover:border-[#1CA88C] transition-all flex items-center justify-center cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </motion.button>

            {/* CTA Pill Button (Exact Reference Match) */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full border border-slate-900 dark:border-white/80 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-900 dark:text-white text-xs font-bold transition-all shadow-sm"
              >
                Contact us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light / Dark mode"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 dark:text-slate-100 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0A1417] border-b border-slate-200 dark:border-white/10 shadow-xl"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-2.5 px-3 font-medium rounded-lg transition-colors text-sm ${
                      location.pathname === link.path
                        ? 'text-[#1CA88C] bg-[#1CA88C]/10 font-semibold'
                        : 'text-slate-800 dark:text-slate-200 hover:text-[#1CA88C]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 border-l border-slate-200 dark:border-white/10 ml-3 mt-1 mb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1CA88C]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="uiverse-btn w-full justify-center"
                >
                  <span className="text_button">Get Free Audit</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
