import React from "react";
import Context from "../../../context";






const VerticalMenu = ({ courseData }) => {
    const categories = ["All", ...new Set(courseData.map((course) => course.category))];
    return (
        <div className="min-h-screen flex justify-center items-start py-8 z-30  relative">
            <div className="bg-white shadow-md rounded-lg w-64 p-4 absolute mt-5">
                <ul className="space-y-3">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center text-gray-700 hover:text-blue-500 transition cursor-pointer"
                        >
                            <span>{category}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VerticalMenu;
