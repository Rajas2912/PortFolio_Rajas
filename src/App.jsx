import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import MarqueeSection from "./components/MarqueeSection/MarqueeSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ParallaxCards from "./components/StackedCards/StackedCards";
import { useTheme } from "./context/ThemeContext";
import { useInView } from "react-intersection-observer";
import VerticalCardScroll from "./components/Projects/VerticalCardScroll";
import ExperienceSection from './components/Experience/ExperienceSection';
import MarqueeText from "./components/MarqueeSection/MarqueeText";
import HackathonSection from "./components/Hackathons/HackathonSection";
import CertificationsSection from "./components/Certifications/CertificationsSection";
import NewNavbar from './components/Navbar/NewNavbar';
import LoadingPage from './components/LoadingPage/LoadingPage';

function App() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Apply theme class to body for global styles
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : ''}`}>
        <LoadingPage onLoadingComplete={() => setIsLoading(false)} />
        {!isLoading && (
          <>
            <NewNavbar />
            <Routes>
              <Route path="/" element={
                <main>
                  <section id="home">
                    {/* <Header /> */}
                    <Hero />
                  </section>

                  <motion.section
                    id="skills"
                    variants={sectionVariants}
                    className="py-2 md:py-6 bg-black-700 dark:bg-black-900"
                  >
                    <MarqueeSection />
                  </motion.section>

                  <section id="projects">
                    <VerticalCardScroll />
                  </section>

                  <section id="experience">
                    <MarqueeText text="EXPERIENCE" />
                    <ExperienceSection />
                  </section>
                  
                  <section id="hackathons">
                    <MarqueeText text="HACKATHONS" />
                    <HackathonSection />
                  </section>

                  <section id="certifications" style={{marginTop: '8rem'}}>
                    <MarqueeText text="CERTIFICATIONS" />
                    <CertificationsSection />
                  </section>

                  <section id="about">
                    <MarqueeText text="ABOUT ME" />
                    <About />
                  </section>

                  <section id="contact">
                    <MarqueeText text="CONTACT ME" />
                    <Contact />
                  </section>
                </main>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/certifications" element={<CertificationsSection />} />
              <Route path="/projects" element={<VerticalCardScroll />} />
              <Route path="/resume" element={<Hero />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

// Helper component for animated sections
const MotionSection = ({ id, children, variants, className = "section" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className={className}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default App;
