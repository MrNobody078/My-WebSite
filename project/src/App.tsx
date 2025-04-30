import React from 'react';
import Hero from './components/Hero';
import PersonalitySection from './components/PersonalitySection';
import FriendshipSection from './components/FriendshipSection';
import WishesSection from './components/WishesSection';
import Footer from './components/Footer';
import WaveTransition from './components/WaveTransition';

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      
      <WaveTransition 
        fillColor="#FFF0F5" 
        bgColor="#FFD1DC"
        direction="down"
      />
      
      <PersonalitySection />
      
      <WaveTransition 
        fillColor="#F5F5DC" 
        bgColor="#FFF0F5"
        direction="up"
      />
      
      <FriendshipSection />
      
      <WaveTransition 
        fillColor="#E6E6FA" 
        bgColor="#F5F5DC"
        direction="down"
      />
      
      <WishesSection />
      
      <WaveTransition 
        fillColor="#FFF0F5" 
        bgColor="#E6E6FA"
        direction="up"
      />
      
      <Footer />
    </div>
  );
}

export default App;