import React, { useContext, useState } from "react";
import PizzaContext from "context/pizza/pizzaContext";

const PizzaBuilder = () => {
  const [flavor, setFlavor] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const pizzaContext = useContext(PizzaContext);
  const { flavors, sizes, addOrder } = pizzaContext;
  const showPizzaCreator = () => {
    console.log("open pizza creator");
    addOrder({ flavor, size });
  };
  return (
    <div>
      <h2>Pizza Creator</h2>
      Flavor:{" "}
      <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
        <option disabled value="">
          {" "}
          -- select an option --{" "}
        </option>
        {flavors.map((flavor: { name: string; priceFactor: number }) => (
          <option key={flavor.name} value={flavor.name}>
            {flavor.name}
          </option>
        ))}
      </select>
      Size:{" "}
      <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
        <option disabled value={0}>
          {" "}
          -- select an option --{" "}
        </option>
        {sizes.map((size: number) => (
          <option key={size} value={size}>
            {size}cm
          </option>
        ))}
      </select>
      <button disabled={flavor === "" || size === 0} onClick={showPizzaCreator}>
        Add to cart
      </button>
    </div>
  );
};

export default PizzaBuilder;
