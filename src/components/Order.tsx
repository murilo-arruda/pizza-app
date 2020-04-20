import React from "react";
type OrderProps = {
  orderProps: {
    flavor: string;
    size: number;
    value: number;
  };
};
const Order = ({ orderProps }: OrderProps) => {
  const { flavor, size, value } = orderProps;
  return (
    <div>
      Flavor: <span>{flavor}</span> - size: <span>{size}</span> - price:{" "}
      <span>{size * value}</span>
    </div>
  );
};

export default Order;
