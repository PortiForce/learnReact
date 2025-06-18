import React from "react";

const PostEntry = function (props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
        <div>{props.post.views}</div>
        <div>{props.post.likes}</div>
        <div>{props.post.dislikes}</div>
      </div>
      <div className="post__actions">
        <button>Delete post {props.post.id}</button>
      </div>
    </div>
  );
};

export default PostEntry;
