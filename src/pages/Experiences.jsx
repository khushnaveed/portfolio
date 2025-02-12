import React, { useState } from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: "Web Developer Tutor",
    company: "Digital Career Institute (DCI)",
    period: "2024 - Present",
    description: "Assist students in mastering core web development technologies. Guiding them by troubleshooting technical challenges, deepening their understanding of course material, and oﬀering comprehensive recaps of their assignments. Encourage problem-solving skills and critical thinking by mentoring students through complex projects",
    technologies: ["MERN"],
    achievements: [
      "Enhanced student project efficiency, reducing debugging time by 40% through targeted mentoring.",
      "Led coding workshops for a team of 7 students, fostering collaboration and hands-on learning.",
      "Provided learning resources to students for coding."
    ]
  },
  {
    title: "Software Quality Assurance Engineer",
    company: "Anaconda, Inc",
    period: "2019 - 2023",
    description: "Improved installation processes and minimized potential glitches through comprehensive black box testing while optimizing test cases for better efficiency. Conducted thorough API testing, managed Kubernetes clusters, and ensured precise bug tracking and resolution using Jira, along with maintaining detailed documentation and driving process improvements.",
    technologies: ["Black Box Testing","Functional Testing", "Testcase Writing", "JIRA", "Kubernetes",  "API/CLI Testing", "Swagger", "Postman"],
    achievements: [
      "Executed 50+ end-to-end testing cycles across client projects, ensuring high-quality software releases.",
      "Optimized test execution time by 50% by refining test cases.",
      "Identified and meticulously reported 100+ UI, functional, and non-functional bugs in JIRA, ensuring clear documentation for timely resolution."
    ]
  }
];

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const achievementsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-[#0e1425] text-white py-20" id="experiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <motion.div 
                  className="absolute left-8 top-16 bottom-0 w-0.5 bg-white/10"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors duration-300">
                    <Briefcase className="w-8 h-8 text-gray-400" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">View Achievements</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={achievementsVariants}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="space-y-2 pl-4 border-l-2 border-white/10">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              className="text-gray-300"
                            >
                              • {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}