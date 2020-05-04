import { AppState, Item, Order } from "../types";

type Action =
  | { type: "SET_STOCK"; payload: Item[] }
  | { type: "ADD_ORDER"; payload: string }
  | { type: "REMOVE_ONE_ORDER"; payload: string }
  | { type: "REMOVE_ORDER"; payload: string };

export default (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_STOCK":
      return { ...state, stock: action.payload };
    case "ADD_ORDER": {
      // Adicionar o item no pedido e remover 1 na quantidade.
      let itemExist = false;

      // check if item is avaible
      if (
        state.stock.find((item) => item.id === action.payload)?.available === 0
      ) {
        return state;
      }
      const stock = handleStock(state.stock, action.payload, -1);

      const orders = state.orders.map((order: Order) => {
        if (order.id === action.payload) {
          itemExist = true;
          return {
            id: action.payload,
            quantity: order.quantity + 1,
          };
        } else {
          return order;
        }
      });

      if (!itemExist) {
        return {
          ...state,
          stock,
          orders: [...state.orders, { id: action.payload, quantity: 1 }],
        };
      }
      return { ...state, stock, orders };
    }
    case "REMOVE_ORDER": {
      const item = state.orders.find((item) => {
        return item.id === action.payload;
      });
      const itemCount = item?.quantity;
      if (itemCount === undefined) {
        return state;
      }
      const stock = handleStock(state.stock, action.payload, itemCount);

      const orders = state.orders.filter(
        (order) => order.id !== action.payload
      );

      return {
        ...state,
        stock,
        orders,
      };
    }

    case "REMOVE_ONE_ORDER": {
      const stock = handleStock(state.stock, action.payload, 1);
      const orders = state.orders.reduce((newOrders, order) => {
        if (order.id === action.payload) {
          if (order.quantity > 1)
            newOrders.push({ id: order.id, quantity: order.quantity - 1 });
        } else {
          newOrders.push(order);
        }
        return newOrders;
      }, [] as Order[]);
      return { ...state, stock, orders };
    }

    default:
      return state;
  }
};

const handleStock = (stock: Item[], id: string, value: number) => {
  // Find the id and remove or add the number of itens.

  const newStock = stock.map((item) => {
    if (item.id === id) {
      return { ...item, available: item.available + value };
    }
    return item;
  });
  return newStock;
};
