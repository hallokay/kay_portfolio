import React from 'react'
import styled from 'styled-components'
import { Container } from '../commonCss'

const Landing = () => {
  return (
<LandingContainer id='home'>
  <div>
    <img src="/assets/img/img_main.jpg" alt="" />
  <Title>전진희</Title>
  </div>

</LandingContainer>
  )
}
const LandingContainer = styled(Container)`
  display: flex;
`;
const Title = styled.h1`
  font-family: var(--h1-font);
`;
export default Landing