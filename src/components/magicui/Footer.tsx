import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0d0d14;
  color: #ffffff;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
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
  background-size: contain;
  background-repeat: no-repeat;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNav>
          <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">HOW TO BUY</a></li>
            <li><a href="#">TOKENOMICS</a></li>
            <li><a href="#">ROADMAP</a></li>
          </ul>
        </FooterNav>
        <SocialIcons>
          <SocialIcon href="#" style={{ backgroundImage: 'url(/path-to-discord-icon.svg)' }} />
          <SocialIcon href="#" style={{ backgroundImage: 'url(/path-to-twitter-icon.svg)' }} />
          <SocialIcon href="#" style={{ backgroundImage: 'url(/path-to-telegram-icon.svg)' }} />
        </SocialIcons>
      </FooterContent>
      <FooterBottom>
        <Logo>ETUKTUK</Logo>
        <Disclaimer>
          Cryptocurrency investments carry a high risk of volatility. Be aware of the tax implications, as profits may be subject to capital gains or other taxes in your jurisdiction. Cryptocurrency regulations can vary, so ensure you understand the rules in your area. Conduct thorough research and invest only what you can afford to lose.
        </Disclaimer>
        <Copyright>&copy; Copyright 2024 ETUKTUK. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;