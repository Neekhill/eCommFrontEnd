import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";

import { largeMobile, mobile } from "../responsive";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAddress } from "../redux/userSlice";
import { APP_END_POINT } from "../constant";

const Wrapper = styled.div`
  background: white;

  padding: 0 20px 20px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const FormDescTitle = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 300;
  width: 100%;
`;
const InputContainer = styled.span`
  min-width: 47%;
  margin: 20px 10px 0px 0px;
  ${mobile({ width: "100%" })}
  ${largeMobile({ width: "100%" })}
`;
const Label = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
  font-weight: 300;
  color: #414146;
`;
const Input = styled.input`
  flex: 1;
  width: 90%;
  padding: 10px;
`;
const Para = styled.p`
  max-width: 90%;
  font-size: 12px;
  color: red;
  font-weight: 700;
  word-wrap: break-word;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const validationSchema = Yup.object({
  shippingaddress: Yup.string().required().min(3),
  shippingcity: Yup.string().required().min(2),
  shippingstate: Yup.string().required().max(20),
  shippingzipcode: Yup.number(),

  billingaddress: Yup.string().required().min(2),
  billingcity: Yup.string().required().min(2),
  billingstate: Yup.string().required().max(20),
  billingzipcode: Yup.number(),
});
const CompleteShippingDetailsForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //console.log(user.currentUser);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  const notify = () =>
    toast.success("Shipping Details Updated successfully!", {
      position: "top-center",
    });

  const submitForm = async (data) => {
    const {
      shippingaddress,
      shippingcity,
      shippingstate,
      shippingzipcode,
      billingaddress,
      billingcity,
      billingstate,
      billingzipcode,
    } = data;

    const shippingaddress2 = {
      address: shippingaddress,
      city: shippingcity,
      state: shippingstate,
      pincode: shippingzipcode,
    };
    const billingaddress2 = {
      address: billingaddress,
      city: billingcity,
      state: billingstate,
      pincode: billingzipcode,
    };

    console.log(JSON.stringify(shippingaddress2));
    console.log(JSON.stringify(billingaddress2));

    console.log("below will convert them to object");

    const response = await axios.put(
      `${APP_END_POINT}/users/${user.currentUser._id}`,
      {
        shippingaddress: JSON.stringify(shippingaddress2),
        billingaddress: JSON.stringify(billingaddress2),
      },
      { headers: { token: `Bearer ${user.currentUser.token}` } }
    );

    if (response.status === 200) {
      notify();
      dispatch(
        updateUserAddress({
          shippingaddress: JSON.stringify(shippingaddress2),
          billingaddress: JSON.stringify(billingaddress2),
        })
      );
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(submitForm)}>
        <ToastContainer />
        <FormDescTitle>Shipping Address</FormDescTitle>
        <InputContainer>
          <Label>Address:</Label>
          <Input
            type="text"
            placeholder="Address"
            name="shippingaddress"
            {...register("shippingaddress")}
          />
          <Para>{errors.shippingaddress?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>City:</Label>
          <Input
            type="text"
            placeholder="City "
            name="shippingcity"
            {...register("shippingcity")}
          />
          <Para>{errors.shippingcity?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>State:</Label>
          <Input
            type="text"
            placeholder=" State"
            name="shippingstate"
            {...register("shippingstate")}
          />

          <Para>{errors.shippingstate?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Zip/Postal:</Label>
          <Input
            type="text"
            placeholder="Zip/Postal Code"
            name="shippingzipcode"
            {...register("shippingzipcode")}
          />
          <Para>{errors.shippingzipcode?.message}</Para>
        </InputContainer>

        <FormDescTitle style={{ marginTop: "20px" }}>
          Billing Address
        </FormDescTitle>
        <InputContainer>
          <Label>Address:</Label>
          <Input
            type="text"
            placeholder="Address"
            name="billingaddress"
            {...register("billingaddress")}
          />
          <Para>{errors.billingaddress?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>City:</Label>
          <Input
            type="text"
            placeholder="City "
            name="billingcity"
            {...register("billingcity")}
          />
          <Para>{errors.billingcity?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>State:</Label>
          <Input
            type="text"
            placeholder="State"
            name="billingstate"
            {...register("billingstate")}
          />

          <Para>{errors.billingstate?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Zip/Postal:</Label>
          <Input
            type="text"
            placeholder="Zip/Postal Code"
            name="billingzipcode"
            {...register("billingzipcode")}
          />
          <Para>{errors.billingzipcode?.message}</Para>
        </InputContainer>

        <br />

        <Agreement>
          By updating the account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button type="submit">UPDATE</Button>
      </Form>
    </Wrapper>
  );
};

export default CompleteShippingDetailsForm;
