import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import StackedCard from './StackedCard';
import './CardStack.css';

const CardStack = ({ projects }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode } = useTheme();

  const containerVariants = {
    collapsed: {
      height: 400,
    },
    expanded: {
      height: projects.length * 120 + 300,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`card-stack-section ${isDarkMode ? 'dark' : ''}`}>
      <motion.div
        className="stack-container"
        variants={containerVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        {projects.map((project, index) => (
          <StackedCard
            key={index}
            {...project}
            index={index}
            isExpanded={isExpanded}
            totalCards={projects.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CardStack;
