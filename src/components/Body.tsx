import React, { useEffect } from "react";
import Login from "./Login";
import Browese from "./Browese";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/slices/user";
import LoginNew from "./Login";

const Body = () => {

  const appRouter = createBrowserRouter([
    { path: "/", element: <LoginNew /> },
    { path: "/browse", element: <Browese /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
