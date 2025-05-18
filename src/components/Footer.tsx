
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Portfolio</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              A showcase of my projects, skills, and professional journey as a web developer.
            </p>
            <div className="flex space-x-4">
{/*               <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a> */}
              <a href="https://www.linkedin.com/in/omotola-oyeniyi-410b2693" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
{/*               <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a href="mailto:mediaxtreme1@gmail.com" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-purple-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-purple-300 transition-colors">Projects</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-purple-300 transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Nigeria</li>
              <li>mediaxtreme1@gmail.com</li>
              <li>+234-8065970017</li>
              <li>+234-9071333340</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-800/50 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Thollarkings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
