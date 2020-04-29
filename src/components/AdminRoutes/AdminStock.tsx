import React from "react";
import Stock from "./Stock";
import ItemForm from "./ItemForm";

const AdminStock = () => {
  // estrutura: duas colunas:
  // Estoque atual (CRUD)
  // Formulario para adcionar ao estoque
  return (
    <main className="wrapper">
      <Stock />
      <ItemForm />
    </main>
  );
};

export default AdminStock;
