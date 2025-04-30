import React, { useEffect, useState } from 'react';
import BlobBackground from './BlobBackground';
import { HeartIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-soft-pink">
      <BlobBackground />
      
      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-cursive text-5xl md:text-7xl mb-4 text-warm-orange">
            Happy Birthday
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-handwritten text-6xl md:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-warm-orange via-ice-cream-pink to-light-purple">
            Kaoutar!
          </h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl font-elegant text-gray-700 mb-8">
            May 8th
          </p>
        </div>
        
        <div className={`flex justify-center space-x-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <HeartIcon className="text-warm-orange animate-pulse w-8 h-8" />
          <HeartIcon className="text-ice-cream-pink animate-pulse-slow w-8 h-8" />
          <HeartIcon className="text-light-purple animate-pulse w-8 h-8" />
        </div>
        
        <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#personality"
            className="inline-block rounded-full bg-white px-6 py-3 shadow-lg hover:shadow-xl transition-all font-medium text-warm-orange hover:bg-warm-orange hover:text-white"
          >
            Scroll Down
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;