import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { largeMobile, mobile } from "../responsive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { useSelector } from "react-redux";

const MainContaienr = styled.div`
  margin: 0 20px;
  display: flex;
`;
const Container = styled.div`
  flex: 1;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const MyOrdersTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
`;

const AllOrders = styled.div`
  margin: 20px 0;
`;
const OrderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #f0f0f5;
  &:hover {
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    position: relative;
    transition: all 0.5s ease;
  }
  ${largeMobile({ padding: "10px", flexDirection: "column" })}
`;
const OrderIdContainer = styled.div`
  margin: 10px;
  text-align: left;
  ${mobile({ margin: "2px" })}
`;
const UserIdContainer = styled.div`
  margin: 10px;
  ${mobile({ margin: "2px" })}
`;
const AmountContainer = styled.div`
  margin: 10px;
  ${mobile({ margin: "2px" })}
`;
const StatusContainer = styled.div`
  margin: 10px;
  ${mobile({ margin: "2px" })}
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  ${mobile({ margin: "2px", padding: "5px" })}
`;
const Heading = styled.div`
  font-weight: 700;
`;
const Data = styled.div`
  color: #676768;
  margin-top: 5px;

  line-height: 1.43;
  font-size: 14px;
  ${mobile({ wordWrap: "wrap" })}
`;

const MyOrders = () => {
  const user = useSelector((state) => state.user);
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9000/orders/find/${user.currentUser._id}`,
          { headers: { token: `Bearer ${user.currentUser.token}` } }
        );
        console.log(res.data.orders);
        setAllOrders(res.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <MainContaienr>
      <Container>
        <MyOrdersTitle>Order Details</MyOrdersTitle>
        <AllOrders>
          {allOrders.map((item) => (
            <OrderContainer>
              <OrderIdContainer>
                <Heading>Order ID</Heading>
                <Data>{item._id}</Data>
              </OrderIdContainer>
              <UserIdContainer>
                <Heading>User ID</Heading>
                <Data>{item.userId}</Data>
              </UserIdContainer>
              <AmountContainer>
                <Heading>Amount</Heading>
                <Data>Rs.{item.amount}</Data>
              </AmountContainer>
              <StatusContainer>
                <Heading>Status</Heading>
                <Data>{item.status}</Data>
              </StatusContainer>
              <IconContainer>
                <KeyboardArrowDownIcon />
              </IconContainer>
            </OrderContainer>
          ))}
        </AllOrders>
      </Container>
    </MainContaienr>
  );
};

export default MyOrders;
