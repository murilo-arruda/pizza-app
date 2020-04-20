import React from "react";
import Cart from "components/Cart";
import PizzaBuilder from "components/PizzaBuilder";
import PizzaState from "context/pizza/pizzaState";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <PizzaState>
        <h1>Pizza App</h1>
        <main className="wrapper">
          <PizzaBuilder />
          <Cart />
        </main>
      </PizzaState>
    </div>
  );
}

export default App;
