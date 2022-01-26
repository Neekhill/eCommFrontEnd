import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  max-height: 500px;
  ${mobile({ height: "40vh" })}

  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  font-weight: 600;
  background-color: white;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ img, title, category }) => {
  return (
    <Container>
      <Link to={`/products/${category}`}>
        <Image src={img}></Image>
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
