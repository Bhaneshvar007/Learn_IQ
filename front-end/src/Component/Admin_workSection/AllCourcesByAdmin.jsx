import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';

const AllCourcesByAdmin = () => {
    let [courses, setCourses] = useState([]);
    useEffect(async () => {
        try {
            let res = await axios.get('http://localhost:3000/api/all-course');
            setCourses(res.data);
            console.log(res.data, "cources")
        } catch (error) {
            console.log("error", error);
        }
    }, []);


    let navigate = useNavigate();


    // Update cource
    async function updateCourse(id) {
        navigate(`/update-course/${id}`);
    }

    let token = localStorage.getItem("token")
    // delete cource
    async function deleteCourse(id) {
        try {
            await axios.delete(`http://localhost:3000/api/delete-course/${id}`, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            alert('Course deleted successfully !!')
            setCourses((prevData) => prevData.filter((course) => course._id !== id));

        } catch (error) {
            console.error('Error deleting user:', error);
        }

    }


    return (
        <div className="max-w-[1200px] mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold ml-2 text-purple-700 mb-6">All Courses</h1>
            <div className="flex flex-col gap-6">
                {courses.map((course) => (
                    <div
                        key={course._id}
                        className="bg-white rounded-lg shadow-md border border-gray-200 p-4 w-full "
                    >
                        <video
                            src={course.videos} controls
                            alt="Course Thumbnail"
                            className="w-full h-56 object-cover rounded-lg mb-4"
                        />
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
                            <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                        </div>
                        <div className={`mb-4 font-medium ${course.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                            Status: {course.status}
                        </div>
                        <div className="flex justify-between">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                                onClick={() => updateCourse(course._id)}
                            >
                                Update
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                onClick={() => deleteCourse(course._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default AllCourcesByAdmin
