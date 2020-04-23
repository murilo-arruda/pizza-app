import React, { useReducer } from "react";
import pizzaReducer from "./pizzaReducer";
import PizzaContext from "./pizzaContext";
import { Order } from "../types";
import axios from "axios";

type PizzaProps = { children: React.ReactNode };

const PizzaState = ({ children }: PizzaProps) => {
  const [state, dispatch] = useReducer(pizzaReducer, {});

  //const getFlavors

  const addOrder = (order: Order) => {
    dispatch({
      type: "ADD_ORDER",
      payload: order,
    });
  };
  // IMPORTANTE: ADCIONAR TRY CATCH EM CASO DE ERRO NA API
  const getMenu = async () => {
    // get flavors
    try {
      const res = await axios.get("http://localhost:3004/menu");
      const { flavors, sizes } = res.data;
      dispatch({ type: "GET_MENU", payload: { flavors, sizes } });
    } catch {
      console.log("error");
    }
    // set flavor to state
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
        getMenu,
        removeOrder,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaState;
