import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="form">
        <label htmlFor="full name">
          full name:
          <input type="text" />
        </label>
        <label htmlFor="username">
          username:
          <input type="text" />
        </label>

        <label htmlFor="password">
          password:
          <input type="password" />
        </label>
        <label htmlFor="password-confirm">
          confirm password:
          <input type="password" />
        </label>
      </form>
      <p>
        Already have an account? <Link to="/">click here to login!</Link>
      </p>
    </div>
  );
};

export default Register;
