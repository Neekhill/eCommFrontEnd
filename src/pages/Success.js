import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Success = () => {
  const location = useLocation();

  const data = location.state.response;
  const cart = location.state.cart;
  const user = useSelector((state) => state.user);
  const [orderId, setOrderId] = useState(null);

  console.log(data);
  console.log(data.razorpay_order_id);

  console.log(cart);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post(
          "https://nikhil-ecomm.herokuapp.com/orders",
          {
            _id: data.razorpay_order_id,
            userId: user.currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              productTitle: item.title,
              quantity: item.quantity,
              size: item.size,
              color: item.color,
              img: item.img[0],
              price: item.price,
            })),
            amount: cart.total,
            address: user.currentUser.billingaddress,
          },
          { headers: { token: `Bearer ${user.currentUser.token}` } }
        );

        res.status === 201 && setOrderId(data.razorpay_order_id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, user]);

  return (
    <>
      <Navbar />
      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginBottom: "30px",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          FLYBUYY.
        </div>
        <p style={{ color: "#676768", fontSize: "16px" }}>
          {orderId
            ? `Order has been created successfully. Your order number is ${orderId}`
            : `Successfull. Your order is being prepared...`}
        </p>
        <Link to="/">
          <button
            style={{
              padding: 20,
              marginTop: 20,
              backgroundColor: "teal",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Go to Homepage
          </button>
        </Link>
      </div>
    </>
  );
};

export default Success;
