import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import  imageme1 from "./images/image1.jpg";
import imageme2 from "./images/image2.jpg";
import imageme3 from "./images/image3.jpg";
const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    imageme1,
    imageme3,
    imageme1,
    imageme2
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-container" id="about">
      {/* Left Slideshow */}
      <div className="slideshow-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="slideshow-image"
          />
        </AnimatePresence>
        
        {/* Image indicators */}
        <div className="image-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
          </div>

      {/* Right Content */}
      <div className="about-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          Hi, I'm Rajas Bhosale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-description"
        >
          I'm a passionate software developer with expertise in full-stack development,
          machine learning, and cloud technologies. Currently pursuing my degree in
          Computer Science, I love building innovative solutions that make a difference.
          When I'm not coding, you can find me exploring new technologies, contributing
          to open source, or sharing knowledge with the developer community.
        </motion.p>
      </div>
    </div>
  );
};

export default About;