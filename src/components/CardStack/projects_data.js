import reactIcon from '../assets/react.png';
import nodeIcon from '../assets/nodejs.png';
import pythonIcon from '../assets/python.png';
import mongoIcon from '../assets/mongodb.png';
import Port from '../assets/Gifs/port2.gif';
import AI from '../assets/Gifs/AI.gif';

import vanguard1 from '../assets/Gifs/vanguard.jpg';

export const projects_stack = [
  {
    title: "Portfolio Website",
    description: "A modern, interactive portfolio featuring parallax animations, horizontal scrolling cards, and smooth transitions. Built with React, Framer Motion, and TailwindCSS.",
    image: Port,
    tech: [
      { name: "React", icon: reactIcon },
      { name: "Node.js", icon: nodeIcon }
    ],
    links: {
      github: "https://github.com/Rajas2912/PortFolio_Rajas",
      video: "https://port-folio-rajas.vercel.app/"
    }
  },  {
    title: "AI-Powered Learning Management System",
    description: "An intelligent ERP system automating academic workflows with AI-driven features including voice-cloned Viva and smart assessments.",
    image: AI,
    tech: [
      { name: "Python", icon: pythonIcon },
      { name: "MongoDB", icon: mongoIcon }
    ],
    links: {
      github: "https://github.com/Rajas2912/Team_Kaizen_HackXplore",
      video: "https://www.youtube.com/watch?v=JsFyMt7VpSc"
    }
  },
  {
    title: "Vanguard - Autonomous Robot",
    description: "An autonomous robot using ESP32 and ArUco markers for intelligent path mapping and object classification.",
    image: vanguard1,
    tech: [
      { name: "Python", icon: pythonIcon },
      { name: "Node.js", icon: nodeIcon }
    ],
    links: {
      github: "https://github.com/Rajas2912/Vanguard",
      video: "https://drive.google.com/file/d/19j7cWe1ZemrYmOD2bDexGR0BdCvMuwTC/view"
    }
  }
];
