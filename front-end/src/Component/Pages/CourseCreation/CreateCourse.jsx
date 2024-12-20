import React, { useState } from "react";

const CreateCourse = ({ onAddCourse }) => {
    const [course, setCourse] = useState({
        title: "",
        description: "",
        language: "",
        price: "",
        level: "",
        category: "",
        video: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onAddCourse) {
            onAddCourse(course);
        }
        // Reset the form after submission
        setCourse({
            title: "",
            description: "",
            language: "",
            price: "",
            level: "",
            category: "",
            video: "",
        });
    };

    return (
        <div className="max-w-[600px] mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Create a New Course</h2>
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
                    />
                </div>

                {/* Video Link */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">
                        Video Link
                    </label>
                    <input
                        type="url"
                        name="video"
                        value={course.video}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter video link"
                        required
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
    );
};

export default CreateCourse;
