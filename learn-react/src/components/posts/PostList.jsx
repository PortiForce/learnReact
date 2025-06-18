import React from "react";
import PostEntry from "./PostEntry.jsx";

const PostList = function ({ posts, title }) {
  return (
    <div className="postList">
      <h1>
        {title}: {posts.length}
      </h1>
      {posts.map((post) => {
        return <PostEntry post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
