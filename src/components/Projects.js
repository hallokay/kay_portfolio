import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Container, SectionTitle, Grid } from "../commonCss";
import { projects } from '../constants/constants'


const Projects = () => {
  return (
    <Container id="project">
      <SectionTitle>최근 작업</SectionTitle>

      <ProjectsGrid>
        {projects.map((elem) => {
          const { id, img, title, url, desc, code } = elem;
          return (
            <Card key={id}>
              <a href={url} target="_blank" rel="noreferrer" className="thumnail">
                <img src={img} alt={title} />
              </a>
              <div className="info">
                <h3 className="title">{title}</h3>
                <p>{desc}</p>
                <div className="link">
                  <a href={url} target="_blank" rel="noreferrer">
                    <i className="icon-link"></i>
                  </a>
                  <a href={code} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </ProjectsGrid>
    </Container>
  );
};
const ProjectsGrid = styled(Grid)`
  grid-template-columns: repeat(1fr);
  gap: 1.875rem;

`;
const Card = styled(Grid)`
  position: relative;
  overflow: hidden;
  grid-template-columns: repeat(1fr);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 10px 20px;

  a {
    &:hover {
      color: var(--name-color)
    }
  }
  .thumnail {
    display: block;
    margin-bottom: 1.5rem;
    img{
      border-radius: .5rem;
    }
  }

  .info {
    p {margin-bottom: .5rem
    }

  }
  .title {
    font-size: var(--h2-size);
    margin-bottom: 1rem;
  }
  .link a {
    margin-right: 5px;
    padding: 5px;
    font-size: 25px;
    &:hover {
      color: var(--green-color)
    }
  }

  .velog {
    h4 {
      color: var(--name-color);
      font-size: 1.2rem;
    }
  }
  // @media (max-width: 768px) {
  //   grid-template-columns: 1fr;
  // }
`;
export default Projects;
