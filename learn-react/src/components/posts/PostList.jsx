import React from "react";
import PostEntry from "./PostEntry.jsx";

const PostList = function ({ title, posts, deletePost }) {
  return (
    <div className="postList">
      <h1>
        {title}: {posts.length}
      </h1>
      {posts.map((post) => {
        return <PostEntry post={post} key={post.id} deletePost={deletePost} />;
      })}
    </div>
  );
};

export default PostList;
