import { Item, Admin } from "../types";

type Action =
  | { type: "SET_STOCK"; payload: Item[] }
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "EDIT_ITEM"; payload: Item }
  | { type: "SET_CURRENT"; payload: string | number };

export default (state: Admin | null, action: Action): Admin | null => {
  switch (action.type) {
    case "SET_STOCK":
      return { ...state, stock: action.payload };
    case "ADD_ITEM":
      if (state?.stock && state.stock.length > 0) {
        return { ...state, stock: [...state.stock, action.payload] };
      } else {
        return { ...state, stock: [action.payload] };
      }
    case "REMOVE_ITEM":
      if (state?.stock && state.stock.length > 0) {
        const stock = state.stock.filter((item) => item?.id !== action.payload);
        return { ...state, stock };
      } else {
        return state;
      }
    case "EDIT_ITEM":
      if (state && state.stock.length > 0) {
        const updatedStock = state.stock.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });

        return { ...state, stock: updatedStock, current: null };
      }
      return state;
    case "SET_CURRENT":
      if (state && state.stock.length > 0) {
        const current = state.stock.find((item) => item.id === action.payload);
        return { ...state, current };
      }
    default:
      return state;
  }
};
