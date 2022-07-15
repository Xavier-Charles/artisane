import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (art) => {
    const newCart = [...prev, art];
    setCart((prev) => [...prev, art]);
    localStorage.setItem("cart", newCart)
  };

  const removeFromCart = (art) => {
    const newCart = cart.filter((cart) => cart._id !== art._id);
    setCart((prev) => [...prev, art]);
    localStorage.setItem("cart", newCart);
  };

  useEffect(() => {
    (async () => {
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
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
