import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import PersonalDetails from "../components/PersonalDetails";
import { largeMobile, tablet } from "../responsive";
import ShippingDetails from "../components/ShippingDetails";
import MyOrders from "../components/MyOrders";

const Container = styled.div`
  display: flex;
  margin: 20px auto;
  ${largeMobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
`;
const Top = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  ${largeMobile({
    display: "flex",
    flexDirection: "column",
  })}
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
  margin-bottom: 30px;
  ${largeMobile({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  })}
`;
const UserAccountCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-left: 20px;
  margin-top: 20px;
  width: 280px;
  height: 80px;
  cursor: pointer;
  border: 1px solid #f0f0f5;
  -webkit-box-shadow: 0 3px 6px 0 rgb(45 45 51 / 8%);
  box-shadow: 0 3px 6px 0 rgb(45 45 51 / 8%);
  &:hover {
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    position: relative;
    transition: all 0.5s ease;
  }
  ${tablet({
    width: "220px",
    height: "60px",
  })}
  ${largeMobile({
    width: "180px",
    height: "50px",
  })}
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
  const [show, setShow] = useState("personalDetails");
  return (
    <>
      <Navbar />
      <Top>
        <Greeting>Hello! {user.currentUser.firstname} 👋🏻</Greeting>
        <GreetingDesc>
          Need to change account? <b style={{ fontWeight: "700" }}>LOGOUT</b>
        </GreetingDesc>
      </Top>
      <Container>
        <Left>
          <Center>
            <UserAccountCard onClick={() => setShow("personalDetails")}>
              <Title>Personal Details</Title>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </UserAccountCard>
            <UserAccountCard onClick={() => setShow("shippingDetails")}>
              <Title>Shipping Details</Title>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </UserAccountCard>
            <UserAccountCard onClick={() => setShow("myOrders")}>
              <Title>My Orders</Title>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </UserAccountCard>
          </Center>
        </Left>
        <Right>
          {show === "personalDetails" ? (
            <PersonalDetails />
          ) : show === "shippingDetails" ? (
            <ShippingDetails />
          ) : show === "myOrders" ? (
            <MyOrders />
          ) : (
            <></>
          )}
        </Right>
      </Container>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default UserProfile;
