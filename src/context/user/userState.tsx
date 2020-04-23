import React, { useReducer, useContext } from "react";
import userReducer from "./userReducer";
import UserContext from "./userContext";
import axios from "axios";
import { User } from "../types";
import AlertContext from "context/alert/alertContext";

type UserProps = { children: React.ReactNode };
if (process.env.NODE_ENV === "development") {
  //user
}

const UserState = ({ children }: UserProps) => {
  const [state, dispatch] = useReducer(userReducer, null);
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;
  const registerUser = async (user: User) => {
    // TO-DO: VERIFICAR SE TODOS OS DADOS ATENDEM OS REQUISITOS

    try {
      // TODO: send user to do db.json !!!
      const uid =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      const result = await axios.post("http://localhost:3004/users", {
        ...user,
        id: uid,
      });
      addAlert({
        alert: "user successfuly registered!",
        type: "success",
        timeout: 2000,
      });

      console.log("add user success, should dispatch an action", result.data);
    } catch {
      // if fail dispatch error
      console.log("error while adding user");
    }
  };
  const login = async ({
    password,
    nickname,
  }: {
    password: string;
    nickname: string;
  }) => {
    //call api to check if user exists
    try {
      const res = await axios.get(
        `http://localhost:3004/users?nickname=${nickname}&password=${password}`
      );
      if (res.data.length > 0) {
        dispatch({ type: "LOGIN_USER", payload: res.data });
      } else {
        addAlert({ alert: "user not found!", type: "danger", timeout: 2000 });
      }
    } catch {}
  };
  return (
    <UserContext.Provider
      value={{
        registerUser,
        login,
        user: state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
