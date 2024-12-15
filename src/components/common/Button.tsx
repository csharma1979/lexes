import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'white';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  variant = 'primary',
}) => {
  const baseStyles = 'py-2 px-4 rounded-md transition-colors duration-300 font-medium';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = {
    primary: 'bg-[#056daa] text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-[#056daa] hover:bg-gray-200',
    white: 'bg-white text-[#056daa] hover:bg-gray-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${widthStyles}
        ${variantStyles[variant]}
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};

export default Button;