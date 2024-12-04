import React, { useState } from "react";
import Filter01 from "./Filter01";
import Tabs from "./Tabs";

const SkillsFilter = () => {
    const [activeTab, setActiveTab] = useState("Data Science");

    const tabs = [
        "Data Science",
        "IT Certifications",
        "Leadership",
        "Web Development",
        "Communication",
        "Business Analytics & Intelligence",
    ];



    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-2">All the skills you need in one place</h1>
                <p className="text-gray-600 mb-4">
                    From critical skills to technical topics, Udemy supports your professional development.
                </p>

                {/* Tabs */}
                <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />


                {/* Skills Card */}
                <Filter01 activeTab={activeTab} />

            </div>
        </div>
    );
};

export default SkillsFilter;
