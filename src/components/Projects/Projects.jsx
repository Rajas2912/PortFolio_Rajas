import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Project categories
  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Apps']
  const [activeCategory, setActiveCategory] = useState('All')

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart management, and secure checkout.",
      image: "https://images.pexels.com/photos/6169/woman-hand-smartphone-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Travel Blog",
      description: "A modern travel blog with dynamic content loading, search functionality, and user authentication.",
      image: "https://images.pexels.com/photos/7412072/pexels-photo-7412072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "UI/UX Design",
      tags: ["Figma", "React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Finance Tracker",
      description: "A comprehensive finance tracking application with budget planning, expense categorization, and data visualization.",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Mobile Apps",
      tags: ["React Native", "Redux", "Firebase", "Chart.js"],
      link: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productivity tool for organizing tasks, setting deadlines, and tracking progress with a clean interface.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Web Development",
      tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      link: "#"
    },
    {
      id: 5,
      title: "Fitness App UI",
      description: "A modern fitness application UI design with workout tracking, nutrition planning, and progress visualization.",
      image: "https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "UI/UX Design",
      tags: ["Figma", "Adobe XD", "Prototyping", "Animation"],
      link: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "A real estate listing platform with property search, filtering, and interactive maps.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Web Development",
      tags: ["React", "Next.js", "Google Maps API", "Prisma"],
      link: "#"
    }
  ]

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const scrollContainer = (direction) => {
    const container = document.getElementById('projects-container')
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <div className="container-custom" ref={ref}>
      <h2 className="section-title">Projects</h2>
      
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="overflow-x-auto hide-scrollbar"
            id="projects-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-8 py-4 px-2">
              {filteredProjects.map(project => (
                <div key={project.id} className="flex-shrink-0 w-[300px] sm:w-[350px]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => scrollContainer('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 z-10"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => scrollContainer('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 z-10"
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>
      
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  )
}

export default Projects