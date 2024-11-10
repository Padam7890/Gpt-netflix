import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../redux/slices/user";

const Header = () => {
  const user = useSelector((store: any) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("An error occurred while signing out:", error);
      });
  };
  return (
    <div className=" absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
        className=" w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className=" flex ">
          <img src="" alt="" />
          <button
            onClick={handleSignOut}
            className=" text-black  px-4 w-25 h-12 text-center  bg-white rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
