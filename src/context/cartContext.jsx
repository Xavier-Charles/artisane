import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const LS_CART = "cart";

  const addToCart = (art) => {
    setCart((prev) => {
      if (prev.find((a) => a._id === art._id)) return prev;
      const newCart = [...prev, { ...art, cartCount: 1 }];

      localStorage.setItem(LS_CART, JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateCart = (art) => {
    setCart((prev) => {
      const oldArt = prev.find((a) => a._id === art._id);
      if (!oldArt) return prev;
      const newCart = [...prev.filter((a) => a._id !== art._id), art];
      localStorage.setItem(LS_CART, JSON.stringify(newCart));
      return newCart;
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
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
