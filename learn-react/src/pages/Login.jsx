import React, { useContext } from "react";
import DefaultActionInput from "../components/UI/input/DefaultActionInput";
import DefaultActionButton from "../components/UI/button/DefaultActionButton";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();

    // dummy option here
    setIsAuthorized(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h2>Login page</h2>
      <form onSubmit={login}>
        <DefaultActionInput
          type="text"
          placeholder="your email"
        ></DefaultActionInput>
        <DefaultActionInput
          type="password"
          placeholder="your password"
        ></DefaultActionInput>
        <DefaultActionButton> Login</DefaultActionButton>
      </form>
    </div>
  );
};

export default Login;
