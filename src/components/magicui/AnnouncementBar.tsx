import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-2">
        <span className="text-white font-bold mx-4">🚀 Presale is live! 🚀</span>
        <span className="text-white mx-4">|</span>
        <span className="text-white font-bold mx-4">🎉 Join the Doge Revolution! 🎉</span>
        <span className="text-white mx-4">|</span>
        <span className="text-white font-bold mx-4">💎 Early investors get special rewards! 💎</span>
        <span className="text-white mx-4">|</span>
        <span className="text-white font-bold mx-4">🌟 Don't miss out on the next big thing in crypto! 🌟</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;