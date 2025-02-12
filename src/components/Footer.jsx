import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1425] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:khushbakht541@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  khushbakht541@gmail.com
                </a>
              </li>
              {/* <li>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Experiences
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/khushnaveed"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/khush-bakht-nav/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 flex items-center justify-center gap-1">
            Khush Bakht Naveed Web Devlopement Portfolio created with Vite React
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
