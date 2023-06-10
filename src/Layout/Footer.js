import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";
const Footer = () => {
  return (
    <FooterContainer>
      <Marquee autoFill="true" gradient="true" gradientColor={[68, 68, 68]}>
        <p>
          앞으로 더 성장할 수 있는 개발자가 되기 위해 노력하겠습니다.
          감사합니다. :)
        </p>
      </Marquee>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  width: 100%;
  background: #444;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 25px;
  Marquee {
  overflow: hidden;
  }
  p {
    color: #fff;
    margin: 0 30px;
  }
`;
export default Footer