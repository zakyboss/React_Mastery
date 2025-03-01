import styles from "./Output.module.css";

export default function Output({blog}) {
  const { blogID, blogTitle, blogContent, blogs } = blog;
  console.log(blogs);
  return (
    <div className={styles["output-container"]}>
      <p>Blog ID: {blogID}</p>
      <span className={styles["blog-title"]}>{blogTitle}</span>
      <span className={styles["blog-content"]}>{blogContent}</span>
    </div>
  );
}
