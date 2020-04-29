import { Stock } from "../types";

type Action = { type: "SET_STOCK"; payload: Stock };

export default (state: Stock | null, action: Action): Stock | null => {
  switch (action.type) {
    case "SET_STOCK":
      return action.payload;
    default:
      return state;
  }
};
