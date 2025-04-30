import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-soft-pink relative overflow-hidden">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8 relative z-10">
          <h3 className="font-elegant text-2xl md:text-3xl mb-6 text-warm-orange">A Personal Note</h3>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Creating this website wasn't easy—I had to learn new things, test, fail, and try again. But every moment was worth it, just to bring a smile to your face.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Having you as a friend in my life is something I deeply value.
          </p>
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center mb-3">
            <Heart className="text-warm-orange w-5 h-5 mr-2" fill="#FF6B6B" />
            <p className="text-gray-700 font-medium">
              This website was lovingly created for <span className="font-bold">Kaoutar Guirrou</span>
            </p>
          </div>
          
          <p className="text-gray-700">
            by <span className="font-bold">Weld Al Mohammedia</span>
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-light-purple rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-ice-cream-pink rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
    </footer>
  );
};

export default Footer;