import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductCartCard from "../components/ProductCartCard";
import { large, mobile, tablet } from "../responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { APP_END_POINT } from "../constant";

const Conatiner = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.2s ease;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${large({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  padding: 20px;
  border: 0.5px solid lightgray;
  height: 50vh;
  border-radius: 10px;
`;
const SummaryTitle = styled.h2`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && 26}px;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (
      cart.products.length &&
      user.currentUser &&
      user.currentUser.billingaddress
    ) {
      displayRazorpay();
    } else {
      !cart.products.length &&
        !user.currentUser &&
        toast.error("Cart is Empty and User must login before checkout!", {
          position: "top-center",
        });

      cart.products.length &&
        !user.currentUser &&
        toast.error("User must login before checkout!", {
          position: "top-center",
        });

      !cart.products.length &&
        user.currentUser &&
        toast.error("Cart is Empty!", {
          position: "top-center",
        });

      cart.products.length &&
        user.currentUser &&
        !user.currentUser.billingaddress &&
        toast.error("Shipping address required before checkout!", {
          position: "top-center",
        }) &&
        setTimeout(() => {
          navigate("/userprofile");
        }, 5000);
    }
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const resFromBackend = await axios.post(
      `${APP_END_POINT}/checkout/razorpay`,
      {
        amount: cart.total,
      },
      { headers: { token: `Bearer ${user.currentUser.token}` } }
    );
    console.log(resFromBackend);

    const options = {
      key: "rzp_test_Qidn5zBgTBRiXC",
      currency: resFromBackend.data.currency,
      amount: resFromBackend.data.amount,
      order_id: resFromBackend.data.id,
      name: "FLYBUYY.",
      description: "Thank you!",
      image: "",
      handler: function (response) {
        /* alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature); */
        navigate("/success", { state: { response, cart } });
        dispatch(clearCart());
      },
      prefill: {
        name: user.currentUser.firstname,
        email: user.currentUser.email,
        phone_number: user.currentUser.phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Conatiner>
      <ToastContainer />
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/products/allproducts">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cart.cartQuantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton onClick={handleCheckout}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <ProductCartCard
                key={product.cartItemId}
                img={product.img[0]}
                title={product.title}
                id={product.cartItemId}
                color={product.color}
                size={product.size}
                quantity={product.quantity}
                price={product.price}
              />
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs.{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs.360</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs. -360</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Grand Total</SummaryItemText>
              <SummaryItemPrice>Rs.{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Conatiner>
  );
};

export default Cart;
