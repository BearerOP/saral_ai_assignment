import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ children, className = '', delay = 0, ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`bg-white rounded-lg shadow-soft ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

