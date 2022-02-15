import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
