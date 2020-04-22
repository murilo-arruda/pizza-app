import React, { useContext, useState, useEffect, Fragment } from "react";
import PizzaContext from "context/pizza/pizzaContext";
import { Order, Flavor } from "context/types";
const PizzaBuilder = () => {
  const [order, setOrder] = useState<Order>({
    flavor: "",
    size: 0,
    price: 0,
  });
  const pizzaContext = useContext(PizzaContext);
  const { flavors, sizes, addOrder, getMenu } = pizzaContext;

  useEffect(() => {
    if (!flavors) {
      getMenu();
    }
    if (order.size !== 0 && order.flavor !== "") {
      const { priceFactor } = flavors.find(
        (flavor: Flavor) => flavor.name === order.flavor
      );
      console.log(priceFactor);
      setOrder((o) => ({ ...o, price: order.size * priceFactor }));
    }
  }, [order.size, order.flavor, flavors, getMenu]);

  return (
    <div className="pizza-builder">
      <h2>Pizza Creator</h2>
      <span>Flavor:</span>
      {flavors && (
        <Fragment>
          <select
            value={order.flavor}
            onChange={(e) => setOrder({ ...order, flavor: e.target.value })}
          >
            <option disabled value="">
              {" "}
              -- select an option --{" "}
            </option>
            {flavors.map((flavor: Flavor) => (
              <option key={flavor.name} value={flavor.name}>
                {flavor.name} - {flavor.description}
              </option>
            ))}
          </select>
          <span>Size:</span>
          <select
            value={order.size}
            onChange={(e) =>
              setOrder({ ...order, size: Number(e.target.value) })
            }
          >
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
          <span>Price: U$ {order.price > 0 ? order.price : ""}</span>
          <hr></hr>
          <button
            disabled={order.flavor === "" || order.size === 0}
            onClick={() => addOrder(order)}
          >
            Add to cart
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default PizzaBuilder;
