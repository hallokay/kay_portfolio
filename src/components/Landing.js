import React from 'react'
import styled from 'styled-components'
import { Container } from '../commonCss'
import { ScrollDown, Bg } from "./index";
import { mainImg, mainVideo, socialLink } from "../constants/constants";

const Landing = () => {

  return (
    <LandingContainer id="home">
      <div>
        <ImgWrap>
          <img src={mainImg} alt="메인이미지" />
          <video autoPlay loop playsInline muted>
            <source src={mainVideo} type="video/mp4" />
          </video>
        </ImgWrap>
        <Title>전진희</Title>
        <Desc>
          <span>프론트엔드 개발자</span>
          입니다.
        </Desc>
        <HeaderSocial>
          {socialLink.map((item, i) => (
            <li key={i}>
              <a href={item.url} target="_blank">
                {item.icon}
                <span>
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </HeaderSocial>
        <ScrollDown />
      </div>

      <Bg />
    </LandingContainer>
  );
}
const LandingContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;
  }
`;
const ImgWrap = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 4rem;

  img {
    inset: 0px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 1;
    transition: opacity 0.5s ease-in-out;
  }

  video {
    inset: 0px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    video {
      opacity: 1;
      z-index: 1;
    }
  }
`; 
const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-family: var(--h1-font);
  font-size: var(--h1-size);
  font-weight: var(--font-bold);
  color: var(--title-color);
  letter-spacing: .5rem;
`;
const Desc = styled.p`
  font-size: 1rem;

  span {
    display: inline-block;
    font-weight: bold;
  }
  i {
  }
`;

const HeaderSocial = styled.ul`

  span {
    font-size: 12px;
    margin-left: 5px;
  }
`
export default Landing