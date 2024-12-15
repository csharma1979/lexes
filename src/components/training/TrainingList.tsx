import React from 'react';
import TrainingCard from './TrainingCard';
import type { TrainingCourse } from '../../data/training';

interface TrainingListProps {
  courses: TrainingCourse[];
}

const TrainingList: React.FC<TrainingListProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <TrainingCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default TrainingList;