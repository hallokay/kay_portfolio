import styled from "styled-components";

const Container = styled.section`
  max-width: 1080px;
  margin: 20px auto;
  padding: 30px 15px;
`;
const Grid = styled.div`
    display: grid;
`;
const Section = styled.section`
    padding: 7rem 0 2rem;
`;

const SectionTitle = styled.h2`
  position: relative;
  font-size: var(--h2-size);
  margin-left: 0.875rem;
  margin-bottom: 3.75rem;
  font-weight: var(--font-bold);

  &::before {
    content: "";
    width: 2.25rem;
    height: 2.25rem;
    position: absolute;
    left: -0.875rem;
    right: -0/875rem;
    background: url(./assets/dots-bg.svg);
  }
`;

const Btn = styled.button `

`

export { Container, Grid, Section, SectionTitle };