import React, { useEffect, useRef } from 'react';
import KUTE from 'kute.js';

const BlobBackground: React.FC = () => {
  const blob1Ref = useRef<SVGPathElement>(null);
  const blob2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (blob1Ref.current && blob2Ref.current) {
      // Create the animation
      const tween = KUTE.fromTo(
        blob1Ref.current,
        { path: blob1Ref.current.getAttribute('d') },
        { path: blob2Ref.current.getAttribute('d') },
        { repeat: Infinity, duration: 5000, yoyo: true, easing: 'easingCubicInOut' }
      );
      
      // Start the animation
      tween.start();
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD1DC" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#F8C8DC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          ref={blob1Ref}
          d="M430.7,294.5Q409,339,373.9,374.3Q338.8,409.7,284.2,423.9Q229.7,438,183.9,411.2Q138,384.3,120.8,340.7Q103.7,297,79.7,243.5Q55.7,190,94.9,145.7Q134,101.3,181,87Q228,72.7,282.2,56.7Q336.3,40.7,382.9,74.5Q429.5,108.3,440.9,154.2Q452.3,200,452.2,250Q452,300,430.7,294.5Z"
          fill="url(#gradient)"
        />
        <path
          ref={blob2Ref}
          d="M421.7,265.5Q380,331,325.9,374.8Q271.8,418.7,199.9,429.3Q128,440,94.4,380.2Q60.8,320.3,55.9,250.2Q51,180,111.9,140.3Q172.8,100.7,239.4,82.7Q306,64.7,348.4,111.7Q390.8,158.7,427.1,204.3Q463.3,250,421.7,265.5Z"
          fill="url(#gradient)"
          style={{ visibility: 'hidden' }}
        />
      </svg>
    </div>
  );
};

export default BlobBackground;