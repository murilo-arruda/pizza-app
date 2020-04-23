import { User } from "../types";

type Action = { type: "LOGIN_USER"; payload: User };

export default (state: User, action: Action): User => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    default:
      return state;
  }
};
