import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import PageBanner from './PageBanner';

const Contact = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with us for any queries or support"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920&h=600"
      />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Get in touch with us for any queries or support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>

          <div className="mt-12">
            <iframe
              title="Lexes Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9891000000003!2d77.6358!3d12.9783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQxLjkiTiA3N8KwMzgnMDguOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;