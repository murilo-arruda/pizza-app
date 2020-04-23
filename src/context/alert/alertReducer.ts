import { Alert, Alerts } from "../types";

type Action =
  | {
      type: "GET_ALERTS";
      payload: Alert[];
    }
  | {
      type: "ADD_ALERT";
      payload: Alert;
    }
  | {
      type: "REMOVE_ALERT";
      payload: string;
    };

export default (state: Alerts, action: Action): Alerts => {
  switch (action.type) {
    case "GET_ALERTS":
      return action.payload;
    case "ADD_ALERT":
      return [...state, action.payload];
    case "REMOVE_ALERT":
      return state.filter((alert) => alert.id !== action.payload);

    default:
      return state;
  }
};
