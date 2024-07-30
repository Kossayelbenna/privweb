import React from 'react';
import styled from 'styled-components';
import { BorderBeam } from "@/components/magicui/border-beam";
import { BsTelegram, BsInstagram, BsFacebook, BsTwitter, BsDiscord } from "react-icons/bs";
import dynamic from 'next/dynamic';


const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  padding: 40px 20px;
  margin-bottom: -50px;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterNav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    img {
      margin-right: 0;
    }
  }
`;

const Disclaimer = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #888;
`;

const Footer: React.FC = () => {
  const Footer = dynamic(() => import('./Footer'), {
    ssr: false,
  });
  return (
    <FooterContainer>
      <BorderBeam 
        duration={15}
        size={400}
        color-from="#ffaa40"
        colorTo = "#9c40ff"
      />
      <FooterContent>
        <FooterNav>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#how-to-buy">HOW TO BUY</a></li>
            <li><a href="#tokenomics">TOKENOMICS</a></li>
            <li><a href="#roadmap">ROADMAP</a></li>
          </ul>
        </FooterNav>
        <SocialIcons>
          <SocialIcon href="https://t.me/Dogeuniversepresale" target="_blank" rel="noopener noreferrer">
            <BsTelegram />
          </SocialIcon>
          <SocialIcon href="https://discord.gg/xEydn77j" target="_blank" rel="noopener noreferrer">
            <BsDiscord />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/doge_vision" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </SocialIcon>
        </SocialIcons>



      </FooterContent>
      <FooterBottom>
        <Logo>
          <img src="/images/logo.png" alt="DOGE LOGO" 
           style={{ width: '200px', height: 'auto' }} />
        </Logo>
        <Disclaimer>
          Cryptocurrency investments carry a high risk of volatility. Be aware of the tax implications, as profits may be subject to capital gains or other taxes in your jurisdiction. Cryptocurrency regulations can vary, so ensure you understand the rules in your area. Conduct thorough research and invest only what you can afford to lose.
        </Disclaimer>
        <Copyright>&copy; Copyright 2024 DOGEVISION. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;