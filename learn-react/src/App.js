import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";

import DefaultModal from "./components/UI/modal/DefaultModal.jsx";
import NewPostForm from "./components/posts/NewPostForm.jsx";
import PostFilter from "./components/posts/PostFilter.jsx";
import PostList from "./components/posts/PostList.jsx";

import Loader from "./components/UI/loader/Loader.jsx";
import DefaultActionButton from "./components/UI/button/DefaultActionButton.jsx";

import { usePosts } from "./hooks/usePosts.js";
import { useFetching } from "./hooks/useFetching.js";

import PostService from "./API/PostService.js";

import { getPagesCount } from "./utils/pagination";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [postModal, setPostModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const [postsCount, setPostsCount] = useState(0);
  const [postsPagesCount, setPostsPagesCount] = useState(0);
  const [postsLimitCount, setPostsLimitCount] = useState(10);
  const [postsPage, setPostsPage] = useState(1);
  const [fetchPosts, arePostsLoading, fetchPostsError] = useFetching(
    async () => {
      const response = await PostService.getAll(postsLimitCount, postsPage);

      const enrichedResponse = response.data.map((post) => ({
        ...post,
        description: post.description || "No description provided.",
        views: Math.floor(Math.random() * 50),
        likes: Math.floor(Math.random() * 22),
        dislikes: Math.floor(Math.random() * 4),
      }));

      setPosts(enrichedResponse);
      setPostsCount(response.headers["x-total-count"]);
      const postPagesCount = getPagesCount(postsCount, postsLimitCount);
      setPostsPagesCount(postPagesCount);
    }
  );

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setPostModal(false);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <DefaultActionButton style={{ marginTop: "15px" }} onClick={fetchPosts}>
        Load Posts
      </DefaultActionButton>
      <DefaultActionButton
        style={{ marginTop: "15px" }}
        onClick={() => setPostModal(true)}
      >
        Create Post
      </DefaultActionButton>
      <DefaultModal isVisible={postModal} setVisible={setPostModal}>
        <NewPostForm create={createNewPost} />
      </DefaultModal>
      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {fetchPostsError && (
        <h1>There was an error during posts load: ${fetchPostsError}</h1>
      )}
      {arePostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          title={"List of current posts"}
          posts={sortedAndFilteredPosts}
          deletePost={deletePost}
        />
      )}
    </div>
  );
}

export default App;
