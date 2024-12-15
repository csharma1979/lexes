import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-[#056daa] mt-1 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Address</h4>
            <p className="text-gray-600">
              Lexes Technologies<br />
              8, CMH Road, Stage 2,<br />
              Hoysala Nagar, Indiranagar,<br />
              Bengaluru, Karnataka 560 038
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Phone className="h-6 w-6 text-[#056daa] mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Phone</h4>
            <a href="tel:+918020691010" className="text-gray-600 hover:text-[#056daa]">
              +91 80 2069 1010
            </a>
          </div>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-6 w-6 text-[#056daa] mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <a href="mailto:support@lexes.in" className="text-gray-600 hover:text-[#056daa]">
              support@lexes.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;