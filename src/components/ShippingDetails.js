import React from "react";
import styled from "styled-components";
import CustomizedDialogs from "./ModalShipping";
import CompleteShippingDetailsForm from "./CompleteShippingDetailsForm";
import { useSelector } from "react-redux";

const ShippingMainContainer = styled.div``;

const ShippingContainer = styled.div`
  margin: 0 20px;
  display: flex;
`;
const ShippingShow = styled.div`
  flex: 1;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ShippingShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const ShippingShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const ShippingShowBottom = styled.div`
  margin-top: 20px;
`;
const ShippingShowBottomTitle = styled.span`
  font-size: 20px;
  color: rgb(175, 170, 170);
  font-weight: 700;
`;
const ShippingShowBottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
  font-size: 16px;
  font-weight: 200;
`;

const ShippingShowBottomInfoTitle = styled.span`
  margin-left: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
`;

const ShippingDetails = () => {
  const user = useSelector((state) => state.user);

  /*  const shippingaddress = useSelector(
    (state) => state.user.currentUser.shippingaddress
  );
  const billingAddress = JSON.parse(billingaddress);
  const shippingAddress = JSON.parse(shippingaddress); */

  return (
    <ShippingMainContainer>
      <ShippingContainer>
        <ShippingShow>
          <ShippingShowTop>
            <ShippingShowTopTitle>Address Details</ShippingShowTopTitle>
          </ShippingShowTop>

          <ShippingShowBottom>
            <ShippingShowBottomTitle>Billing Address</ShippingShowBottomTitle>

            <ShippingShowBottomInfo>
              Address :
              <ShippingShowBottomInfoTitle>
                {user.currentUser.billingaddress
                  ? JSON.parse(user.currentUser.billingaddress).address
                  : " Add address"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomInfo>
              City:
              <ShippingShowBottomInfoTitle>
                {user.currentUser.billingaddress
                  ? JSON.parse(user.currentUser.billingaddress).city
                  : " Add city"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomInfo>
              State:
              <ShippingShowBottomInfoTitle>
                {user.currentUser.billingaddress
                  ? JSON.parse(user.currentUser.billingaddress).state
                  : " Add state"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomInfo>
              Zip/Postal Code:
              <ShippingShowBottomInfoTitle>
                {user.currentUser.billingaddress
                  ? JSON.parse(user.currentUser.billingaddress).pincode
                  : " Add Zip/Postal code"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomTitle>Shipping Address</ShippingShowBottomTitle>
            <ShippingShowBottomInfo>
              Address :
              <ShippingShowBottomInfoTitle>
                {user.currentUser.shippingaddress
                  ? JSON.parse(user.currentUser.shippingaddress).address
                  : " Add address"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomInfo>
              City:
              <ShippingShowBottomInfoTitle>
                {user.currentUser.shippingaddress
                  ? JSON.parse(user.currentUser.shippingaddress).city
                  : " Add city"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomInfo>
              State:
              <ShippingShowBottomInfoTitle>
                {user.currentUser.shippingaddress
                  ? JSON.parse(user.currentUser.shippingaddress).state
                  : " Add state"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>

            <ShippingShowBottomInfo>
              Zip/Postal Code:
              <ShippingShowBottomInfoTitle>
                {user.currentUser.shippingaddress
                  ? JSON.parse(user.currentUser.shippingaddress).pincode
                  : " Add Zip/postal code"}
              </ShippingShowBottomInfoTitle>
            </ShippingShowBottomInfo>
          </ShippingShowBottom>
          <CustomizedDialogs>
            <CompleteShippingDetailsForm />
          </CustomizedDialogs>
        </ShippingShow>
      </ShippingContainer>
    </ShippingMainContainer>
  );
};

export default ShippingDetails;
