import React from "react";

import NotFound from "./../../pages/NotFound.jsx";
import About from "./../../pages/About.jsx";
import Posts from "./../../pages/Posts";
import PostDetails from "./../../pages/PostDetails";

import { Route, Routes, Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostDetails />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notFound" />} />
    </Routes>
  );
};

export default AppRouter;
