import React, { useReducer, useEffect } from "react";
import userReducer from "./userReducer";
import UserContext from "./userContext";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(config);
type AuthUser = firebase.auth.UserCredential | null;
type UserProps = {
  children: React.ReactNode;
};

const auth = firebase.auth();

const UserState = ({ children }: UserProps) => {
  const [state, dispatch] = useReducer(userReducer, null);

  const signIn = async (email: "string", password: "string") => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "SET_USER", payload: res });
      console.log("signin", res);
    } catch (e) {
      console.log("error", e);
    }
  };
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch({ type: "REMOVE_USER" });
    } catch (e) {
      console.log("error while singout", e);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user:", authUser);
      authUser
        ? dispatch({ type: "SET_USER", payload: authUser })
        : dispatch({ type: "REMOVE_USER" });
    });
  }, []);
  return (
    <UserContext.Provider
      value={{
        signIn,
        signOut,
        user: state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
