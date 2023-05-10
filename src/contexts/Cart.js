import React, { useState, createContext } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => {},
  //createContext에 파라미터로 전달된 값은
  // Context API 에 아무것도 전달되지 않았을때 사용할 기본값이다.
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const setCartInfo = ({ id, name, price, image }) => {
    setCart(cart.push({ id, name, price, image }));
  };
  const value = { cart, setCartInfo };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
