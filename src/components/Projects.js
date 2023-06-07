import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Container, SectionTitle, Grid } from "../commonCss";
import {projects} from '../constants/constants'


const Projects = () => {
  return (
    <Container id="project">
      <SectionTitle>최근 작업</SectionTitle>

      <ProjectsGrid>
        {projects.map((elem)=> {
          const { id, img, title, url, desc, code } = elem;
          return (
            <Card key={id}>
              <a href={url} className="thumnail">
                <img src={img} alt={title} />
              </a>
              <div className="info">
              <h3 className="title">{title}</h3>
              <p>{desc}</p>
              <div className="link">
                <a href={url} target="_blank">
                  <i className="icon-link"></i>
                </a>
                <a href={code} target="_blank">
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

  .title {
    font-size: var(--h3-size);
  }
  .link a {
    margin-right: 5px;
    padding: 5px;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export default Projects;
