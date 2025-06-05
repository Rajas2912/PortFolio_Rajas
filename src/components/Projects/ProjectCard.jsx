import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="card overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg mb-5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <a 
            href={project.link} 
            className="px-5 py-2 bg-white text-gray-900 rounded-full font-medium transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </a>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-2.5 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <a 
        href={project.link}
        className="text-primary-500 font-medium inline-flex items-center group/link"
      >
        View Details
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  )
}

export default ProjectCard