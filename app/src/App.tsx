import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import CaseStudyVideo from './pages/CaseStudyVideo';

// Service Pages
import Services from './pages/services/Services';
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebDevelopment from './pages/services/WebDevelopment';
import SEO from './pages/services/SEO';
import GraphicDesign from './pages/services/GraphicDesign';
import AIAutomation from './pages/services/AIAutomation';
import SocialMedia from './pages/services/SocialMedia';
import ContentMarketing from './pages/services/ContentMarketing';
import PPCAdvertising from './pages/services/PPCAdvertising';
import EmailMarketing from './pages/services/EmailMarketing';

// Industry/Niche Pages
import Industries from './pages/industries/Industries';
import Healthcare from './pages/industries/Healthcare';
import RealEstate from './pages/industries/RealEstate';
import Ecommerce from './pages/industries/Ecommerce';
import LawFirms from './pages/industries/LawFirms';
import Restaurants from './pages/industries/Restaurants';
import Fitness from './pages/industries/Fitness';
import Education from './pages/industries/Education';
import Finance from './pages/industries/Finance';
import Technology from './pages/industries/Technology';
import Hospitality from './pages/industries/Hospitality';
import Construction from './pages/industries/Construction';
import Automotive from './pages/industries/Automotive';
import FoodBeverage from './pages/industries/FoodBeverage';
import Franchises from './pages/industries/Franchises';
import HomeServices from './pages/industries/HomeServices';
import Insurance from './pages/industries/Insurance';
import Manufacturing from './pages/industries/Manufacturing';
import Nonprofits from './pages/industries/Nonprofits';

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00C7B7] via-[#D6A84A] to-[#14D9C7] z-[9999] origin-left"
    />
  );
}

// ─── Page Transition Wrapper ──────────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] as const } },
};

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Lenis Smooth Scroll Init ─────────────────────────────────────────────────
function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}

// ─── App Shell ────────────────────────────────────────────────────────────────
function AppShell() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0B1214] text-[#F7FAF9]">
      <LenisProvider />
      <ScrollProgressBar />
      <Navbar />

      <PageTransition>
        <Routes location={location} key={location.pathname}>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/case-study/:id" element={<CaseStudyVideo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />

          {/* Service Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/ppc-advertising" element={<PPCAdvertising />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />

          {/* Industry Routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/law-firms" element={<LawFirms />} />
          <Route path="/industries/restaurants" element={<Restaurants />} />
          <Route path="/industries/fitness" element={<Fitness />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/food-beverage" element={<FoodBeverage />} />
          <Route path="/industries/franchises" element={<Franchises />} />
          <Route path="/industries/home-services" element={<HomeServices />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/nonprofits" element={<Nonprofits />} />
        </Routes>
      </PageTransition>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
