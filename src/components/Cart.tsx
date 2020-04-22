import React, { useContext, useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import PizzaContext from "context/pizza/pizzaContext";
import { Order } from "context/types";

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const pizzaContext = useContext(PizzaContext);
  const { orders } = pizzaContext;
  useEffect(() => {
    if (orders) {
      const total = orders.reduce((acc: number, order: Order) => {
        return acc + order.price;
      }, 0);
      setTotal(total);
    }
  }, [orders]);
  return (
    <div>
      {orders && orders.length > 0 ? (
        orders.map((order: Order, i: number) => (
          <OrderItem key={`${i}${order.flavor}`} index={i} order={order} />
        ))
      ) : (
        <div>your cart is empty</div>
      )}
      <span>Total: {total}</span>
    </div>
  );
};

export default Cart;
