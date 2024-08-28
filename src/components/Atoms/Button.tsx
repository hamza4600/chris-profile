import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
}) => {
  
  const baseStyles = 'font-satoshi dark:bg-transparent bg-primary text-[#ffffff] font-medium rounded-full box-shadow-[rgba(47, 43, 67, 0.1)_0px_-1px_0px_0px_inset,_rgba(47, 43, 67, 0.1)_0px_1px_3px_0px]';

  const variantStyles = {
    primary: 'border border-[0.1px] border-solid  border-gray-50 border-opacity-50',
    secondary: 'bg-gray-200 text-gray-800',
    outline: 'bg-transparent border',
  };

  const sizeStyles = {
    small: 'h-[24px] px-3',
    medium: 'px-4 py-2 text-base',
    large: 'h-[48px] px-6',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
