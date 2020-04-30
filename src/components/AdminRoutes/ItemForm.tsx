import React, { useState, useContext, useEffect } from "react";
import AdminContext from "context/admin/adminContext";
import { Item } from "context/types";

const selectOptions = ["flavor", "drink", "others"];

const ItemForm = () => {
  const { addItemToStock, editItemFromStock, current } = useContext(
    AdminContext
  );
  const [item, setItem] = useState<Item>({
    id: "",
    type: "others",
    name: "",
    description: "",
    price: 1,
    available: 0,
  });

  useEffect(() => {
    if (current !== null && current !== undefined) {
      console.log("dif");
      setItem(current);
    }
  }, [current]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    //validate
    if (current) {
      editItemFromStock(item);
    } else {
      addItemToStock(item);
    }
    setItem({
      id: "",
      type: "others",
      name: "",
      description: "",
      price: 1,
      available: 0,
    });
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setItem((prevProp) => {
      return { ...prevProp, [name]: value };
    });
  };

  return (
    <div>
      <h3>Item Form</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select value={item.type} name="type" onChange={handleChange}>
            {selectOptions &&
              selectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        </label>
        <hr />
        <label>
          Name:
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={item.name}
          />
        </label>
        <hr />
        <label>
          Description:
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={item.description}
          />
        </label>
        <hr />
        <label>
          Price:
          <input
            onChange={handleChange}
            type="number"
            name="price"
            value={item.price}
          />
        </label>
        <hr />
        <label>
          Available:
          <input
            onChange={handleChange}
            type="number"
            name="available"
            value={item.available}
          />
        </label>
        <hr />
        <button>{current ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default ItemForm;
