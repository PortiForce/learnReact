import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import PostList from "./components/posts/PostList.jsx";
import NewPostForm from "./components/posts/NewPostForm.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "Javascript tutorial",
      body: "this is a javascript description",
      views: 100,
      likes: 23,
      dislikes: 32,
    },
    {
      id: 2,
      title: "Design",
      description: "Design tutorial",
      body: "this is a design description",
      views: 10,
      likes: 3,
      dislikes: 2,
    },
  ]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NewPostForm create={createNewPost} />
      <PostList posts={posts} title={"List of current posts"} />
    </div>
  );
}

export default App;
