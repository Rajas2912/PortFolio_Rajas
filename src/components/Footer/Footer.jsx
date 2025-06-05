import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Rajas Bhosale
            </motion.h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences that leave a lasting impression. Building the future, one pixel at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Feel free to reach out for collaborations or just a friendly hello</p>
              <a href="mailto:your.email@example.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm flex items-center gap-2">
                <FiMail />
                rajasvbhosale@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rajas2912"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rajas-bhosale-44773a258"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rajas Bhosale. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-pink-500"
              >
                ❤️
              </motion.span>
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer