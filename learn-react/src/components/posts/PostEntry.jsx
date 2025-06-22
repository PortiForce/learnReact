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
        <div>{props.post.views}</div>
        <div>{props.post.likes}</div>
        <div>{props.post.dislikes}</div>
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
