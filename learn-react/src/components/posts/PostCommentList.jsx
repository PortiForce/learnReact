import React from "react";

import PostCommentEntry from "./PostCommentEntry.jsx";

const PostCommentList = ({
  title,
  postComments,
  hidePostComment,
  upvotePostComment,
  downvotePostComment,
}) => {
  if (!postComments.length) {
    return (
      <h4 style={{ textAlign: "center" }}>
        No Comments added, you could be the first
      </h4>
    );
  }
  return (
    <>
      <h3>{title}</h3>
      <div className="postComment__list">
        {postComments.map((comment) => (
          <PostCommentEntry
            key={comment.id}
            comment={comment}
            hidePostComment={hidePostComment}
            upvotePostComment={upvotePostComment}
            downvotePostComment={downvotePostComment}
          />
        ))}
      </div>
    </>
  );
};

export default PostCommentList;
