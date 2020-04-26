type Action =
  | { type: "SET_USER"; payload: FirebaseUserOptions }
  | { type: "REMOVE_USER" };

type FirebaseUserOptions = firebase.auth.UserCredential | firebase.User;

export default (
  state: FirebaseUserOptions | null,
  action: Action
): FirebaseUserOptions | null => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "REMOVE_USER":
      return null;
    default:
      return state;
  }
};
