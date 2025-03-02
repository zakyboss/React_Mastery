import { useBlog } from "../zustand/useZustand";
import styles from "./Output.module.css";

export default function Output({ blog }) {
  const { blogID, blogTitle, blogContent } = blog;
  const { deleteBlog } = useBlog();
  return (
    <div className={styles["output-container"]}>
      <p>Blog ID: {blogID}</p>
      <span className={styles["blog-title"]}>{blogTitle}</span>
      <span className={styles["blog-content"]}>{blogContent}</span>
      <button
        onClick={() => deleteBlog(blogID)}
        style={{ backgroundColor: "red" }}
      >
        Delete
      </button>
    </div>
  );
}
