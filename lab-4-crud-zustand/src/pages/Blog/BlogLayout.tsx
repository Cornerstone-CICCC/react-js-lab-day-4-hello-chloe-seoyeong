import { Link, Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <nav>
        <menu className="flex gap-5 justify-center bg-gray-100 p-3">
          <li>
            <Link to={"/blog"}>list</Link>
          </li>
          <li>
            <Link to={"/blog/new"}>Add</Link>
          </li>
        </menu>
      </nav>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
