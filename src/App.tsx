import React from "react";
import Cart from "components/Cart";
import PizzaBuilder from "components/PizzaBuilder";
import PizzaState from "context/pizza/pizzaState";
import UserState from "context/user/userState";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Welcome from "components/Welcome";

function App() {
  const isAuth = false;
  return (
    <div className="App">
      <Router>
        <UserState>
          <PizzaState>
            <h1>Pizzza App</h1>
            <Switch>
              <Route path="/">
                <Welcome />
              </Route>

              <Route path="/pizza">
                {isAuth ? (
                  <main className="wrapper">
                    <PizzaBuilder />
                    <Cart />
                  </main>
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
            </Switch>
          </PizzaState>
        </UserState>
      </Router>
    </div>
  );
}

export default App;
