import React, { useContext } from 'react';
import Context from '../../../context';
import { FaRegBookmark } from "react-icons/fa";



const CourseDesign = ({ course, index }) => {

    let { courseData, setSavedData, savedData } = useContext(Context);
    function savedItemFn(id) {
        // console.log(id);

        let saveData = courseData.find((val) => val._id == id);
        setSavedData([...savedData, saveData]);
        alert("Data saved sucessfully !!")
    }


    return (
        <div
            key={index}
            className="min-w-[300px] w-[280px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
            <video
                src={course.videos}
                controls
                className="w-full h-40 object-cover">
            </video>
            <div className="p-4">
                <h3 className="text-sm font-semibold mb-2 text-gray-800">
                    {course.title}
                </h3>

                <p className="text-xl text-gray-600 mb-2 truncate " title={course.description}>
                    {course.description}
                </p>

                <div className="flex items-center justify-between mb-2">

                    <span className=" text-gray-600">
                        Medium : {course.language}
                    </span>

                    {/* <span className=" text-gray-600">
                        {course.category}
                    </span> */}
                </div>

                <div className="flex items-center mb-2">
                    <span className="text-lg font-semibold text-gray-800">
                        $ {course.price}
                    </span>

                </div>

                <div className="flex items-center justify-between mt-5">

                    <span className="text-xs font-semibold text-white bg-[#F79B00] px-2 py-1 rounded">
                        {course.level}
                    </span>
                    <span className=" font-bold  px-2 py-1 rounded" onClick={(e) => {
                        savedItemFn(course._id)
                        e.stopPropagation()
                    }}>
                        <FaRegBookmark title='save item' />
                    </span>
                </div>

            </div>
        </div>
    )
}

export default CourseDesign
