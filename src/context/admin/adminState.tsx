import React, { useReducer, useContext, useEffect } from "react";
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

//TODO: Add observe for menu changes.
//TODO: Fix duplicate state. Menu exists in admin and pizzaState.

const AdminState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(adminReducer, null);
  const { db }: { db: firebase.firestore.Firestore } = useContext(UserContext);

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

  const addItemToStock = async (item: Item) => {
    try {
      const docRef = await db.collection("stock").add(item);
      console.log("item added, id:", docRef.id);
      dispatch({ type: "ADD_ITEM", payload: { ...item, id: docRef.id } });
    } catch (e) {
      console.log("error adding item", e);
    }
  };
  const editItemFromStock = async (item: Item) => {
    try {
      db.collection("stock").doc(item.id).set(item);
      console.log("item editado");
      dispatch({ type: "EDIT_ITEM", payload: item });
    } catch (e) {
      console.log("error ao editar item", e);
    }
  };
  const removeItemFromStock = async (id: string) => {
    try {
      db.collection("stock").doc(id).delete();
      console.log("deletado");
      dispatch({ type: "REMOVE_ITEM", payload: id });
    } catch (e) {
      console.log("error ao deletar", e);
    }
  };
  const setCurrent = (itemId: string) => {
    dispatch({ type: "SET_CURRENT", payload: itemId });
  };
  return (
    <AdminContext.Provider
      value={{
        removeItemFromStock,
        addItemToStock,
        editItemFromStock,
        setCurrent,

        stock: state?.stock,
        current: state?.current,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminState;
