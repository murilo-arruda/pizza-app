import React, { useContext, useEffect } from "react";
import AdminContext from "context/admin/adminContext";
import { Item } from "context/types";
const Stock = () => {
  const adminContext = useContext(AdminContext);
  const { stock, removeItemFromStock, setCurrent } = adminContext;

  return (
    <div>
      {stock &&
        stock.map((item: Item) => (
          <div key={item.id}>
            {item.name}
            <button onClick={() => setCurrent(item.id)}>EDIT</button>
            <button onClick={() => removeItemFromStock(item.id)}>REMOVE</button>
          </div>
        ))}
    </div>
  );
};

export default Stock;
