import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../../styles/App.css";
import DefaultActionButton from "../button/DefaultActionButton";
import { AuthContext } from "../../../context/index.js";

const NavBar = () => {
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  const logout = (event) => {
    event.preventDefault();

    // dummy option here
    setIsAuthorized(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      {isAuthorized ? (
        <DefaultActionButton onClick={logout}>Log out</DefaultActionButton>
      ) : (
        ""
      )}
      <div className="navbar__links">
        <Link to="/about">About </Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default NavBar;
