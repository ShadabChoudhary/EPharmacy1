import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./resetPass.css";

function ResetPass() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState();

  const handleInputs = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewPassword({ ...newPassword, [name]: value });

    e.target.classList.remove("error");
    e.target.parentElement.querySelector("span").style.display = "none";
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = newPassword;

    const postData = await fetch(
      "http://localhost:8000/api/password/reset/:token",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          confirmPassword,
          token,
        }),
      }
    );
    const data = await postData.json();
    console.log(data);

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
      console.log("something went wrong");
      setMessage(data);
      errorHandler(data.message);
    } else {
      console.log("Password reset successfull");
      setMessage(data);
    }
  };

  return (
    <section className="reset-main-container">
      {message && (
        <div className="error-message">
          {message.success ? (
            <h1 className="success">{message.message}</h1>
          ) : (
            <h1 className="danger">{message.message}</h1>
          )}
        </div>
      )}

      <div className="form-container">
        <div className="form-title">
          <h1>Reset Password</h1>
        </div>
        <div className="container">
          <div className="right-container">
            <form className="signup">
              <div className="form">
                <label htmlFor="name" className="form-label"></label>
                <input
                  type="password"
                  value={newPassword.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  className="input-control"
                  name="password"
                />
                <span>Required</span>
              </div>
              <div className="form">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="password"
                  value={newPassword.confirmPassword}
                  onChange={handleInputs}
                  placeholder="ConfirmPassword"
                  className="input-control"
                  name="confirmPassword"
                />
                <span>Required</span>
              </div>
              <button className="btn" type="submit" onClick={sendData}>
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPass;
