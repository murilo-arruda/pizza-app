import React, { useReducer } from "react";
import pizzaReducer from "./pizzaReducer";
import PizzaContext from "./pizzaContext";
import { Order } from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

if (process.env.NODE_ENV === "development") {
  const mock = new MockAdapter(axios);
  mock.onGet("/menu").reply(200, {
    sizes: [15, 25, 35],
    flavors: [
      { name: "peperoni", priceFactor: 1, description: "cheese, peperoni" },
      {
        name: "marguerita",
        priceFactor: 0.9,
        description: "cheese, marguerita",
      },
      { name: "mussarela", priceFactor: 0.8, description: "cheese" },
    ],
  });
  // setup dev mock api
  console.log("dev mock data");
}

type PizzaProps = { children: React.ReactNode };

const PizzaState = ({ children }: PizzaProps) => {
  const [state, dispatch] = useReducer(pizzaReducer, {});

  //const getFlavors

  const addOrder = (order: Order) => {
    console.log(order);
    dispatch({
      type: "ADD_ORDER",
      payload: order,
    });
  };
  // IMPORTANTE: ADCIONAR TRY CATCH EM CASO DE ERRO NA API
  const getMenu = async () => {
    // get flavors
    const res = await axios.get("/menu");
    const { flavors, sizes } = res.data;
    dispatch({ type: "GET_MENU", payload: { flavors, sizes } });
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
