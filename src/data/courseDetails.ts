import { CourseDetails } from '../types/course';

const courseDetails: Record<string, CourseDetails> = {
  'ml-fundamentals': {
    id: 'ml-fundamentals',
    title: 'Machine Learning Fundamentals',
    description: 'Master the fundamentals of Machine Learning and build a strong foundation in AI. This comprehensive course covers everything from basic statistics to advanced ML algorithms.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'Comprehensive coverage of ML algorithms',
      'Hands-on projects with real-world datasets',
      'Industry-standard tools and frameworks',
      'Personalized mentoring sessions',
      'Interview preparation support'
    ],
    curriculum: [
      {
        title: 'Module 1: Introduction to Machine Learning',
        topics: [
          'Understanding ML concepts and types',
          'Statistical foundations for ML',
          'Data preprocessing and exploration',
          'Feature engineering techniques'
        ]
      },
      {
        title: 'Module 2: Supervised Learning',
        topics: [
          'Linear and Logistic Regression',
          'Decision Trees and Random Forests',
          'Support Vector Machines',
          'K-Nearest Neighbors'
        ]
      },
      {
        title: 'Module 3: Unsupervised Learning',
        topics: [
          'Clustering algorithms',
          'Dimensionality reduction',
          'Principal Component Analysis',
          'Association Rule Learning'
        ]
      },
      {
        title: 'Module 4: Model Evaluation',
        topics: [
          'Cross-validation techniques',
          'Performance metrics',
          'Model selection and tuning',
          'Bias-variance tradeoff'
        ]
      }
    ],
    benefits: [
      'Industry-recognized certification',
      'Real-world project portfolio',
      'Networking opportunities',
      'Lifetime access to course materials',
      'Job placement assistance'
    ],
    careerOpportunities: [
      'Machine Learning Engineer',
      'Data Scientist',
      'AI Research Associate',
      'Business Intelligence Analyst',
      'ML Operations Engineer'
    ]
  },
  'deep-learning': {
    id: 'deep-learning',
    title: 'Deep Learning Specialization',
    description: 'Dive deep into neural networks and advanced deep learning concepts. Learn to build and deploy sophisticated AI models using modern frameworks.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'Advanced neural network architectures',
      'GPU-accelerated training',
      'Industry project implementation',
      'Research paper discussions',
      'Cloud deployment training'
    ],
    curriculum: [
      {
        title: 'Module 1: Neural Networks Fundamentals',
        topics: [
          'Neural network architecture',
          'Activation functions',
          'Backpropagation',
          'Optimization algorithms'
        ]
      },
      {
        title: 'Module 2: Convolutional Neural Networks',
        topics: [
          'CNN architectures',
          'Image recognition',
          'Object detection',
          'Transfer learning'
        ]
      },
      {
        title: 'Module 3: Sequence Models',
        topics: [
          'RNNs and LSTM',
          'Natural Language Processing',
          'Attention mechanisms',
          'Transformer architecture'
        ]
      },
      {
        title: 'Module 4: Advanced Topics',
        topics: [
          'GANs and Autoencoders',
          'Reinforcement Learning',
          'Model deployment',
          'Best practices and optimization'
        ]
      }
    ],
    benefits: [
      'Advanced certification',
      'Research paper understanding',
      'Industry expert sessions',
      'Cloud credits for projects',
      'Interview preparation'
    ],
    careerOpportunities: [
      'Deep Learning Engineer',
      'Computer Vision Engineer',
      'NLP Specialist',
      'AI Research Scientist',
      'Technical Lead - AI'
    ]
  },
  'computer-vision': {
    id: 'computer-vision',
    title: 'Computer Vision with PyTorch',
    description: 'Master computer vision techniques using PyTorch. Learn to build and deploy vision-based AI solutions for real-world applications.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'PyTorch framework mastery',
      'Advanced CV algorithms',
      'Real-time processing',
      'Edge deployment',
      'Industry projects'
    ],
    curriculum: [
      {
        title: 'Module 1: PyTorch Fundamentals',
        topics: [
          'PyTorch basics',
          'Tensors and computations',
          'Neural network basics',
          'GPU acceleration'
        ]
      },
      {
        title: 'Module 2: Image Processing',
        topics: [
          'Image manipulation',
          'Filters and transformations',
          'Feature extraction',
          'Image augmentation'
        ]
      },
      {
        title: 'Module 3: Deep Learning for CV',
        topics: [
          'CNN architectures',
          'Transfer learning',
          'Object detection',
          'Semantic segmentation'
        ]
      },
      {
        title: 'Module 4: Advanced Applications',
        topics: [
          'Face recognition',
          'Video analysis',
          'Real-time processing',
          'Mobile deployment'
        ]
      }
    ],
    benefits: [
      'PyTorch certification',
      'Industry project portfolio',
      'Hardware acceleration knowledge',
      'Edge computing expertise',
      'Placement support'
    ],
    careerOpportunities: [
      'Computer Vision Engineer',
      'AI Solutions Architect',
      'Robotics Engineer',
      'Research Scientist',
      'Technical Lead - CV'
    ]
  },
  'banking': {
    id: 'banking',
    title: 'Banking',
    description: 'Comprehensive training in modern banking operations, digital banking, and financial services. Master the core concepts and practices of the banking sector.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'Core banking operations',
      'Digital banking systems',
      'Risk management',
      'Regulatory compliance',
      'Customer service excellence'
    ],
    curriculum: [
      {
        title: 'Module 1: Banking Fundamentals',
        topics: [
          'Introduction to banking system',
          'Types of banks and accounts',
          'Banking products and services',
          'KYC and documentation'
        ]
      },
      {
        title: 'Module 2: Digital Banking',
        topics: [
          'Online banking platforms',
          'Mobile banking solutions',
          'Payment systems',
          'Digital security'
        ]
      },
      {
        title: 'Module 3: Risk and Compliance',
        topics: [
          'Risk assessment',
          'Banking regulations',
          'Anti-money laundering',
          'Fraud prevention'
        ]
      },
      {
        title: 'Module 4: Customer Relations',
        topics: [
          'Customer service skills',
          'Relationship management',
          'Sales techniques',
          'Complaint handling'
        ]
      }
    ],
    benefits: [
      'Industry certification',
      'Practical training',
      'Real banking software exposure',
      'Placement assistance',
      'Expert mentorship'
    ],
    careerOpportunities: [
      'Bank Officer',
      'Relationship Manager',
      'Credit Analyst',
      'Risk Manager',
      'Banking Operations Specialist'
    ]
  },
  'insurance': {
    id: 'insurance',
    title: 'Insurance',
    description: 'Master insurance operations, policy management, and risk assessment. Learn both life and non-life insurance sectors.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'Insurance fundamentals',
      'Policy administration',
      'Claims processing',
      'Risk assessment',
      'Regulatory compliance'
    ],
    curriculum: [
      {
        title: 'Module 1: Insurance Basics',
        topics: [
          'Types of insurance',
          'Insurance principles',
          'Policy components',
          'Insurance markets'
        ]
      },
      {
        title: 'Module 2: Policy Management',
        topics: [
          'Policy issuance',
          'Premium calculation',
          'Policy renewals',
          'Documentation'
        ]
      },
      {
        title: 'Module 3: Claims Processing',
        topics: [
          'Claims procedures',
          'Assessment techniques',
          'Settlement process',
          'Fraud detection'
        ]
      },
      {
        title: 'Module 4: Customer Service',
        topics: [
          'Client communication',
          'Needs analysis',
          'Policy explanation',
          'Complaint resolution'
        ]
      }
    ],
    benefits: [
      'Industry certification',
      'Practical case studies',
      'Insurance software training',
      'Placement support',
      'Expert guidance'
    ],
    careerOpportunities: [
      'Insurance Agent',
      'Claims Manager',
      'Underwriter',
      'Risk Analyst',
      'Policy Administrator'
    ]
  },
  'hr-management': {
    id: 'hr-management',
    title: 'HR Management',
    description: 'Comprehensive training in modern HR practices, talent management, and organizational development.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'HR fundamentals',
      'Talent acquisition',
      'Performance management',
      'Employee relations',
      'HR analytics'
    ],
    curriculum: [
      {
        title: 'Module 1: HR Fundamentals',
        topics: [
          'HR roles and responsibilities',
          'HR policies and procedures',
          'Employment law',
          'HR documentation'
        ]
      },
      {
        title: 'Module 2: Talent Management',
        topics: [
          'Recruitment strategies',
          'Selection processes',
          'Training and development',
          'Succession planning'
        ]
      },
      {
        title: 'Module 3: Employee Relations',
        topics: [
          'Performance management',
          'Conflict resolution',
          'Employee engagement',
          'Benefits administration'
        ]
      },
      {
        title: 'Module 4: HR Analytics',
        topics: [
          'HR metrics',
          'Data analysis',
          'Reporting techniques',
          'Decision making'
        ]
      }
    ],
    benefits: [
      'Industry certification',
      'Practical case studies',
      'HR software training',
      'Placement assistance',
      'Expert mentorship'
    ],
    careerOpportunities: [
      'HR Manager',
      'Talent Acquisition Specialist',
      'Training Coordinator',
      'Employee Relations Manager',
      'HR Analytics Specialist'
    ]
  },
  'supply-chain': {
    id: 'supply-chain',
    title: 'Supply Chain Management',
    description: 'Master modern supply chain operations, logistics, and inventory management techniques.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920&h=600',
    highlights: [
      'Supply chain fundamentals',
      'Logistics management',
      'Inventory control',
      'Process optimization',
      'Digital transformation'
    ],
    curriculum: [
      {
        title: 'Module 1: SCM Basics',
        topics: [
          'Supply chain concepts',
          'Planning and forecasting',
          'Procurement processes',
          'Inventory management'
        ]
      },
      {
        title: 'Module 2: Logistics',
        topics: [
          'Transportation management',
          'Warehouse operations',
          'Distribution networks',
          'Last-mile delivery'
        ]
      },
      {
        title: 'Module 3: Operations',
        topics: [
          'Process optimization',
          'Quality control',
          'Cost management',
          'Risk mitigation'
        ]
      },
      {
        title: 'Module 4: Digital SCM',
        topics: [
          'SCM software systems',
          'Analytics and reporting',
          'Automation tools',
          'Industry 4.0'
        ]
      }
    ],
    benefits: [
      'Industry certification',
      'Practical training',
      'SCM software exposure',
      'Placement assistance',
      'Expert guidance'
    ],
    careerOpportunities: [
      'Supply Chain Manager',
      'Logistics Coordinator',
      'Procurement Specialist',
      'Operations Manager',
      'SCM Consultant'
    ]
  }
};

export { courseDetails };