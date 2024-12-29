import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {
    let data = {
        username: '',
        email: '',
        password: '',
        role: '',
    }

    let navigate = useNavigate();

    let [input, setInput] = useState(data);

    function inputHandler(e) {
        e.preventDefault();
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    async function submitHandler(e) {
        e.preventDefault();
        // console.log(input);
        try {
            let res = await axios.post('http://localhost:3000/api/signup', input);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('E-username', input.username);
                localStorage.setItem('E-email', input.email);
                localStorage.setItem('E-role', input.role);
                alert("User Login Sucessfully !!");
                navigate('/')
                window.location.reload();
            }

            else {
                alert(res.data)
            }
            // console.log(res);

        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed. Please try again.');
        }
    }



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
                        Sign up and start learning
                    </h2>
                    <form className="space-y-4">
                        <div>

                            <input
                                type="text"
                                name='username' value={input.username}
                                onChange={inputHandler}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div>

                            <input
                                type="email"
                                id="email"
                                name='email' value={input.email}
                                onChange={inputHandler}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div>

                            <input
                                type="password"
                                name='password' value={input.password}
                                onChange={inputHandler}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-gray-700 font-medium mb-2">Select Role</label>
                            <select
                                name="role"
                                value={input.role}
                                onChange={inputHandler}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            >
                                <option value="user">user</option>
                                <option value="instructor">instructor</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>


                        <button
                            type="submit"
                            onClick={submitHandler}
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                        >
                            Sign up
                        </button>
                    </form>



                    {/* Terms and Privacy */}
                    <p className="text-center text-[10px] text-gray-500 mt-5">
                        By signing up, you agree to our{" "}
                        <span
                            className="text-purple-600 hover:underline"
                        >
                            Terms of Use
                        </span>{" "}
                        and{" "}
                        <span
                            className="text-purple-600 hover:underline"
                        >
                            Privacy Policy
                        </span>.
                    </p>




                    <div className="flex items-center justify-center bg-gray-100 py-4 mt-6">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <Link to={'/login'}
                                className="text-purple-600 font-medium hover:underline"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignUp
