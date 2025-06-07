import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiYoutube } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const MarqueeStackedCard = ({ projects }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode } = useTheme();

  return (    <div 
      className={`marquee-stack-container ${isDarkMode ? 'dark' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}      style={{ 
        height: '140px', 
        width: '340px', 
        position: 'relative',
        zIndex: isExpanded ? 50 : 1,
        alignSelf: 'flex-end',
        transform: 'translateY(20px)'  // Push it down slightly
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="marquee-stacked-card"
          initial={{ 
            y: index * 10,
            scale: 1 - (index * 0.05),
            opacity: 1 - (index * 0.2)
          }}
          animate={{
            y: isExpanded ? -((projects.length - 1 - index) * 140) : index * 10,
            scale: isExpanded ? 1 : 1 - (index * 0.05),
            opacity: isExpanded ? 1 : 1 - (index * 0.2),
            zIndex: projects.length - index
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: 'absolute',
            width: '100%',
            background: isDarkMode ? '#1a1a1a' : '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            height: '140px'
          }}
        >          <div className="flex h-full">
            <div className="w-2/5 h-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-3/5 p-3 flex flex-col">
              <h3 className={`text-base font-bold mb-1 truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 2).map((tech, i) => (
                  <span 
                    key={i} 
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                {project.links?.github && (
                  <a 
                    href={project.links.github}
                    className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-300 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={16} />
                  </a>
                )}
                {project.links?.video && (
                  <a 
                    href={project.links.video}
                    className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-300 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiYoutube size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MarqueeStackedCard;
