import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  max-width: 300px;
  min-width: 300px;
`;

const ProductSkeletonCard = () => {
  return (
    <Container>
      <Skeleton height={350}></Skeleton>

      <Skeleton height={21.5} width={250}></Skeleton>
      <Skeleton height={26.5} width={120}></Skeleton>
      <Skeleton wwidth={200} height={39}></Skeleton>
    </Container>
  );
};

export default ProductSkeletonCard;
