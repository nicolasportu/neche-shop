import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    if (cartList.length === 0) {
      setCartList([...cartList, item]);
      item.quantity = quantity;
      item.stock -= quantity;
    } else {
      const boolean = isInCart(item.id);
      if (boolean === false) {
        setCartList([...cartList, item]);
        item.quantity = quantity;
        item.stock -= quantity;
      } else {
        item.quantity += quantity;
        item.stock -= quantity;
      }
    }
  };

  const removeItem = (id) => {
    const newCartList = cartList.filter((items) => items.id !== id);
    setCartList([...newCartList]);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    if (cartList.find((e) => e.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  const cantidadProductos = () => {
    const qty = [];
    cartList.forEach((e) => qty.push(e.quantity));
    const cantidadTotal = qty.reduce((a, b) => a + b, 0);

    return cantidadTotal;
  };

  const total = () => {
    const qty = [];
    cartList.forEach((e) => {
      qty.push(e.precio * e.quantity);
    });
    const cantidadTotal = qty.reduce((a, b) => a + b, 0);

    return cantidadTotal;
  };


  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear, cantidadProductos, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
