import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import CertificationCard from './CertificationCard'
import HackathonCard from './HackathonCard'
import MailboxButton from './MailboxButton'
import AI from '../assets/Gifs/AI.gif';
import Port from '../assets/Gifs/port2.gif';
import vanguard1 from '../assets/Gifs/vanguard.jpg';
import SkillsCard from './SkillsCard'
import AWS from '../assets/Certificates/AWS.png';
import iitm from '../assets/Certificates/IIT.png';
import nvidia from '../assets/Certificates/Nvidia.png';
import vanguard from '../assets/Certificates/vanguard.jpg';
import energy from '../assets/Certificates/energy.jpg';
import amazonML from '../assets/hackathons/AmazonMl.png';
import quasarImg from '../assets/hackathons/quasar.jpg';
import hackXploreImg from '../assets/hackathons/hackXplore.png';
import './MarqueeSection.css'

const MarqueeSection = () => {
  const marqueeRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Example Data
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, interactive portfolio featuring parallax animations, horizontal scrolling cards, and smooth transitions.",
      image: Port,
      category: "Web Development",
      tech: ["React", "Framer Motion", "TailwindCSS", "React Router"],
      isNew: true,
      links: {
        github: "https://github.com/Rajas2912/PortFolio_Rajas",
        live: "https://port-folio-rajas.vercel.app/"
      },
      sectionInfo: {
        title: "Projects",
        description: "Modern web development with cutting-edge animations",
        stats: "Latest Work",
        highlight: "Featured Project"
      }
    },
    {
      title: "AI-Powered Learning Management System",
      description: "An intelligent ERP system automating academic workflows with AI-driven features including voice-cloned Viva and smart assessments.",
      image: AI,
      category: "AI & Education",
      tech: ["Python", "Flask", "React", "RAG", "ChromaDB", "NLP"],
      isNew: true,
      links: {
        github: "https://github.com/Rajas2912/Team_Kaizen_HackXplore",
        live: "https://www.youtube.com/watch?v=JsFyMt7VpSc"
      },
      sectionInfo: {
        title: "Projects",
        description: "Innovative solutions in AI, robotics, and education technology",
        stats: "Key Projects",
        highlight: "Featured Project"
      }
    },
    {
      title: "Vanguard - Autonomous Robot",
      description: "An autonomous robot using ESP32 and ArUco markers for intelligent path mapping and object classification.",
      image: vanguard1,
      category: "Robotics & AI",
      tech: ["Python", "OpenCV", "ESP32", "Machine Learning"],
      isNew: true,
      links: {
        github: "https://github.com/Rajas2912/Vanguard",
        live: "https://drive.google.com/file/d/19j7cWe1ZemrYmOD2bDexGR0BdCvMuwTC/view"
      },
      sectionInfo: {
        title: "Projects",
        description: "Cutting-edge robotics and computer vision applications",
        stats: "Featured Work",
        highlight: "Technical Project"
      }
    }
  ]

  const certifications = [
    {
      title: "Vanguard - Patent",
      issuer: "Patent Office",
      description: "Patent for autonomous robot navigation system using ESP32 and ArUco markers.",
      date: "November 2024",
      image: vanguard,
      isPatent: true
    },
    {
      title: "Real Time Energy Monitoring System - Patent",
      issuer: "Patent Office",
      description: "Patent for innovative energy monitoring and optimization system.",
      date: "April 2024",
      image: energy,
      isPatent: true
    },
    {
      title: "Amazon Cloud Technology Consultant",
      issuer: "Coursera",
      description: "Comprehensive certification in Amazon Web Services cloud technologies and consulting practices.",
      date: "2024",
      image: AWS
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      description: "Advanced certification in deep learning fundamentals and practical applications.",
      date: "2024",
      image: nvidia
    },
    {
      title: "IIT Madras Foundational Program",
      issuer: "IIT Madras",
      description: "Foundational certification in computer science and programming fundamentals.",
      date: "2024",
      image: iitm
    }
  ]

  const hackathons = [
    {
      title: "Amazon ML Challenge 2024",
      position: "Top 500",
      image: amazonML,
      techStack: ["Python", "EasyOCR", "GPU Processing", "Regex", "Text Normalization"],
      achievement: "Rank 416 out of 73K participants"
    },
    {
      title: "Quasar 3.0 2025",
      position: "Winner",
      image: quasarImg,
      techStack: ["React", "Flask", "RAG", "LLM", "AI Voice Clone"],
      achievement: "Track Winner among 650 Teams"
    },
    {
      title: "HackXplore 2025",
      position: "Runner Up",
      image: hackXploreImg,
      techStack: ["React.js", "Three.js", "Flask", "LLM", "RAG", "MongoDB"],
      achievement: "2nd Place & ₹25,000 Prize"
    }
  ]

  const CardWithInfo = ({ children, sectionInfo }) => (
    <div className="flex-shrink-0 flex items-start gap-6 p-4 hover:bg-white/5 dark:hover:bg-gray-800/5 rounded-xl transition-colors duration-300">
      <div className="flex-shrink-0">
        {children}
      </div>
      <div className="w-48 py-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          {sectionInfo.title}
          <FiChevronRight className="text-gray-400" />
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {sectionInfo.description}
        </p>
        <div className="space-y-2">
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {sectionInfo.stats}
          </div>
          <div className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
            {sectionInfo.highlight}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
      </motion.div>

      <div ref={marqueeRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* First Marquee - Moving Left (default) */}
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            className="py-8"
          >
            <div className="flex gap-24 px-8">
              {/* Project Card */}
              {projects.map((project, index) => (
                <CardWithInfo key={`project-${index}`} sectionInfo={project.sectionInfo}>
                  <ProjectCard project={project} />
                </CardWithInfo>
              ))}
              
              {/* Certification Card */}
              <CertificationCard certifications={certifications} />
              {/* Mailbox Button */}
              <MailboxButton />
              {/* Hackathon Card */}
              <HackathonCard hackathons={hackathons} />

              {/* Skills Card */}
              <SkillsCard />

              {/* Duplicate set for continuous scroll */}
              {projects.map((project, index) => (
                <CardWithInfo key={`project-dup-${index}`} sectionInfo={project.sectionInfo}>
                  <ProjectCard project={project} />
                </CardWithInfo>
              ))}
              <CertificationCard certifications={certifications} />
              <MailboxButton />
              <HackathonCard hackathons={hackathons} />
              <SkillsCard />
            </div>
          </Marquee>

          {/* Text Marquee - Moving Right */}
          <div className="bg-black py-6">
            <Marquee
              gradient={false}
              speed={40}
              direction="right"
              pauseOnHover={false}
            >
              <div className="flex items-center gap-12">
                {[
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME",
                  "WELCOME"
                ].map((text, index) => (
                  <span 
                    key={index} 
                    className="text-[5rem] font-semibold text-white/90 uppercase tracking-wider px-4 font-montserrat"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="bg-white py-6">
            <Marquee
              gradient={false} 
              speed={40}
              direction="left"
              pauseOnHover={false}
            >
              <div className="flex items-center gap-12">
                {[
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS",
                  "✦ PROJECTS"
                ].map((text, index) => (
                  <span 
                    key={index} 
                    className="text-[2rem] font-semibold text-black/90 uppercase tracking-wider px-4 font-montserrat"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MarqueeSection