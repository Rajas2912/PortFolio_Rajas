import { motion } from 'framer-motion'

const MarqueeCard = ({ project }) => {
  return (
    <motion.div
      className="w-72 sm:w-80 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg flex-shrink-0 group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-accent-400 text-white text-xs font-semibold rounded-full mb-2">
              {project.category}
            </span>
            <h3 className="text-white text-lg font-bold">{project.title}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{project.category}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default MarqueeCard