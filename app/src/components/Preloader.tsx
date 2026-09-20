import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual resource loading if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0B1214]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Image */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/noryxa-logo.jpg"
              alt="Noryxa Logo"
              className="w-32 h-auto mb-8 rounded-xl object-contain shadow-[0_0_40px_rgba(18, 170, 209,0.3)]"
            />
            
            {/* Loading Bar Container */}
            <div className="w-48 h-1 bg-[#101B1D] rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#12AAD1] via-[#CBD1D8] to-[#12AAD1]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[#12AAD1] font-semibold text-xs tracking-[0.2em] uppercase"
            >
              We Build • We Automate • We Grow
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
