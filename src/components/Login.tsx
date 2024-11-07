import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkvalidateInput } from "../utils/validate";

const LoginNew = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrormessage] = useState<string | null>(null);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    const checkValidate = checkvalidateInput({
      username: !signInForm ? usernameRef?.current?.value : null,
      password: passwordRef?.current?.value,
      email: emailRef?.current?.value,
    });

    setErrormessage(checkValidate);

    if (!checkValidate) {
      console.log("Form submitted successfully!");
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add("filled");
    } else {
      e.target.classList.remove("filled");
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-black">
      <div className="absolute h-full w-full">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/NP-en-20241028-TRIFECTA-perspective_d9e9d27c-9372-4672-94ff-bd413d57dff6_medium.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative p-12 bg-black bg-opacity-80 w-full max-w-md text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Username Input */}
        {!signInForm && (
          <div className="relative mb-6">
            <input
              ref={usernameRef}
              id="username"
              name="username"
              type="text"
              placeholder=" "
              className="peer p-4 w-full bg-gray-900 bg-opacity-40 border border-gray-700 text-white rounded-md focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              onChange={handleInputChange}
            />
            <label
              htmlFor="username"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all transform scale-100 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100  peer-focus:scale-90 peer-focus:text-white"
            >
              Username
            </label>
          </div>
        )}

        {/* Email Input */}
        <div className="relative mb-6">
          <input
            ref={emailRef}
            id="email"
            name="email"
            type="text"
            placeholder=" "
            className="peer p-4 w-full bg-gray-900 bg-opacity-40 border border-gray-700 text-white rounded-md focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
            onChange={handleInputChange}
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all transform scale-100 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100  peer-focus:scale-90 peer-focus:text-white"
          >
            Email Address
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            ref={passwordRef}
            id="password"
            name="password"
            type="password"
            placeholder=" "
            className="peer p-4 w-full bg-gray-900 bg-opacity-40 border border-gray-700 text-white rounded-md focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
            onChange={handleInputChange}
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all transform scale-100 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100  peer-focus:scale-90 peer-focus:text-white"
          >
            Password
          </label>
        </div>

        {/* Submit Button */}
        <button
          className="p-4 w-full bg-red-700 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors duration-200"
          type="submit"
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
        )}

        {/* Toggle Sign-In/Sign-Up Link */}
        <p className="py-4 text-center">
          {signInForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            onClick={toggleSignInForm}
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
