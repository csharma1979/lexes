import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../common/Button';

interface RegistrationFormData {
  instituteName: string;
  fullName: string;
  email: string;
  phone: string;
  program: string;
  passingYear: string;
  preferredDomains: string[];
  preferredCourse: string;
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const domains = [
  'Banking',
  'Insurance',
  'HR',
  'Supply Chain Management',
  'IT & ITeS',
  'AI / ML'
];

const courses = [
  {
    id: 'career-next',
    title: 'Career Next',
    description: '5 days in-person training + 8-weeks internship',
    highlights: [
      'Core subject knowledge from industry leaders',
      '8 weeks internship with reputed companies',
    ],
    fee: 2000
  },
  {
    id: 'career-beyond',
    title: 'Career and Beyond',
    description: '15 days training + 8-weeks internship + job assistance',
    highlights: [
      '15 days of in-person training',
      '8 weeks internship with reputed companies',
      'Job assistance post course completion',
      'Resume review and update support',
      'Mock interviews for preparation'
    ],
    fee: 30000
  }
];

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    instituteName: '',
    fullName: '',
    email: '',
    phone: '',
    program: '',
    passingYear: '',
    preferredDomains: [],
    preferredCourse: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate sending an email
      console.log('Sending registration data:', formData);
      
      // Show thank you message
      setShowThankYou(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          instituteName: '',
          fullName: '',
          email: '',
          phone: '',
          program: '',
          passingYear: '',
          preferredDomains: [],
          preferredCourse: ''
        });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDomainChange = (domain: string) => {
    setFormData(prev => ({
      ...prev,
      preferredDomains: prev.preferredDomains.includes(domain)
        ? prev.preferredDomains.filter(d => d !== domain)
        : [...prev.preferredDomains, domain]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Registration Form</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          {showThankYou ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
              <p className="text-gray-600">
                Thank you for sharing your details! Our team will get in touch with you soon regarding courses
                and internships that align with your interests and goals.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Institute Name</label>
                  <input
                    type="text"
                    required
                    value={formData.instituteName}
                    onChange={e => setFormData(prev => ({ ...prev, instituteName: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#056daa] focus:ring-[#056daa]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#056daa] focus:ring-[#056daa]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#056daa] focus:ring-[#056daa]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#056daa] focus:ring-[#056daa]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Program</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., MBA, BBA, B.Tech"
                    value={formData.program}
                    onChange={e => setFormData(prev => ({ ...prev, program: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#056daa] focus:ring-[#056daa]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Passing Year</label>
                  <input
                    type="text"
                    required
                    placeholder="Month & Year"
                    value={formData.passingYear}
                    onChange={e => setFormData(prev => ({ ...prev, passingYear: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#056daa] focus:ring-[#056daa]"
                  />
                </div>
              </div>

              {/* Preferred Domain */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Domain</h3>
                <div className="grid grid-cols-2 gap-4">
                  {domains.map(domain => (
                    <label key={domain} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.preferredDomains.includes(domain)}
                        onChange={() => handleDomainChange(domain)}
                        className="h-4 w-4 text-[#056daa] focus:ring-[#056daa] border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{domain}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Course</h3>
                <div className="space-y-4">
                  {courses.map(course => (
                    <label key={course.id} className="block">
                      <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <input
                          type="radio"
                          name="course"
                          value={course.id}
                          checked={formData.preferredCourse === course.id}
                          onChange={e => setFormData(prev => ({ ...prev, preferredCourse: e.target.value }))}
                          className="mt-1 h-4 w-4 text-[#056daa] focus:ring-[#056daa] border-gray-300"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-900">{course.title}</span>
                            <span className="text-[#056daa] font-medium">₹{course.fee.toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                          <ul className="mt-2 space-y-1">
                            {course.highlights.map((highlight, index) => (
                              <li key={index} className="text-sm text-gray-600">• {highlight}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" fullWidth>
                Submit Registration
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;