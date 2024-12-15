import React from 'react';
import type { TrainingCourse } from '../../data/training';
import Button from '../common/Button';

interface TrainingCardProps {
  course: TrainingCourse;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {course.title}
        </h3>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-medium">Duration:</span>
            <span className="text-gray-800">{course.duration}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-medium">Level:</span>
            <span className="text-gray-800">{course.level}</span>
          </div>
        </div>
        <Button fullWidth>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default TrainingCard;