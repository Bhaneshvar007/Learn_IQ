import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import PendingCourses from '../Admin_workSection/PendingCourses';


const AdminHome = () => {

    const navigate = useNavigate();


    function createBtnFn() {
        let token = localStorage.getItem('token');

        if (token)
            navigate('/create-course');

        else {
            alert("Login account first then create a course");
            navigate('/login');
        }
    }



    return (
        <div className="h-[80vh] flex flex-col m-2 bg-gray-100 relative">
            <h1 className="text-4xl font-bold text-purple-700 mb-4"></h1>

            <PendingCourses />

            <div onClick={() => createBtnFn()} className="flex space-x-4" title='add courses'>
                <IoAddCircleOutline className='fixed bottom-8 right-10 font-semibold text-6xl text-purple-700 cursor-pointer' />
            </div>
        </div>
    )
}

export default AdminHome
