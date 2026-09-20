import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const principles = [
  {
    title: 'Direct Senior Architecture',
    tag: 'Engineering Philosophy',
    content: 'We eliminate account managers and junior hand-offs. Your team collaborates directly with principal frontend engineers and growth strategists from day one.',
    author: 'Principal Technical Lead',
    role: 'Noryxa Engineering Standard',
    image: '/team-developer.jpg'
  },
  {
    title: 'Measurable Velocity & Sprints',
    tag: 'Delivery Commitment',
    content: 'Every sprint produces testable staging environments and verified Core Web Vitals. We measure progress in working code and tangible results, not slide decks.',
    author: 'Operations Director',
    role: 'Noryxa Delivery Standard',
    image: '/team-strategy.jpg'
  },
  {
    title: '100% Code & Asset Autonomy',
    tag: 'Ownership Guarantee',
    content: 'All source code, design systems, and platform credentials transfer entirely to your organization upon deployment. We build on open, standardized architectures with zero lock-in.',
    author: 'Client Solutions Partner',
    role: 'Noryxa Integrity Standard',
    image: '/team-ceo.jpg'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % principles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % principles.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + principles.length) % principles.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    })
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto py-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#12AAD1]/10 z-0 pointer-events-none">
        <Quote className="w-40 h-40" />
      </div>

      <div className="relative h-[320px] flex items-center justify-center overflow-hidden z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-full px-4 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12AAD1]/10 border border-[#12AAD1]/20 text-[#12AAD1] text-xs font-semibold uppercase tracking-wider mb-6">
              {principles[currentIndex].tag}
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              {principles[currentIndex].title}
            </h3>

            <p className="text-base md:text-lg text-[#CBD1D8] mb-8 leading-relaxed max-w-2xl mx-auto">
              "{principles[currentIndex].content}"
            </p>
            
            <div className="flex flex-col items-center justify-center">
              <img loading="lazy" 
                src={principles[currentIndex].image} 
                alt={principles[currentIndex].author}
                className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-[#12AAD1]"
              />
              <h4 className="text-base font-bold text-white">{principles[currentIndex].author}</h4>
              <p className="text-[#12AAD1] text-xs font-semibold uppercase tracking-wider">{principles[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8 relative z-20">
        <button 
          onClick={handlePrev}
          className="p-3 rounded-full bg-[#101B1D] border border-[#12AAD1]/20 text-white hover:bg-[#12AAD1] hover:border-[#12AAD1] transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {principles.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? 'bg-[#12AAD1] scale-125' : 'bg-[#A3B0B7]/30 hover:bg-[#A3B0B7]/60'
              }`}
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="p-3 rounded-full bg-[#101B1D] border border-[#12AAD1]/20 text-white hover:bg-[#12AAD1] hover:border-[#12AAD1] transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
