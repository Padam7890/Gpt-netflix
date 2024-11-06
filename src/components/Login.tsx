import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className=" absolute h-full w-full">
        <img
          className=" w-full h-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/NP-en-20241028-TRIFECTA-perspective_d9e9d27c-9372-4672-94ff-bd413d57dff6_medium.jpg"
          alt="netflic Gpt"
        />
      </div>
      <form
        className=" absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-3xl py-4"> Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <button className="p-4 my-2 bg-red-700 w-full rounded-lg" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default Login;
