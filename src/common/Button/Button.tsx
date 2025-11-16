import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'rounded-lg font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-purple-400 text-white hover:bg-purple-500',
    secondary: 'border border-border-default bg-white hover:bg-gray-50',
    ghost: 'hover:bg-gray-50',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

