import React, { useEffect } from "react";
import Login from "./Login";
import Browese from "./Browese";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/slices/user";
import LoginNew from "./Login";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    { path: "/", element: <LoginNew /> },
    { path: "/browse", element: <Browese /> },
  ]);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, phoneNumber } = user;
        dispatch(
          addUser({
            displayName,
            email,
            phoneNumber,
            uid: user.uid,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
