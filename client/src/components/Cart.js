import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "./Context/CartContext.js";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Header from "./Header.js";
import "./Cart.css";

function Cart() {
  const {
    cartState: { items, totalItem },
    cartDispatch,
  } = useContext(cartContext);
  const [total, setTotal] = useState();

  // console.log(items);
  useEffect(() => {
    setTotal(items.reduce((acc, curr) => acc + Number(curr.price), 0));
  });

  const removeCart = (id) => {
    cartDispatch({ type: "REMOVE_FROM_CART", playload: id });
  };

  return (
    <div className="cart_container">
      <Header />
      <div className="cart_content">
        <table className="table_content">
          <tbody className="body_content">
            {items.map((item) => (
              <tr key={item.id} className="product_id">
                <th>
                  <img className="cart_img" src={item.img} alt="cart_item" />
                </th>
                <th>
                  <p>{item.title}</p>
                </th>
                <th>
                  <p>{item.price}</p>
                </th>
                <th onClick={() => removeCart(item.id)}>
                  <RiDeleteBin5Fill className="del_icon" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="amt_container">
          <h3 className="text-end">Total Items: {totalItem}</h3>
          <h3 className="text-end">Total Amount: M.R.P {total}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
