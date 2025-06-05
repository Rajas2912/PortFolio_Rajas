import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const HackathonCard = ({ hackathons = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default hackathons data if none provided
  const defaultHackathons = [
    {
      title: "Smart India Hackathon 2023",
      position: "Winner",
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/001/963/171/datas/full_width.png",
      techStack: ["TensorFlow", "React Native", "Python", "Flask"]
    },
    {
      title: "HackMIT 2023",
      position: "Runner Up",
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/398/577/datas/full_width.png",
      techStack: ["React", "Node.js", "OpenAI", "Firebase"]
    },
    {
      title: "ETHGlobal 2023",
      position: "Finalist",
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/604/433/datas/full_width.png",
      techStack: ["Solidity", "Web3.js", "Next.js", "Hardhat"]
    }
  ];

  const hacksToShow = hackathons.length > 0 ? hackathons : defaultHackathons;

  // Slide transition effect
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Change hackathon every 4 seconds
  useState(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hacksToShow.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [hacksToShow.length]);

  const currentHack = hacksToShow[currentIndex];
  const direction = 1;

  return (
    <div className="flex-shrink-0 w-[300px] flex flex-col p-4">
      <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <img
              src={currentHack.image}
              alt={currentHack.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 mb-1">
                <FiAward className="text-yellow-400 text-lg" />
                <span className="text-white font-medium">
                  {currentHack.position}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          {hacksToShow.map((_, index) => (
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

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {currentHack.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-3">
              {currentHack.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-auto">
          <a
            href="/hackathons"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-1 group"
          >
            View all hackathons
            <FiExternalLink className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard; 