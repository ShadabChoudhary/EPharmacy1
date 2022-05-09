import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./ShippingDts.css";

function ShippingDts() {
  const location = useLocation();
  console.log(location);

  return (
    <section className="main_container">
      <div className="form_container">
        <div>
          <h1 className="form_title">Shipping Details</h1>
        </div>
        <div className="container">
          <div className="right-container">
            <form className="signup" method="post">
              {/* <div className="err-msg-container">
                {message && <h1 className="err-msg">{message}</h1>}
              </div> */}
              <div className="ship_form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="input_control"
                  name="name"
                  required
                />
              </div>
              <div className="ship_form">
                <label htmlFor="email" className="form-label"></label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="input_control"
                  name="email"
                />
              </div>
              <div className="ship_form">
                <label htmlFor="password" className="form-label"></label>
                <input
                  id="mobileNumber"
                  type="text"
                  placeholder="Mobile Number"
                  className="input_control"
                  name="password"
                />
              </div>
              <div className="ship_form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Pincode"
                  className="input_control"
                  name="name"
                />
              </div>
              <div className="ship_form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Flat, House no., Building"
                  className="input_control"
                  name="name"
                />
              </div>
              <div className="ship_form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Landmark"
                  className="input_control"
                  name="name"
                />
              </div>
              <div className="ship_form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Country"
                  className="input_control"
                  name="name"
                />
              </div>
              <div className="ship_form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  id="name"
                  type="text"
                  placeholder="State"
                  className="input_control"
                  name="name"
                />
              </div>
              <Link to="/checkout/payment">
                <button className="ship_pay_btn" type="submit">
                  Pay {location.state}
                </button>
              </Link>
            </form>
          </div>
          {/* <div className="left-container">
            <div>
              <img className="reg-image" src={regImage} alt="RegImage" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ShippingDts;
