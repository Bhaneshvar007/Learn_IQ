import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
    let Navigate = useNavigate();
    
    let LogOut = () => {
        localStorage.removeItem("token");
        Navigate("/");
        localStorage.setItem('E-role', "user");
        window.location.reload();
    }

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-700 text-white flex flex-col fixed top-0 left-0 h-full">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
                    <nav className="space-y-4">
                        <Link
                            to="/"
                            className="block py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            Dashboard
                        </Link>
                        <Link to="/create-course"
                            className="block py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            Create Course
                        </Link>
                        <Link to="/admin/all-courses"
                            className="block py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            Manage Courses
                        </Link>
                        <Link
                            to="/find-user"
                            className="block py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            User Management
                        </Link>
                        <Link
                            to="/editprofile"
                            className="block py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            Edit profile
                        </Link>
                    </nav>
                </div>
                <div className="p-6">
                    <button onClick={LogOut} className="w-1/2 py-2 px-1 bg-blue-500 absolute bottom-5 left-8 rounded-lg hover:bg-blue-600">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-10 ml-64"> {/* ml-64 ensures content starts after the sidebar */}
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
