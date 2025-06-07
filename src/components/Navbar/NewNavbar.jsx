import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import "./NewNavbar.css";

export const NewNavbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'unset';
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Name Logo */}
      <div className="name-logo" onClick={scrollToTop}>
        <h1>RAJAS BHOSALE</h1>
      </div>

      <button 
        className={`hamburger-button ${isDarkMode ? 'dark' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <HiX size={24} color="white" /> : <HiMenu size={24} color="white" />}
      </button>

      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`}
        onClick={toggleSidebar}
      />

      <nav className={`sidebar ${isDarkMode ? 'dark' : ''} ${isSidebarOpen ? 'open' : ''}`}>
        <div className="nav-list">
          <div className="nav-item" onClick={() => scrollToSection('home')}>
            Home
          </div>
          <div className="nav-item" onClick={() => scrollToSection('about')}>
            About
          </div>
          <div className="nav-item" onClick={() => scrollToSection('certifications')}>
            Certifications
          </div>
          <div className="nav-item" onClick={() => scrollToSection('projects')}>
            Projects
          </div>
          <div className="nav-item" onClick={() => scrollToSection('experience')}>
            Experience
          </div>
          <div className="nav-item" onClick={() => scrollToSection('hackathons')}>
            Hackathons
          </div>
          <div className="nav-item" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
          
          <a
            href="https://github.com/Rajas2912"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item social-link"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajas-bhosale-44773a258"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item social-link"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://leetcode.com/u/RajasBhosale/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item social-link"
          >
            <FaCode size={25} />
          </a>
          <button 
            onClick={toggleTheme} 
            className="nav-item theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;
