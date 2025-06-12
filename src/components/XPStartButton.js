import React, { useState } from 'react';
import styled from '@emotion/styled';

const StartButton = styled('button')`
  position: fixed;
  left: -11px;
  bottom: -35px;
  width: 7rem;
  height: 7rem;
  background: url('/assets/start.png') no-repeat center/contain;
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

const XPStartButton = ({ onClick }) => (
  <StartButton
    aria-label="Windows XP Start Button"
    title="G'day!"
    onClick={onClick}
  />
);

export default XPStartButton; 