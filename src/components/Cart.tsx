import React, { useContext, useState, useEffect } from "react";
import UserContext from "context/user/userContext";
import PizzaContext from "context/pizza/pizzaContext";
import { Order } from "context/types";

// TODO: Create modal to payment.
// TODO: Show total value of order
// TODO: Make each item an component

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const pizzaContext = useContext(PizzaContext);
  const { makeOrder } = useContext(UserContext);

  const { orders, removeOrder, removeOrderOne } = pizzaContext;
  useEffect(() => {}, []);
  const handleSubmit = () => {
    console.log("order api");
    //makeOrder()
    makeOrder(orders);
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
      {orders.length > 0 && <button onClick={handleSubmit}>Order!</button>}
    </div>
  );
};

export default Cart;
