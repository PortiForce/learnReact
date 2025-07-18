import React, { useEffect, useState, useRef } from "react";
import "./../styles/App.css";

import DefaultModal from "./../components/UI/modal/DefaultModal.jsx";
import NewPostForm from "./../components/posts/NewPostForm.jsx";
import PostFilter from "./../components/posts/PostFilter.jsx";
import PostList from "./../components/posts/PostList.jsx";

import Loader from "./../components/UI/loader/Loader.jsx";
import DefaultActionButton from "./../components/UI/button/DefaultActionButton.jsx";

import { usePosts } from "./../hooks/usePosts.js";
import { useFetching } from "./../hooks/useFetching.js";

import PostService from "./../API/PostService.js";

import { getPagesCount } from "./../utils/pagination";
import { useObserver } from "../hooks/useObserver.js";
import DefaultActionSelect from "../components/UI/select/DefaultActionSelect.jsx";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [postModal, setPostModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const [postsCount, setPostsCount] = useState(0);

  const [postsPagesCount, setPostsPagesCount] = useState(0);
  const [postsLimitCount, setPostsLimitCount] = useState(10);

  const [postsPage, setPostsPage] = useState(1);
  const lastElement = useRef();

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

      setPosts([...posts, ...enrichedResponse]);
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

  const showPostDetails = (postId) => {
    // show post details
    console.log("post details: " + postId);
  };

  useObserver(lastElement, postsPage < postsPagesCount, arePostsLoading, () => {
    setPostsPage(postsPage + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [postsPage, postsLimitCount]);

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
      <DefaultActionSelect
        value={postsLimitCount}
        onChange={(value) => setPostsLimitCount(value)}
        defaultValue="items per page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "show all" },
        ]}
      ></DefaultActionSelect>
      {fetchPostsError && (
        <h1>There was an error during posts load: ${fetchPostsError}</h1>
      )}
      {arePostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        title={"List of current posts"}
        posts={sortedAndFilteredPosts}
        deletePost={deletePost}
        showPostDetails={showPostDetails}
        totalCount={postsCount}
        itemsPerPage={postsLimitCount}
      />
      <div
        ref={lastElement}
        style={{ height: "20px", background: "gray" }}
      ></div>
    </div>
  );
}

export default Posts;
