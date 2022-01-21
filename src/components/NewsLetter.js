import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
  text-align: center;
`;
const InputConatiner = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 5px;
  border: none;
`;
const Button = styled.button`
  flex: 1;
  padding: 5px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates for your favorite products</Desc>
      <InputConatiner>
        <Input placeholder="Your email"></Input>
        <Button>
          <SendIcon />
        </Button>
      </InputConatiner>
    </Container>
  );
};

export default NewsLetter;
