import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

// Industry/Niche Pages (20 Total)
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
// New Industry Pages
import Automotive from './pages/industries/Automotive';
import FoodBeverage from './pages/industries/FoodBeverage';
import Franchises from './pages/industries/Franchises';
import HomeServices from './pages/industries/HomeServices';
import Insurance from './pages/industries/Insurance';
import Manufacturing from './pages/industries/Manufacturing';
import Nonprofits from './pages/industries/Nonprofits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
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
            
            {/* Industry Routes - 20 Total */}
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
            {/* New Industry Routes */}
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/food-beverage" element={<FoodBeverage />} />
            <Route path="/industries/franchises" element={<Franchises />} />
            <Route path="/industries/home-services" element={<HomeServices />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/nonprofits" element={<Nonprofits />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
