import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from '../Home/AdminLayout';

const EditProfile = () => {
    let navigate = useNavigate();

    // Initial state for the form
    const [input, setInput] = useState({
        username: '',
        email: '',
    });

    // Fetch existing user data on component mount
    useEffect(() => {
        async function fetchUserData() {
            try {
                const res = await axios.get('http://localhost:3000/api/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (res.data) {
                    setInput(res.data); // Pre-fill form with fetched data
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
                alert('Failed to fetch profile data.');
            }
        }

        fetchUserData();
    }, []);

    // Handle form input changes
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    // Handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put('http://localhost:3000/api/updateProfile', input, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (res.data.success) {
                alert('Profile updated successfully!');
                navigate('/'); // Redirect after successful update
                localStorage.setItem('E-username', input.username);
                localStorage.setItem('E-email', input.email);
                window.location.reload();
            } else {
                alert(res.data.message || 'Profile update failed.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Profile update failed. Please try again.');
        }
    };




    let role = localStorage.getItem('E-role');

    return (
        <div className="flex  h-screen">

            <AdminLayout />

            <div className="p-8 pt-12 flex gap-20 max-w-5xl w-full mb-10">
                {/* Left Illustration */}
                {/* <div className="hidden md:flex items-center justify-center w-1/2">
                    <div className="relative">
                        <img
                            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
                            alt="Illustration"
                            className="h-[500px] w-[500px] scale-125 object-contain"
                        />
                    </div>
                </div> */}

                {/* Edit Profile Form */}
                <div className="flex flex-col w-full md:w-1/2 ml-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Your Profile</h2>
                    <form className="space-y-4" onSubmit={submitHandler}>
                        <div>
                            <input
                                type="text"
                                name="username"
                                value={input.username}
                                onChange={inputHandler}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={inputHandler}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-5 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
