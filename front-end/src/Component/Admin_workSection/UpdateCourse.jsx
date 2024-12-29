import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from '../../../context';

const UpdateCourse = () => {
    const { id } = useParams(); // Get course ID from URL
    const navigate = useNavigate();

    let token = localStorage.getItem('token');


    const [course, setCourse] = useState({
        title: '',
        description: '',
        language: '',
        price: '',
        level: '',
        category: '',
        videos: '',
        resources: null,
    });



    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
    };


    useEffect(async () => {
        try {
            let res = await axios.get('http://localhost:3000/api/all-course');
            let newData = res.data.find((e) => e._id == id);
            setCourse(newData);
        } catch (error) {
            console.log("error", error);
        }
    }, []);


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3000/api/update-course`, course, {
                headers: { Authorization: `${token}`, },
            });
            alert('Course updated successfully!');
            navigate('/all-courses'); // Navigate to course list
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };


    return (
        <div className="max-w-[1200px] mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl w-full font-semibold mb-4 text-gray-800">Update Course</h2>
            <form onSubmit={handleSubmit}>
                {/* Course Title */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Title</label>
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
                    <label className="block text-sm font-semibold text-gray-700">Description</label>
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
                    <label className="block text-sm font-semibold text-gray-700">Language</label>
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
                    <label className="block text-sm font-semibold text-gray-700">Price ($)</label>
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
                    <label className="block text-sm font-semibold text-gray-700">Level</label>
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
                    <label className="block text-sm font-semibold text-gray-700">Category</label>
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
                    <label className="block text-sm font-semibold text-gray-700">Video Link</label>
                    <input
                        type="url"
                        name="videos"
                        value={course.videos}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter video link"
                    />
                </div>

                {/* Resources */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Resources</label>
                    <input
                        type="file"
                        name="resources"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                    Update Course
                </button>
            </form>
        </div>
    );
};

export default UpdateCourse;
