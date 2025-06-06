import { FiAward, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CertificationCard = ({ certifications = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Example certifications data if none provided
  const defaultCertifications = [
    {
      title: "Advanced Machine Learning",
      issuer: "Stanford University",
      date: "2023",
      description: "Deep learning, NLP, and computer vision applications with hands-on projects.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Cloud Architecture",
      issuer: "AWS",
      date: "2023",
      description: "Advanced cloud solutions and distributed systems architecture.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Full-Stack Development",
      issuer: "Meta",
      date: "2023",
      description: "Modern web development with React, Node.js, and cloud integration.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "AI & Ethics",
      issuer: "MIT",
      date: "2023",
      description: "Ethical considerations in AI development and deployment.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const certsToShow = certifications.length > 0 ? certifications : defaultCertifications;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certsToShow.length);
    }, 3000); // Change certificate every 3 seconds

    return () => clearInterval(timer);
  }, [certsToShow.length]);

  const currentCert = certsToShow[currentIndex];

  return (
    <div className="flex-shrink-0 w-[300px] flex flex-col p-4">
      {/* Image Section */}
      <div className="relative w-full h-32 rounded-xl overflow-hidden flex-shrink-0 mb-3">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentCert.image}
            alt={currentCert.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Progress dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          {certsToShow.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {currentCert.issuer}
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="text-sm text-gray-400 dark:text-gray-500">
                {currentCert.date}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              {currentCert.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {currentCert.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              const element = document.getElementById('certifications');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-1 group"
          >
            More certifications and publications
            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard; 