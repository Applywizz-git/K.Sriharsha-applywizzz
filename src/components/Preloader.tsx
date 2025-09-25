import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [currentLetter, setCurrentLetter] = useState(0);
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetter((prev) => (prev + 1) % letters.length);
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-navy-start to-navy-end"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex gap-4">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`text-6xl font-display text-metallic-silver ${
              index === currentLetter ? 'animate-pulse-glow' : ''
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: index === currentLetter ? 1 : 0.3,
            }}
            animate={{
              opacity: index === currentLetter ? [0.3, 1, 0.3] : 0.3,
              scale: index === currentLetter ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              repeat: index === currentLetter ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;