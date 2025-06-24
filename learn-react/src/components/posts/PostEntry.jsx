import React from "react";
import DefaultActionButton from "./../UI/button/DefaultActionButton.jsx";

const PostEntry = function (props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
        <p>
          Views: {props.post.views} | Likes: {props.post.likes} | Dislikes:{" "}
          {props.post.dislikes}
        </p>
      </div>
      <div className="post__actions">
        <DefaultActionButton onClick={() => props.deletePost(props.post.id)}>
          Delete post {props.post.id}
        </DefaultActionButton>
      </div>
    </div>
  );
};

export default PostEntry;
