import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 flex gap-2">
            {project.links?.github && (
              <a 
                href={project.links.github}
                className="p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-white text-sm" />
              </a>
            )}
            {project.links?.live && (
              <a 
                href={project.links.live}
                className="p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="text-white text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
            {project.category}
          </span>
          {project.isNew && (
            <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
              New
            </span>
          )}
        </div>
        
        <h3 className="text-sm font-bold mb-1 text-gray-900 dark:text-white line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-1.5 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-[10px] font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 