import React, { useContext, useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import PizzaContext from "context/pizza/pizzaContext";
import { Order } from "context/types";

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const pizzaContext = useContext(PizzaContext);
  const { orders, removeOrder, removeOrderOne } = pizzaContext;
  useEffect(() => {}, []);
  const handleSubmit = () => {
    //makeOrder()
    //send order to db!
    //redirect to Waiting room!
  };
  const removeItem = () => {};
  return (
    <div>
      {orders.length > 0 &&
        orders.map((order: Order) => (
          <div key={`${order.id}order`}>
            {order.id} | {order.quantity}
            <button onClick={() => removeOrderOne(order.id)}>Remove One</button>
            <button onClick={() => removeOrder(order.id)}>Remove All</button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
