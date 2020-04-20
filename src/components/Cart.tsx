import React, { useContext } from "react";
import Order from "./Order";
import PizzaContext from "context/pizza/pizzaContext";

type OrderProps = {
  flavor: string;
  size: number;
  value: number;
};

const Cart = () => {
  const pizzaContext = useContext(PizzaContext);
  const { orders } = pizzaContext;
  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order: OrderProps) => <Order orderProps={order} />)
      ) : (
        <div>vazio</div>
      )}
    </div>
  );
};

export default Cart;
