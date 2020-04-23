export type Flavor = {
  name: string;
  priceFactor: number; //price per cm
  description: string;
};

export type Order = {
  flavor: string;
  size: number;
  price: number;
};

export type Extra = {
  name: string;
  price: string;
  available: number; // # of avaible on store. if 0 should show nothing
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

export type User = {
  nickname?: string; //used for login
  name?: string;
  id?: string; //should bem unique on db
  password?: string;
  tel?: string; //regex!
  activeOrder?: boolean; //if true get from db the order
  orders?: Order[]; //array for the pasts orders
} | null;

export type Alert = {
  alert: string;
  type: string;
  timeout: number;
  id: string;
};
export type Alerts = Alert[];
