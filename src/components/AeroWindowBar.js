import React from 'react';
import styled from '@emotion/styled';

const Bar = styled('div')`
  width: auto;
  height: 38px;
  background: linear-gradient(0deg, #245edb 0%, #3a6ea5 75%, #5ca6e5 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // box-shadow: 0 2px 8px 0 #b4b4b4;
  padding: 0 1.2rem 0 1.2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  // border-bottom: 2px solid #b4b4b4;
  user-select: none;
`;

const Title = styled('span')`
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-shadow: black 1px 1px 1px;
`;

const Buttons = styled('div')`
  display: flex;
  gap: 0.4rem;
`;

const Btn = styled('button')`
  width: 20px;
  height: 20px;
  border: 1.5px solid #fff;
  border-radius: 3px;
  margin-left: 0.2rem;
  background: linear-gradient(180deg, #e3f0fd 0%, #b6d7f7 100%);
  background: #245edb;
  // box-shadow: 0 1px 2px #b4b4b4, 0 0px 4px #5ca6e5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  &.min::before {
    content: '';
    display: block;
    width: 10px;
    height: 2px;
    // background: #245edb;
    background: #fff;
    position: absolute;
    top: 12px;
    left: 3.5px;
    border-radius: 1px;
  }
  &.max::before {
    content: '';
    display: block;
    width: 10px;
    height: 8px;
    // border: 2px solid #245edb;
    border: 1px solid white;
    position: absolute;
    top: 4px;
    left: 2.5px;
    border-radius: 1px;
  }
  &.close {
    background: linear-gradient(180deg, #e06666 0%, #ff5c5c 100%);
    border-color: #fff;
  }
  &.close::before, &.close::after {
    content: '';
    position: absolute;
    left: 8px;
    top: 4.5px;
    width: 1.5px;
    height: 8px;
    background: #fff;
    border-radius: 1px;
  }
  &.close::before {
    transform: rotate(-45deg);
  }
  &.close::after {
    transform: rotate(45deg);
  }
  &:hover {
    background: lightgray;
    box-shadow: 0 2px 8px #245edb;
  }
  &.close:hover {
    background: linear-gradient(180deg, #e57373 0%, #e06666 100%);
  }
`;

const AeroWindowBar = () => (
  <Bar>
    <Title>Welcome</Title>
    <Buttons>
      <Btn className="min" title="Minimize" aria-label="Minimize" />
      <Btn className="max" title="Maximize" aria-label="Maximize" />
      <Btn className="close" title="Close" aria-label="Close" />
    </Buttons>
  </Bar>
);

export default AeroWindowBar; 