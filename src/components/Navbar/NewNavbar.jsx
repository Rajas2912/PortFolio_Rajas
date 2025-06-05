import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import "./NewNavbar.css";

export const NewNavbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`main_navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <SlideTabs isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

const SlideTabs = ({ isDarkMode, toggleTheme }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="nav-list"
    >
      <Tab setPosition={setPosition}>
        <Link to="/">Home</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/about">About</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/certifications">Certifications</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/projects">Projects</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to="/resume">Resume</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <a
          href="https://github.com/Rajas2912"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub size={25} />
        </a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a
          href="https://www.linkedin.com/in/rajas-bhosale-44773a258"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={25} />
        </a>
      </Tab>
      <Tab setPosition={setPosition}>
        <a
          href="https://leetcode.com/u/RajasBhosale/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaCode size={25} />
        </a>
      </Tab>
      <Tab setPosition={setPosition}>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </Tab>
      <Cursor position={position} isDarkMode={isDarkMode} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="nav-item"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position, isDarkMode }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`nav-cursor ${isDarkMode ? 'dark' : ''}`}
    />
  );
};

export default NewNavbar; 