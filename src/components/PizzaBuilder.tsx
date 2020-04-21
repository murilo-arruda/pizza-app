import React, { useContext, useState, useEffect } from "react";
import PizzaContext from "context/pizza/pizzaContext";

const PizzaBuilder = () => {
  const [flavor, setFlavor] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const pizzaContext = useContext(PizzaContext);
  const { flavors, sizes, addOrder } = pizzaContext;

  useEffect(() => {
    const computedPrice = () => {
      return flavors.find(
        (flavorOption: { name: string; priceFactor: number }) =>
          flavorOption.name === flavor
      )?.priceFactor;
    };
    if (flavor !== "" && size !== 0) {
      setPrice(size * computedPrice());
    }
  }, [flavor, size, flavors]);
  const showPizzaCreator = () => {
    console.log("open pizza creator");
    addOrder({ flavor, size });
    setFlavor("");
    setSize(0);
    setPrice(0);
  };
  return (
    <div className="pizza-builder">
      <h2>Pizza Creator</h2>
      <span>Flavor:</span>
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
      <span>Size:</span>
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
      <span>Price: U$ {price > 0 ? price : ""}</span>
      <hr></hr>
      <button disabled={flavor === "" || size === 0} onClick={showPizzaCreator}>
        Add to cart
      </button>
    </div>
  );
};

export default PizzaBuilder;
