import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "context/user/userContext";

const RouteControl = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <Route
      path={path}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default RouteControl;
