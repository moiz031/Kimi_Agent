import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Zap } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        // Save to sessionStorage so it doesn't show again in this session
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Check if it's already been shown this session
    if (!sessionStorage.getItem('exitIntentShown')) {
      document.addEventListener('mouseleave', handleMouseLeave);
    } else {
      setHasShown(true);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const closePopup = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#0B1214]/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#101B1D] rounded-2xl border border-[#12AAD1]/20 shadow-[0_0_50px_rgba(18, 170, 209,0.15)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-[#A3B0B7] hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10 text-center relative z-0">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#12AAD1]/20 rounded-full blur-[60px]" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#CBD1D8]/10 rounded-full blur-[60px]" />

              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#12AAD1] to-[#3DD6F0] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(18, 170, 209,0.4)] rotate-3">
                <Zap className="w-8 h-8 text-[#0B1214] -rotate-3" />
              </div>

              <h2 className="text-3xl font-extrabold text-white mb-4">
                Wait! Don't Leave Without Your <span className="text-[#12AAD1]">Free Growth Audit</span>
              </h2>
              
              <p className="text-[#A3B0B7] mb-8 leading-relaxed">
                Discover the exact strategies your competitors are using to steal your market share. Get a customized action plan today, absolutely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-teal group flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Claim My Free Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={closePopup}
                  className="px-6 py-3.5 rounded-lg border border-[#A3B0B7]/30 text-[#A3B0B7] font-semibold hover:border-white hover:text-white transition-all w-full sm:w-auto"
                >
                  No thanks, I have enough leads
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
