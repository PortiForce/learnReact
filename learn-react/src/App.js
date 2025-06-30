import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";

import NavBar from "./components/UI/navBar/NavBar.jsx";
import AppRouter from "./components/UI/AppRouter.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
