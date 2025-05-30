import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl mb-3">HOME</h1>
      <Link to={"blog"} className="">
        Go to Bloglist &rarr;
      </Link>
    </div>
  );
};

export default Home;
