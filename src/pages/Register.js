import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";
import registerFormImg2 from "../assets/registerFormImg2.jpg";
import { largeMobile, mobile, tablet, tabletPlus } from "../responsive";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { APP_END_POINT } from "../constant";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${registerFormImg2}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background: white;
  width: 40%;
  padding: 20px;
  ${tabletPlus({ width: "60%" })}
  ${tablet({ width: "65%" })}
  ${largeMobile({ width: "70%" })}

  ${mobile({ width: "70%" })}
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
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(5).max(20).required(),
  confirmpassword: Yup.string().oneOf([Yup.ref("password")]),
});
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const notify = () =>
    toast.success("Account sent successfully!", { position: "top-center" });

  const submitForm = async (data) => {
    const { firstname, lastname, username, email, password } = data;
    try {
      const response = await axios.post(`${APP_END_POINT}/auth/register`, {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      console.log(response);
      if (response.status === 201) {
        notify();

        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Server Error!", { position: "top-center" });
      }
      if (error.response.status === 501) {
        toast.error("User already registered!", { position: "top-center" });
      }
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>

          <Form onSubmit={handleSubmit(submitForm)}>
            <ToastContainer />
            <InputContainer>
              <Input
                type="text"
                placeholder="First Name"
                name="firstname"
                {...register("firstname")}
              />
              <Para>{errors.firstname?.message}</Para>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                placeholder="Last Name"
                name="lastname"
                {...register("lastname")}
              />
              <Para>{errors.lastname?.message}</Para>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                placeholder="Username"
                name="username"
                {...register("username")}
              />
              <Para>{errors.username?.message}</Para>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                {...register("email")}
              />
              <Para>{errors.email?.message}</Para>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                placeholder="Password"
                name="password"
                {...register("password")}
              />
              <Para>{errors.password?.message}</Para>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                placeholder="Confirm Password"
                name="confirmpassword"
                {...register("confirmpassword")}
              />
              <Para>{errors.confirmpassword && "password should match"}</Para>
            </InputContainer>

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">Create</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
