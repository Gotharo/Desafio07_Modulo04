import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => [...prev, { ...pizza, quantity: 1 }]);
  };

  const updateQuantity = (cartId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const value = { cart, addToCart, updateQuantity };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
