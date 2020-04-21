import React, { useContext, useState, useEffect } from "react";
import Order from "./Order";
import PizzaContext from "context/pizza/pizzaContext";

type OrderProps = {
  flavor: string;
  size: number;
  value: number;
};

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const pizzaContext = useContext(PizzaContext);
  const { orders } = pizzaContext;
  useEffect(() => {
    const sumOrders = orders.reduce((acc: number, order: OrderProps) => {
      return acc + order.value * order.size;
    }, 0);
    setTotal(sumOrders);
  }, [orders]);
  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order: OrderProps, i: number) => (
          <Order key={`${i}${order.flavor}`} index={i} orderProps={order} />
        ))
      ) : (
        <div>your cart is empty</div>
      )}
      <span>Total: {total}</span>
    </div>
  );
};

export default Cart;
