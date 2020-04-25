import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "context/user/userContext";
const Welcome = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return <div>Hello,{user[0].name}!</div>;
  }
  return (
    <div>
      <h3>Welcome to the best pizza place!</h3>

      <p>Please login or register to order a very tasty pizza!</p>
      <Redirect to="/login" />
    </div>
  );
};

export default Welcome;
