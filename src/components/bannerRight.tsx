import React from 'react';
const scrollToHowToBuy = () => {
  const howToBuySection = document.getElementById('how-to-buy');
  if (howToBuySection) {
    howToBuySection.scrollIntoView({ behavior: 'smooth' });
  }
};

const BannerRight: React.FC = () => {
  return (
    <div className="w-full p-6 text-white">
      <h2 className="text-6xl font-bold mb-4">The Doge Revolution</h2>
      
      <div className="space-y-4">
        <p className="text-lg">
          <span className="text-2xl font-bold text-purple-400">DOGE VISION</span> is an ecosystem that combines:
        </p>
        <ul className="text-xl font-bold list-disc pl-6 space-y-2 pt-6">
          <li>A Layer 3 Blockchain Built For Doge</li>
          <li>A Multichain Token And Ecosystem</li>
          <li>Games, Nfts And The First Streaming Platform In Defi </li>
        </ul>
        <p className="text-lg pt-6 ">
          Our vision is to revolutionize the blockchain gaming industry by creating truly enjoyable games, not just play-to-earn mechanisms.
        </p>
        <p className="text-lg">
          We're building a new universe with the DOGE community, focusing on fun, engagement, and sustainable growth.
        </p>
      </div>

      <div className="mt-6 space-x-4">
        <button onClick={scrollToHowToBuy} className="bg-white text-purple-700 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300 transform hover:scale-105">
          Join the Doge Revolution!
        </button>
        <button onClick={scrollToHowToBuy} className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BannerRight;