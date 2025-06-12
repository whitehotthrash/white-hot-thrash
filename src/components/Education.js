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

const List = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled('li')`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #1c3f94;
`;

const Education = () => (
  <Section data-aos="fade-up" data-aos-delay="200">
    <Title>Education</Title>
    <List>
      <Item><strong>Coder Academy</strong> – Full-Stack Student (2025 - Present)</Item>
      <Item><strong>TAFE QLD</strong> – Cybersecurity Cert IV (2019)</Item>
      <Item><strong>TAFE QLD</strong> – Information Technology Cert III (2018)</Item>
    </List>
  </Section>
);

export default Education; 