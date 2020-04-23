import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import AlertContext from "./alertContext";

import { Alert } from "../types";
type UserProps = { children: React.ReactNode };
if (process.env.NODE_ENV === "development") {
  //alert
}

const AlertState = ({ children }: UserProps) => {
  const [state, dispatch] = useReducer(alertReducer, []);
  const addAlert = async (alert: Alert) => {
    const id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    dispatch({ type: "ADD_ALERT", payload: { ...alert, id } });
    //set timeout
    setTimeout(
      () => dispatch({ type: "REMOVE_ALERT", payload: id }),
      alert.timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        addAlert,
        alerts: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
