import React, { useContext } from "react";
import PizzaContext from "context/pizza/pizzaContext";

type OrderProps = {
  orderProps: {
    flavor: string;
    size: number;
    value: number;
  };
  index: number;
};

const Order = ({ orderProps, index }: OrderProps) => {
  const { flavor, size, value } = orderProps;
  const pizzaContext = useContext(PizzaContext);
  const { removeOrder } = pizzaContext;
  return (
    <div>
      Flavor: <span>{flavor}</span> - size: <span>{size}</span> - price:{" "}
      <span>{size * value}</span>{" "}
      <button onClick={() => removeOrder(index)}>X</button>
    </div>
  );
};

export default Order;
