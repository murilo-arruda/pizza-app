export type Flavor = {
  type: string;
  name: string;
  priceFactor: number;
  description: string;
  isAvailable: boolean;
};

export type Order = {
  id: string;
  quantity: number;
};

export type Extra = {
  name: string;
  description?: string;
  price: string;
  available: number;
};

export type Item = {
  id: string;
  type: string;
  name: string;
  description?: string;
  price: number;
  available: number;
};

export type AppState = {
  stock: Item[];
  orders: Order[];
};

export type Alert = {
  alert: string;
  type: string;
  timeout: number;
  id: string;
};
export type Alerts = Alert[];

export type Stock = Item[] | null;

export type Admin = {
  stock: Item[];
  current?: Item | null;
} | null;
