import React from "react";
import DefaultActionButton from "../UI/button/DefaultActionButton";

const PostCommentEntry = ({
  comment,
  hidePostComment,
  upvotePostComment,
  downvotePostComment,
}) => {
  return (
    <div className="postComment__content">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <small>{comment.email}</small>
      <div style={{ marginTop: "0.5rem" }}>
        <DefaultActionButton
          onClick={() => upvotePostComment(comment.postId, comment.id)}
        >
          👍 Upvote
        </DefaultActionButton>
        <DefaultActionButton
          onClick={() => downvotePostComment(comment.postId, comment.id)}
        >
          👎 Downvote
        </DefaultActionButton>
        <DefaultActionButton
          onClick={() => hidePostComment(comment.postId, comment.id)}
        >
          🙈 Hide
        </DefaultActionButton>
      </div>
    </div>
  );
};

export default PostCommentEntry;
