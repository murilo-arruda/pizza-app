import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "context/user/userContext";
import { User } from "context/types";
const Register = () => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState<User>({
    nickname: "",
    name: "",
    password: "",
    tel: "",
    activeOrder: false,
    orders: [],
  });
  const { registerUser } = userContext;

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    //Check if user is valid

    //register
    registerUser(user);
  };
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUser((prevState) => {
      if (prevState) {
        return { ...prevState, [name]: value };
      }
      return prevState;
    });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
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
        Already have an account? <Link to="/">click here to login!</Link>
      </p>
    </div>
  );
};

export default Register;
