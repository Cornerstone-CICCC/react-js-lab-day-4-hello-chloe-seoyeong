import { Link } from "react-router-dom";
import { usePostStore } from "../../stores/post.store";

const BlogHome = () => {
  const { posts } = usePostStore();
  return (
    <div>
      <h2 className="text-6xl">Blog List</h2>
      <ul className="list-none">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="p-5">
              <h4 className="text-3xl mb-5">
                <Link to={post.id}>{post.title}</Link>
              </h4>
              <p>{post.content}</p>
              <Link to={post.id}>Detail &rarr;</Link>
            </li>
          ))
        ) : (
          <p>No blog yet. 😇</p>
        )}
      </ul>
    </div>
  );
};

export default BlogHome;
