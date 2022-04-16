import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Email } from "@material-ui/icons";
import PasswordIcon from "@mui/icons-material/Password";
import loginImage from "../components/images/LoginImage.jpg";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [getError, setGetError] = useState();
  const navigate = useNavigate();

  const handleInputs = async (e) => {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
    e.target.classList.remove("error");
    e.target.parentElement.querySelector("span").style.display = "none";
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    const PostUser = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await PostUser.json();

    const errorHandler = (data) => {
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
      console.log("Invalid cridentials");
      setGetError(data.message);
      errorHandler(data.message);
    } else {
      console.log("Login successfull");
      setGetError(data.message);
      navigate("/", { replace: false });
    }
  };

  return (
    <section className="main-container">
      <div className="form-container">
        <div>
          <h1 className="form-title">Login</h1>
        </div>
        <div className="container">
          <div className="right-container">
            <form method="POST" className="signup">
              <div className="err-msg-container">
                {getError && <h1 className="err-msg">{getError}</h1>}
              </div>
              <div className="form">
                <label htmlFor="email" className="form-label">
                  <Email style={{ fontSize: 30 }} />
                </label>
                <input
                  type="text"
                  value={login.email}
                  onChange={handleInputs}
                  placeholder="Email"
                  className="input-control"
                  name="email"
                />
                <span>Required</span>
              </div>
              <div className="form">
                <label htmlFor="password" className="form-label">
                  <PasswordIcon style={{ fontSize: 30 }} />
                </label>
                <input
                  type="password"
                  value={login.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  className="input-control"
                  name="password"
                />
                <span>Required</span>
              </div>
              <div className="forgot-pass-container">
                <Link to="/recover-pass" className="forgot-pass">
                  <h4>Forgot password?</h4>
                </Link>
              </div>
              <button className="btn" type="button" onClick={loginUser}>
                Login
              </button>
            </form>
            <div className="create-user-container">
              <Link to="/register" className="create-user">
                <h3>Don't have an account?Create one</h3>
              </Link>
            </div>
          </div>
          <div className="left-container">
            <div>
              <img className="reg-image" src={loginImage} alt="RegImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
