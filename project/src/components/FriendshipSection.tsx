import React from 'react';
import { Star } from 'lucide-react';

const FriendshipSection: React.FC = () => {
  return (
    <section className="section bg-beige">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-warm-orange animate-fade-in">
          Why You Are a Good Friend <span className="text-gray-500">(but a bad cook)</span>
        </h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 animate-fade-in delay-300">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg relative">
              <Star className="absolute -top-5 -right-5 text-warm-orange w-12 h-12" />
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                Your loyalty is unwavering, Kaoutar. When the world gets chaotic, you're the constant friend who listens with understanding and offers support without judgment.
              </p>
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                What makes you truly special is your attention to the small details—you remember the little things that matter, from favorite foods to important dates.
              </p>
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                And while your cooking adventures might sometimes end in smoke alarms and takeout orders (we still laugh about that pasta incident!), your heart is always in the right place.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Your friendship isn't just about being there for the big moments—it's about making even ordinary days feel extraordinary with your presence.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in delay-200">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="https://static.750g.com/images/1200-630/0846bdae07c8feff4950315c3a70355c/adobestock-538935923.jpeg" 
                alt="Sunset symbolizing friendship" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendshipSection;