import React from "react";
import { useState } from "react";
import { AccountBox, Email } from "@material-ui/icons";
import PasswordIcon from "@mui/icons-material/Password";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import regImage from "../components/images/regImg2.png";

function Register() {
  const [regUser, setRegUser] = useState({ name: "", email: "", password: "" });
  const [message, setmessage] = useState();
  const navigate = useNavigate();

  const handleInputs = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRegUser({ ...regUser, [name]: value });

    e.target.classList.remove("error");
    e.target.parentElement.querySelector("span").style.display = "none";
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password } = regUser;

    const PostUser = await fetch("/api/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await PostUser.json();

    const errorhandler = (data) => {
      const inputError = document.querySelectorAll(".input-control");
      if (data) {
        inputError.forEach((item) => {
          if (item.value === "") {
            item.classList.add("error");
            item.parentElement.querySelector("span").style.cssText =
              "display: block; color: red";
          }
        });
      }
    };

    if (data.success === false) {
      console.log("Invalid Registeration");
      setmessage(data.message);
      errorhandler(data.message);
    } else {
      console.log("Registeration successfull");
      setmessage(data.message);
      navigate("/login", { replace: false });
    }
  };

  return (
    <section className="main-container">
      <div className="form-container">
        <div>
          <h1 className="form-title">Create an account</h1>
        </div>
        <div className="container">
          <div className="right-container">
            <form className="signup" method="post">
              <div className="err-msg-container">
                {message && <h1 className="err-msg">{message}</h1>}
              </div>
              <div className="form">
                <label htmlFor="name" className="form-label">
                  <AccountBox style={{ fontSize: 30 }} />
                </label>
                <input
                  id="name"
                  type="text"
                  value={regUser.name}
                  onChange={handleInputs}
                  placeholder="Your Name"
                  className="input-control"
                  name="name"
                />
                <span className="req-err">required</span>
              </div>
              <div className="form">
                <label htmlFor="email" className="form-label">
                  <Email style={{ fontSize: 30 }} />
                </label>
                <input
                  id="email"
                  type="email"
                  value={regUser.email}
                  onChange={handleInputs}
                  placeholder="Email"
                  className="input-control"
                  name="email"
                />
                <span>required</span>
              </div>
              <div className="form">
                <label htmlFor="password" className="form-label">
                  <PasswordIcon style={{ fontSize: 30 }} />
                </label>
                <input
                  id="password"
                  type="password"
                  value={regUser.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  className="input-control"
                  name="password"
                />
                <span>required</span>
              </div>
              <button className="btn" type="submit" onClick={PostData}>
                Register
              </button>
            </form>

            <div className="existing-user">
              <h3>
                <Link to="/login" className="already-acc-title">
                  Already have an account?Login
                </Link>
              </h3>
            </div>
          </div>
          <div className="left-container">
            <div>
              <img className="reg-image" src={regImage} alt="RegImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
