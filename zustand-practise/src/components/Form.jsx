import React, { useState } from "react";
import { useBlog } from "../zustand/useZustand";
import styles from "./Form.module.css";

export default function Form() {
  const { createBlog } = useBlog();
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const id = `blog#${Math.floor(Math.random() * 50)}`;

  return (
    <div className={styles["form-container"]}>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          createBlog(id, title, blogContent);
          setTitle("");
          setBlogContent("");
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
        />
        <input
          type="text"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Enter blog content"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
