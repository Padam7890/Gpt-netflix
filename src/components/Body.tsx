import React from "react";
import Login from "./Login";
import Browese from "./Browese";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browese /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
