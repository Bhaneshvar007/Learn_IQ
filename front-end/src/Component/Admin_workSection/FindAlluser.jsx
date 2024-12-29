import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const FindAlluser = () => {
    let [data, setData] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('http://localhost:3000/api/find-user', {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                setData(res.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/delete-user/${id}`, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            setData((prevData) => prevData.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="max-w-full p-4 bg-gray-100 rounded shadow-md">
            <h1 className='text-3xl font-semibold text-gray-700 mb-5'>Here are all those user whow can enrole for the course's</h1>
            {data.length > 0 ? (
                data.map((user) => (
                    <div
                        key={user._id}
                        className="flex w-full items-center justify-between p-4 mb-4 bg-white rounded shadow-md border border-gray-200"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-4xl text-blue-500">
                                <FaRegCircleUser />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold text-gray-800">{user.username}</h1>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                        </div>
                        <button
                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition duration-200"
                            onClick={() => handleDelete(user._id)}
                        >
                            Delete User
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-600">No users found.</p>
            )}
        </div>
    );
};

export default FindAlluser;
