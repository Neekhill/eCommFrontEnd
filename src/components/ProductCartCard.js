import { useState } from "react";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile, tablet } from "../responsive";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  incProductQuantity,
  decProductQuantity,
} from "../redux/cartSlice";

const ProductContainer = styled.div`
  display: flex;
`;
const CrossIconContainer = styled.span``;
const Product = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 100px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductId = styled.span``;
const ProductName = styled.span``;
const ProductColorName = styled.span`
  display: flex;
`;
const ProductColor = styled.div`
  margin-left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

//Quantity details
const QuantityDetail = styled.div`
  display: flex;
  align-items: center;
`;
const ProductQuantityContainer = styled.div`
  background-color: #f2f1f0;
  padding: 10px;
  font-size: 20px;
  border: 1px solid lightgray;
  ${mobile({ fontSize: "16px", padding: "1px", margin: "10px 0px" })}
  ${tablet({ fontSize: "16px", padding: "1px", margin: "10px 0px" })}
`;
const ProductQuantity = styled.span`
  padding: 0 30px;
  ${mobile({ padding: "0 10px" })}
  ${tablet({ padding: "0 20px" })}
`;

//price details
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  ${mobile({ justifyContent: "start" })}
  ${tablet({ justifyContent: "start" })}
`;
const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 500;
  ${mobile({ marginBottom: "20px" })}
  ${tablet({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
  width: 95%;
  margin: 0 2.5%;
`;

const ProductCartCard = ({ img, title, id, color, size, quantity, price }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const handleIncQuantity = () => {
    dispatch(incProductQuantity({ id }));
  };
  const handleDecQuantity = () => {
    dispatch(decProductQuantity({ id }));
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct({ id }));
  };
  return (
    <>
      <ProductContainer
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <CrossIconContainer
            style={{
              cursor: "pointer",
              paddingRight: "5px",
              paddingTop: "20px",
              transition: "all 1s ease-in-out",
            }}
          >
            <ClearIcon onClick={handleDeleteProduct} />
          </CrossIconContainer>
        )}
        <Product>
          <ProductDetail>
            <Image src={img}></Image>
            <Details>
              <ProductName>
                <b>Product: </b>
                {title}
              </ProductName>
              <ProductId>
                <b>Product ID: </b>
                {id}
              </ProductId>
              <ProductColorName>
                <b>Color: </b>
                <ProductColor color={color}></ProductColor>
              </ProductColorName>
              <ProductSize>
                <b>Size: </b>
                {size}
              </ProductSize>
            </Details>
          </ProductDetail>
          <QuantityDetail>
            <ProductQuantityContainer>
              <Remove cursor="pointer" onClick={handleDecQuantity} />
              <ProductQuantity>{quantity}</ProductQuantity>
              <Add cursor="pointer" onClick={handleIncQuantity} />
            </ProductQuantityContainer>
          </QuantityDetail>
          <PriceDetail>
            <ProductPrice>Rs.{price * quantity}</ProductPrice>
          </PriceDetail>
        </Product>
      </ProductContainer>
      <Hr />
    </>
  );
};

export default ProductCartCard;
