import React, { useMemo, useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import NewPostForm from "./components/posts/NewPostForm.jsx";
import PostFilter from "./components/posts/PostFilter.jsx";
import PostList from "./components/posts/PostList.jsx";

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

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("used sorted posts api");
    if (filter.sort) {
      return [...posts].sort((a, b) => {
        if (typeof a[filter.sort] === "string") {
          return a[filter.sort].localeCompare(b[filter.sort]);
        }
        return a[filter.sort] - b[filter.sort];
      });
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter.query) ||
        post.description.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NewPostForm create={createNewPost} />
      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndFilteredPosts.length ? (
        <PostList
          title={"List of current posts"}
          posts={sortedAndFilteredPosts}
          deletePost={deletePost}
        />
      ) : (
        <h1 style={{ testAlign: "center" }}>No Posts found</h1>
      )}
    </div>
  );
}

export default App;
