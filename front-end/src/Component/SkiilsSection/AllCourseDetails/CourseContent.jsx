import React, { useState } from "react";

const CourseContent = () => {
    const sections = [
        {
            title: "ChatGPT Fundamentals",
            lectures: "5 lectures • 47 min",
            details: [
                { lectureTitle: "Introduction to ChatGPT", duration: "3 min" },
                { lectureTitle: "History of ChatGPT", duration: "5 min" },
                { lectureTitle: "Key Features of ChatGPT", duration: "10 min" },
                { lectureTitle: "Using ChatGPT Effectively", duration: "15 min" },
                { lectureTitle: "Best Practices", duration: "14 min" },
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
            title: "AI Ethics and Safety",
            lectures: "5 lectures • 40 min",
            details: [
                { lectureTitle: "Understanding AI Ethics", duration: "5 min" },
                { lectureTitle: "Privacy Concerns in AI", duration: "6 min" },
                { lectureTitle: "Bias in AI Models", duration: "7 min" },
                { lectureTitle: "AI Regulation and Governance", duration: "8 min" },
                { lectureTitle: "Building Ethical AI Solutions", duration: "14 min" },
            ],
        },
        {
            title: "Advanced Natural Language Processing",
            lectures: "4 lectures • 2 hrs 15 min",
            details: [
                { lectureTitle: "Overview of NLP", duration: "8 min" },
                { lectureTitle: "Tokenization and Stemming", duration: "10 min" },
                { lectureTitle: "Word Embeddings and Word2Vec", duration: "12 min" },
                { lectureTitle: "Fine-Tuning NLP Models", duration: "40 min" },
            ],
        },
        {
            title: "Building AI-Powered Applications",
            lectures: "5 lectures • 1 hr 30 min",
            details: [
                { lectureTitle: "Introduction to AI Applications", duration: "5 min" },
                { lectureTitle: "Integrating AI APIs", duration: "10 min" },
                { lectureTitle: "Creating Chatbots with AI", duration: "15 min" },
                { lectureTitle: "Deploying AI Models", duration: "30 min" },
                { lectureTitle: "Scaling AI-Powered Solutions", duration: "30 min" },
            ],
        },
        {
            title: "Machine Learning Basics",
            lectures: "5 lectures • 1 hr 20 min",
            details: [
                { lectureTitle: "What is Machine Learning?", duration: "6 min" },
                { lectureTitle: "Types of Machine Learning", duration: "12 min" },
                { lectureTitle: "Supervised Learning Techniques", duration: "15 min" },
                { lectureTitle: "Unsupervised Learning Techniques", duration: "20 min" },
                { lectureTitle: "Building ML Models", duration: "27 min" },
            ],
        },
        {
            title: "AI in Real-World Use Cases",
            lectures: "4 lectures • 50 min",
            details: [
                { lectureTitle: "AI in Healthcare", duration: "7 min" },
                { lectureTitle: "AI in Finance", duration: "8 min" },
                { lectureTitle: "AI in Retail", duration: "10 min" },
                { lectureTitle: "AI in Education", duration: "15 min" },
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
