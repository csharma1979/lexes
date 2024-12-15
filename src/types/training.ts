export interface TrainingCategory {
  title: string;
  path: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  duration: string;
  level: string;
  image: string;
  category: 'it' | 'bfsi';
}