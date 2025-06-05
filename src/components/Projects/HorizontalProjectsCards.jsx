import { motion, useTransform, useScroll } from "framer-motion";
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useRef } from "react";

const HorizontalProjectCard = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-[1000px] h-[500px] bg-white dark:bg-gray-800/95 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm">
      <div className="flex h-full">
        {/* Left side - Project Image */}
        <div className="w-[450px] relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Right side - Project Info */}
        <div className="flex-1 p-8 flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                {project.category}
              </span>
              {project.isNew && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
                  New
                </span>
              )}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            {/* Approach Section */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Approach
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.approach}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-auto flex items-center gap-4">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <FiGithub className="text-lg" />
                <span className="text-sm font-medium">View Code</span>
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <FiExternalLink className="text-lg" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const HorizontalProjectsCards = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const projects = [
    {
      title: "AI-Powered Health Assistant",
      category: "Healthcare & AI",
      description: "An intelligent health monitoring system that provides personalized insights and recommendations using machine learning algorithms.",
      approach: "Implemented advanced ML models for health data analysis, created a responsive web interface, and integrated real-time monitoring features.",
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS"],
      isNew: true,
      links: {
        github: "https://github.com",
        live: "https://demo.com"
      }
    },
    {
      title: "Smart Portfolio Analytics",
      category: "FinTech",
      description: "A comprehensive portfolio management platform with real-time market data analysis and investment recommendations.",
      approach: "Built a scalable architecture using microservices, implemented real-time data processing, and created an intuitive dashboard interface.",
      image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
      links: {
        github: "https://github.com",
        live: "https://demo.com"
      }
    },
    {
      title: "Eco Smart Home",
      category: "IoT & Sustainability",
      description: "An IoT-based smart home solution focused on energy efficiency and sustainable living through intelligent automation.",
      approach: "Developed IoT device integration, created machine learning models for energy optimization, and built a mobile-first user interface.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["React Native", "Python", "TensorFlow", "AWS IoT", "MongoDB", "Node.js"],
      links: {
        github: "https://github.com",
        live: "https://demo.com"
      }
    }
  ];

  return (
    <div className="relative h-[400vh] bg-neutral-900">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pl-8">
          {projects.map((project, index) => (
            <HorizontalProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalProjectsCards; 