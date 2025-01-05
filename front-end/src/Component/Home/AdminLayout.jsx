import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoCodeSharp } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";






const AdminLayout = ({ children }) => {
    let Navigate = useNavigate();

    let LogOut = () => {
        localStorage.removeItem("token");
        Navigate("/");
        localStorage.setItem('E-role', "user");
        window.location.reload();
    }

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    let username = localStorage.getItem('E-username');
    let email = localStorage.getItem('E-email');


    return (
        <div className="min-h-screen  flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-700 text-white flex flex-col fixed top-0 left-0 h-full">
                <div className="p-6">
                    <div className="flex gap-2 items-center mb-6">
                        {/* <img className="w-10 h-10 object-cover" src="https://cdn-icons-png.flaticon.com/512/6277/6277478.png" alt="" /> */}
                        <h1 className="text-2xl font-bold ">Admin Panel</h1>
                        <MdOutlineAdminPanelSettings className="text-3xl font-bold" />
                    </div>
                    <nav className="space-y-4">
                        <Link
                            to="/"
                            className=" py-2 px-4 rounded-lg hover:bg-gray-500 flex items-center gap-2"
                        >
                            Dashboard
                            <IoCodeSharp className="text-xl " />
                        </Link>
                        <Link to="/create-course"
                            className="py-2 px-4 rounded-lg hover:bg-gray-500  flex items-center gap-2"
                        >
                            Create Course
                            <MdCreateNewFolder/>
                        </Link>
                        <Link to="/admin/all-cources"
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
                            to="/pending-cources"
                            className="block py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            Pending cources
                        </Link>

                    </nav>
                </div>
                {/* Toggle Content */}

                <div className="p-6 absolute bottom-0">
                    {isVisible && (
                        <div className="mt-4  p-4 rounded-lg -ml-5 mr-5 duration-500">
                            <button
                                onClick={LogOut}
                                className="w-full py-2 bg-blue-500 mt-4 mb-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-5"
                            >
                                <span>LogOut</span>
                                <MdLogout className="" />
                            </button>
                            <Link
                                to="/editprofile"
                                className=" py-2 px-2 rounded-lg  flex items-center  justify-center gap-3 bg-red-500 hover:bg-red-600"
                            >
                                <span className="">
                                    Edit profile
                                </span>
                                <FaUserEdit className="text-xl" />
                            </Link>

                        </div>
                    )}
                    {/* User Button */}
                    <div
                        onClick={toggleVisibility}
                        className="py-2 px-4 rounded-lg cursor-pointer flex items-center gap-3"
                    >
                        <FaUserCircle className="text-4xl -ml-6" />
                        <div className="">
                            <h1>{username}</h1>
                            <p className="text-xs">{email}</p>
                        </div>
                    </div>


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
