import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ForgetPassword = () => {
    const [isOpen, setIsOpen] = useState(true);
    let navigate = useNavigate();

    
    const { token } = useParams();


    const handleClose = () => {
        setIsOpen(false);
        navigate('/');
    };


    let password = ''
    let [isPassword, setIsPassword] = useState(password);


    async function submitHandler(e) {
        e.preventDefault();

        axios.post(`http://localhost:3000/api/reset-password/${token}`, { password: isPassword })
            .then(response => {
                alert(response.data);
                navigate('/login'); // Redirect to login after success
            })
            .catch(error => {
                alert(error.response?.data || "An error occurred.");
            });

    }



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition mr-5 mt-2 font-bold"
                        >
                            &#10005;
                        </button>
                        <h1 className="text-2xl font-bold text-purple-600 text-center mt-5">
                            Forgot Password
                        </h1>
                        <form className="flex flex-col mt-6 gap-5">
                            <div>
                                <input
                                    type="password"
                                    name="password" value={isPassword.password}
                                    placeholder="Enter a new password"
                                    onChange={(e) => setIsPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                />
                            </div>
                            <button
                                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                                onClick={submitHandler}
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForgetPassword;
