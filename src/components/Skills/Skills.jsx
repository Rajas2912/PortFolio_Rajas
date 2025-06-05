import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiServer, FiTool } from 'react-icons/fi'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const skillCategories = [
    {
      icon: <FiCode className="text-3xl" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "Next.js"]
    },
    {
      icon: <FiLayout className="text-3xl" />,
      title: "UI/UX Design",
      skills: ["Figma", "Responsive Design", "CSS Animations", "Tailwind CSS", "Styled Components", "Material UI"]
    },
    {
      icon: <FiServer className="text-3xl" />,
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs", "GraphQL", "PostgreSQL"]
    },
    {
      icon: <FiTool className="text-3xl" />,
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "Storybook", "CI/CD"]
    }
  ]

  return (
    <div className="container-custom">
      <h2 className="section-title">My Skills</h2>
      
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="card hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
      </motion.div>
    </div>
  )
}

export default Skills