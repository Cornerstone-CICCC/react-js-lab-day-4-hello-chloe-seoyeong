import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import BlogHome from "./pages/Blog/BlogHome";
import BlogNew from "./pages/Blog/BlogNew";
import BlogLayout from "./pages/Blog/BlogLayout";
import BlogDetail from "./pages/Blog/BlogDetail";
import BlogEdit from "./pages/Blog/BlogEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogLayout />}>
            <Route index element={<BlogHome />} />
            <Route path="new" element={<BlogNew />} />
            <Route path=":id" element={<BlogDetail />} />
            <Route path="edit/:slug" element={<BlogEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
