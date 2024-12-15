import React, { useState } from 'react';
import Button from './Button';
import RegistrationModal from '../registration/RegistrationModal';

interface EnrollButtonProps {
  variant?: 'primary' | 'secondary' | 'white';
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const EnrollButton: React.FC<EnrollButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children = 'Enroll Now'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="inline-block">
      <Button
        variant={variant}
        fullWidth={fullWidth}
        className={className}
        onClick={() => setIsModalOpen(true)}
      >
        {children}
      </Button>

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default EnrollButton;