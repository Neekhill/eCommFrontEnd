import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          img={item.img}
          title={item.title}
          category={item.category}
        />
      ))}
    </Container>
  );
};

export default Categories;
