import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Shield,
} from "lucide-react";

const certifications = [
  {
    name: "Scrum",
    issuer: "GoodHabitz",
    date: "2025",
    url: "https://drive.google.com/file/d/19MoG_-oAYm4ZXrr5pp5BS5iJu9JeZGOj/view?usp=sharing",
  },
  {
    name: "Learn JavaScript",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert2uNjfKA221GegjHto1zg7T36f1XnNzYacEQ",
  },
  {
    name: "Introduction to ES6+",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert2uNjfKA221GegjHto1zg6xGitq9CnuCacAf",
  },
  {
    name: "Learn React",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert2uNjfKA221GegjHto1zg3EXugVDrtDARiCg",
  },
  {
    name: "Learn React Router 6",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert2uNjfKA221GegjHto1zfqaZ6HH5Fa3iPvsZ",
  },
  {
    name: "Learn Tailwind CSS",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert24zAwJ78oVSC5LMfZdjWAqqGrWzB33uhN4Skk",
  },
  {
    name: "Learn Bootstrap",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert2uNjfKA221GegjHto1zg5iMnVPAkpfrvTsa",
  },
  {
    name: "Deploying with Netlify",
    issuer: "Scrimba",
    date: "2024",
    url: "https://scrimba.com/certificate-cert24zAwJ78oVSC5LMfZdjWAqr215dScvHqNUsQh",
  },
];

export default function Certification() {
  return (
    <section className="text-white py-20" id="certification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block mb-4"
          >
            <Award className="w-16 h-16 text-yellow-500" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">
            Professional Certifications
          </h2>
          <motion.div
            className="w-20 h-1 bg-white/20 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left">Certification</th>
                  <th className="py-4 px-6 text-left">Issuer</th>
                  <th className="py-4 px-6 text-center">Date</th>
                  <th className="py-4 px-6 text-center">Verify</th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((cert, index) => (
                  <motion.tr
                    key={cert.credentialId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-yellow-500" />
                        <span className="font-medium">{cert.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {cert.issuer}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Verify</span>
                      </motion.a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white/5 rounded-xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center mb-6"
          >
            <CheckCircle2 className="w-12 h-12 text-gray-400" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Committed to staying at the forefront of technology through
            professional certifications and continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
