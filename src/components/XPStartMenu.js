import React from "react";
import styled from "@emotion/styled";

const Overlay = styled("div")`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.18);
  z-index: 10000;
  display: flex;
  align-items: flex-end;
`;

const Menu = styled.div`
  position: absolute;
  left: 6px;
  bottom: 50px;
  width: 370px;
  height: 500px;
  background: linear-gradient(0deg, #e3f0fd 0%, #b6d7f7 100%);
  border-radius: 10px 10px 0 0;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(0deg, #245edb 80%, #3a6ea5 100%);
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgTextSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-shadow: 1px 1px 1px black;
`;

const CloseBtn = styled("button")`
  background: linear-gradient(180deg, #ff6a3a 0%, #e06666 80%, #c0392b 100%);
  border: 1px solid white;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  box-shadow: 0 1px 4px 0 #245edb, inset 0 2px 8px 0 #fff4;
  cursor: pointer;
  padding: 0;
  transition: filter 0.2s, box-shadow 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
`;

const XMark = styled("span")`
  display: block;
  width: 18px;
  height: 18px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 8px;
    top: 2px;
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 1px 2px #fff8;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const Content = styled("div")`
  display: flex;
  flex: 1;
  background: #fff;
  border-radius: 0px 0px 2px 2px;
  border-left: 3px solid #245edb;
  border-right: 3px solid #245edb;
  border-bottom: 3px solid #245edb;
`;

const Left = styled("div")`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Item = styled("a")`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  transition: background 0.1s;
  &:hover {
    background: rgb(205, 205, 206);
  }
  img {
    width: 40px;
    height: 40px;
  }
  h5 {
  font-size: 1rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  p {
    font-weight: 100;
    opacity: 0.4;    
    margin: 0;
    padding: 0;
  }
`;

const XPStartMenu = ({ onClose }) => (
  <Overlay>
    <Menu>
      <Header>
        <ImgTextSpan>
          <img
            src="/assets/drawn_face.jpg"
            alt="User"
            style={{
              width: 32,
              height: 32,
              borderRadius: 4,
              border: "2px solid #fff",
            }}
          />
          Tim
        </ImgTextSpan>
        <CloseBtn onClick={onClose} aria-label="Close Start Menu">
          <XMark />
        </CloseBtn>
      </Header>
      <Content>
        <Left>
          <Item href="/assets/resume.pdf" download>
            <img src="/assets/notepad.png" alt="Resume Icon" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5>Resume</h5>
              <p>Click to download</p>
            </div>
          </Item>
        </Left>
      </Content>
    </Menu>
  </Overlay>
);

export default XPStartMenu;
