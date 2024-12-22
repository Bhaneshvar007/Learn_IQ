import React, { useContext, useState } from "react";
import Context from "../../../../context";
import { useParams } from "react-router-dom";

const CourseContent = () => {


    let { id } = useParams();

    let { courseData } = useContext(Context);
    let filterData = courseData.find((data, ind) => {
        return ind == id;
    });


    const sections = [
        {
            title: `${filterData?.title} Fundamentals`,
            lectures: "5 lectures • 47 min",
            details: [
                { lectureTitle: `Introduction to ${filterData?.title}`, duration: "3 min" },
                { lectureTitle: `History of ${filterData?.title}`, duration: "5 min" },
                { lectureTitle: `Key Features of ${filterData?.title}`, duration: "10 min" },
                { lectureTitle: `Using ${filterData?.title} Effectively`, duration: "15 min" },
                { lectureTitle: `Best Practices`, duration: "14 min" },
            ],
        },
        {
            title: "Prompt Engineering",
            lectures: "5 lectures • 1 hr 4 min",
            details: [
                { lectureTitle: "What is Prompt Engineering?", duration: "4 min" },
                { lectureTitle: "Designing Effective Prompts", duration: "12 min" },
                { lectureTitle: "Types of Prompts", duration: "8 min" },
                { lectureTitle: "Debugging Prompt Issues", duration: "10 min" },
                { lectureTitle: "Advanced Prompt Strategies", duration: "30 min" },
            ],
        },
        {
            title: `${filterData?.title} Ethics and Safety`,
            lectures: "5 lectures • 40 min",
            details: [
                { lectureTitle: `Understanding ${filterData?.title} Ethics`, duration: "5 min" },
                { lectureTitle: `Privacy Concerns in ${filterData?.title}`, duration: "6 min" },
                { lectureTitle: `Bias in ${filterData?.title} Models`, duration: "7 min" },
                { lectureTitle: `${filterData?.title} Regulation and Governance`, duration: "8 min" },
                { lectureTitle: `Building Ethical ${filterData?.title} Solutions`, duration: "14 min" },
            ],
        },
        {
            title: `Building ${filterData?.title} Applications`,
            lectures: "5 lectures • 1 hr 30 min",
            details: [
                { lectureTitle: "Introduction to  Applications", duration: "5 min" },
                { lectureTitle: "Integrating APIs", duration: "10 min" },
                { lectureTitle: "Creating Chatbots with AI", duration: "15 min" },
                { lectureTitle: `Scaling ${filterData?.title} Solutions`, duration: "30 min" },
            ],
        },

        {
            title: `${filterData?.title} Real-World Use Cases`,
            lectures: "4 lectures • 50 min",
            details: [
                { lectureTitle: `${filterData?.title} in Healthcare`, duration: "7 min" },
                { lectureTitle: `${filterData?.title} in Finance`, duration: "8 min" },
                { lectureTitle: `${filterData?.title} in Retail`, duration: "10 min" },
                { lectureTitle: `${filterData?.title} in Education`, duration: "15 min" },
            ],
        },
    ];


    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="bg-[#F3F4F6]">
            <div className="p-6 max-w-4xl ml-6 -mt-10">
                <h2 className="text-3xl font-bold mb-6">Course Content</h2>
                <ul className="space-y-6">
                    {sections.map((section, index) => (
                        <li key={index} className="bg-white shadow-md rounded-lg p-4">
                            {/* Section Title */}
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSection(index)}
                            >
                                <div>
                                    <p className="text-lg font-semibold">{section.title}</p>
                                    <p className="text-gray-500">{section.lectures}</p>
                                </div>
                                <button
                                    className="text-gray-600 hover:text-gray-800"
                                    aria-label="Toggle Section"
                                >
                                    {expandedSection === index ? "−" : "+"}
                                </button>
                            </div>

                            {/* Section Details */}
                            {expandedSection === index && (
                                <ul className="mt-4 space-y-2 border-t border-gray-300 pt-4">
                                    {section.details.map((detail, detailIndex) => (
                                        <li
                                            key={detailIndex}
                                            className="flex justify-between items-center text-gray-700"
                                        >
                                            <span>{detail.lectureTitle}</span>
                                            <span className="text-sm text-gray-500">{detail.duration}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseContent;
