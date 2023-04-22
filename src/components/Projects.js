import React from "react";
import styled from "styled-components";
import { Container, SectionTitle, Grid } from "../commonCss";

const Projects = () => {
  return (
    <Container id="project">
      <SectionTitle>최근 작업</SectionTitle>

      <ProjectsGrid>

      </ProjectsGrid>
    </Container>
  );
};
const ProjectsGrid = styled(Grid)`

`
export default Projects;
