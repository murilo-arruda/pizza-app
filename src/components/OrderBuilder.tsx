import React, { useContext, useState, useEffect, Fragment } from "react";
import PizzaContext from "context/pizza/pizzaContext";
import { Order, Item } from "context/types";

// TODO: Change classname to Orderpbuilder.

const OrderBuilder = () => {
  const pizzaContext = useContext(PizzaContext);
  const { menu, addOrder } = pizzaContext;

  useEffect(() => {});
  const addToList = (id: string) => {
    addOrder(id);
    // setOrder((prevState) => {
    //   let itemExist = false;
    //   const newState = prevState.map((order: Order) => {
    //     if (order.id === id) {
    //       itemExist = true;
    //       return {
    //         id,
    //         quantity: order.quantity + 1,
    //       };
    //     } else {
    //       return order;
    //     }
    //   });
    //   if (!itemExist) {
    //     return [...newState, { id, quantity: 1 }];
    //   }
    //   return newState;
    // });
  };
  return (
    <div className="pizza-builder">
      <h2>Pizza Creator</h2>
      {menu &&
        menu.map((item: Item) => (
          <div key={item.id}>
            {item.name}| {item.description} | {item.price}
            <button onClick={() => addToList(item.id)}>Add One</button>
          </div>
        ))}
    </div>
  );
};

export default OrderBuilder;
