import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background: #f3f1e7;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 #b4b4b4;
  margin-bottom: 2rem;
  padding: 1.5rem;
  transition: box-shadow 0.3s;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #245edb;
  margin: 0 0 1rem 0;
  font-weight: 700;
  letter-spacing: 1px;
`;

const About = () => (
  <Section data-aos="fade-up">
    <Title>About Me</Title>
    <p style={{ color: '#1c3f94' }}>
      I'm a passionate developer with 5 years of experience - but really I've been tinkering with hardware and software my whole life. I came from a traditional working background in warehousing then later having boots on the ground as a removalist and transportation consultant - but my passion has always been tech since my first Windows 95 as a kid. I'm currently working at Smartsheet where I build interactive and dynamic marketing collateral, and study full-stack development at Coder Academy. There's always something new to learn and I throw myself into the space until I've answered the questions.
    </p>
  </Section>
);

export default About; 