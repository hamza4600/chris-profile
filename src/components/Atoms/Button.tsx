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
    // box-shadow: rgba(47, 43, 67, 0.1) 0px -1px 0px 0px inset, rgba(47, 43, 67, 0.1) 0px 1px 3px 0px;
    // background: radial-gradient(3.7744% 5.6% at 50% 100%, rgba(77, 96, 67, 0) 0%, rgba(171, 171, 171, 0) 100%);
    // opacity: 1;
// }
  const baseStyles = 'font-satoshi font-medium rounded-full box-shadow-[rgba(47, 43, 67, 0.1)_0px_-1px_0px_0px_inset,_rgba(47, 43, 67, 0.1)_0px_1px_3px_0px]';

  const variantStyles = {
    primary: 'border border-[0.1px] backgroud-transparent border-solid  border-gray-50 opacity-[1] text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
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
