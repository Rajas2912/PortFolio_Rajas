import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceSection.css';
import gedit from '../assets/experience/gedit.png';
import eduplus from '../assets/experience/eduplus.png';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "EduPlusCampus",
      logo: eduplus,
      role: "AI Software Development Intern",
      period: "Jun 2024 - Dec 2024",
      responsibilities: [
        "Developed an AI-powered lesson planning system using GoToCR (OCR) and NLP to extract and structure syllabus content from scanned images",
        "Implemented dynamic scheduling logic based on chapter weightage, holidays, and weekends for personalized academic plans",
        "Built a customizable interface enabling educators to review and modify AI-generated plans efficiently"
      ]
    },
    {
      company: "GedIT, VIT Pune",
      logo: gedit,
      role: "AIML Co-Head",
      period: "June 2024 - Present",
      responsibilities: [
        "Leading a team that organizes seminars, workshops, hackathons, and research-driven activities",
        "Focused on fostering career growth and technical excellence within the club and college community",
        "Organizing and managing technical events to enhance student skills and knowledge"
      ]
    }
  ];

  return (
    <div className="experience-section">
      <div className="experience-title">
        <h1>✦ EXPERIENCE</h1>
      </div>
      
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker"></div>
            <div className="card-content">
              <div className="company-header">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  className="company-logo"
                />
                <div className="company-info">
                  <h2>{exp.company}</h2>
                  <h3>{exp.role}</h3>
                  <p className="period">{exp.period}</p>
                </div>
              </div>
              
              <ul className="responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection; 