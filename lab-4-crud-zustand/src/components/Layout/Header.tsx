import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1>zustand lab day</h1>
      <nav>
        <menu className="flex gap-4">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"blog"}>BLOG</Link>
          </li>
        </menu>
      </nav>
    </div>
  );
};

export default Header;
