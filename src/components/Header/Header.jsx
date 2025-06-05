import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Parallax Cards', href: '/stacked-cards' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu when nav link is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`} style={{border:"solid 2px black" }}>
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold tracking-tight relative">
          <span className="text-primary-500">Portfolio</span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                {link.name}
              </Link>
            ) : (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
                onClick={handleNavLinkClick}
            >
              {link.name}
            </a>
            )
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
          <button
            id="menu-button"
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>

        {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
          >
            <nav className="container-custom py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="nav-link block"
                      onClick={handleNavLinkClick}
                    >
                      {link.name}
                    </Link>
                  ) : (
                <a
                  key={link.name}
                  href={link.href}
                      className="nav-link block"
                  onClick={handleNavLinkClick}
                >
                  {link.name}
                </a>
                  )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  )
}

export default Header