export type AppState = {
  flavors: { name: string; priceFactor: number }[];
  sizes: number[];
  orders: {
    flavor: string;
    size: number;
    value: number;
  }[];
};
type Action = {
  type: "ADD_ORDER";
  payload: { flavor: string; size: number };
};

export default (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_ORDER":
      const priceFactor = state.flavors.find(
        (flavor) => flavor.name === action.payload.flavor
      )?.priceFactor;
      const computedOrder = [
        ...state.orders,
        {
          flavor: action.payload.flavor,
          size: action.payload.size,
          value: priceFactor ? priceFactor : 1.5,
        },
      ];

      return {
        ...state,
        orders: computedOrder,
      };
    default:
      return state;
  }
};
