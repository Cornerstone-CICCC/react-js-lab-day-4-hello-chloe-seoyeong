import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../../stores/post.store";
import toast from "react-hot-toast";

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
    toast.success("Success to update!");
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
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;
