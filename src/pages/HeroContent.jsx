import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImg from "../assets/Profile_Picture.jpeg";

function HeroContent() {
  return (
    <div className="min-h-screen bg-[#0e1425] text-white flex items-center justify-center">
    <div className="container mx-auto px-4 py-16 relative ">
      <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center animate-fade-in-left">
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/20 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute -inset-4 rounded-full border border-white/10 animate-spin-slow"></div>
            <div className="absolute -inset-8 rounded-full border border-white/5 animate-reverse-spin"></div>
            <img
                src={profileImg}
              alt="Profile"
              className="absolute inset-2 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white/50 shadow-2xl shadow-white/10"
            />
          </div>
        </div>

         {/* Content Section */}
                  <div className="w-full md:w-1/2 space-y-8 text-center md:text-left animate-fade-in-right">
                    <div className="space-y-4">
                      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I'm{" "}
                        <span className="text-white relative inline-block">
                          Khush Bakht Naveed
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                      </h2>
                      <h3 className="text-2xl md:text-3xl text-gray-400 font-light tracking-wider">
                        Full Stack Developer | Frontend Developer | QA
                      </h3>
                    </div>
        
                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                      Detail-oriented Full Stack Web Developer specializing in Frontend Engineering with a passion for crafting dynamic, user-friendly web experiences. Proficient in JavaScript, React, and Node.js. I bring a blend of development skills and QA expertise, enabling me to create dynamic, user-friendly, and scalable web applications. A dedicated problem-solver and resourceful{" "}
                      <span className="text-2xl font-bold">Googler</span>.
                    </p>
        
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {["MERN", "JavaScript", "Bootstrap", "Tailwind", "QA"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
        
                    {/* Social Links */}
                    <div className="flex gap-6 justify-center md:justify-start">
                      <a href="khushnaveed" target="_blank" className="group">
                        <Github className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </a>
                      <a
                        href="https://github.com/khushnaveed"
                        target="_blank"
                        className="group"
                      >
                        <Linkedin className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </a>
                      <a href="mailto:khushbakht541@gmail.com" className="group">
                        <Mail className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
        
                {/* Scroll Indicator */}
                <div className="absolute bottom left-1/2 transform -translate-x-1/2 animate-bounce mt-20 hidden md:block">
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
    </div>
  </div>
  );
}

export default HeroContent;
