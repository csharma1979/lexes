// Centralized services data
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'Custom AI solutions to automate processes and enhance decision-making.',
    fullDescription: [
      'Transform your business with cutting-edge artificial intelligence solutions tailored to your specific needs.',
      'Our AI solutions help businesses automate complex processes, gain valuable insights from data, and make better decisions faster.',
      'We combine the latest AI technologies with industry best practices to deliver solutions that drive real business value.'
    ],
    icon: 'Brain',
    features: [
      'Custom AI Model Development',
      'Natural Language Processing',
      'Predictive Analytics',
      'AI Process Automation',
      'Intelligent Decision Support Systems'
    ],
    benefits: [
      'Increased Operational Efficiency',
      'Enhanced Decision Making',
      'Reduced Costs',
      'Improved Customer Experience',
      'Competitive Advantage'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920&h=600'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    shortDescription: 'Advanced ML models for predictive analytics and pattern recognition.',
    fullDescription: [
      'Leverage the power of machine learning to unlock insights from your data and drive business growth.',
      'Our machine learning solutions help organizations identify patterns, predict trends, and make data-driven decisions.',
      'We develop custom ML models that learn and improve from experience to solve complex business problems.'
    ],
    icon: 'Database',
    features: [
      'Supervised Learning Models',
      'Unsupervised Learning',
      'Deep Learning Solutions',
      'Model Training & Optimization',
      'ML Pipeline Development'
    ],
    benefits: [
      'Accurate Predictions',
      'Pattern Recognition',
      'Automated Learning',
      'Scalable Solutions',
      'Data-Driven Insights'
    ],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1920&h=600'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    shortDescription: 'Intelligent image and video analysis for various applications.',
    fullDescription: [
      'Empower your applications with advanced computer vision capabilities to understand and analyze visual information.',
      'Our computer vision solutions enable machines to interpret and understand visual data from the world.',
      'We develop sophisticated systems for image recognition, object detection, and visual data analysis.'
    ],
    icon: 'Cpu',
    features: [
      'Image Recognition',
      'Object Detection',
      'Facial Recognition',
      'Video Analytics',
      'Visual Search'
    ],
    benefits: [
      'Automated Visual Inspection',
      'Enhanced Security',
      'Quality Control',
      'Real-time Monitoring',
      'Visual Data Insights'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920&h=600'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    shortDescription: 'Transform raw data into actionable business insights.',
    fullDescription: [
      'Turn your data into actionable insights with our comprehensive data analytics solutions.',
      'We help organizations collect, process, and analyze data to make informed business decisions.',
      'Our data analytics services provide clear insights that drive strategic planning and business growth.'
    ],
    icon: 'BarChart',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Statistical Analysis',
      'Real-time Analytics',
      'Custom Dashboards'
    ],
    benefits: [
      'Better Decision Making',
      'Performance Optimization',
      'Risk Management',
      'Revenue Growth',
      'Market Understanding'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920&h=600'
  }
];