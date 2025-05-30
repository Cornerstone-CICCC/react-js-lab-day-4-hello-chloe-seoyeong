import { Link, useParams } from "react-router-dom";
import { usePostStore } from "../../stores/post.store";

const BlogDetail = () => {
  const { id } = useParams();
  const { getPost, deletePost } = usePostStore();

  const blog = getPost(String(id));

  return (
    <div>
      <h2 className="text-6xl mb-10">BlogDetail</h2>
      {!blog ? (
        <div>
          <h3 className="mb-8">Something Wrong</h3>
          <Link to={"/blog"}>Back to Blog list &rarr;</Link>
        </div>
      ) : (
        <div>
          <h3 className="text-3xl">{blog.title}</h3>
          <p>{blog.content}</p>
          <p>{blog.published ? "Published" : "Draft"}</p>
          <Link to={`/blog/edit/${blog.id}`}>Edit ✏️</Link>
          <button onClick={() => deletePost(blog.id)}>Delete 🗑️</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
