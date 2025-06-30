import React, { useRef } from "react";
import PostEntry from "./PostEntry.jsx";
import { usePagination } from "./../../hooks/usePagination.js";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import DefaultActionButton from "../UI/button/DefaultActionButton.jsx";

const PostList = ({
  title,
  posts,
  deletePost,
  showPostDetails,
  totalCount,
  itemsPerPage,
}) => {
  // ❗ Always call hooks at the top
  const nodeRefs = useRef({});

  const { currentPage, totalPages, offset, nextPage, prevPage, gotoPage } =
    usePagination(totalCount, itemsPerPage);

  if (!posts.length) {
    return <h3 style={{ textAlign: "center" }}>No Posts found</h3>;
  }

  const paginatedPosts = posts.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {title}: {posts.length} out of {totalCount}
      </h1>
      <TransitionGroup>
        {paginatedPosts.map((post, index) => {
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
                  showPostDetails={showPostDetails}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <div className="page__wrapper">
        <DefaultActionButton onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </DefaultActionButton>
        <span className="page">
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <DefaultActionButton
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </DefaultActionButton>
      </div>
    </div>
  );
};

export default PostList;
