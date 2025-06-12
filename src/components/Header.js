import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from '@emotion/styled';

const HeaderWrap = styled('header')`
  background: white;
  box-shadow: 0 4px 24px 0 #b4b4b4;
  border-bottom: 2px solid #b4b4b4;
  padding: 3rem 1rem 2rem 1rem;
  text-align: center;
  position: relative;
`;

const Name = styled('h1')`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #245edb;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px #e3f0fd;
`;

const Subtitle = styled('p')`
  font-size: 1.2rem;
  color: #1c3f94;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const SocialLinks = styled('div')`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SocialLink = styled('a')`
  color: #245edb;
  background:rgb(244, 243, 241);
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 2px 8px #b6d7f7;
  transition: background 0.2s, transform 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    background: #e3f0fd;
    color: #1c3f94;
    transform: scale(1.15) rotate(-6deg);
  }
`;

const Header = () => (
  <HeaderWrap data-aos="fade-down">
    <Name>Tim Maastricht</Name>
    <Subtitle>Front-End Developer @ Smartsheet | Full-Stack Student @ Coder Academy</Subtitle>
    <SocialLinks>
      <SocialLink href="https://linkedin.com/in/tim-maastricht-89878216b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={32} />
      </SocialLink>
      <SocialLink href="https://github.com/whitehotthrash" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={32} />
      </SocialLink>
    </SocialLinks>
  </HeaderWrap>
);

export default Header; 