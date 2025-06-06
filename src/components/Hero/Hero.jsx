import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiDownload, FiArrowLeft } from 'react-icons/fi'
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../../context/ThemeContext";
import portrait from "./potrait-23.png";
import linked from "./prof23.jpg";
import gemini from "./without_bg.png";
import ghibli from "./profghibli.png";
import calm from "./Calm212bg.png";
import { useState } from 'react';
import resumepdf from './Rajas_Bhosale_CV.pdf';
import './Hero.css';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const { isDarkMode } = useTheme();

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
            src="/resume.pdf" 
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
    >
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
              <motion.img
                src={calm}
                alt="Rajas Portrait"
                className="portrait-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;