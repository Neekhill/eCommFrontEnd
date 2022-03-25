import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { large, largeMobile, mobile, tablet } from "../responsive";
const Wrapper = styled.div`
  display: flex;
  padding: 50px 100px;
  margin-top: 50px;
  ${large({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;

const ImageThumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${largeMobile({ marginBottom: "20px" })}
  ${mobile({ marginBottom: "20px" })}
`;
const SkeletonImageThumb = styled.div`
  width: 100px;
  margin: 4px 8px 4px 0;
  ${largeMobile({ width: "80px", height: "80px" })}
  ${mobile({ width: "60px", height: "60px" })}
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
  margin: 20px 0;
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
  margin: 20px 0;
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
`;
const Quantity = styled.div`
  flex: 1;
  margin-right: 10px;
`;
const Button = styled.div`
  flex: 3;
`;

function SkeletonSingleProduct() {
  return (
    <Wrapper>
      <ImageContainer>
        <Skeleton height={460} />
        <ImageThumbContainer>
          <SkeletonImageThumb>
            <Skeleton height={100} />
          </SkeletonImageThumb>
          <SkeletonImageThumb>
            <Skeleton height={100} />
          </SkeletonImageThumb>
          <SkeletonImageThumb>
            <Skeleton height={100} />
          </SkeletonImageThumb>
          <SkeletonImageThumb>
            <Skeleton height={100} />
          </SkeletonImageThumb>
        </ImageThumbContainer>
      </ImageContainer>
      <InfoContainer>
        <Title>
          <Skeleton height={80} />
        </Title>
        <Price>
          <Skeleton height={50} width={150} />
        </Price>
        <Desc>
          <Skeleton height={16} count={3} />
          <Skeleton height={16} width={180} />
        </Desc>
        <Delivery>
          <Skeleton height={16} />
        </Delivery>
        <Filter>
          <Skeleton height={30} width={180} />
          <Skeleton height={30} width={180} />
        </Filter>
        <AddContainer>
          <Quantity>
            <Skeleton height={60} />
          </Quantity>
          <Button>
            <Skeleton height={60} />
          </Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
  );
}

export default SkeletonSingleProduct;
