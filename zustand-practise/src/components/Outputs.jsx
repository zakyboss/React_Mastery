import React from "react";
import Output from "./Output";
import { useBlog } from "../zustand/useZustand";
export default function Outputs() {
  const { blogs } = useBlog();
  return (
    <div>
      {blogs.map((blog) => (
        <Output blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
