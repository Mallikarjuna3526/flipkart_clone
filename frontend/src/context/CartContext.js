import { createContext, useContext, useEffect, useState } from "react";
import { getCart } from "../api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshCart = async () => {
    setLoading(true);
    const data = await getCart();
    setCart(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, refreshCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
