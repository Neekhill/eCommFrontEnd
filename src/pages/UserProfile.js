import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import PersonalDetails from "../components/PersonalDetails";
import { largeMobile } from "../responsive";
const Container = styled.div`
  display: flex;
  margin: 20px auto;
  ${largeMobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
`;
const Top = styled.div`
  margin: 50px;
`;
const Greeting = styled.h1`
  font-size: 30px;
`;
const GreetingDesc = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: teal;
`;
const Center = styled.div`
  width: 100%;
`;
const UserAccountCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-left: 20px;
  margin-top: 10px;
  width: 280px;
  height: 50px;

  &:hover {
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    position: relative;
    transition: all 0.5s ease;
  }
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
const IconContainer = styled.div``;
const Right = styled.div`
  flex: 3;
`;

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <Container>
        <Left>
          <Top>
            <Greeting>Hello! {user.currentUser.username} 👋🏻</Greeting>
            <GreetingDesc>Need to change account? LOGOUT</GreetingDesc>
          </Top>
          <Center>
            <UserAccountCard>
              <Title>Personal Details</Title>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </UserAccountCard>
            <UserAccountCard>
              <Title>Shipping Details</Title>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </UserAccountCard>
            <UserAccountCard>
              <Title>My Orders</Title>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </UserAccountCard>
          </Center>
        </Left>
        <Right>
          <PersonalDetails />
        </Right>
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default UserProfile;
