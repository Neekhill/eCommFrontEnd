import { useState } from "react";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { sliderData } from "../data";
import { large, mobile, tablet, tabletPlus, Xlarge } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  border: 0.09x solid black;
  ${Xlarge({ height: "100vh" })}
  ${large({ height: "95vh" })}
  ${tabletPlus({ height: "70vh" })}
  ${tablet({ display: "none" })}
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${Xlarge({ height: "93vh" })}
  ${large({ height: "98vh" })}
  ${tabletPlus({ height: "65vh" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;

  justify-content: flex-end;
  ${Xlarge({ height: "90%" })}
  ${large({ height: "95%" })}
  ${tabletPlus({ height: "58%" })}
`;
const Img = styled.img`
  height: 88%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding-left: 100px;
  ${Xlarge({ paddingLeft: "50px" })}
`;
const Title = styled.h2`
  font-size: 70px;
  ${Xlarge({ fontSize: "60px" })}
  ${large({ fontSize: "50px" })}
  ${tabletPlus({ fontSize: "35px" })}
`;
const Desc = styled.p`
  margin: 35px 0 40px 0;
  font-size: 20px;
  font-weight: 500;
  font-family: Georgia, "Times New Roman", Times, serif;
  letter-spacing: 3px;
  ${large({ fontSize: "16px" })}
  ${tabletPlus({ fontSize: "16px", margin: "25px 0 30px 0" })}
`;
const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: black;
  ${tabletPlus({ fontSize: "14px", padding: "10px 15px" })}
`;

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex > 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Arrow
          direction="left"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowLeftIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderData.map((item, i) => (
            <SlideContainer key={i}>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
              <ImgContainer>
                <Img src={item.img}></Img>
              </ImgContainer>
            </SlideContainer>
          ))}
        </Wrapper>
        <Arrow
          direction="right"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowRightIcon />
        </Arrow>
      </Container>
    </div>
  );
}

export default HeroSlider;
