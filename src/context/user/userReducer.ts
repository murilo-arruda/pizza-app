import { User } from "../types";

type Action = { type: "GET_USER"; payload: { user: User } };

export default (state: User, action: Action): User => {
  switch (action.type) {
    case "GET_USER":
      return state;
    default:
      return state;
  }
};
