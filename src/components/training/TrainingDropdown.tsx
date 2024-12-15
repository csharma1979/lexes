import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { trainingCourses } from '../../data/training';
import type { TrainingCourse } from '../../types/training';

const TrainingDropdown: React.FC = () => {
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

  const coursesByCategory = {
    it: trainingCourses.filter(course => course.category === 'it'),
    bfsi: trainingCourses.filter(course => course.category === 'bfsi')
  };

  const renderCourseList = (courses: TrainingCourse[], category: string) => (
    <>
      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
        {category === 'it' ? 'IT Training' : 'BFSI Training'}
      </div>
      {courses.map((course) => (
        <Link
          key={course.id}
          to={`/training/course/${course.id}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#056daa]"
          onClick={() => setIsOpen(false)}
        >
          {course.title}
        </Link>
      ))}
    </>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-[#056daa] px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Training
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {renderCourseList(coursesByCategory.it, 'it')}
            {renderCourseList(coursesByCategory.bfsi, 'bfsi')}

            <div className="border-t border-gray-100 mt-2">
              <Link
                to="/training/it"
                className="block px-4 py-2 text-sm font-medium text-[#056daa] hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                View All IT Courses
              </Link>
              <Link
                to="/training/bfsi"
                className="block px-4 py-2 text-sm font-medium text-[#056daa] hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                View All BFSI Courses
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingDropdown;