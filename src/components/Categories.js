import { map } from "async";
import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px 0;
  margin-top: 20px;
  margin-bottom: 80px;
  padding-right: 35px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} img={item.img} title={item.title} />
      ))}
    </Container>
  );
};

export default Categories;
