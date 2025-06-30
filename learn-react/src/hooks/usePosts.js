import { useMemo } from "react";

export const usePosts = (posts, sortField, postQuery) => {
  const sortedPosts = useSortedPosts(posts, sortField);

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(postQuery) ||
        post.description.toLowerCase().includes(postQuery)
    );
  }, [postQuery, sortedPosts]);

  return sortedAndFilteredPosts;
};

export const useSortedPosts = (posts, sortField) => {
  const sortedPosts = useMemo(() => {
    if (sortField) {
      return [...posts].sort((a, b) => {
        if (typeof a[sortField] === "string") {
          return a[sortField].localeCompare(b[sortField]);
        }
        return a[sortField] - b[sortField];
      });
    }
    return posts;
  }, [sortField, posts]);

  return sortedPosts;
};
