import React, { useReducer } from "react";
import userReducer from "./userReducer";
import UserContext from "./userContext";

type UserProps = { children: React.ReactNode };

const UserState = ({ children }: UserProps) => {
  const [state, dispatch] = useReducer(userReducer, null);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserState;
