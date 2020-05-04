import React, { useContext } from "react";
import PizzaContext from "context/pizza/pizzaContext";
import { Order } from "context/types";

const OrderItem = ({ order, index }: { order: Order; index: number }) => {
  const pizzaContext = useContext(PizzaContext);
  const { removeOrder } = pizzaContext;
  return (
    <div>
      Order Item Rework in progress
      {/* Flavor: <span>{flavor}</span> - size: <span>{size}</span> - price:{" "}
      <span>{price}</span> <button onClick={() => removeOrder(index)}>X</button> */}
    </div>
  );
};

export default OrderItem;
