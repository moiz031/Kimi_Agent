import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FAF9F6]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Image */}
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src="/logo.png"
              alt="Mentinox Solutions Logo"
              className="h-14 sm:h-16 w-auto mb-6 object-contain"
            />
            
            {/* Loading Bar Container */}
            <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#1CA88C] via-[#20C997] to-[#1CA88C]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-[#1CA88C] font-semibold text-xs tracking-wider uppercase"
            >
              Turning Ambitious Visions Into Intelligent Digital Realities
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
