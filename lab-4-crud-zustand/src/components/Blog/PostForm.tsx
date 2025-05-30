import { useState, type FormEvent } from "react";
import { usePostStore } from "../../stores/post.store";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [published, setPublished] = useState<boolean>(false);
  const { addPost } = usePostStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ title, content, published });
    setTitle("");
    setContent("");
    setPublished(false);
    navigate("/blog");
  };

  return (
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
      <button className="w-full border-1 p-2">Add Post</button>
    </form>
  );
};

export default PostForm;
