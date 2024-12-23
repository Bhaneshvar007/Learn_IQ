import React, { useState } from "react";

const Centralization = () => {
    const [selectedFeature, setSelectedFeature] = useState("Hands-on training");

    const features = [
        {
            title: "Hands-on training",
            description:
                "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
            img: "https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png",
        },
        {
            title: "Certification prep",
            description:
                "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
            img: "https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/133c991fb3b3f1f93a3e842f4baa7f44/desktop-certification-prep-2x.png",
        },
        {
            title: "Insights and analytics",
            description:
                "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
            img: "https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png",
        },
        {
            title: "Customizable content",
            description:
                "Create tailored learning paths for team and organization goals and even host your own content and resources.",
            img: "https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png",
        },
    ];

    // Function to render the right-side content dynamically
    const renderContent = () => {
        const feature = features.find((f) => f.title === selectedFeature);
        return (
            <div className="p-6  rounded-lg  flex flex-col items-center">
                <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-[550px] h-[544px] mb-6"
                />

            </div>
        );
    };

    return (
        <div className=" max-w-[1400px] mx-auto flex flex-col lg:flex-row ">
            {/* Left Sidebar */}
            <div className="p-6 bg-gray-100 ">
                <h1 className="text-3xl font-bold mt-5 mb-10">
                    Learning focused on your goals
                </h1>
                <div className="space-y-4 ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedFeature(feature.title)}
                            className={`p-4 w-[500px] border rounded-lg cursor-pointer bg-white ${selectedFeature === feature.title
                                ? "border-purple-500 bg-gray-100"
                                : "border-gray-300"
                                }`}
                        >
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-2/3 p-6 flex items-center justify-center bg-gray-100">
                {renderContent()}
            </div>
        </div>
    );
};

export default Centralization;
