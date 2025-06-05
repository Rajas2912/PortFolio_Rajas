import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiYoutube } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./VerticalCard.css";

const VerticalCard = ({
  title,
  description,
  approach,
  tech,
  achievements,
  image,
  url,
  color,
  i,
  progress,
  targetScale,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`card-container ${isDarkMode ? "dark" : ""}`}>
      <motion.div
        className="card"
        style={{
          backgroundColor: color,
          scale: targetScale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {/* Left Side - Project Image and Tech Stack */}
        <div className="image-section">
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image} alt={title} className="project-image" />
          </motion.div>

          {/* Tech Stack Below Image */}
          <div className="tech-stack-section">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              {tech.map((item, index) => (
                <div key={index} className="tech-item">
                  <img
                    src={item.icon} // Use the imported SVG directly
                    alt={item.name}
                    className="tech-icon"
                  />
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="content-section">
          {/* Header with Title and Links */}
          <div className="card-header">
            <h2 className="project-title">{title}</h2>
            <div className="project-links">
              <a href="#" className="link-item" aria-label="View on GitHub">
                <FiGithub />
              </a>
              <a href="#" className="link-item" aria-label="Watch Demo">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Approach Section */}
          <div className="approach-section">
            <h3>Approach</h3>
            <p>{approach}</p>
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h3>Achievements</h3>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <FaTrophy className="achievement-icon" />
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalCard;
