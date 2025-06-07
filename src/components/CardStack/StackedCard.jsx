import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiYoutube } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import './StackedCard.css';

const StackedCard = ({ 
  title, 
  description, 
  tech, 
  image, 
  links, 
  index, 
  isExpanded, 
  totalCards 
}) => {
  const { isDarkMode } = useTheme();

  const cardVariants = {
    collapsed: {
      y: index * 20,
      scale: 1 - (index * 0.05),
      zIndex: totalCards - index,
    },
    expanded: (custom) => ({
      y: custom.y,
      scale: 1,
      zIndex: totalCards - index,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      className={`stacked-card ${isDarkMode ? 'dark' : ''}`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      custom={{ y: index * 120 }}
      whileHover={{ scale: isExpanded ? 1.02 : 1 }}
    >
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="card-links">
            {links?.github && (
              <a 
                href={links.github}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            )}
            {links?.video && (
              <a 
                href={links.video}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube />
              </a>
            )}
          </div>
        </div>

        <p className="card-description">{description}</p>

        <div className="tech-list">
          {tech.map((item, i) => (
            <div key={i} className="tech-item">
              <img src={item.icon} alt={item.name} className="tech-icon" />
              <span className="tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StackedCard;
