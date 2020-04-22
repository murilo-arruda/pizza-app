import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <form className="form">
        <label htmlFor="username">
          userName:
          <input type="text" />
        </label>

        <label htmlFor="password">
          password:
          <input type="password" />
        </label>
      </form>
      <p>
        Don't have account? <Link to="/register">click here to register!</Link>
      </p>
    </div>
  );
};

export default Login;
