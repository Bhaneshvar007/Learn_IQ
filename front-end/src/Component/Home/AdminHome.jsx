import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const AdminHome = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminLayout />
            <div className="flex-1 overflow-y-scroll">
                <div className="flex flex-col items-center p-6">
                    <header className="text-center w-full max-w-4xl mb-12">
                        <h1 className="text-5xl font-extrabold text-blue-600">Admin Dashboard</h1>
                        <p className="text-lg text-gray-700 mt-4">
                            Empower your administration with seamless tools and efficient management.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                        <Link to="/create-course">
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-blue-500">Create Course</h3>
                                <p className="text-gray-600 mt-2">
                                    Add new courses to your platform effortlessly and efficiently.
                                </p>
                            </div>
                        </Link>

                        <Link to="/admin/all-cources">
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-green-500">Manage Courses</h3>
                                <p className="text-gray-600 mt-2">
                                    Update, delete, or view all available courses with ease.
                                </p>
                            </div>
                        </Link>

                        <Link to="/find-user">
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-purple-500">Manage Users</h3>
                                <p className="text-gray-600 mt-2">
                                    Handle user accounts and permissions in a few clicks.
                                </p>
                            </div>
                        </Link>

                        <Link to="/Reports">
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-red-500">View Reports</h3>
                                <p className="text-gray-600 mt-2">
                                    Analyze data and generate insightful reports for decision-making.
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-12 text-center text-gray-600 text-sm">
                        <p>&copy; 2024 Admin Panel. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;