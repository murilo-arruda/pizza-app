import React from "react";
import Cart from "components/Cart";
import Navbar from "components/Navbar";
import PizzaBuilder from "components/PizzaBuilder";
import Login from "components/Login";
import Welcome from "components/Welcome";
import PizzaState from "context/pizza/pizzaState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlertState from "context/alert/alertState";
import Alerts from "components/Alerts";
import RouteControl from "components/RouteControl";
import Register from "components/Register";
import UserState from "context/user/userState";
import AdminArea from "components/AdminRoutes/AdminArea";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <AlertState>
          <UserState>
            <PizzaState>
              <Navbar />
              <Welcome />
              <Alerts />
              <Switch>
                <Route path="/admin">
                  <AdminArea />
                </Route>
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
