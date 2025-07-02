import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultActionButton from "./../UI/button/DefaultActionButton.jsx";

const PostEntry = function (props) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          #{props.post.id} {props.post.title}
        </strong>
        <div className="post__body">{props.post.body}</div>
        <p>
          Views: {props.post.views} | Likes: {props.post.likes} | Dislikes:{" "}
          {props.post.dislikes}
        </p>
      </div>
      <div className="post__actions">
        <DefaultActionButton
          onClick={() => navigate(`/posts/${props.post.id}`)}
        >
          Show more
        </DefaultActionButton>
        <DefaultActionButton onClick={() => props.deletePost(props.post.id)}>
          Delete post
        </DefaultActionButton>
      </div>
    </div>
  );
};

export default PostEntry;
