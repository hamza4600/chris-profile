import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  glow = false,
}) => {
  const baseStyles = 'relative font-satoshi bg-[#1a1a1a] text-white font-medium transition-all duration-300';
  
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const glowStyles = `
    border border-[#333333] hover:border-[#444444]
    rounded-full
    ${glow ? 'animate-glow hover:animate-none' : ''}
    hover:bg-[#2a2a2a]
    transition-all duration-300
  `;

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${glowStyles}
    ${className}
  `;

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