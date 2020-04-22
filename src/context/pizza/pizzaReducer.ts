import { AppState, Order, Flavor } from "../types";

type Action =
  | { type: "GET_MENU"; payload: { flavors: Flavor[]; sizes: number[] } }
  | { type: "ADD_ORDER"; payload: Order }
  | { type: "REMOVE_ORDER"; payload: number };

export default (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "GET_MENU":
      const { flavors, sizes } = action.payload;
      return { ...state, flavors, sizes };
    case "ADD_ORDER":
      if (state.orders && state.orders.length === 0) {
        return { ...state, orders: [action.payload] };
      }
      if (state.orders) {
        return { ...state, orders: [...state.orders, action.payload] };
      }
      // SHOULD BE AN ERROR OR SOMETHING
      return { ...state, orders: [action.payload] };

    case "REMOVE_ORDER":
      if (state.orders) {
        const orders = state.orders.filter(
          (o, index) => index !== action.payload
        );

        return {
          ...state,
          orders,
        };
      }
      return state;

    default:
      return state;
  }
};
