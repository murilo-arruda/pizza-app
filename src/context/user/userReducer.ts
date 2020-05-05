type FirebaseUser = firebase.auth.UserCredential | firebase.User | null;

type FirebaseUserOptions = {
  user: FirebaseUser;
  db?: firebase.firestore.Firestore;
  orders: string[];
};
type Action =
  | { type: "SET_USER"; payload: FirebaseUser }
  | {
      type: "ADD_ORDER";
      payload: string;
    }
  | { type: "REMOVE_USER" };

export default (
  state: FirebaseUserOptions,
  action: Action
): FirebaseUserOptions => {
  switch (action.type) {
    case "SET_USER": {
      return { ...state, user: action.payload };
    }
    case "REMOVE_USER": {
      return { ...state, user: null };
    }
    case "ADD_ORDER": {
      const orders = [...state.orders, action.payload];

      return { ...state, orders };
    }
    default:
      return state;
  }
};
