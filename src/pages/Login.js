import React from "react";
import styled from "styled-components";
import loginFormImg from "../assets/loginFormImg.jpg";
import { mobile, tablet } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${loginFormImg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background: white;
  width: 25%;
  padding: 20px;
  ${mobile({ width: "70%" })}
  ${tablet({ width: "50%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  margin: 10px 0px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Link>DON'T REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
