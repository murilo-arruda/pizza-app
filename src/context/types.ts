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

export type AppState = {
  flavors?: Flavor[];
  orders?: Order[];
  sizes?: number[];
};
