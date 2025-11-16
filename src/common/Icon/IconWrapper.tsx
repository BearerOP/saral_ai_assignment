interface IconWrapperProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
  isActive?: boolean;
}

const IconWrapper = ({ src, alt = '', size = 24, className = '', isActive = false }: IconWrapperProps) => {
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...(isActive ? { 
          filter: 'invert(32%) sepia(89%) saturate(2556%) hue-rotate(251deg) brightness(93%) contrast(92%)' 
        } : { 
          opacity: 0.6 
        })
      }}
    />
  );
};

export default IconWrapper;

