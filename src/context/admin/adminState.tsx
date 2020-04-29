import React, { useReducer, useContext } from "react";
import adminReducer from "./adminReducer";
import AdminContext from "./adminContext";
import { Item } from "context/types";
import UserContext from "context/user/userContext";
const fakeStock = [
  {
    id: 1,
    type: "flavor",
    name: "bacon",
    price: 1,
    description: "bacon pizza",
    available: 10,
  },
  {
    id: 2,
    type: "drink",
    name: "coca",
    price: 5,
    description: "coca-cola",
    available: 50,
  },
];
const initialState = {
  current: null,
  stock: fakeStock,
};

const AdminState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(adminReducer, initialState);
  const { db } = useContext(UserContext);

  const getItems = async () => {
    try {
    } catch (e) {}
  };
  const addItemToStock = async (item: Item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const editItemFromStock = async (item: Item) => {
    dispatch({ type: "EDIT_ITEM", payload: item });
  };
  const removeItemFromStock = async (itemName: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemName });
  };
  const setCurrent = (itemId: string | number) => {
    dispatch({ type: "SET_CURRENT", payload: itemId });
  };
  return (
    <AdminContext.Provider
      value={{
        removeItemFromStock,
        addItemToStock,
        editItemFromStock,
        setCurrent,
        stock: state!.stock,
        current: state!.current,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminState;
