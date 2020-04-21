import React, { useReducer } from "react";
import pizzaReducer, { AppState } from "./pizzaReducer";
import PizzaContext from "./pizzaContext";

type PizzaProps = { children: React.ReactNode };

const PizzaState = ({ children }: PizzaProps) => {
  const initialState: AppState = {
    orders: [],
    flavors: [
      { name: "peperoni", priceFactor: 1 },
      { name: "marguerita", priceFactor: 0.9 },
      { name: "mussarela", priceFactor: 0.8 },
    ],
    sizes: [15, 25, 35, 45],
  };
  const [state, dispatch] = useReducer(pizzaReducer, initialState);
  const addOrder = ({ flavor, size }: { flavor: string; size: number }) => {
    dispatch({
      type: "ADD_ORDER",
      payload: { flavor, size },
    });
  };
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
        removeOrder,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaState;
