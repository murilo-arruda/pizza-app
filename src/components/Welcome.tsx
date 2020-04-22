import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const Welcome = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <h3>Wellcome to the best pizza place!</h3>
      <p>Please login or register to order a very tasty pizza!</p>

      <Switch>
        <Route exact path={path}>
          <Login />
        </Route>
        <Route path={`${path}register`}>
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default Welcome;
