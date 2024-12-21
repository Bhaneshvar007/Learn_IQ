import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    let data = {
        email: '',
        password: '',
    }


    let [input, setInput] = useState(data);
    let usenavigate = useNavigate()


    async function inputHandler(e) {
        e.preventDefault();
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    // Handle login submission
    async function submitHandler(e) {
        e.preventDefault();
        // console.log(input);

        try {
            let res = await axios.post('http://localhost:3000/api/login', input);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                alert("User Login Sucessfully !!");
            }

            else {
                alert(res.data);
                // usenavigate('/signup');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed. Please try again.');
        }

        // console.log(input.email);


    }




    // Handle forgot password submission
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/forgot-password", {
                email: input.email,
            });
            alert("Password reset email sent. Check your inbox.");
        } catch (error) {
            alert("Failed to send password reset email. Try again.");
            console.error(error);
        }
    };


    // State for forget password;
    let [forget, setForget] = useState(true);


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


                    {!forget && (
                        <div>
                            <form className="flex justify-between flex-col mt-4 gap-5" >
                                <div>
                                    <input
                                        type="email"
                                        name="email" value={input.email}
                                        onChange={inputHandler}
                                        placeholder="Enter your recovery email"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>
                                <button
                                    className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                                    onClick={handleForgotPassword}
                                >
                                    Continue
                                </button>
                            </form>


                            <div className="flex justify-between mt-4 "
                            >
                                <p className="text-sm text-purple-600 hover:underline cursor-pointer "
                                    onClick={() => setForget(true)}
                                >
                                    Back to Login
                                </p>
                            </div>
                        </div>


                    )}

                    {forget && (
                        <form className="space-y-4" >
                            <div>
                                <input
                                    type="email"
                                    id="Email"
                                    name="email" value={input.email}
                                    onChange={inputHandler}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password" value={input.password}
                                    onChange={inputHandler}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                />
                            </div>
                            <button
                                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                                onClick={submitHandler}
                            >
                                Log in
                            </button>
                        </form>
                    )}


                    <div className="flex justify-between mt-4 "
                        style={forget ? { visibility: "visible" } : { visibility: "hidden" }}

                    >
                        <p className="text-sm text-purple-600 hover:underline cursor-pointer "
                            onClick={() => setForget(false)}
                        >
                            Forgot Password
                        </p>


                    </div>


                    {/* Others Login  */}
                    {/* <div className="mt-6">
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
                                    src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
                                    alt="email"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                    </div> */}

                    <div className="flex items-center justify-center bg-gray-100 py-4 mt-10" style={forget ? { visibility: "visible" } : { visibility: "hidden" }}>
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
