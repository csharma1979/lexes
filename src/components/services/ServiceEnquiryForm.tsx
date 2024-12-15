import React, { useState } from 'react';

interface ServiceEnquiryFormProps {
  serviceName: string;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const ServiceEnquiryForm: React.FC<ServiceEnquiryFormProps> = ({ serviceName }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: `I'm interested in ${serviceName} services.`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service enquiry submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: `I'm interested in ${serviceName} services.`,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Interested in {serviceName}?
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Fill out the form below and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#056daa] focus:border-[#056daa]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#056daa] focus:border-[#056daa]"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#056daa] focus:border-[#056daa]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#056daa] focus:border-[#056daa]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#056daa] text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default ServiceEnquiryForm;