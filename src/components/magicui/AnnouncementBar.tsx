import React from 'react';
import { motion } from 'framer-motion';

const announcements = [
  "DOGE Layer 3 blockchain released",
  "The first blockchain integrating games, NFTs and streaming platform",
  "Multichain ecosystem",
  // Add more announcements as needed
];

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white overflow-hidden py-2 flex items-center">
      <div className="flex-shrink-0 font-bold text-lg px-4 mr-4 bg-red-600 py-1">
        BREAKING
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="whitespace-nowrap flex"
      >
        {announcements.map((announcement, index) => (
          <span key={index} className="mr-8 text-lg">
            {announcement}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;