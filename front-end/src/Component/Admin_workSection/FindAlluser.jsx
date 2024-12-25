import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";


const FindAlluser = () => {
    let [data, setData] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(async () => {
        let res = await axios.get('http://localhost:3000/api/find-user', {
            headers: {
                Authorization: `${token}`,
            },
        });
        setData(res.data)
    }, []);

    return (
        <div className="max-w-full mx-auto p-4 bg-gray-100 rounded shadow-md">
            {data.map((val, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 mb-4 bg-white rounded shadow-md border border-gray-200"
                >
                    <div className="flex items-center gap-4">
                        <div className="text-4xl text-blue-500">
                            <FaRegCircleUser />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">{val.username}</h1>
                            <p className="text-sm text-gray-600">{val.email}</p>
                        </div>
                    </div>
                    <button
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition duration-200"
                    // onClick={() => handleDelete(val.id)} // Replace handleDelete with your delete function
                    >
                        Delete User
                    </button>
                </div>
            ))}
        </div>

    )
}

export default FindAlluser
