// import { useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
import ForgotPass from "./components/ForgotPass";
import ResetPass from "./components/ResetPass";
import ProductDpt from "./components/ProductDpt";
import Buy from "./components/Buy";
import Search from "./components/Search.js";
import Payment from "./components/stripe/Payment.js";

function App() {
  // const { state } = useContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-pass" element={<ForgotPass />} />
        <Route path="/password/reset/:token" element={<ResetPass />} />
        <Route path="/product" element={<ProductDpt />} />
        <Route path="/product/:id" element={<Buy />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
