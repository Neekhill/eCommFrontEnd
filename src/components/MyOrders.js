import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { useSelector } from "react-redux";
import OrderContainer from "./OrderContainer";

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
  }, [user.currentUser._id, user.currentUser.token]);

  return (
    <MainContaienr>
      <Container>
        <MyOrdersTitle>Order Details</MyOrdersTitle>
        <AllOrders>
          {allOrders.map((item, i) => (
            <OrderContainer item={item} key={i} />
          ))}
        </AllOrders>
      </Container>
    </MainContaienr>
  );
};

export default MyOrders;
