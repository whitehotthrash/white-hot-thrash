import React from "react";
import styled from "@emotion/styled";

const Taskbar = styled("div")`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 44px;
  background: linear-gradient(0deg, #1976d2 10%, #3a6ea5 70%, #5ca6e5 90%);
  border-top: 2px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9998;
`;

const Copyright = styled("div")`
  width: 157px;
  height: 28px;
  color: #fff;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 1rem 0.4rem 0rem 0.4rem;
  border-radius: 2px 0px 0px 0px;
  letter-spacing: 1px;
  background: linear-gradient(0deg, #1976d2 0%, #3a6ea5 0%, #5ca6e5 90%);
  border-left: 2px solid black;
  text-shadow: 1px 0.5px 1px black;
`;

const Footer = () => (
  <Taskbar>
    <Copyright>&copy; {new Date().getFullYear()} Tim Maastricht</Copyright>
  </Taskbar>
);

export default Footer;
