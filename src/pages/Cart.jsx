import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";

const Cart = () => {
  const { cartItems, products } = useContext(ShopContext);

  useEffect(() => {
    let tempData = [];
    // for (const items in cartItems) {
    //   for (const item in cartItems[items]) {
    //     if (cartItems[items][item] > 0) {
    //       tempData.push({
    //         _id: items,
    //         size: item,
    //         quantity: cartItems[items][item],
    //       });
    //     }
    //   }
    // }
    const arrOfCartItems = Object.entries(cartItems);
    arrOfCartItems.forEach(([productId, sizes]) => {
      Object.entries(sizes).forEach(([size, quantity]) => {
        tempData.push({
          _id: productId,
          size,
          quantity,
        });
      });
    });
    console.log(tempData);
  }, [cartItems]);

  return <div></div>;
};

export default Cart;
