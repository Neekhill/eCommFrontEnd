import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";

import { largeMobile, mobile } from "../responsive";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";

const Wrapper = styled.div`
  background: white;

  padding: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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
  firstname: Yup.string().required().min(2),
  lastname: Yup.string().required().min(2),
  username: Yup.string().required().max(20),
  email: Yup.string().email().required(),
  phone: Yup.string().max(11),
});
const CompleteRegistrationForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user.currentUser);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstname: user.currentUser.firstname ? user.currentUser.firstname : "",
      lastname: user.currentUser.lastname ? user.currentUser.lastname : "",
      username: user.currentUser.username ? user.currentUser.username : "",
      email: user.currentUser.email ? user.currentUser.email : "",
      phone: user.currentUser.phone ? user.currentUser.phone : "",
      birthday: user.currentUser.birthday ? user.currentUser.birthday : "",
    },
  });

  const notify = () =>
    toast.success("Account Updated successfully!", { position: "top-center" });

  const submitForm = async (data) => {
    const { firstname, lastname, username, email, phone, birthday } = data;
    const response = await axios.put(
      `http://localhost:9000/users/${user.currentUser._id}`,
      {
        firstname,
        lastname,
        username,
        email,
        phone,
        birthday,
      },
      { headers: { token: `Bearer ${user.currentUser.token}` } }
    );
    console.log(response);
    if (response.status === 200) {
      notify();
      dispatch(
        updateUser({
          firstname,
          lastname,
          username,
          email,
          phone,
          birthday,
        })
      );
    }
  };
  return (
    <Wrapper>
      <Title>EDIT ACCOUNT</Title>

      <Form onSubmit={handleSubmit(submitForm)}>
        <ToastContainer />

        <InputContainer>
          <Label>Full Name:</Label>
          <Input
            type="text"
            placeholder="First Name"
            name="firstname"
            {...register("firstname")}
          />
          <Para>{errors.firstname?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Last Name:</Label>
          <Input
            type="text"
            placeholder="Last Name"
            name="lastname"
            {...register("lastname")}
          />
          <Para>{errors.lastname?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Username:</Label>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            {...register("username")}
          />

          <Para>{errors.username?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Email:</Label>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            {...register("email")}
          />
          <Para>{errors.email?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Phone Number:</Label>
          <Input
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            {...register("phone")}
          />
          <Para>{errors.phone?.message}</Para>
        </InputContainer>

        <InputContainer>
          <Label>Birthday:</Label>
          <Input
            type="date"
            placeholder="Birthday"
            name="birthday"
            {...register("birthday")}
          />
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

export default CompleteRegistrationForm;
