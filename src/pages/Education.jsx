import React from "react";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Full Stack Web Development Course",
    school: "Digital Career Institute",
    period: "2024 - 2025",
    courses: [
      "MERN",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "Git and Github",
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Information Technology University",
    period: "2015 - 2019",
    Courses: [
      "4.0 GPA",
      "Published 2 research papers",
      "Teaching Assistant for Advanced Algorithms",
    ],
    courses: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Web Development",
      "Software Testing",
      "Object Oriented Programming",
    ],
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-[#0e1425] text-white py-20" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              cvariants={cardVariants}
              className="bg-white/5 rounded-xl p-6 relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.school}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">{edu.description}</p>

                {/* Key Courses */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
