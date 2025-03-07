import React, { useState, useEffect, useRef } from 'react';
import { Download, ExternalLink, Moon, Sun, Github, Linkedin } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "A revolutionary web application that transforms user experiences",
    link: "https://project1.com",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Project Two",
    description: "An innovative mobile-first solution for modern problems",
    link: "https://project2.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
  },
];

const achievements = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    id: 2,
    title: "Best Innovation Award",
    issuer: "Tech Conference 2023",
    year: "2023"
  },
];

function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useIntersectionObserver();
  const achievementsRef = useIntersectionObserver();
  const resumeRef = useIntersectionObserver();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-brown-600 text-cream-100' : 'bg-cream-100 text-brown-600'}`}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-80 border-b border-brown-200 dark:border-brown-500">
        <nav className="container mx-auto px-8 py-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold hover-float">DG</a>
          <div className="flex items-center gap-8">
            <a href="#projects" className="hover:text-brown-400 transition-colors hover-float">Projects</a>
            <a href="#achievements" className="hover:text-brown-400 transition-colors hover-float">Achievements</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-brown-100 dark:hover:bg-brown-500 transition-colors hover-rotate"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`pt-48 pb-32 px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-brown-400 to-brown-600 dark:from-cream-200 dark:to-cream-400 text-transparent bg-clip-text">
            DAYANA GS
          </h1>
          <p className="text-2xl md:text-3xl text-brown-400 dark:text-cream-300 max-w-3xl mx-auto mb-12 font-light">
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-brown-100 dark:hover:bg-brown-500 transition-colors hover-float">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-brown-100 dark:hover:bg-brown-500 transition-colors hover-float">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-cream-200 dark:bg-brown-500">
        <div ref={projectsRef} className="container mx-auto fade-up">
          <h2 className="text-5xl font-bold mb-20 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {projects.map(project => (
              <div key={project.id} className="group hover-float cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img src={project.image} alt={project.name} className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-600/90 to-transparent p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-cream-100 mb-3">{project.name}</h3>
                    <p className="text-cream-200 mb-6 text-lg">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cream-100 bg-brown-400 px-6 py-3 rounded-lg hover:bg-brown-500 transition-colors w-fit"
                    >
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-32 px-8">
        <div ref={resumeRef} className="container mx-auto text-center fade-up">
          <h2 className="text-5xl font-bold mb-20">Resume</h2>
          <div className="flex justify-center gap-6">
            <button className="inline-flex items-center gap-3 bg-brown-400 text-cream-100 px-8 py-4 rounded-lg hover:bg-brown-500 transition-colors hover-float text-lg">
              View Resume <ExternalLink size={20} />
            </button>
            <button className="inline-flex items-center gap-3 bg-cream-300 dark:bg-brown-400 px-8 py-4 rounded-lg hover:bg-cream-400 dark:hover:bg-brown-500 transition-colors hover-float text-lg">
              Download PDF <Download size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-8 bg-cream-200 dark:bg-brown-500">
        <div ref={achievementsRef} className="container mx-auto fade-up">
          <h2 className="text-5xl font-bold mb-20 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {achievements.map(achievement => (
              <div key={achievement.id} className="p-8 rounded-2xl bg-cream-100 dark:bg-brown-400 shadow-xl hover:shadow-2xl transition-all duration-500 hover-float">
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-brown-400 dark:text-cream-200 text-lg">{achievement.issuer}</p>
                <p className="text-brown-300 dark:text-cream-300">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-brown-200 dark:border-brown-500">
        <div className="container mx-auto text-center text-brown-400 dark:text-cream-300">
          <p className="text-lg">© 2024 DAYANA GS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;