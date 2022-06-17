import React from "react";
import { Link } from "react-router-dom";
import "./success.css";

function SuccessPage() {
  return (
    <div className="success_page_container">
      <div className="success_title_container">
        <h2 className="success_title">
          Payment successfully done <br />
          Your order have been placed, your product will be delivered shortly.
        </h2>
      </div>

      <p>
        <Link className="bth" to="/">
          home Page
        </Link>
      </p>
    </div>
  );
}

export default SuccessPage;
