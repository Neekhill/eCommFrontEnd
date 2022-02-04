import { useState, useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Add, Remove } from "@mui/icons-material";
import { productDataDetail } from "../data";
import { large, mobile, tablet } from "../responsive";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px 100px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}
  ${large({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;

const Image = styled.img`
  width: 100%;
  height: 95vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;

const ImageThumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ImageThumb = styled.img`
  width: 100px;
  height: 100px;
  margin: 4px 8px 8px 0;
  cursor: pointer;
  object-fit: cover;
  ${mobile({ width: "60px", height: "60px", objectFit: "cover" })}
`;

const InfoContainer = styled.div`
  padding: 0 50px;
  flex: 1;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.15;
  ${mobile({ fontSize: "32px" })}
`;
const Price = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 20px 0;
  ${mobile({ fontSize: "24px" })}
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
  const [productDetail /* setProductDetail */] = useState(productDataDetail[0]);
  const [slideIndex, setslideIndex] = useState(0);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/products/find/${productId}`
        );
        console.log(response.data.product);
        setProduct(response.data.product);
        setProductImages(response.data.product.img);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  const handleSlideIndex = (index) => {
    setslideIndex(index);
  };
  const handleQuantity = (type) => {
    type === "add" && setQuantity(quantity + 1);
    type === "remove" && quantity > 1 && setQuantity(quantity - 1);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={productImages[slideIndex]}></Image>
          <ImageThumbContainer>
            {productImages.map((imgItem, index) => (
              <ImageThumb
                src={imgItem}
                key={index}
                onClick={() => handleSlideIndex(index)}
              />
            ))}
          </ImageThumbContainer>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>Rs.{product.price}</Price>
          <Desc>{product.desc}</Desc>
          <Delivery>
            <DeliveryIcon>
              <LocalShippingOutlinedIcon />
            </DeliveryIcon>
            <DeliveryMsg>
              products are usually delivered in 3-7 days.
            </DeliveryMsg>
          </Delivery>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colors?.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  onClick={(e) => setColor(c)}
                ></FilterColor>
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.sizes?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                cursor="pointer"
                onClick={() => handleQuantity("remove")}
              />
              <Amount>{quantity}</Amount>
              <Add cursor="pointer" onClick={() => handleQuantity("add")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
    </Container>
  );
};

export default Product;
