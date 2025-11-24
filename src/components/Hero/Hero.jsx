import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiDownload, FiArrowLeft } from 'react-icons/fi'
import { BsSun, BsMoon } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from 'react';
import resumepdf from './Rajas_Bhosale_CV.pdf';
import heroVideo from './v1.mp4';
import './Hero.css';

// Custom hook for scroll locking
const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when unlocking
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLocked]);
};

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Use the scroll lock hook
  useScrollLock(showResume);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  }

  if (showResume) {
    return (
      <motion.div 
        className={`resume-overlay ${isDarkMode ? 'dark' : ''}`}
        key="resume"
        {...pageTransition}
      >
        <div className="resume-container">
          <iframe 
            src={resumepdf} 
            title="Resume"
            className="resume-frame"
          />
          <motion.button
            className="back-button"
            onClick={() => setShowResume(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft className="icon" />
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section 
      className={`hero-section ${isDarkMode ? 'dark' : ''}`}
      key="hero"
      {...pageTransition}
    >      <motion.button
        className="theme-toggle-hero"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        data-dark={isDarkMode}
      >
        <div className="theme-toggle-icons">
          <BsSun size={18} />
          <BsMoon size={18} />
        </div>
        <motion.div 
          className="theme-toggle-slider"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </motion.button>
      
      <div className="hero-content">
        <div className="hero-grid">
          <motion.div 
            className="hero-text-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h1 
              className="intro-text"
              variants={itemVariants}
            >
              Hi, I'm <span className="name-highlight">Rajas</span>
            </motion.h1>
                
            <motion.div 
              className="dynamic-text"
              variants={itemVariants}
            >
              <span className="prefix">I build</span>
              <span className="typewriter">
                <Typewriter
                  words={['AI solutions', 'web experiences', 'scalable systems']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>
                
            <motion.p 
              className="description"
              variants={itemVariants}
            >
              AI enthusiast, full-stack developer, and innovator passionate about 
              building real-world solutions and sharing knowledge through 
              projects and workshops.
            </motion.p>
                
            <motion.div
              className="cta-container"
              variants={itemVariants}
            >
              <motion.button
                className="resume-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResume(true)}
              >
                View Resume
                <FiArrowRight className="icon" />
              </motion.button>
              <motion.a
                href={resumepdf}
                className="resume-button download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FiDownload className="icon" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
              
          <motion.div 
            className="portrait-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="portrait-wrapper">
              <motion.video
                src={heroVideo}
                className="portrait-image"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;