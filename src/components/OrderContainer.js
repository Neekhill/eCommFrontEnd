import React, { useState } from "react";
import styled from "styled-components";
import { largeMobile, mobile } from "../responsive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";

const OrderMainContainer = styled.div`
  //display: flex;
  //justify-content: space-between;
  display: grid;
  grid-template-columns: 2.8fr 2fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #f0f0f5;
  &:hover {
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    position: relative;
    transition: all 0.5s ease;
  }
  ${largeMobile({
    padding: "10px",
    gridTemplateColumns: ".5fr .5fr",
    gridTemplaterows: "1fr 1fr",
  })}
`;
const OrderIdContainer = styled.div``;
const UserIdContainer = styled.div``;
const AmountContainer = styled.div``;
const StatusContainer = styled.div``;
const IconContainer = styled.div`
  ${mobile({
    gridColumn: "span 2",
  })}
`;
const Heading = styled.div`
  font-weight: 700;
`;
const Data = styled.div`
  color: #676768;
  margin-top: 5px;
  line-height: 1.43;
  font-size: 14px;
  ${largeMobile({ wordWrap: "wrap", fontSize: "12px" })}
`;

const OrderDetailsContainer = styled.div``;
const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 10px;

  border: 1px solid #f0f0f5;

  ${largeMobile({
    padding: "10px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplaterows: "100% 100% 100%",
  })}
`;
const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
const SmallContainer = styled.div``;

const OrderContainer = ({ item }) => {
  const [displayOrderDetails, setDisplayOrderDetails] = useState(false);
  const handleClick = () => {
    setDisplayOrderDetails(!displayOrderDetails);
  };
  return (
    <>
      <OrderMainContainer onClick={handleClick}>
        <OrderIdContainer>
          <Heading>Order ID</Heading>
          <Data>{item._id}</Data>
        </OrderIdContainer>
        <UserIdContainer>
          <Heading>User ID</Heading>
          <Data>{item.userId}</Data>
        </UserIdContainer>
        <StatusContainer>
          <Heading>Status</Heading>
          <Data>{item.status}</Data>
        </StatusContainer>

        <AmountContainer>
          <Heading>Amount</Heading>
          <Data>Rs.{item.amount}</Data>
        </AmountContainer>
        <IconContainer>
          {displayOrderDetails ? <ClearIcon /> : <KeyboardArrowDownIcon />}
        </IconContainer>
      </OrderMainContainer>

      {displayOrderDetails && (
        <OrderDetailsContainer>
          {item.products.map((product) => (
            <OrderDetails>
              <Image src={product.img}></Image>
              <SmallContainer>
                <Heading>Product ID</Heading>
                <Data>{product.productId}</Data>
              </SmallContainer>
              <SmallContainer>
                <Heading>Product Title</Heading>
                <Data>{product.productTitle}</Data>
              </SmallContainer>
              <SmallContainer>
                <Heading>Size</Heading>
                <Data>{product.size}</Data>
              </SmallContainer>
              <SmallContainer>
                <Heading>Color</Heading>
                <Data>{product.color}</Data>
              </SmallContainer>
              <SmallContainer>
                <Heading>Qty</Heading>
                <Data>{product.quantity}</Data>
              </SmallContainer>
              <SmallContainer>
                <Heading>$$$</Heading>
                <Data>Rs.{product.price}</Data>
              </SmallContainer>
            </OrderDetails>
          ))}
        </OrderDetailsContainer>
      )}
    </>
  );
};

export default OrderContainer;
