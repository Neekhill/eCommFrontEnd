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
    // fetching products based on category or all products
    const getProducts = async () => {
      try {
        const result = await axios.get(
          category
            ? `http://localhost:9000/products?category=${category}`
            : `http://localhost:9000/products`
        );
        console.log(result.data.products);
        setProducts(result.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <ProductItem
          img={item.img[0]}
          key={item._id}
          title={item.title}
          price={item.price}
        />
      ))}
    </Container>
  );
};

export default Products;
