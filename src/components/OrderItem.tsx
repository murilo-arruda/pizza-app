import React, { useContext } from "react";
import PizzaContext from "context/pizza/pizzaContext";
import { Order } from "context/types";

const OrderItem = ({ order, index }: { order: Order; index: number }) => {
  const { flavor, size, price } = order;
  const pizzaContext = useContext(PizzaContext);
  const { removeOrder } = pizzaContext;
  return (
    <div>
      Flavor: <span>{flavor}</span> - size: <span>{size}</span> - price:{" "}
      <span>{price}</span> <button onClick={() => removeOrder(index)}>X</button>
    </div>
  );
};

export default OrderItem;
