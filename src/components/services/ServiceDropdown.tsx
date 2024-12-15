import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { services } from '../../data/services';

const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-[#056daa] px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Services
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#056daa]"
                onClick={() => setIsOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDropdown;