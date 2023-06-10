import React from "react";
import styled from "styled-components";
import { Container, Grid } from "../commonCss";
import { aboutMe } from "../constants/constants";


const About = () => {

  return (
    <Container id="about">
      <AboutGrid>
        <div className="imgwrap">
          <img src="./assets/img/about.jpg" alt="이미지" />
        </div>
        <AboutInfo>
          {aboutMe}
          <button>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://glass-possum-fe9.notion.site/036f235f83904a319ceadae3eb812365"
            >
              이력서 보기
            </a>
          </button>
        </AboutInfo>
      </AboutGrid>
    </Container>
  );
};


const AboutGrid = styled(Grid)`
  grid-template-columns: 3fr 9fr;
  column-gap: 2rem;

  .imgwrap {
    width: 250px;
    height: 250px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      object-fit: cover;
    }
  }

  @media (max-width: 876px) {
  grid-template-columns: 1fr;
    .imgwrap {
      margin: 0 auto 1rem;

    }
  }
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
    top: 30%;
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid var(--container-color);
  }
  h2 {
    margin: 1rem 0;
  }
  p {
    margin-bottom: .8rem;
  }

  button {
    display: inline-block;
    width: fit-content;
    background: var(--name-color);
    padding: 10px 2rem;
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    border: 1px solid transparent;
    border-radius: 1.875rem;
    margin-top: 20px;

    a {
      color: #fff;
      font-weight: var(--font-bold);
    }
    &:hover {
      background: var(--name-color-alt);
    }
  }

  @media (max-width: 876px) {
    :before {
      display: none;
    }
  }
`;

export default About;
