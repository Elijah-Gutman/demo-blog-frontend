import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { PostsIndexPage } from "./PostsIndexPage";
import { PostsNewPage } from "./PostsNewPage";
import { PostsEditPage } from "./PostsEditPage";
import { PostsShowPage } from "./PostsShowPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <div className="container mt-5 mb-5">
          <br />
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsIndexPage />,
        loader: () => axios.get("/posts.json").then((response) => response.data),
      },
      {
        path: "/posts/new",
        element: <PostsNewPage />,
      },
      {
        path: "/posts/:id",
        element: <PostsShowPage />,
        loader: ({ params }) => axios.get(`/posts/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/posts/:id/edit",
        element: <PostsEditPage />,
        loader: ({ params }) => axios.get(`/posts/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
