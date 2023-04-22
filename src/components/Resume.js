import React from "react";
import styled from "styled-components";
import { Container, SectionTitle, Grid } from "../commonCss";
import { ResumeData } from "../constants/constants";
import {Card} from "./index";

const Resume = () => {
  return (
    <Container id="resume">
      <SectionTitle>이력</SectionTitle>

      <ResumeGrid>
        <Timeline>
          {ResumeData.map((data, i) => {
            if (data.category == "experience") {
              return <Card key={i} data={data} />;
            }
          })}
        </Timeline>
        <Timeline>
          {ResumeData.map((data, i) => {
            if (data.category == "edu") {
              return <Card key={i} data={data} />;
            }
          })}
        </Timeline>
      </ResumeGrid>
    </Container>
  );
};
const ResumeGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  ` 
const Timeline = styled(Grid)`
  position: relative;
  box-shadow: var(--shadow);
  background: var(--container-color);
  padding: 1.875rem;
  border-radius: 5px;
`;


export default Resume;
