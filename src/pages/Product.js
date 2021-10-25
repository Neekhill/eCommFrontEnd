import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Add, Remove } from "@mui/icons-material";
import { productDataDetail } from "../data";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px 100px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 95vh;
  object-fit: cover;
`;

const ImageThumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageThumb = styled.img`
  width: 100px;
  height: 100px;
  margin: 4px 8px 8px 0;
`;

const InfoContainer = styled.div`
  padding: 0 50px;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.15;
`;
const Price = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 20px 0;
`;
const Desc = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  margin: 30px 0;
`;
const Delivery = styled.div`
  display: flex;
  margin: 20px 0;
`;
const DeliveryIcon = styled.p`
  font-size: 24px;
`;
const DeliveryMsg = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin-left: 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: ;
`;

const Filter = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-size: 24x;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
`;

const AmountContainer = styled.div`
  flex: 2;
  background-color: lightgray;
  padding: 15px;
  margin-right: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  flex: 8;
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.3s ease;
  }
`;

const Product = () => {
  const [productDetail, setProductDetail] = useState(productDataDetail[0]);

  const [slideIndex, setslideIndex] = useState(0);

  const handleSlideIndex = (index) => {
    setslideIndex(index);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={productDetail.src[slideIndex]}></Image>
          <ImageThumbContainer>
            {productDetail.src.map((img, index) => (
              <ImageThumb
                src={img}
                key={index}
                onClick={() => handleSlideIndex(index)}
              />
            ))}
          </ImageThumbContainer>
        </ImageContainer>
        <InfoContainer>
          <Title>{productDetail.title}</Title>
          <Price>Rs.{productDetail.price}</Price>
          <Desc>{productDetail.description}</Desc>
          <Delivery>
            <DeliveryIcon>
              <LocalShippingOutlinedIcon />
            </DeliveryIcon>
            <DeliveryMsg>{productDetail.delivery}</DeliveryMsg>
          </Delivery>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="red"></FilterColor>
              <FilterColor color="pink"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="yellow"></FilterColor>
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove cursor="pointer" />
              <Amount>1</Amount>
              <Add cursor="pointer" />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
    </Container>
  );
};

export default Product;
