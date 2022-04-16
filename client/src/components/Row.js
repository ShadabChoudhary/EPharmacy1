import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Row.css";

function Row(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const info = await fetch(`/api/product/category/${props.category}`);
      const response = await info.json();
      if (isMounted) setData(response.product);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="Row_container">
      <div className="carousel">
        <div className="carousel_img">
          {data.map((items, i) => {
            return (
              <Link to="/product" state={items} key={i}>
                <img
                  className="product_img"
                  src={items.images[0].url}
                  alt="product"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Row;
