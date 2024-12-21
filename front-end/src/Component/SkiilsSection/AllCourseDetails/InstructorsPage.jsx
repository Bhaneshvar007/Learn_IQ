// Import React and Tailwind CSS
import React from 'react';

const InstructorsPage = () => {
    const instructors = [
        {
            name: "Julian Melanson",
            title: "AI Expert & Bestselling Instructor",
            rating: "4.5 Instructor Rating",
            reviews: "52,971 Reviews",
            students: "445,649 Students",
            courses: "7 Courses",
            description: `My name is Julian, and I am a full-time teacher and bestselling instructor who is truly dedicated to helping students realize their full potential. With the honor of teaching over 400,000 students from 130+ countries across the globe, I have honed my skills and become an expert in my field.\n\nMy focus is on unlocking your potential to 10x your creativity and productivity with AI tools and filmmaking techniques I've learned over the years creating countless amounts of content for clients from many industries.`,
        },
        {
            name: "Benza Maman",
            title: "AI Expert, Music Educator, & Best-Selling Instructor",
            rating: "4.5 Instructor Rating",
            reviews: "42,282 Reviews",
            students: "249,400 Students",
            courses: "3 Courses",
            description: `Enter the forefront of technology and innovation with Benza Maman, an AI, tech, and music educator whose unique approach has attracted hundreds of thousands of students on Udemy, leading to the creation of the platform's number 1 AI course. Benza's journey through the tech industry, bolstered by an enduring passion for the newest technologies, has been marked by a commitment to making complex AI concepts accessible and understandable.`,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl ml-5 bg-white shadow-md rounded-lg p-6">
                {/* Header Section */}
                <h2 className="text-2xl font-bold mb-6">Instructors</h2>

                {/* Instructor Cards */}
                {instructors.map((instructor, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-bold text-blue-600">{instructor.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{instructor.title}</p>

                        <div className="flex items-center text-sm text-gray-700 space-x-4 mb-4">
                            <div className="flex items-center space-x-1">
                                <span>⭐</span>
                                <span>{instructor.rating}</span>
                            </div>
                            <div>{instructor.reviews}</div>
                            <div>{instructor.students}</div>
                            <div>{instructor.courses}</div>
                        </div>

                        <p className="text-gray-700 text-sm whitespace-pre-line">
                            {instructor.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorsPage;
