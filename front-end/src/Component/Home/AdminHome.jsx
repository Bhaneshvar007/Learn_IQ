import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AdminLayout from './AdminLayout';
import Context from '../../../context';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);




const AdminHome = () => {

    let { courseData } = useContext(Context);

    let ApprovedData = courseData.filter((e) => e.status == 'Approved')
    let rejectData = courseData.filter((e) => e.status == 'Rejected')
    let pendingData = courseData.filter((e) => e.status == 'Pending')


    const [userCount, setUserCount] = useState(0); // Placeholder for user count
    const [courseCount, setCourseCount] = useState(courseData.length); // Placeholder for course count
    const [pendingCourseCount, setPendingCourseCount] = useState(pendingData.length); // Placeholder for pending course count
    const [approvedCourseCount, setApprovedCourseCount] = useState(ApprovedData.length); // Placeholder for pending course count
    const [rejectCourseCount, setRejectCourseCount] = useState(rejectData.length); // Placeholder for pending course count



    let token = localStorage.getItem('token')
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('http://localhost:3000/api/find-user', {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                setUserCount(res.data.length); // Adjust based on actual API response
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, [token]); // Ensure token is a dependency




    // Sample data for the graph
    const graphData = {
        labels: ['Users', 'Total Courses', 'Pending Courses', 'Approved Courses', 'Rejected Courses'],
        datasets: [
            {
                label: 'Admin Metrics',
                data: [userCount, courseCount, pendingCourseCount, approvedCourseCount, rejectCourseCount],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="relative bg-gray-500 min-h-screen">
            <AdminLayout />
            <div className="ml-44 w-full mx-auto bg-gray-500"> {/* Ensures content is adjusted for the fixed sidebar */}
                <div className="p-8 absolute top-0 " >
                    {/* Header Section */}
                    <header className="text-center max-w-4xl mx-auto mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 leading-tight">
                            Admin Dashboard
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mt-4">
                            Empower your administration with seamless tools and efficient management.
                        </p>
                    </header>

                    {/* Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Create Course */}
                        <div className="bg-white shadow-md rounded-xl px-10 py-6 text-center border border-gray-200">
                            <h3 className="text-lg font-medium text-blue-600 mb-2">Total Users</h3>
                            <p className="text-2xl font-bold text-gray-700">{userCount}</p>
                        </div>

                        {/* Course Count */}
                        <div className="bg-white shadow-md rounded-xl px-10 py-6 text-center border border-gray-200">
                            <h3 className="text-lg font-medium text-red-600 mb-2">Total Courses</h3>
                            <p className="text-2xl font-bold text-gray-700">{courseCount}</p>
                        </div>

                        {/* Pending Courses */}
                        <div className="bg-white shadow-md rounded-xl px-10 py-6 text-center border border-gray-200">
                            <h3 className="text-lg font-medium text-green-600 mb-2">Pending Courses</h3>
                            <p className="text-2xl font-bold text-gray-700">{pendingCourseCount}</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl px-10 py-6 text-center border border-gray-200">
                            <h3 className="text-lg font-medium text-orange-600 mb-2">Approved Courses</h3>
                            <p className="text-2xl font-bold text-gray-700">{approvedCourseCount}</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl px-10 py-6 text-center border border-gray-200">
                            <h3 className="text-lg font-medium text-fuchsia-500 mb-2">Rejected Courses</h3>
                            <p className="text-2xl font-bold text-gray-700">{rejectCourseCount}</p>
                        </div>
                    </div>



                    {/* Graph Section */}
                    {/* Graph Section */}
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Admin Metrics Overview</h2>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Bar
                                data={graphData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: 'top',
                                        },
                                    },
                                    scales: {
                                        x: { beginAtZero: true },
                                        y: { beginAtZero: true },
                                    },
                                }}
                            />
                        </div>
                    </div>


                    {/* Footer Section */}
                    <footer className="mt-16 text-center text-gray-500 text-xs">
                        <p>&copy; 2024 Admin Panel. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;