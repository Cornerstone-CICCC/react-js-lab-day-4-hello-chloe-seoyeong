import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../../stores/post.store";

const BlogEdit = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getPost, editPost } = usePostStore();

  console.log(slug);
  const blog = getPost(String(slug));

  console.log(blog);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [published, setPublished] = useState<boolean>(false);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setPublished(blog.published);
    }
  }, [blog]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editPost(String(slug), { title, content, published });
    setTitle("");
    setContent("");
    setPublished(false);
    navigate("/blog");
  };

  return (
    <div>
      <h2 className="text-6xl">Blog Edit</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center w-[300px] mx-auto"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-1 p-2"
          placeholder="Enter blog title..."
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border-1 p-2"
          placeholder="Enter blog content..."
        />
        <div>
          <label htmlFor="publish">Publish</label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            name="published"
            id="publish"
          />
        </div>
        <button className="w-full border-1 p-2">Update Post</button>
      </form>
    </div>
  );
};

export default BlogEdit;
