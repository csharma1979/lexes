import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Github, Instagram } from 'lucide-react';
import { services } from '../data/services';
import { trainingCourses } from '../data/training';

const Footer: React.FC = () => {
  const itCourses = trainingCourses.filter(course => course.category === 'it');
  const bfsiCourses = trainingCourses.filter(course => course.category === 'bfsi');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-[#056daa]" />
              <span className="ml-2 text-xl font-bold">Lexes Technologies</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses with cutting-edge AI and ML solutions.
            </p>
          </div>

          {/* Services and Others */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link 
                      to={`/services/${service.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Others</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/placement"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Placement
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Training Programs</h3>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">IT Training</h4>
              <ul className="space-y-2">
                {itCourses.map((course) => (
                  <li key={course.id}>
                    <Link 
                      to={`/training/course/${course.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">BFSI Training</h4>
              <ul className="space-y-2">
                {bfsiCourses.map((course) => (
                  <li key={course.id}>
                    <Link 
                      to={`/training/course/${course.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#056daa]" />
                <a href="mailto:support@lexes.in" className="text-gray-400 hover:text-white">
                  support@lexes.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#056daa]" />
                <span className="text-gray-400">+91 80 2069 1010</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#056daa] mt-1" />
                <span className="text-gray-400">
                  8, CMH Road, Indiranagar,<br />
                  Bengaluru, Karnataka 560 038
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#056daa] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#056daa] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#056daa] transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#056daa] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Lexes Technologies. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Powered by:{' '}
              <a 
                href="https://fritado.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#056daa] hover:text-blue-400 transition-colors"
              >
                Fritado Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;