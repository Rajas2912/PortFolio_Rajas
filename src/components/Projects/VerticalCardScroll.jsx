import React, { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Marquee from 'react-fast-marquee';
import VerticalCard from "./VerticalCard";
import "./VerticalCardScroll.css";
import postimg from "../assets/postman.png";
import reactjsimg from "../assets/reactjs.png";
import Lenis from "lenis";
import AI from '../assets/Gifs/AI.gif';
import Port from '../assets/Gifs/port2.gif';
import vanguard from '../assets/Gifs/Vanguard.gif';
import aisvg from './svgs/ai.svg';
import flasksvg from "./svgs/flask.svg";
import chromasvg from "./svgs/chroma.svg";
import jssvg from "./svgs/js.svg";
import csssvg from "./svgs/css3.svg";
import mlsvg from "./svgs/Machine.svg";
import opencvsvg from "./svgs/opencv.svg";
import framersvg from "./svgs/framer.svg";
import yolosvg from "./svgs/yolo.svg";
import reactroutersvg from "./svgs/reactrouter.svg";
import graphsvg from "./svgs/graphalgo.svg";
import reactsvg from "./svgs/react.svg";
import pythonsvg from "./svgs/python.svg";
import tailwindsvg from "./svgs/tailwind.svg";

const VerticalCardScroll = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, interactive portfolio showcasing projects and skills through innovative web design.",
      approach: "Developed a responsive portfolio using React with a focus on user experience and modern design principles. Implemented parallax scrolling, horizontal card marquees, and smooth transitions using Framer Motion. Created reusable components for projects, certifications, and publications display.",
      image: Port,
      tech: [
        { name: "React", icon: reactsvg },
        { name: "Framer Motion", icon: framersvg },
        { name: "TailwindCSS", icon: tailwindsvg },
        { name: "React Router", icon:reactroutersvg  },
        { name: "JavaScript", icon: jssvg },
        { name: "CSS3", icon: csssvg }
      ],
      color: isDarkMode ? "#1a1a1a" : "#ffffff",
      achievements: [
        "Implemented smooth parallax animations",
        "Created responsive marquee sections",
        "Built reusable component library",
        "Optimized performance and accessibility"
      ],
      links: {
        github: "https://github.com/Rajas2912/PortFolio_Rajas.git",
        video: "https://youtube.com"
      }
    },
    {
      title: "AI-Powered Learning Management System",
      description: "An intelligent College ERP System revolutionizing academic workflows and student-teacher interactions through AI integration.",
      approach: "Built a comprehensive system integrating voice-cloned Viva technology, AI-driven assessments with plagiarism detection, and real-time collaboration features. Implemented advanced NLP and Retrieval-Augmented Generation (RAG) for personalized learning and automated quiz generation from PDFs.",
      image:AI,
      tech: [
        { name: "Python", icon: pythonsvg},
        { name: "Flask", icon: flasksvg },
        { name: "React", icon: reactsvg },
        { name: "ChromaDB", icon: chromasvg },
        { name: "NLP", icon: aisvg},
        { name: "RAG", icon: mlsvg }
      ],
      color: isDarkMode ? "#1a1a1a" : "#ffffff",
      achievements: [
        "Automated academic workflows with AI integration",
        "Implemented voice-cloned Viva system",
        "Built real-time collaboration features",
        "Developed PDF-based quiz generation"
      ],
      links: {
        github: "https://github.com/Rajas2912/Team_Kaizen_HackXplore.git",
        video: "https://youtu.be/JsFyMt7VpSc"
      }
    },
    {
      title: "Vanguard - Autonomous Robot",
      description: "An advanced autonomous robot system utilizing ESP32 and ArUco markers for sophisticated path mapping and object classification.",
      approach: "Developed a comprehensive robotics solution combining computer vision with ESP32 hardware. Implemented image classification using OpenCV and custom ML models, integrated Dijkstra's algorithm for optimal path planning, and created an alert system based on classified inputs.",
      image: vanguard,
      tech: [
        { name: "Python", icon: pythonsvg },
        { name: "OpenCV", icon: opencvsvg },
        { name: "YOLO V8", icon: yolosvg },
        { name: "Machine Learning", icon: mlsvg },
        { name: "AI", icon: aisvg },
        { name: "Graph Algorithms", icon: graphsvg }
      ],
      color: isDarkMode ? "#1a1a1a" : "#ffffff",
      achievements: [
        "Implemented autonomous navigation system",
        "Developed custom ML classification model",
        "Integrated ArUco marker detection",
        "Created efficient path planning algorithm"
      ],
      links: {
        github: "https://github.com/Rajas2912/Vanguard.git",
        video: "https://drive.google.com/file/d/19j7cWe1ZemrYmOD2bDexGR0BdCvMuwTC/view?usp=sharing"
      }
    }
  ];

  return (
    <div className={`main23 ${isDarkMode ? 'dark' : ''}`}>
      <main ref={containerRef} className="vertical-scroll-container">
        <div className="projects-title">
          <h1>✦ PROJECTS</h1>
        </div>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <VerticalCard
              key={i}
              {...project}
              i={i}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </main>

    </div>
  );
};

export default VerticalCardScroll;

export const projects = [
  {
    title: "Vanguard",
    description:
      "Vanguard: Revolutionizing autonomous navigation in conflict zones with ESP32, advanced sensors, and drone collaboration. Powered by Dijkstra's Algorithm and Machine Learning, it excels in pathfinding, obstacle avoidance, and adaptive navigation.",
    src: postimg,
    link: "https://https://github.com/Rajas2912/Vanguard",
    color: "#afb9c5",
  },
  {
    title: "TaskVerify",
    description:
      "Built a full-stack platform to automate assignment evaluation, providing instant AI-powered scores and personalized feedback for students. Teachers can create assignments, view leaderboards, and use chatbot support for assistance. The platform archives submissions securely in the cloud and encourages student engagement through leaderboards. Reactjs , SpringBoot ,MySQL , AI Models",
    src: reactjsimg,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#41474a",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#75747f",
  },
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: postimg,
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#b2b2b2",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for 'The tawny rocks').",
    src: reactjsimg,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#afb9c5",
  },
];
