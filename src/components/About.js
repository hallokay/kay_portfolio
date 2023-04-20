import React from "react";
import styled from "styled-components";
import { Container, SectionTitle, Grid } from "../commonCss";
import { aboutMe } from "../constants/constants";

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutGrid>
        <img src="./assets/img/img_main.jpg" alt="이미지" />
        <AboutInfo>
          {aboutMe}
          {/* 다운로드 버튼 만들기 */}
          <button>
            <a href="/">다운로드</a>
          </button>
          {/* <a href="" download={}></a> */}
          </AboutInfo>
      </AboutGrid>

    </AboutContainer>
  );
};

const AboutContainer = styled(Container)`

`;
const AboutGrid = styled(Grid)`
  grid-template-columns: 3fr 9fr;
  column-gap: 1.875rem;
`;
const AboutInfo = styled(Grid)`
  position: relative;
  padding: 1.875rem;
  background: var(--container-color);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);

  :before {
    position: absolute;
    left: -0.9rem;
    top: 20%;
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid var(--container-color);
  }

  button {
    display: inline-block;
    width: fit-content;
    background: var(--first-color);
    padding: 10px 2rem;
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    border: 1px solid transparent;
    border-radius: 1.875rem;
    margin-top: 20px;

    a {
      color: #fff;
      font-weight: var(--font-bold);
    }
  }
`;

export default About;
