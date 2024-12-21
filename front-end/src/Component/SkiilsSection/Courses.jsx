import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Context from "../../../context";
import CourseDesign from "./CourseDesign";
import { Link } from "react-router-dom";

const Courses = ({ activeTab }) => {


    let { courseData } = useContext(Context);



    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filtered data based on selected category
    const filteredCourses =
        selectedCategory === "All"
            ? courseData
            : courseData.filter((course) => course.category === selectedCategory);


    useEffect(() => {
        setSelectedCategory(activeTab);
    }, [activeTab]);




    return (
        <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto">

            <div className="flex space-x-4">
                {filteredCourses.map((course, index) => (
                    <Link to='/course-detail'>
                        <CourseDesign course={course} index={index} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Courses;
