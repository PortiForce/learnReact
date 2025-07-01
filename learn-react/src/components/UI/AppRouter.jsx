import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../router/routes.js";
import { AuthContext } from "../../context/index.js";

const AppRouter = () => {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <Routes>
      {(isAuthorized ? privateRoutes : publicRoutes).map(
        ({ path, element }) => (
          <Route key={Route.path} path={path} element={element} />
        )
      )}
    </Routes>
  );
};

export default AppRouter;
