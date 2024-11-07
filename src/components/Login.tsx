import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginNew = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toogleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-black">
      <div className="absolute h-full w-full">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/NP-en-20241028-TRIFECTA-perspective_d9e9d27c-9372-4672-94ff-bd413d57dff6_medium.jpg"
          alt="Netflix background"
        />
      </div>
      <form className="relative p-12 bg-black bg-opacity-80 w-full max-w-md text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* User Name Input */}

        {!signInForm && (
          <div className="relative mb-6">
            <input
              id="username"
              name="text"
              type="text"
              placeholder=" "
              className="peer p-4 w-full bg-gray-900 bg-opacity-40 border border-gray-700 text-white rounded-md 
            focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
            />
            <label
              htmlFor="username"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all transform scale-100 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-3 peer-focus:-translate-y-2 peer-focus:scale-90"
            >
              User Name
            </label>
          </div>
        )}

        {/* Email Input */}
        <div className="relative mb-6">
          <input
            id="email"
            name="email"
            type="text"
            placeholder=" "
            className="peer p-4 w-full bg-gray-900 bg-opacity-40 border border-gray-700 text-white rounded-md 
            focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all transform scale-100 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-3 peer-focus:-translate-y-2 peer-focus:scale-90"
          >
            Email Address
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            id="password"
            name="password"
            type="password"
            placeholder=" "
            className="peer p-4 w-full bg-gray-900 bg-opacity-40 border border-gray-700 text-white rounded-md 
            focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
          />
          <label
            htmlFor="password"
            className="absolute  left-4 top-5 text-gray-500 text-sm transition-all transform scale-100 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-2 peer-focus:scale-90"
          >
            Password
          </label>
        </div>

        {/* Sign-In Button */}
        <button
          className="p-4 w-full bg-red-700 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors duration-200"
          type="submit"
        >
          Sign In
        </button>

        {/* Sign-Up Link */}
        <p className="py-4 text-center">
          {signInForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            onClick={toogleSignInForm}
            to="#"
            className="text-blue-500 hover:underline"
          >
            {signInForm ? "Sign Up Now" : "Sign In Now"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginNew;
