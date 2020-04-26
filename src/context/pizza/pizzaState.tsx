import React, { useReducer } from "react";
import pizzaReducer from "./pizzaReducer";
import PizzaContext from "./pizzaContext";
import { Order } from "../types";

type PizzaProps = {
  children: React.ReactNode;
};

const PizzaState = ({ children }: PizzaProps) => {
  const [state, dispatch] = useReducer(pizzaReducer, {});

  const addOrder = (order: Order) => {
    dispatch({
      type: "ADD_ORDER",
      payload: order,
    });
  };

  const getMenu = async () => {};

  const removeOrder = (index: number) => {
    dispatch({ type: "REMOVE_ORDER", payload: index });
  };

  return (
    <PizzaContext.Provider
      value={{
        flavors: state.flavors,
        orders: state.orders,
        sizes: state.sizes,
        addOrder,
        getMenu,
        removeOrder,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaState;
