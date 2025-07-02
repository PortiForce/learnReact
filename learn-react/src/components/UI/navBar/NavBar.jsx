import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./../../../styles/App.css";
import DefaultActionButton from "../button/DefaultActionButton";
import { AuthContext } from "../../../context/index.js";
import { AuthService } from "../../../API/AuthService.js";

const NavBar = () => {
  const { isAuthorized, logout } = useContext(AuthContext);

  const handleLogout = (event) => {
    event.preventDefault();

    // dummy option here
    logout();
  };

  return (
    <div className="navbar">
      {isAuthorized ? (
        <>
          <div>{AuthService.getUsername()}</div>
          <DefaultActionButton onClick={handleLogout}>
            Log out
          </DefaultActionButton>
        </>
      ) : (
        <NavLink className="navbar__linkItem" to="/login">
          Login
        </NavLink>
      )}
      <div className="navbar__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__linkItem active" : "navbar__linkItem"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__linkItem active" : "navbar__linkItem"
          }
          to="/posts"
        >
          Posts
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
