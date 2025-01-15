import { createContext, useState } from "react";
import { products } from "../data/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delevery_fee = 10;
  const [cartItems, setCartItems] = useState({});
  const [sizeAlert, setSizeAlert] = useState(false);

  console.log(cartItems);

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      setSizeAlert(true);
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    delevery_fee,
    cartItems,
    addToCart,
    sizeAlert,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
