import React from 'react';
import { useParams } from 'react-router-dom';
import { trainingCourses } from '../../data/training';
import PageBanner from '../PageBanner';
import TrainingList from './TrainingList';

const TrainingPage = () => {
  const { category } = useParams<{ category: string }>();
  const courses = trainingCourses.filter(
    course => course.category === (category === 'it' ? 'it' : 'bfsi')
  );

  const pageTitle = category === 'it' ? 'IT Training Programs' : 'BFSI Training Programs';
  const pageSubtitle = category === 'it' 
    ? 'Advanced technical training in AI, ML, and Computer Vision' 
    : 'Professional training in Banking, Insurance, and Supply Chain Management';

  return (
    <div>
      <PageBanner
        title={pageTitle}
        subtitle={pageSubtitle}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920&h=600"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              {pageTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category === 'it' 
                ? 'Enhance your technical skills with our comprehensive IT training programs designed for modern technology professionals.'
                : 'Build your career in banking, financial services, and insurance sectors with our specialized BFSI training programs.'}
            </p>
          </div>

          <TrainingList courses={courses} />
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;