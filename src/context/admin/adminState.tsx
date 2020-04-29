import React, { useReducer } from "react";
import adminReducer from "./adminReducer";
import AdminContext from "./adminContext";

const fakeStock = [
  {
    type: "flavor",
    name: "bacon",
    price: 1,
    description: "bacon pizza",
    available: 10,
  },
  {
    type: "drink",
    name: "coca",
    price: 5,
    description: "coca-cola",
    available: 50,
  },
];

const AdminState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(adminReducer, null);

  const getStock = async () => {
    // Get the current stock from db
    const stock = fakeStock;
    dispatch({ type: "SET_STOCK", payload: stock });
  };

  return (
    <AdminContext.Provider
      value={{
        getStock,
        stock: state,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminState;
