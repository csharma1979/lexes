export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  curriculum: CurriculumModule[];
  benefits: string[];
  careerOpportunities: string[];
}