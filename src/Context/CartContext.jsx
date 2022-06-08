import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);
  console.log(CartItem)
  return (
    <CartContext.Provider value={{CartItem, setCartItem}}>
      {children}
    </CartContext.Provider>
  );
};