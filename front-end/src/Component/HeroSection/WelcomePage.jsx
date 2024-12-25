import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to Our Platform!</h1>
      <p className="text-gray-600 mb-6">
        Please log in or sign up to access amazing features.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
