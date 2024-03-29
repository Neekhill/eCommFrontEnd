import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import PersonalDetails from "../components/PersonalDetails";
import { largeMobile, tablet } from "../responsive";
import ShippingDetails from "../components/ShippingDetails";
import MyOrders from "../components/MyOrders";
import { logout } from "../redux/userSlice";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  ${largeMobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  margin-bottom: 30px;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const UserAccountCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-left: 20px;
  margin-top: 20px;
  width: 280px;
  height: 60px;
  cursor: pointer;
  border: 1px solid #f0f0f5;

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Top>
        <Greeting>Hello! {user.currentUser.firstname} 👋🏻</Greeting>
        <GreetingDesc>
          Need to change account?{" "}
          <b
            style={{
              fontWeight: "700",
              padding: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={handleLogout}
          >
            LOGOUT
          </b>
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
