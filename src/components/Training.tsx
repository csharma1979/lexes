import React from 'react';
import { Link } from 'react-router-dom';
import { trainingCourses } from '../data/training';
import Button from './common/Button';

// Separate component for the training content without banner
export const TrainingContent = () => {
  const itCourses = trainingCourses.filter(course => course.category === 'it');
  const bfsiCourses = trainingCourses.filter(course => course.category === 'bfsi');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Training Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Enhance your skills with our specialized training courses
          </p>
        </div>

        {/* IT Training Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">IT Training</h3>
            <Link to="/training/it">
              <Button>View All IT Courses</Button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {itCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {course.duration}</span>
                    <span>Level: {course.level}</span>
                  </div>
                  <Link to={`/training/course/${course.id}`}>
                    <Button fullWidth>Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BFSI Training Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">BFSI Training</h3>
            <Link to="/training/bfsi">
              <Button>View All BFSI Courses</Button>
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-8" style={{ width: 'max-content' }}>
                {bfsiCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    style={{ width: '320px' }}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <span>Duration: {course.duration}</span>
                        <span>Level: {course.level}</span>
                      </div>
                      <Link to={`/training/course/${course.id}`}>
                        <Button fullWidth>Learn More</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContent;