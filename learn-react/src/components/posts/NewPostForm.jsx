import React from "react";
import { useState, useRef } from "react";
import DefaultActionButton from "./../UI/button/DefaultActionButton.jsx";
import DefaultActionInput from "./../UI/input/DefaultActionInput.jsx";

const NewPostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <form>
      <DefaultActionInput
        value={post.title}
        placeholder="post name"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <DefaultActionInput
        value={post.description}
        placeholder="post description"
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />

      <DefaultActionButton onClick={addNewPost}>
        Create post
      </DefaultActionButton>
    </form>
  );
};

export default NewPostForm;
