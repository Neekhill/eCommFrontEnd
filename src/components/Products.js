import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductSkeletonCard from "./ProductSkeletonCard";
import { APP_END_POINT } from "../constant";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  //padding: 30px;
  margin: 60px 0;
  justify-content: center;
`;

const Products = ({ category, filters, sort }) => {
  //console.log(category, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // fetching products based on category or all products
    const getProducts = async () => {
      try {
        const resonse = await axios.get(
          category
            ? `${APP_END_POINT}/products?category=${category}`
            : `${APP_END_POINT}/products`
        );
        //console.log(resonse);
        setIsLoading(false);
        setProducts(resonse.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  //filtering products
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

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prevFilteredProducts) => {
        return [...prevFilteredProducts].sort(
          (a, b) => a.createdAt - b.createdAt
        );
      });
    } else if (sort === "asc") {
      setFilteredProducts((prevFilteredProducts) => {
        return [...prevFilteredProducts].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prevFilteredProducts) => {
        return [...prevFilteredProducts].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);
  return (
    <Container>
      {isLoading ? (
        <>
          <ProductSkeletonCard />
          <ProductSkeletonCard />
          <ProductSkeletonCard />
          <ProductSkeletonCard />
          <ProductSkeletonCard />
          <ProductSkeletonCard />
          <ProductSkeletonCard />
          <ProductSkeletonCard />
        </>
      ) : category ? ( // if category is there then showing filtered products
        filteredProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))
      ) : (
        products
          .slice(0, 8) // else showing only 8 products
          .map((item) => <ProductItem item={item} key={item.id} />)
      )}
    </Container>
  );
};

export default Products;
