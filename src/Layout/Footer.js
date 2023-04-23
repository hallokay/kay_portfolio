import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <h3>감사합니다.</h3>
    </FooterContainer>
  )
}
const FooterContainer = styled.div`
width: 100%;
background: #444;
height: 60px;
display: flex;
justify-content: flex-end;
padding: 10px 5px;
h3 {
  color: #fff;

}

`
export default Footer