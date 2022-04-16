import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import "./search.css";

function Search() {
  const location = useLocation();
  // console.log(location.state);
  return (
    <div>
      <Header />
      {location.state.map((item, i) => (
        <>
          <div className="search_container">
            <div className="search_content">
              <div className="drug_content">
                <img src={item.images[0].url} alt="drug" key={i} />
              </div>
              <div className="info" key={i}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/product"
                  state={item}
                >
                  <h3 className="search_title" key={i}>
                    {item.name}
                  </h3>
                </Link>
                <p key={i}>M.R.P: {item.price}</p>
                <p key={i}>Brand: {item.brand}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Search;
