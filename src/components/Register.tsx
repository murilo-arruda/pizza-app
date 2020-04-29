import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "context/user/userContext";

const Register = () => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState(null);
  const { registerUser } = userContext;

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    //Check if user is valid

    //register
    console.log("register cb needed");
  };
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    return null;
  };

  return (
    <div>
      {/* <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="full name">
          full name:
          <input
            name="name"
            type="text"
            value={user?.name}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="username">
          username:
          <input
            name="nickname"
            type="text"
            value={user?.nickname}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="tel">
          tel:
          <input
            name="tel"
            type="text"
            value={user?.tel}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            value={user?.password}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password-confirm">
          confirm password:
          <input type="password" />
        </label>
        <button>Register!</button>
      </form>
      <p>
        Already have an account? <Link to="/login">click here to login!</Link>
  </p> */}
    </div>
  );
};

export default Register;
