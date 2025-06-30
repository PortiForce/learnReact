import About from "../pages/About";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";
import NotFound from "../pages/PostDetails";

export const routes = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostDetails },
  { path: "/notfound", element: NotFound },
];
