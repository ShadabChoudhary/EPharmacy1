import React, { createContext, useReducer } from "react";
import { cartReducer } from "../Reducer/CartReducer.js";

export const cartContext = createContext();

const CartContext = ({ children }) => {
  const initialState = {
    items: [],
    totalItem: 0,
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContext;
