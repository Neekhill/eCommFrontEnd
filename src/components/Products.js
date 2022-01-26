import styled from "styled-components";
import { productsData } from "../data";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  margin: 30px 0;
  justify-content: center;
`;

const Products = ({ category, filters, sort }) => {
  console.log(category, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get(
          category
            ? `http://localhost:9000/products?category=${category}`
            : `http://localhost:9000/products`
        );
        console.log(result.data);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);
  return (
    <Container>
      {productsData.map((item) => (
        <ProductItem
          img={item.img[0]}
          key={item.id}
          title={item.title}
          price={item.price}
        />
      ))}
    </Container>
  );
};

export default Products;
