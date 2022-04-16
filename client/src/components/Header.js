import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import { AppBar, Toolbar } from "@mui/material";
import {
  AccountCircleRounded,
  AddShoppingCartOutlined,
  Search,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { cartContext } from "./Context/CartContext.js";

function Header() {
  const [data, setData] = useState();
  const [product, setProducts] = useState({});
  const [productName, setProductName] = useState("");
  const {
    cartState: { totalItem },
  } = useContext(cartContext);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const getData = await fetch("/api/me");

      const res = await getData.json();

      if (res.success) {
        if (isMounted) setData(res);
      } else {
        setData(null);
      }
      console.log(data);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = async () => {
    const getData = await fetch("/api/logout");
    await getData.json();
    setData(null);
  };

  useEffect(() => {
    let isMounted = true;
    const getAllProducts = async () => {
      try {
        // console.log(productName);
        const Fetch = await fetch(`/api/products?keyword=${productName}`);
        const response = await Fetch.json();
        if (isMounted) setProducts(response.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
    return () => {
      isMounted = false;
    };
  });

  return (
    <div>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <div className="nav-container">
            <div className="main_logo">
              <Link to="/">
                <img
                  className="logo"
                  src="https://res.cloudinary.com/dkrutvoe5/image/upload/v1649990803/ePharmacy/Logo/logo3-removebg-preview_nz6s7y.png"
                  alt="Logo"
                ></img>
              </Link>
              <p>Bringing the medicine at your door</p>
            </div>

            <div className="search-panel">
              <div className="search-icon">
                <Link to="/search" state={product}>
                  <Search style={{ fontSize: 30, color: "#1976d2" }}></Search>
                </Link>
              </div>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="input-txt"
                type="text"
                placeholder="Search for medicines"
              ></input>
            </div>

            <Link to="/cart" className="cart-container">
              <AddShoppingCartOutlined />
              <p className="cart">Cart</p>
              <div className="wrapper">
                <p>{totalItem}</p>
              </div>
            </Link>
            <div className="log-reg_container">
              {data ? (
                <div class="dropdown">
                  <button class="dropbtn">{data.user.name}</button>
                  <div class="dropdown-content">
                    <span style={{ cursor: "pointer" }} onClick={handleClick}>
                      logout
                    </span>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="account-container">
                  <AccountCircleRounded />
                  <p className="log-reg">Login/register</p>
                </Link>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* {console.log(product)} */}
    </div>
  );
}

export default Header;
