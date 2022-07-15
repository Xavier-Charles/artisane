import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const LS_CART = "cart"

  const addToCart = (art) => {
    setCart((prev) => {
      if (prev.find((a) => a._id === art._id)) return prev;
      localStorage.setItem(LS_CART, JSON.stringify([...prev, art]));
      return [...prev, art];
    });
  };

  const removeFromCart = (art) => {
    setCart((prev) => {
      const newCart = prev.filter((a) => a._id !== art._id);
      localStorage.setItem(LS_CART, JSON.stringify(newCart));
      return newCart;
    });
  };

  useEffect(() => {
    (async () => {
      const localCart = JSON.parse(localStorage.getItem(LS_CART) || "[]");
      if (localCart.length > 0) setCart([...localCart]);
    })();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
