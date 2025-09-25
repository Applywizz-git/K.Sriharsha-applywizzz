import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card backdrop-blur-xl bg-card/90 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 h-16 flex flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            className="font-display text-2xl gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            K SRIHARSHA
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer relative group"
            >
              <motion.span
                className="font-inter font-medium text-foreground hover:text-luxury-gold transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-amber"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            {/* <motion.button
              className="btn-luxury"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button> */}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 glass-card"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`md:hidden overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
        initial={false}
        animate={{ 
          maxHeight: isMobileMenuOpen ? '24rem' : '0rem',
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="glass-card mx-4 mb-4 p-4 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer"
            >
              <motion.div
                className="block py-2 font-inter font-medium text-foreground hover:text-luxury-gold transition-colors duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMobileMenuOpen ? 0 : -20,
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer"
          >
            {/* <motion.button
              className="btn-luxury w-full mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: isMobileMenuOpen ? 0 : 20,
                opacity: isMobileMenuOpen ? 1 : 0
              }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              Let's Connect
            </motion.button> */}
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;