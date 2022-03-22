import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { largeMobile, mobile, tablet } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  ${tablet({ height: "60px" })}
  ${mobile({ height: "60px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${tablet({ padding: "10px 5px" })}//${mobile({ padding: "10px 2px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${largeMobile({
    marginLeft: "12px",
    width: "50px",
  })}
`;
const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${tablet({ margin: "0px 10px" })}
  ${largeMobile({ display: "none" })}
`;
const MobileSearch = styled.span`
  display: "none";
  ${largeMobile({
    display: "block",
  })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  ${tablet({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${largeMobile({ fontSize: "24px" })}
  ${tablet({ fontSize: "32px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ flex: 1, justifyContent: "center" })}
  ${largeMobile({ flex: 8, justifyContent: "flex-end", marginRight: "16px" })}
  ${mobile({ flex: 5, justifyContent: "flex-end" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  ${tablet({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Lang>EN</Lang>
            <SearchContainer>
              <Input placeholder="Search" />
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>

            <MobileSearch>
              <SearchIcon style={{ color: "gray", fontSize: 24 }} />
            </MobileSearch>
          </Left>

          <Center>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Logo>FLYBUYY.</Logo>
            </Link>
          </Center>

          <Right>
            {user ? (
              <>
                <Link
                  to="/userprofile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem
                    style={{ letterSpacing: "0.6px", fontWeight: "light" }}
                  >
                    {user.firstname.toUpperCase()}
                  </MenuItem>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>SIGN IN</MenuItem>
                </Link>
              </>
            )}

            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>
                <Badge badgeContent={cartQuantity} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}

export default Navbar;
