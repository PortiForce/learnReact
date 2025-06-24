import React, { useRef } from "react";
import PostEntry from "./PostEntry.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ title, posts, deletePost }) => {
  // ❗ Always call hooks at the top
  const nodeRefs = useRef({});

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>No Posts found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {title}: {posts.length}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (!nodeRefs.current[post.id]) {
            nodeRefs.current[post.id] = React.createRef();
          }

          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
              nodeRef={nodeRefs.current[post.id]}
            >
              <div ref={nodeRefs.current[post.id]}>
                <PostEntry
                  post={post}
                  number={index + 1}
                  deletePost={deletePost}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
