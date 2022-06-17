import React from "react";
import "./ForgotPass.css";
import { useState } from "react";

function ForgotPass() {
  const [recEmail, setRecEmail] = useState({ email: "" });
  const [message, setMessage] = useState();

  const handleInputs = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRecEmail({ ...recEmail, [name]: value });

    // document.querySelector(".error-message").style.display = "none";
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { email } = recEmail;
    const postEmail = await fetch("http://localhost:8000/api/password/forgot", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await postEmail.json();
    console.log(data);

    if (data.success === false) {
      console.log("message not sent");
      setMessage(data);
    } else {
      console.log("Message sent successfully");
      setMessage(data);
    }
  };

  return (
    <div className="pass-recover-container">
      <div>
        <h1>Please enter your Email</h1>
      </div>
      <form action="post" className="email-input-container" method="post">
        <div className="form">
          <input
            value={recEmail.email}
            onChange={handleInputs}
            type="email"
            placeholder="Enter your email"
            className="email-input"
            name="email"
          />
        </div>
        <div>
          <button className="send-email-btn" type="submit" onClick={sendEmail}>
            Send Email
          </button>
        </div>
      </form>
      {message && (
        <div className="error-message">
          {message.success ? (
            <span className="success">{message.message}</span>
          ) : (
            <span className="danger">{message.message}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default ForgotPass;
