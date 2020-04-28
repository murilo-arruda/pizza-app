import React, { useContext, Fragment } from "react";
import UserContext from "context/user/userContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Remover admin
  const { user, signOut } = useContext(UserContext);
  return (
    <nav>
      <Link to="/admin">Admin</Link>
      Pizza Time!
      {user ? <AuthNav /> : <NonAuthNav />}
      {user && <button onClick={signOut}>Logout</button>}
    </nav>
  );
};

const AuthNav = () => {
  return (
    <Fragment>
      <Link to="/pizza">Order Pizza</Link>
      <Link to="/orders">My Orders</Link>
      <Link to="/account">Account</Link>
    </Fragment>
  );
};

const NonAuthNav = () => {
  return (
    <Fragment>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </Fragment>
  );
};

export default Navbar;
