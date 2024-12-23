import React, { useContext, useState } from 'react'
import CourseDesign from '../SkiilsSection/CourseDesign'
import { useNavigate } from 'react-router-dom';
import Context from '../../../context';

const Allcourses = () => {


    let navigate = useNavigate();


    let { courseData } = useContext(Context);



    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filtered data based on selected category
    const filteredCourses =
        selectedCategory === "All"
            ? courseData
            : courseData.filter((course) => course.category === selectedCategory);




    function addCartFn(id) {
        navigate(`/course-detail/${id}`)
    }



    return (
        <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto">

            <h1 className='font-bold text-3xl mb-5 ml-1'>Learners are viewing
            </h1>
            <div className="flex space-x-4">
                {filteredCourses.map((course, index) => (
                    <div onClick={() => addCartFn(index)}>
                        <CourseDesign course={course} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Allcourses
