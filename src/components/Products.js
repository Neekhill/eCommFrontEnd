import styled from "styled-components";
import { productsData } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  margin: 30px 0;
  justify-content: center;
`;

const Products = () => {
  return (
    <Container>
      {productsData.map((item) => (
        <ProductItem
          img={item.img}
          key={item.id}
          title={item.title}
          price={item.price}
        />
      ))}
    </Container>
  );
};

export default Products;
