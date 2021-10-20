import styled from "styled-components";
import { productsData } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  margin: 30px 0;
`;
const Products = () => {
  return (
    <Container>
      {productsData.map((item) => (
        <ProductItem img={item.img} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
