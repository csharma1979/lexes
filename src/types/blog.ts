export type BlogCategory = 
  | 'ai-solutions'
  | 'machine-learning'
  | 'computer-vision'
  | 'data-analytics'
  | 'it-training'
  | 'bfsi-training';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: BlogCategory;
  tags: string[];
}

export interface BlogCategoryInfo {
  id: BlogCategory;
  title: string;
  description: string;
}