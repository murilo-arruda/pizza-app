import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import AdminOrders from "./AdminOrders";
import AdminStock from "./AdminStock";

const AdminArea = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}`}>Orders</Link>
        </li>
        <li>
          <Link to={`${url}/stock`}>Stock</Link>
        </li>
        <li>
          <Link to={`${url}/control`}>Store Control</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <AdminOrders />
        </Route>
        <Route exact path={`${path}/stock`}>
          <AdminStock />
        </Route>
        <Route exact path={`${path}/control`}>
          <div>Store Control</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AdminArea;
