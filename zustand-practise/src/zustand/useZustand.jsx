import { create } from "zustand";
const useBlog = create(function (set) {
  return {
    blogs: [],
    blogID: "",
    blogTitle: "",
    blogContent: [],

    // functions
    createBlog: function (enteredBlogID, enteredBlogTitle, enteredBlogContent) {
      if (!enteredBlogContent || !enteredBlogID || !enteredBlogTitle) {
        return;
      }
      set(function (state) {
        return {
          ...state,
          blogID: enteredBlogID,
          blogTitle: enteredBlogTitle,
          blogContent: enteredBlogContent,
          blogs: [
            ...state.blogs,
            {
              blogID: enteredBlogID,
              blogTitle: enteredBlogTitle,
              blogContent: enteredBlogContent,
            },
          ],
        };
      });
    },
  };
});
export { useBlog };
