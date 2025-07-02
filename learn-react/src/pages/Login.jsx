import React, { useContext, useRef } from "react";
import DefaultActionInput from "../components/UI/input/DefaultActionInput";
import DefaultActionButton from "../components/UI/button/DefaultActionButton";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();

    const username = loginRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (username.length >= 5) {
      login(username, password);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();

    logout();
  };

  return (
    <div>
      <h2>Login page</h2>
      {isAuthorized ? (
        <div>
          You already logged in as: [TBD]
          <DefaultActionButton onClick={handleLogout}>
            {" "}
            Logout
          </DefaultActionButton>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <DefaultActionInput
            type="text"
            placeholder="you login or email"
            required
            minLength={5}
            pattern="\S.{4,}"
            title="Please enter at least 5 non-space characters"
            ref={loginRef}
          ></DefaultActionInput>
          <DefaultActionInput
            type="password"
            placeholder="your password"
            required
            minLength={5}
            title="Please enter at least 5 non-space characters"
            ref={passwordRef}
          ></DefaultActionInput>
          <DefaultActionButton> Login</DefaultActionButton>
        </form>
      )}
    </div>
  );
};

export default Login;
