import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "context/user/userContext";

type User = {
  nickname: string;
  password: string;
};

const Login = () => {
  const userContext = useContext(UserContext);
  const [userLogin, setUser] = useState<User>({ nickname: "", password: "" });

  const { user, login } = userContext;
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    login(userLogin);
  };
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  if (user) {
    return <Redirect to={{ pathname: "/pizza" }} />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username">
          username:
          <input
            type="text"
            name="nickname"
            value={userLogin.nickname}
            onChange={handleInput}
          />
        </label>

        <label htmlFor="password">
          password:
          <input
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleInput}
          />
        </label>
        <button>login!</button>
      </form>
      <p>
        Don't have account? <Link to="/register">click here to register!</Link>
      </p>
    </div>
  );
};

export default Login;
