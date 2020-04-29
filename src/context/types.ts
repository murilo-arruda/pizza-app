export type Flavor = {
  type: string;
  name: string;
  priceFactor: number;
  description: string;
  isAvailable: boolean;
};

export type Order = {
  flavor: string;
  size: number;
  price: number;
};

export type Extra = {
  name: string;
  description?: string;
  price: string;
  available: number;
};

export type Item = {
  id: string | number;
  type: string;
  name: string;
  description?: string;
  price: number;
  available: number;
};
export type ExtraOrder = {
  name: string;
  price: number;
  quantity: number;
};
export type AppState = {
  flavors?: Flavor[];
  sizes?: number[];
  extras?: Extra[];
  orders?: Order[];
  extraOrder?: ExtraOrder[];
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
