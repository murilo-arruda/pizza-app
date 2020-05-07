import React, { useReducer, useEffect } from "react";
import userReducer from "./userReducer";
import UserContext from "./userContext";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Order } from "../types";
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
// type AuthUser = firebase.auth.UserCredential | null;
type UserProps = {
  children: React.ReactNode;
};
// try catch
// TESTAR THROTLE DE INTERNET
const auth = firebase.auth();
const db = firebase.firestore();

const UserState = ({ children }: UserProps) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    db: db,
    orders: [],
  });

  const signIn = async (email: "string", password: "string") => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "SET_USER", payload: res.user });
      if (res.user) {
        console.log("signin", res.user.uid);
      } else {
        console.log("something wrong");
      }
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

  const makeOrder = async (order: Order[]) => {
    // Send order to db. admin must confirm.
    if (state.user) {
      try {
        const docRef = await db
          .collection("orders")
          .add({ order: order, uid: state.user.uid, status: true });
        console.log("Order id: ", docRef.id);
        dispatch({ type: "ADD_ORDER", payload: docRef.id });
      } catch (e) {
        console.log("error while sending order", e);
      }
    } else {
      console.log("alert login");
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user:", authUser.uid);
      } else {
        console.log("no user");
      }

      authUser
        ? dispatch({ type: "SET_USER", payload: authUser })
        : dispatch({ type: "REMOVE_USER" });
    });
  }, []);
  console.log("rerender", state);
  return (
    <UserContext.Provider
      value={{
        signIn,
        signOut,
        makeOrder,
        db: state?.db,
        user: state?.user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
