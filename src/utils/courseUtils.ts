import { courseDetails } from '../data/courseDetails';
import type { CourseDetails } from '../types/course';

export const getCourseDetails = (courseId: string | undefined): CourseDetails | undefined => {
  if (!courseId) return undefined;
  return courseDetails[courseId];
};