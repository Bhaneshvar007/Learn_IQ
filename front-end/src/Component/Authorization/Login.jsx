import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center h-scree">
            <div className=" p-8 pt-12 flex gap-20 max-w-5xl w-full mb-10">
                {/* Left Illustration */}
                <div className="hidden md:flex items-center justify-center w-1/2 ">
                    <div className="relative">
                        <img
                            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
                            alt="Illustration"
                            className="h-[500px] w-[500px] scale-125 object-contain"
                        />
                    </div>
                </div>

                {/* Login Form */}
                <div className="flex flex-col w-full md:w-1/2 ml-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Log in to continue your learning journey
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="Email"

                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="Email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <button
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                        >
                            Log in
                        </button>
                    </form>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-purple-600 hover:underline">
                            Forgot Password
                        </p>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-600 text-center">Other log in options</p>
                        <div className="flex items-center justify-center mt-2 space-x-4">
                            <button className="bg-gray-100 p-2 rounded-full">
                                <img
                                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                                    alt="Google"
                                    className="h-6 w-6"
                                />
                            </button>
                            <button className="bg-gray-100 p-2 rounded-full">
                                <img
                                    src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                                    alt="Facebook"
                                    className="h-6 w-6"
                                />
                            </button>
                            <button className="bg-gray-100 p-2 rounded-full">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                                    alt="Apple"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-gray-100 py-4 mt-10">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link to={'/signup'}
                                className="text-purple-600 font-medium hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
