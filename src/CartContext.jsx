import React, { createContext, useReducer } from "react";
// import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  // const [cart, dispatch] = useReducer(CartReducer, {
  //   shoppingCart: [],
  //   totalPrice: 0,
  //   totalQty: 0,
  // });

  const product = {
    id: 456,
    ProductName: "snake plant",
    ProductPrice: 20,
    qty: 2,
  };
  const initialValue = { shoppingCart: [product], totalPrice: 0, totalQty: 0 };

  return (
    <CartContext.Provider value={initialValue}>
      {props.children}
    </CartContext.Provider>
  );
};
