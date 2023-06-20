import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <h1>error</h1>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);
  export default router