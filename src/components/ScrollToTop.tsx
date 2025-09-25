import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Link to="hero" smooth={true} duration={500}>
          <motion.div
            className="fixed bottom-8 right-8 z-30 cursor-pointer"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              boxShadow: '0 10px 25px hsl(var(--luxury-gold) / 0.4)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-14 h-14 glass-card flex items-center justify-center group overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(var(--metallic-silver) / 0.9), 
                  hsl(var(--luxury-gold) / 0.9)
                )`,
              }}
            >
              <motion.div
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ArrowUp className="w-6 h-6 text-white group-hover:text-luxury-gold transition-colors duration-300" />
              </motion.div>
              
              {/* Shimmer Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </Link>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;