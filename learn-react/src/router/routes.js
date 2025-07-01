import NotFound from "../pages/NotFound";

import About from "../pages/About";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";

import Login from "../pages/Login";

import { Navigate } from "react-router-dom";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostDetails /> },
  { path: "/notFound", element: <NotFound /> },
  { path: "*", element: <Navigate to="/posts" /> },
];

export const publicRoutes = [
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/notFound", element: <NotFound /> },
  { path: "*", element: <Navigate to="/login" /> },
];
