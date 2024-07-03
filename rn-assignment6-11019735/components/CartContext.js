import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  const addItemToCart = (item) => {
    setCartItem((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItem(cartItem.filter((item) => item !== itemToRemove));
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
