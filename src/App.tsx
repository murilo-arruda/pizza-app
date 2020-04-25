import React from "react";
import Cart from "components/Cart";
import PizzaBuilder from "components/PizzaBuilder";
import PizzaState from "context/pizza/pizzaState";
import UserState from "context/user/userState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Welcome from "components/Welcome";
import AlertState from "context/alert/alertState";
import Alerts from "components/Alerts";
import RouteControl from "components/RouteControl";
import Register from "components/Register";
import Login from "components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <AlertState>
          <UserState>
            <PizzaState>
              <Link to="/pizza">Pizza</Link>
              <h1>Pizzza App</h1>
              <Welcome />
              <Alerts />
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <RouteControl path="/pizza">
                  <main className="wrapper">
                    <PizzaBuilder />
                    <Cart />
                  </main>
                </RouteControl>
              </Switch>
            </PizzaState>
          </UserState>
        </AlertState>
      </Router>
    </div>
  );
}

export default App;
