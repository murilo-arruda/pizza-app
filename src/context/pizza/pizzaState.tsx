import React, { useReducer, useContext, useEffect } from "react";
import UserContext from "../user/userContext";
import pizzaReducer from "./pizzaReducer";
import PizzaContext from "./pizzaContext";
import { Order, Item } from "../types";

type PizzaProps = {
  children: React.ReactNode;
};

const PizzaState = ({ children }: PizzaProps) => {
  const [state, dispatch] = useReducer(pizzaReducer, { orders: [], stock: [] });
  const { db }: { db: firebase.firestore.Firestore } = useContext(UserContext);

  const addOrder = (id: string) => {
    dispatch({
      type: "ADD_ORDER",
      payload: id,
    });
  };
  useEffect(() => {
    const getItems = async () => {
      try {
        const querySnapshot = await db.collection("stock").get();
        let stock: Item[] = [];
        querySnapshot.forEach((doc: firebase.firestore.DocumentData) => {
          const { available, description, name, price, type } = doc.data();
          const id = doc.id;
          stock.push({ available, description, name, price, type, id });
        });

        dispatch({ type: "SET_STOCK", payload: stock });
      } catch (e) {
        console.log("error", e);
      }
    };
    getItems();
  }, []);

  const removeOrder = (id: string) => {
    dispatch({ type: "REMOVE_ORDER", payload: id });
  };
  const removeOrderOne = (id: string) => {
    dispatch({ type: "REMOVE_ONE_ORDER", payload: id });
  };

  return (
    <PizzaContext.Provider
      value={{
        menu: state.stock,
        orders: state.orders,
        addOrder,
        removeOrder,
        removeOrderOne,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaState;
