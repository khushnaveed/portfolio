import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Users,
  TestTube2,
  CheckCircle2,
  Braces,
  Layers,
  GitBranch,
  Terminal,
  Cpu,
  MessageSquare,
  Brain,
  Clock,
  Target,
  Workflow,
  Bug,
  GitPullRequest,
  Gauge,
  Sparkles,
  ListChecks,
  FlaskConical,
  FlaskRound,
  ClipboardCheck,
  TerminalSquare,
  FileSearch,
} from "lucide-react";

const skillCategories = {
  frontend: [
    {
      name: "React",
      icon: <Code2 />,
      proficiency: 75,
      experience: "1 year",
    },
    {
      name: "JavaScript",
      icon: <Braces />,
      proficiency: 75,
      experience: "5 years",
    },
    {
      name: "CSS/Tailwind",
      icon: <Layers />,
      proficiency: 80,
      experience: "1 years",
    },
    {
      name: "CSS/Bootstrap",
      icon: <Layers />,
      proficiency: 80,
      experience: "1 years",
    },
    {
      name: "Git/GitHub",
      icon: <GitBranch />,
      proficiency: 88,
      experience: "5 years",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <Terminal />,
      proficiency: 75,
      experience: "1 years",
    },
    {
      name: "Express.js",
      icon: <Cpu />,
      proficiency: 70,
      experience: "1 years",
    },
    {
      name: "MongoDB",
      icon: <Database />,
      proficiency: 75,
      experience: "5 years",
    },
    {
      name: "APIs",
      icon: <Workflow />,
      proficiency: 70,
      experience: "1 years",
    },
  ],
  qa: [
    {
      name: "Black Box Testing",
      icon: <FlaskConical />,
      proficiency: 90,
      experience: "4 years",
    },
    {
      name: "Regression Testing",
      icon: <FlaskRound />,
      proficiency: 90,
      experience: "4 years",
    },
    {
      name: "Bug Tracking",
      icon: <Bug />,
      proficiency: 88,
      experience: "4 years",
    },
    {
      name: "Testcase Writing and Execution",
      icon: <ClipboardCheck />,
      proficiency: 90,
      experience: "4 years",
    },
    {
      name: "API/CLI Testing",
      icon: <TerminalSquare />,
      proficiency: 80,
      experience: "4 years",
    },
    {
      name: "Cypress",
      icon: <FlaskConical />,
      proficiency: 75,
      experience: "2 years",
    },
    {
      name: "Postman",
      icon: <FileSearch />,
      proficiency: 75,
      experience: "4 years",
    },
    {
      name: "JIRA",
      icon: <ListChecks />,
      proficiency: 88,
      experience: "4 years",
    },
  ],
  soft: [
    {
      name: "Communication",
      icon: <MessageSquare />,
      proficiency: 95,
      experience: "5 years",
    },
    {
      name: "Problem Solving",
      icon: <Brain />,
      proficiency: 90,
      experience: "5 years",
    },
    {
      name: "Time Management",
      icon: <Clock />,
      proficiency: 90,
      experience: "5 years",
    },
    {
      name: "Leadership",
      icon: <Target />,
      proficiency: 80,
      experience: "2 years",
    },
  ],
};

const categories = [
  { id: "frontend", label: "Frontend", icon: <Code2 /> },
  { id: "backend", label: "Backend", icon: <Database /> },
  { id: "qa", label: "Quality Assurance", icon: <TestTube2 /> },
  { id: "soft", label: "Soft Skills", icon: <Users /> },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className=" text-white py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Table */}
        <motion.div
          layout
          className="bg-white/5 rounded-xl p-6 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left">Skill</th>
                  <th className="py-4 px-6 text-center">Proficiency</th>
                  <th className="py-4 px-6 text-center">Experience</th>
                </tr>
              </thead>
              <AnimatePresence mode="wait">
                <motion.tbody
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {skillCategories[activeCategory].map((skill, index) => (
                    <motion.tr
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400">{skill.icon}</span>
                          {skill.name}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center items-center">
                          <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-gradient-to-r from-white/20 to-white/40"
                            />
                          </div>
                          <span className="ml-3 text-sm text-gray-400">
                            {skill.proficiency}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-400">
                        {skill.experience}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </AnimatePresence>
            </table>
          </div>
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white/5 rounded-xl p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Professional Growth</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously expanding my skill set through hands-on experience,
            staying current with industry trends, and embracing new technologies
            to deliver innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
