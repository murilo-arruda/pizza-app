type FirebaseUser = firebase.auth.UserCredential | firebase.User | null;

type FirebaseUserOptions = {
  user: FirebaseUser;
  db?: firebase.firestore.Firestore;
};
type Action =
  | { type: "SET_USER"; payload: FirebaseUser }
  | { type: "REMOVE_USER" };

export default (
  state: FirebaseUserOptions | null,
  action: Action
): FirebaseUserOptions | null => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "REMOVE_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};
