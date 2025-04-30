import React from 'react';
import { Heart } from 'lucide-react';

const PersonalitySection: React.FC = () => {
  return (
    <section id="personality" className="section bg-soft-pink">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-warm-orange animate-fade-in">
          How Nice You Are
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 animate-fade-in delay-200">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/EST_KHENIFRA.jpg/960px-EST_KHENIFRA.jpg" 
                alt="Pink roses representing kindness" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in delay-300">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg relative">
              <Heart className="absolute -top-5 -left-5 text-ice-cream-pink w-12 h-12" />
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                Kaoutar, your kindness shines like a beacon in this world. The way you approach every situation with warmth and understanding makes you truly special.
              </p>
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                Your gentle spirit and thoughtfulness never go unnoticed. You have this remarkable ability to make people feel valued and heard, creating a safe space for everyone around you.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                In a world that can sometimes feel cold, your compassion is like a warm embrace that reminds us of the beauty of human connection. Your friendship is a treasure I hold dear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;