import React from 'react';
import styled from '@emotion/styled';

const StartButton = styled.button`
  position: fixed;
  left: -11px;
  bottom: -35px;
  width: 7rem;
  height: 7rem;
  background: url(${process.env.PUBLIC_URL}/assets/start.png) no-repeat center/contain;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 9999;
  padding: 0;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    filter: brightness(0.7);
  }
`;
const XPStartButton = ({ onClick }) => {
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  console.log('NODE_ENV:', process.env.NODE_ENV);
  return (
    <StartButton
      aria-label="Windows XP Start Button"
      title="G'day!"
      onClick={onClick}
    />
  );
};

export default XPStartButton; 