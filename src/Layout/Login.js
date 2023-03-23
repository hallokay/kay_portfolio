import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Content>
        <p>
          안녕하세요! <span>전진희</span>입니다.
        </p>
        <h2>
          저의 포트폴리오에 오신 것을 <span>환영</span>합니다.
        </h2>
        <h3>저는 이런 게 중요해요!</h3>
        <Wrap>
          <Card>워라밸</Card>
          <Card>개인 공간</Card>
          <Card>존중과 배려</Card>
        </Wrap>
        <LoginBtn>로그인</LoginBtn>
        <p>포트폴리오를 보시려면 로그인해주세요.</p>
      </Content>
    </Container>
  );
};

const Container = styled.section``;
const Content = styled.div``;
const Wrap = styled.div``;

const Card = styled.div``;
const LoginBtn = styled.button``;
export default Login;
