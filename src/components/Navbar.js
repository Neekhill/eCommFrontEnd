import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile, tablet } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  ${mobile({ height: "50px" })}
  ${tablet({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  ${tablet({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  ${mobile({ margin: "0px 10px" })}
  ${tablet({ margin: "0px 10px" })}
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
  ${mobile({ fontSize: "24px" })}
  ${tablet({ fontSize: "32px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${tablet({ flex: 1, justifyContent: "center" })}
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
          </Left>

          <Center>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Logo>NIKHILL.</Logo>
            </Link>
          </Center>

          <Right>
            {user ? (
              <>
                <MenuItem
                  style={{ letterSpacing: "0.6px", fontWeight: "light" }}
                >
                  {user.username.toUpperCase()}
                </MenuItem>
                <MenuItem>LOGOUT</MenuItem>
              </>
            ) : (
              <>
                {" "}
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
