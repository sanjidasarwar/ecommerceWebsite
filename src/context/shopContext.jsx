import { createContext } from "react";
import { products } from "../data/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delevery_fee = 10;

  const value = {
    products,
    currency,
    delevery_fee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
