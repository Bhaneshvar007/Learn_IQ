import React, { useContext, useState } from "react";
import Tabs from "./Tabs";
import Context from "../../../context";

const SkillsFilter = ({ activeTab, setActiveTab }) => {


    let { courseData } = useContext(Context);
    const tabs = ["All", ...new Set(courseData.map((course) => course.category))];






    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-2">All the skills you need in one place</h1>
                <p className="text-gray-600 mb-4">
                    From critical skills to technical topics, Udemy supports your professional development.
                </p>

                {/* Tabs */}
                <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
};

export default SkillsFilter;
