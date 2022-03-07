import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

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
          "http://localhost:9000/orders",
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
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
