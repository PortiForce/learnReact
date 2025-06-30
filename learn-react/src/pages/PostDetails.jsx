import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "./../hooks/useFetching.js";
import PostService from "./../API/PostService.js";
import PostCommentList from "../components/posts/PostCommentList.jsx";
import Loader from "../components/UI/loader/Loader.jsx";

const PostDetails = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);

  const [fetchPostById, isPostDataLoading, postLoadError] = useFetching(
    async (id) => {
      const response = await PostService.getById(id);

      if (response.data) {
        const enrichedPost = {
          ...response.data,
          description: response.data.description || "No description provided.",
          views: Math.floor(Math.random() * 50),
          likes: Math.floor(Math.random() * 22),
          dislikes: Math.floor(Math.random() * 4),
        };
        setPost(enrichedPost);
      } else {
        console.log("no post data loaded: " + postLoadError);
      }
    }
  );

  const [fetchPostComments, isPostCommentsLoading, postCommentsLoadError] =
    useFetching(async (id) => {
      const response = await PostService.getCommentsById(id);

      if (response.data) {
        setPostComments(response.data);
      } else {
        console.log("no post comments loaded: " + postCommentsLoadError);
      }
    });

  const addPostComment = (newPostComment) => {
    console.log("add post comment");
  };

  const hidePostComment = (postId, postCommentId) => {
    console.log("hide post comment");
  };

  const upvotePostComment = (postId, postCommentId) => {
    console.log(
      "upvote post comment, postId: " + postId + "commentId: " + postCommentId
    );
  };

  const downvotePostComment = (postId, postCommentId) => {
    console.log(
      "downvote post comment, postId: " + postId + "commentId: " + postCommentId
    );
  };

  useEffect(() => {
    if (params.id) {
      fetchPostById(params.id);

      if (post) {
        fetchPostComments(params.id);
      }
    }
  }, [params.id]);

  return (
    <div>
      <h2>Post details:</h2>
      {isPostDataLoading ? (
        <div>Loading post info, please wait...</div>
      ) : (
        <>
          <h3>Post title: {post.title}</h3>
          {isPostCommentsLoading ? (
            <Loader />
          ) : (
            <PostCommentList
              title={"Post comments"}
              postComments={postComments}
              hidePostComment={hidePostComment}
              upvotePostComment={upvotePostComment}
              downvotePostComment={downvotePostComment}
            />
          )}
        </>
      )}
    </div>
  );
};
export default PostDetails;
