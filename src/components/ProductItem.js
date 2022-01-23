import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";

const ProductContainer = styled.div`
  flex: 1;
  margin: 10px;
  max-width: 300px;
  display: flex;
`;
const ProductWrapper = styled.div``;
const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 350px;
  width: 300px;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5 ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoBottomTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin: 8px 0px;
`;
const InfoBottomPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const InfoBottomPriceSpan = styled.span`
  font-weight: normal;
  font-size: 16px;
`;
const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.3s ease;
  }
`;

const ProductItem = ({ img, title, price }) => {
  return (
    <ProductContainer>
      <ProductWrapper>
        <Container>
          <Circle />
          <Image src={img}></Image>
          <Info>
            <Icon>
              <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
              <SearchOutlinedIcon />
            </Icon>
            <Icon>
              <FavoriteBorderOutlinedIcon />
            </Icon>
          </Info>
        </Container>
        <InfoBottom>
          <InfoBottomTitle>{title}</InfoBottomTitle>
          <InfoBottomPrice>
            <InfoBottomPriceSpan>Rs. </InfoBottomPriceSpan>
            {price}
          </InfoBottomPrice>
        </InfoBottom>
        <AddToCartButton>View Details</AddToCartButton>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductItem;
