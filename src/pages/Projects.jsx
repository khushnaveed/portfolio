import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Royal Grand Luxury Hotel",
    description:
      "A responsive booking platform for hotel rooms, events, and dining, designed to offer seamless user experience for guests and admins alike. Built with React, Node.js, Express, Tailwind CSS, and MVC architecture.",
    image: "/royalgrandhotel.png",
    technologies: ["Nodejs", "Express Server", "React", "JavaScript", "Tailwind"],
    liveDemo: "https://hotel-booking-mern-stack-e0jk.onrender.com/",
    github: "https://github.com/khushnaveed/Hotel-Booking-mern-stack",
  },
  {
    title: "Multinational Museum",
    description:
      "Group project using react showcasing cultures of 5 diﬀerent countries of the group member.",
    image: "/museumSphere.png",
    technologies: ["React", "JavaScript", "Tailwind"],
    liveDemo: "https://museumsphere.netlify.app/",
    github: "https://github.com/khushnaveed/Multinational-Museum",
  },
  {
    title: "Benny's Burger Landing Page",
    description:
      "A simple dummy landing page of random burger shop using CSS frameork Tailwind.",
    image: "/bennysburger.png",
    technologies: ["TailwindCSS", "HTML"],
    liveDemo: "https://bennysburger.netlify.app/",
    github: "https://github.com/khushnaveed/benny-s-burger-landing-page",
  },
  {
    title: "Speaker Shop Landing Page",
    description:
      "A dummy landing page for a speaker shop using simple CSS and HTML",
    image: "/speakershop.png",
    technologies: ["HTML", "CSS"],
    liveDemo: "https://speakershop.netlify.app/",
    github:
      "https://github.com/khushnaveed/Speaker-shop-landing-page/tree/main",
  },
  {
    title: "Hangman Game",
    description:
      "A terminal-based Hangman game where players choose a category and guess letters to complete a hidden word before running out of attempts.",
    image: "/hangmangame.png",
    technologies: ["Javascript", "Terminal", "Node.js"],
    liveDemo: "/hangmangame.png",
    github:
      "https://github.com/khushnaveed/JavaScript-terminal-based-Projects/tree/main/Hangman%20Game",
  },
  {
    title: "Palindrome Checker",
    description:
      "A terminal-based Palindrome Checker game where users input a word or phrase, and the program determines whether it reads the same forward and backward, ignoring spaces, punctuation, and capitalization.",
    image: "/palindromechecker.png",
    technologies: ["Javascript", "Terminal", "Node.js"],
    liveDemo: "/palindromechecker.png",
    github:
      "https://github.com/khushnaveed/JavaScript-terminal-based-Projects/tree/main/Palindrome%20Checker",
  },
];

export default function Projects() {
  const carouselRef = useRef < HTMLDivElement > null;

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const ProjectLinks = ({ liveDemo, github }) => (
    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
      <motion.a
        href={liveDemo} 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 relative z-20"
      >
        <ExternalLink className="w-6 h-6" />
      </motion.a>
      <motion.a
        href={github} 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 relative z-20"
      >
        <Github className="w-6 h-6" />
      </motion.a>
    </div>
  );

  return (
    <section className=" text-white py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Regular Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">All Projects</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/5 rounded-xl overflow-hidden"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 hidden md:block"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 hidden md:block"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      <Code className="w-3 h-3" />
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <ProjectLinks
                  liveDemo={project.liveDemo}
                  github={project.github}
                />
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
