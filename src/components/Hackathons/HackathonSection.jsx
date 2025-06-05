import React, { useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";
import amazonML from "../assets/hackathons/AmazonMl.png";
import quasarImg from "../assets/hackathons/quasar.jpg";
import hackXploreImg from "../assets/hackathons/hackXplore.png";
import AI from "../assets/Gifs/AI.gif";
import Port from "../assets/Gifs/port2.gif";
import "./HackathonSection.css";

const HackathonCard = ({ hackathon }) => {
  const { isDarkMode } = useTheme();

  const getPositionIcon = (position) => {
    switch (position.toLowerCase()) {
      case "winner":
        return <FaTrophy className="text-yellow-400 text-2xl" />;
      case "runner up":
        return <FaMedal className="text-gray-400 text-2xl" />;
      case "finalist":
        return <FaMedal className="text-bronze-400 text-2xl" />;
      default:
        return <FaCertificate className="text-blue-400 text-2xl" />;
    }
  };

  return (
    <div className={`hackathon-item ${isDarkMode ? "dark" : ""}`}>
      <motion.div
        className="hackathon-card"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{hackathon.title}</h3>
            <div className="position-badge">
              {getPositionIcon(hackathon.position)}
              <span>{hackathon.position}</span>
            </div>
          </div>

          <div className="info-sections">
            <div className="info-section">
              <h4>Problem Statement</h4>
              <p>{hackathon.problemStatement}</p>
            </div>

            <div className="info-section">
              <h4>Our Approach</h4>
              <p>{hackathon.approach}</p>
            </div>

            <div className="tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                {hackathon.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

<div className="button-group">
  {hackathon.devpostLink && (
    <a 
      href={hackathon.devpostLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-button github-button"
    >
      <FiGithub className="button-icon" />
      View Project
    </a>
  )}
  
  {/* Only show video button if videoLink exists */}
  {hackathon.videoLink && (
    <a 
      href={hackathon.videoLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-button video-button"
    >
      <FiYoutube className="button-icon" />
      Video
    </a>
  )}
</div>
          </div>
        </div>

        <div className="right-column">
          <div className="card-image" style={{ height: "500px" }}>
            <img
              src={hackathon.certificate}
              alt={`${hackathon.title} Certificate`}
            />
          </div>

          {hackathon.achievements && (
            <div className="achievements-section">
              <h4>Key Achievements</h4>
              <ul className="achievements-list">
                {hackathon.achievements.map((achievement, index) => (
                  <li key={index} className="achievement-item">
                    <FaTrophy className="achievement-icon" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const HackathonSection = () => {
  const { isDarkMode } = useTheme();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["0%", "0%", "-100%", "-200%", "-200%"],
    {
      ease: easeInOut,
    }
  );

  const hackathons = [
    {
      title: "Amazon ML Challenge 2024",
      position: "Top 500",
      certificate: amazonML,
      problemStatement:
        "Developing a machine learning model for extracting product attributes such as weight, volume, and dimensions from images for e-commerce applications.",
      approach:
        "Built an ML pipeline using EasyOCR for text extraction, implemented text normalization and regex patterns for feature extraction. Utilized GPU-accelerated batch processing to handle 119K/130K images efficiently.",
      techStack: [
        "Python",
        "EasyOCR",
        "GPU Processing",
        "Regex",
        "Text Normalization",
      ],
      achievements: [
        "Rank 416 out of 73K participants",
        "Processed 119K/130K images",
        "GPU-accelerated processing",
        "Advanced text normalization",
      ],
      devpostLink: "https://github.com/Rajas2912/Amazon_ML2024.git",
    },
    {
      title: "Quasar 3.0 2025",
      position: "Winner",
      certificate: quasarImg,
      problemStatement:
        "Creating an intelligent Learning Management System with AI-driven features for automated assessment and personalized learning.",
      approach:
        "Built Kaizen.edu – an AI-powered Smart LMS with context-aware assignment assessments using RAG, AI-driven feedback, and voice-cloned viva. Implemented Flask backend with LLM integration and React frontend.",
      techStack: ["React", "Flask", "RAG", "LLM", "Postman", "AI Voice Clone"],
      achievements: [
        "Track Winner among 650 Teams",
        "Top 60 Finalist",
        "Selected for Round 2 (Offline)",
      ],
      devpostLink: "https://github.com/Rajas2912/Team_Kaizen_HackXplore.git",
      videoLink: "https://youtu.be/JsFyMt7VpSc",
    },
    {
      title: "HackXplore 2025",
      position: "Runner Up",
      certificate: hackXploreImg,
      problemStatement:
        "Enhancing the existing AI-Powered LMS with immersive 3D virtual classroom capabilities for better remote learning experiences.",
      approach:
        "Developed a next-gen Academic ERP System with 3D Virtual Classroom featuring real-time student tracking, screen sharing, and audio conferencing. Built using React.js + Three.js for frontend, Flask backend with LLMs and RAG architecture using ChromaDB.",
      techStack: [
        "React.js",
        "Three.js",
        "Flask",
        "LLM",
        "RAG",
        "ChromaDB",
        "MongoDB",
      ],
      achievements: [
        "2nd Place out of 450 teams",
        "₹25,000 Prize Money",
        "Top 10 Finalist",
        "Ranked 6th in Round 1",
      ],
      devpostLink: "https://github.com/Rajas2912/Team_Kaizen_HackXplore.git",
      videoLink: "https://youtu.be/JsFyMt7VpSc",
    },
  ];

  return (
    <section className={`hackathon-section ${isDarkMode ? "dark" : ""}`}>
      <div className="hackathon-title">
        <h1>✦ HACKATHONS</h1>
      </div>
      <div
        className={`hackathon-scroll ${isDarkMode ? "dark" : ""}`}
        ref={targetRef}
      >
        <div className="content-container">
          <motion.div className="cards-container" style={{ x }}>
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={index} hackathon={hackathon} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
