import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-6xl mb-3">HOME</h2>
      <Link to={"blog"} className="">
        Go to Bloglist &rarr;
      </Link>
    </div>
  );
};

export default Home;
