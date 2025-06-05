import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiYoutube } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import './VerticalProjectCards.css';

const ProjectCard = ({ project, i, progress }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [i * 0.25, (i + 1) * 0.25], [1, 0.8]);

  return (
    <div ref={container} className="card-container">
      
      <motion.div 
        className="card"
        style={{
          backgroundColor: project.color || '#f3f4f6',
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        {/* Left side - Project Image */}
        <div className="image-section">
          <motion.div 
            className="image-inner"
            style={{ scale: imageScale }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </motion.div>
        </div>

        {/* Right side - Project Details */}
        <div className="content-section">
          <div className="project-header">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-links">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item"
                  title="View Source Code"
                >
                  <FiGithub className="text-2xl" />
                </a>
              )}
              {project.links?.video && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item"
                  title="Watch Demo"
                >
                  <FiYoutube className="text-2xl" />
                </a>
              )}
            </div>
          </div>

          <div className="project-description">
            <p>{project.description}</p>
          </div>

          <div className="project-approach">
            <h3>Approach & Implementation</h3>
            <p>{project.approach}</p>
          </div>

          <div className="project-achievements">
            <h3>Key Achievements</h3>
            <ul>
              {project.achievements.map((achievement, index) => (
                <li key={index}>
                  <FaTrophy className="achievement-icon" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-stack">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const VerticalProjectCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const projects = [
    {
      title: "Neural Network Visualization Platform",
      description: "An interactive platform for visualizing deep learning architectures and real-time training processes. Helps developers and researchers understand complex neural networks through intuitive visual representations.",
      approach: "Developed a modular architecture using React for the frontend visualization and Python with TensorFlow for the backend processing. Implemented WebSocket connections for real-time training data updates and D3.js for dynamic network visualization.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["React", "Python", "TensorFlow", "D3.js", "WebSocket", "Flask"],
      achievements: [
        "Reduced neural network debugging time by 70%",
        "Featured in ML Research Weekly",
        "Used by 50+ universities worldwide"
      ],
      color: "#e6f2ff",
      links: {
        github: "https://github.com",
        video: "https://youtube.com"
      }
    },
    {
      title: "Quantum Computing Simulator",
      description: "A sophisticated quantum circuit simulator that allows researchers and students to experiment with quantum algorithms without access to actual quantum hardware.",
      approach: "Built with Rust for core computations, WebAssembly for browser integration, and React for the UI. Implemented complex matrix operations and quantum gate simulations with high precision.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Rust", "WebAssembly", "React", "TypeScript", "Python", "NumPy"],
      achievements: [
        "Simulated 25-qubit systems efficiently",
        "Published in Quantum Computing Journal",
        "10,000+ monthly active users"
      ],
      color: "#fff5e6",
      links: {
        github: "https://github.com",
        video: "https://youtube.com"
      }
    },
    {
      title: "Autonomous Drone Navigation System",
      description: "An AI-powered navigation system for autonomous drones, enabling them to navigate complex urban environments while avoiding obstacles in real-time.",
      approach: "Implemented SLAM algorithms using ROS2, developed computer vision systems with PyTorch, and created a real-time control system using C++. Used Docker for deployment and testing.",
      image: "https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "C++", "ROS2", "PyTorch", "Docker", "OpenCV"],
      achievements: [
        "99.9% collision avoidance rate",
        "Reduced navigation latency by 85%",
        "Winner of International Robotics Challenge"
      ],
      color: "#e6ffe6",
      links: {
        github: "https://github.com",
        video: "https://youtube.com"
      }
    },
    {
      title: "Blockchain-based Supply Chain",
      description: "A decentralized supply chain management system using blockchain technology to ensure transparency and traceability in product lifecycles.",
      approach: "Built smart contracts with Solidity, implemented frontend with Next.js, and used Hyperledger Fabric for private blockchain network. Integrated IoT sensors for real-time tracking.",
      image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Solidity", "Next.js", "Hyperledger", "Node.js", "PostgreSQL", "Web3.js"],
      achievements: [
        "Tracked 1M+ products successfully",
        "Reduced fraud by 95%",
        "Adopted by 3 Fortune 500 companies"
      ],
      color: "#ffe6e6",
      links: {
        github: "https://github.com",
        video: "https://youtube.com"
      }
    }
  ];

  return (
    <div ref={containerRef} className="projects-main">
      {projects.map((project, i) => (
        <ProjectCard key={`p_${i}`} project={project} i={i} progress={scrollYProgress} />
      ))}
    </div>
  );
};

export default VerticalProjectCards; 