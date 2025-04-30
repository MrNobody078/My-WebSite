import React from 'react';
import { Sparkles } from 'lucide-react';

const WishesSection: React.FC = () => {
  return (
    <section className="section bg-light-purple">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-warm-orange animate-fade-in">
          Birthday Wishes
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 animate-fade-in delay-200">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="https://media.gettyimages.com/id/129305311/photo/woman-has-trouble-driving-while-man-in-passenger-seat-despairs.jpg?s=612x612&w=0&k=20&c=wQz4EToJr_1BtHISsQPW_r3WfWL1Ny-cb_iCzsTmjX0=" 
                alt="Driving adventures" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in delay-300">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg relative">
              <Sparkles className="absolute -top-5 -left-5 text-light-purple w-12 h-12" />
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                On your special day, Kaoutar, I wish for you a year filled with boundless joy and laughter that reaches your soul.
              </p>
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                May success find you in expected and unexpected places, opening doors to opportunities that align with your deepest passions.
              </p>
              
              <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
                I hope this year brings adventures that expand your horizons—whether through travel, new experiences, or even better driving skills than in that photo! 😉
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Above all, may you be surrounded by love—the kind that reminds you daily of your worth and the beautiful impact you have on everyone around you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;