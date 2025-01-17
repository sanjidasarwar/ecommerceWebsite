import React from "react";
import Title from "./Title";

function CartTotal() {
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$ 38.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>$ 10.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>$ 48.00</b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
