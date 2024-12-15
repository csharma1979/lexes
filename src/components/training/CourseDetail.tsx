import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCourseDetails } from '../../utils/courseUtils';
import {
  CareerOpportunities,
  CourseBenefits,
  CourseCurriculum,
  CourseEnrollment,
  CourseHero,
  CourseHighlights,
} from './course';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const courseDetails = getCourseDetails(courseId);

  if (!courseDetails) {
    return <Navigate to="/training" replace />;
  }

  return (
    <div className="bg-gray-50">
      <CourseHero 
        title={courseDetails.title}
        description={courseDetails.description}
        duration="3 months"
        price={50000}
        image={courseDetails.image}
      />
      <CourseHighlights highlights={courseDetails.highlights} />
      <CourseCurriculum modules={courseDetails.curriculum} />
      <CourseBenefits benefits={courseDetails.benefits} />
      <CareerOpportunities opportunities={courseDetails.careerOpportunities} />
      <CourseEnrollment courseName={courseDetails.title} />
    </div>
  );
};

export default CourseDetail;