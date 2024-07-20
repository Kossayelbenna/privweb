import React from 'react';
import styled, { keyframes } from 'styled-components';

const TopLine = styled.div`
  width: 100%;
  height: 5px;
  background: #060606;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const BottomLine = styled.div`
  width: 100%;
  height: 5px;
  background: #060606;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
`;

const marqueeAnimation = keyframes`
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: #f7f7f7;
  color: #000;
  padding: 10px 0;
  position: fixed;
  top: 5px;
  left: 0;
  z-index: 1000;
`;

const MarqueeText = styled.p`
  display: inline-block;
  white-space: nowrap;
  animation: ${marqueeAnimation} 15s linear infinite;
  font-size: 1.2em;
  font-weight: bold;
`;

const AnnouncementBar: React.FC = () => {
  return (
    <>
      <TopLine />
      <MarqueeContainer>
        <MarqueeText>
          Welcome to our website! Take advantage of our special offers now!
        </MarqueeText>
      </MarqueeContainer>
      <BottomLine />
    </>
  );
};

export default AnnouncementBar;