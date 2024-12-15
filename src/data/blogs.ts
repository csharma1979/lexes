import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  // AI Solutions
  {
    id: 'enterprise-ai-transformation',
    title: 'Enterprise AI Transformation: A Strategic Approach',
    excerpt: 'How enterprises can successfully implement AI solutions for digital transformation.',
    content: [
      'Digital transformation through AI requires a strategic approach that considers both technical and organizational factors.',
      'The first step is assessing your organization\'s AI readiness and identifying high-impact use cases.',
      'Building a strong data infrastructure and ensuring data quality are crucial for successful AI implementation.',
      'Change management and employee training play vital roles in AI adoption.',
      'Measuring ROI and scaling successful AI initiatives across the organization are key to long-term success.'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'ai-solutions',
    tags: ['AI', 'Digital Transformation', 'Enterprise']
  },
  {
    id: 'ai-automation-benefits',
    title: 'Maximizing Business Value Through AI Automation',
    excerpt: 'Exploring the benefits and implementation strategies of AI-powered automation.',
    content: [
      'AI automation is revolutionizing how businesses operate, from customer service to back-office operations.',
      'Intelligent process automation combines RPA with AI to handle complex, judgment-based processes.',
      'Natural Language Processing enables sophisticated customer interactions through chatbots and virtual assistants.',
      'Computer vision automation is transforming quality control and surveillance systems.',
      'Successful automation requires careful process selection and employee upskilling.'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'ai-solutions',
    tags: ['Automation', 'AI', 'Business Innovation']
  },

  // Machine Learning
  {
    id: 'ml-production-best-practices',
    title: 'MLOps: Best Practices for Production ML Systems',
    excerpt: 'Essential practices for deploying and maintaining ML systems in production.',
    content: [
      'MLOps combines ML systems development and operations to create reliable and scalable ML systems.',
      'Automated testing and continuous integration are crucial for maintaining model quality.',
      'Model monitoring and retraining strategies help prevent model drift and maintain performance.',
      'Version control for both code and data ensures reproducibility and traceability.',
      'Proper documentation and team collaboration are essential for long-term success.'
    ],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'machine-learning',
    tags: ['MLOps', 'Machine Learning', 'DevOps']
  },
  {
    id: 'ml-model-optimization',
    title: 'Advanced Model Optimization Techniques',
    excerpt: 'Strategies for improving ML model performance and efficiency.',
    content: [
      'Model optimization is crucial for both performance and resource efficiency.',
      'Techniques like pruning and quantization can significantly reduce model size.',
      'Hyperparameter optimization helps achieve optimal model performance.',
      'Transfer learning can reduce training time and improve model accuracy.',
      'Hardware-specific optimizations can enhance inference speed.'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'machine-learning',
    tags: ['Model Optimization', 'Performance', 'Machine Learning']
  },

  // Computer Vision
  {
    id: 'real-time-cv-applications',
    title: 'Real-time Computer Vision Applications',
    excerpt: 'Implementation strategies for real-time computer vision systems.',
    content: [
      'Real-time computer vision requires careful consideration of hardware and software optimization.',
      'Edge computing plays a crucial role in reducing latency for real-time applications.',
      'Modern architectures like YOLO and SSD enable fast object detection.',
      'Hardware acceleration through GPUs and specialized processors is often necessary.',
      'Balancing accuracy and speed is crucial for practical applications.'
    ],
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'computer-vision',
    tags: ['Computer Vision', 'Real-time', 'Edge Computing']
  },
  {
    id: 'industrial-cv-applications',
    title: 'Computer Vision in Industrial Applications',
    excerpt: 'How computer vision is transforming industrial processes and quality control.',
    content: [
      'Industrial computer vision systems are revolutionizing manufacturing and quality control.',
      'Automated visual inspection systems can detect defects with high accuracy.',
      'Integration with robotics enables sophisticated automation systems.',
      'Deep learning models can adapt to new product variations.',
      'ROI calculation and implementation strategies for industrial CV systems.'
    ],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'computer-vision',
    tags: ['Industrial', 'Quality Control', 'Computer Vision']
  },

  // Data Analytics
  {
    id: 'predictive-analytics-guide',
    title: 'Implementing Predictive Analytics',
    excerpt: 'A comprehensive guide to implementing predictive analytics in business.',
    content: [
      'Predictive analytics helps organizations make data-driven decisions about future events.',
      'Data preparation and feature engineering are crucial for accurate predictions.',
      'Choosing the right algorithms depends on the specific use case and data characteristics.',
      'Model validation and testing ensure reliable predictions.',
      'Integration with existing business processes is key to success.'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'data-analytics',
    tags: ['Predictive Analytics', 'Business Intelligence', 'Data Science']
  },
  {
    id: 'data-visualization-best-practices',
    title: 'Data Visualization Best Practices',
    excerpt: 'Creating effective data visualizations for business insights.',
    content: [
      'Effective data visualization is crucial for communicating insights to stakeholders.',
      'Choose the right chart types based on the data and message you want to convey.',
      'Color schemes and layout significantly impact visualization effectiveness.',
      'Interactive visualizations can provide deeper insights.',
      'Best practices for creating dashboards and reports.'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'data-analytics',
    tags: ['Data Visualization', 'Analytics', 'Business Intelligence']
  },

  // IT Training
  {
    id: 'ai-career-path',
    title: 'Building a Career in AI and ML',
    excerpt: 'Guide to developing a successful career in AI and Machine Learning.',
    content: [
      'The AI and ML field offers numerous career opportunities with high growth potential.',
      'Essential skills and qualifications needed for different AI/ML roles.',
      'Practical experience and project portfolio development strategies.',
      'Certification paths and continuous learning resources.',
      'Job market trends and salary expectations in AI/ML.'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'it-training',
    tags: ['Career Development', 'AI', 'Machine Learning']
  },
  {
    id: 'learning-path-guide',
    title: 'Structured Learning Path for IT Professionals',
    excerpt: 'How to plan your IT learning journey effectively.',
    content: [
      'A structured learning path is crucial for successful skill development.',
      'Balancing theoretical knowledge with practical experience.',
      'Project-based learning approaches and their benefits.',
      'Time management and study techniques for working professionals.',
      'Resources and tools for self-paced learning.'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'it-training',
    tags: ['Learning', 'Professional Development', 'IT Skills']
  },

  // BFSI Training
  {
    id: 'digital-banking-trends',
    title: 'Digital Banking Transformation',
    excerpt: 'Latest trends and skills needed in digital banking.',
    content: [
      'Digital banking is reshaping the financial services landscape.',
      'Key technologies driving banking transformation.',
      'Skills needed for modern banking professionals.',
      'Customer experience in digital banking.',
      'Security and compliance considerations.'
    ],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'bfsi-training',
    tags: ['Digital Banking', 'FinTech', 'Banking']
  },
  {
    id: 'risk-management-skills',
    title: 'Essential Risk Management Skills',
    excerpt: 'Key skills needed for modern risk management in banking.',
    content: [
      'Risk management is crucial in modern banking operations.',
      'Types of risks and assessment methodologies.',
      'Technology tools in risk management.',
      'Regulatory compliance and reporting.',
      'Career opportunities in risk management.'
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'bfsi-training',
    tags: ['Risk Management', 'Banking', 'Finance']
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentId: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPost(currentId);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.id !== currentId && post.category === currentPost.category)
    .slice(0, limit);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};