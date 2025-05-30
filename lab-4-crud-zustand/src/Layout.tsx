import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between -m-8">
      <Header />
      <main>
        <div>
          <Toaster />
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
