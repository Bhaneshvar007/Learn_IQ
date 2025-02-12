import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../Home/AdminLayout";

const CreateCourse = ({ onAddCourse }) => {
    const [course, setCourse] = useState({
        title: "",
        description: "",
        language: "",
        price: "",
        level: "",
        category: "",
        videos: "",
        resources: ""
    });


    let navigate = useNavigate();




    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const res = await axios.post(
                "http://localhost:3000/api/course",
                course,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            alert("Course created successfully");
            navigate('/')

        } catch (error) {
            console.log("Error creating course:", error);
        }

        // Reset the form after submission
        setCourse({
            title: "",
            description: "",
            language: "",
            price: "",
            level: "",
            category: "",
            videos: "",
            resources: "",
        });
    };








    return (
        <div className="flex">
            <AdminLayout />
            <div className="w-[1200px] mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-md -ml-10">
                <h2 className="text-xl w-full font-semibold mb-4 text-gray-800">Create a New Course</h2>
                <form onSubmit={handleSubmit}>
                    {/* Course Title */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={course.title}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter course title"

                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={course.description}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter course description"
                            rows="3"

                        ></textarea>
                    </div>

                    {/* Language */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Language
                        </label>
                        <input
                            type="text"
                            name="language"
                            value={course.language}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter language"

                        />
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={course.price}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter course price"

                        />
                    </div>

                    {/* Level */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Level
                        </label>
                        <select
                            name="level"
                            value={course.level}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"

                        >
                            <option value="">Select level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={course.category}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter category"

                        />
                    </div>

                    {/* Video Link */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Video Link
                        </label>
                        <input
                            type="url"
                            name="videos"
                            value={course.videos}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter video link"

                        />
                    </div>

                    {/* FIle Link */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Resources
                        </label>
                        <input
                            type="file"
                            name="resources"
                            value={course.resources}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Choose the resources"

                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
