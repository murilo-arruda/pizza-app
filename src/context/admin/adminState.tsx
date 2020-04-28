import React, { useReducer } from "react";
import adminReducer from "./adminReducer";
import AdminContext from "./adminContext";

const AdminState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(adminReducer, null);

  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};

export default AdminState;
