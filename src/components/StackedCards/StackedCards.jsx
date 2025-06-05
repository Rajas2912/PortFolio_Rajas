import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxCards = () => {
  const { scrollYProgress } = useScroll();
  
  const cards = [
    {
      title: "Web Development",
      content: "Building modern and responsive websites with React, Next.js, and cutting-edge technologies",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "UI/UX Design",
      content: "Creating beautiful and intuitive user interfaces with a focus on user experience",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Mobile Development",
      content: "Developing cross-platform mobile applications with React Native and Flutter",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Cloud Solutions",
      content: "Implementing scalable cloud solutions using AWS, Firebase, and other platforms",
      bgColor: "bg-gradient-to-br from-red-500 to-red-700",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center z-10 text-white mix-blend-difference"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Scroll to Explore
        </motion.h1>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative py-40 space-y-[50vh]">
        {cards.map((card, index) => {
          const y = useTransform(
            scrollYProgress,
            [index * 0.25, (index + 1) * 0.25],
            ['0%', '-100%']
          );

          return (
            <motion.div
              key={index}
              className="sticky top-[20vh] h-[60vh] mx-auto max-w-4xl px-4"
              style={{ opacity: useTransform(scrollYProgress, 
                [index * 0.25, (index * 0.25) + 0.125, (index + 1) * 0.25],
                [0, 1, 0]
              ) }}
            >
              <motion.div
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ y }}
              >
                <div className={`relative w-full h-full ${card.bgColor} p-8 flex flex-col justify-center`}>
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{card.title}</h2>
                    <p className="text-lg md:text-xl text-white/90">{card.content}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Final Section */}
      <div className="h-screen flex items-center justify-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let's Create Something Amazing
        </motion.h2>
      </div>
    </div>
  );
};

export default ParallaxCards; 