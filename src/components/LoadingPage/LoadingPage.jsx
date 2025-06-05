import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingPage.css';

const LoadingPage = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 3000); // Total animation duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-page"
          exit={{
            opacity: 0,
            transition: { duration: 0.5 }
          }}
        >
          <div className="logo-container">
            <motion.span
              className="logo-letter"
              initial={{ x: 0 }}
              animate={{ x: -100 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.6, 0.05, -0.01, 0.9]
              }}
            >
              R
            </motion.span>
            <motion.span
              className="logo-letter"
              initial={{ x: 0 }}
              animate={{ x: 100 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.6, 0.05, -0.01, 0.9]
              }}
            >
              B
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage; 