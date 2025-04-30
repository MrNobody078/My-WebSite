import React from 'react';

interface WaveTransitionProps {
  fillColor: string;
  bgColor: string;
  direction?: 'up' | 'down';
}

const WaveTransition: React.FC<WaveTransitionProps> = ({ 
  fillColor, 
  bgColor,
  direction = 'down' 
}) => {
  return (
    <div 
      className="relative h-24 md:h-32 lg:h-40" 
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-full h-full"
          style={{ 
            transform: direction === 'up' ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          preserveAspectRatio="none" 
          viewBox="0 0 1440 74" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1440 72.0543C1082.89 -23.9457 960 72.0543 720 72.0543C480 72.0543 360 -23.9457 0 72.0543V-0.945679L1440 -0.945679V72.0543Z" 
            fill={fillColor}
          />
        </svg>
      </div>
    </div>
  );
};

export default WaveTransition;