import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader onComplete={handleLoadingComplete} />
        ) : (
          <div>
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Certifications />
              <Education />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
