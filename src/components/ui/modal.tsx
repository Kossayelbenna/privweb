import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// ... rest of your imports and component code ...

const DogeVisionBanner: React.FC = () => {
  // ... existing state and useEffect ...

  return (
    <div className="w-full p-8 text-white hidden sm:block mb-0">
      {/* ... existing banner content ... */}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-purple-900 text-white border border-purple-500 rounded-lg shadow-lg max-w-2xl mx-auto">
          <DialogHeader className="border-b border-purple-700 pb-4">
            <DialogTitle className="text-2xl font-bold">About Doge Vision</DialogTitle>
            <Button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-2 right-2 text-purple-300 hover:text-white"
            >
              X
            </Button>
          </DialogHeader>
          <DialogDescription className="py-4">
            <p className="mb-4">
              Doge Vision is pioneering the world's first Layer 3 blockchain, revolutionizing the integration of Web3 games, NFTs, and streaming platforms. Built on the foundation of Ethereum's robust security, our ecosystem offers unparalleled speed and efficiency.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Layer 3 Blockchain: Cutting-edge technology offering enhanced scalability and performance.</li>
              <li>Web3 Games and NFTs: Robust ecosystem for game developers and NFT creators.</li>
              <li>#1 Streaming Platform: Leading blockchain-based platform for content creators.</li>
              <li>Multichain Ecosystem: Seamless interaction across multiple blockchains.</li>
              <li>ETH Blockchain Security: Leveraging Ethereum's proven security with optimized performance.</li>
              <li>Fast and 100x Lower Fees: Significantly faster and cheaper transactions.</li>
            </ul>
            
            <p className="font-bold">
              Join us in reshaping the digital landscape and be part of the Doge Vision community-driven initiative!
            </p>
          </DialogDescription>
          <DialogFooter className="border-t border-purple-700 pt-4">
            <Button 
              onClick={() => setIsModalOpen(false)} 
              className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DogeVisionBanner;