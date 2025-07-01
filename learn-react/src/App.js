import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";

import NavBar from "./components/UI/navBar/NavBar.jsx";
import AppRouter from "./components/UI/AppRouter.jsx";
import { AuthProvider, AuthContext } from "./context/index.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
