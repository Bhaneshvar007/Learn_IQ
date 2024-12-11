import axios from "axios";
import React, { useEffect } from "react";

const Courses = () => {
    const courses = [
        {
            title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
            author: "Stephane Maarek | AWS Certified Cloud...",
            rating: 4.7,
            learners: "228,296",
            price: 499,
            originalPrice: 3499,
            badge: "Bestseller",
            image: "https://miro.medium.com/v2/resize:fit:1400/1*tDvPpTA8Jw5P_B5xV8gsjw.jpeg",
        },
        {
            title: "Master Python Programming: Zero to Hero",
            author: "Jose Portilla | Python Expert",
            rating: 4.8,
            learners: "102,564",
            price: 399,
            originalPrice: 2499,
            badge: "Bestseller",
            image: "https://i.ytimg.com/vi/NakyjvSrTIQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQWqPgrZ91rLm8dtpmTRCiLgC-wA",
        },
        {
            title: "Java Programming Bootcamp for Beginners",
            author: "Tim Buchalka | Java Masterclass",
            rating: 4.5,
            learners: "58,721",
            price: 499,
            originalPrice: 2999,
            badge: "",
            image: "https://img-c.udemycdn.com/course/750x422/1535678_0ce9_7.jpg",
        },
        {
            title: "The Complete JavaScript Developer's Guide",
            author: "Andrew Mead | Web Developer",
            rating: 4.7,
            learners: "75,412",
            price: 599,
            originalPrice: 3499,
            badge: "Bestseller",
            image: "https://img-c.udemycdn.com/course/750x422/5095092_d038_3.jpg",
        },
        {
            title: "Full-Stack Web Development with React & Node.js",
            author: "Colt Steele | Web Development Guru",
            rating: 4.9,
            learners: "125,897",
            price: 699,
            originalPrice: 4999,
            badge: "Top Rated",
            image: "https://img-c.udemycdn.com/course/750x422/4505104_8592_8.jpg",
        },
        {
            title: "Android Development Masterclass for 2024",
            author: "Angela Yu | App Developer",
            rating: 4.6,
            learners: "89,320",
            price: 799,
            originalPrice: 5499,
            badge: "Bestseller",
            image: "https://img-c.udemycdn.com/course/750x422/2835200_53a3_9.jpg",
        },
        {
            title: "AWS Certified Solutions Architect - Associate 2024",
            author: "Cloud Academy Team",
            rating: 4.8,
            learners: "85,290",
            price: 799,
            originalPrice: 4499,
            badge: "Top Rated",
            image: "https://img-c.udemycdn.com/course/750x422/2196488_8fc7_10.jpg",
        },
        {
            title: "Modern Data Science with Python & Machine Learning",
            author: "Kirill Eremenko | Data Scientist",
            rating: 4.7,
            learners: "143,891",
            price: 599,
            originalPrice: 3999,
            badge: "Bestseller",
            image: "https://img-c.udemycdn.com/course/750x422/671576_a272_4.jpg",
        },
        {
            title: "Kotlin for Android Development - Complete Guide",
            author: "John Purcell | Android Expert",
            rating: 4.5,
            learners: "42,764",
            price: 499,
            originalPrice: 3499,
            badge: "",
            image: "https://img-c.udemycdn.com/course/750x422/669052_dd6b_4.jpg",
        },
        {
            title: "The Complete Web Developer Bootcamp 2024",
            author: "Maximilian Schwarzmüller",
            rating: 4.8,
            learners: "250,891",
            price: 599,
            originalPrice: 4999,
            badge: "Top Rated",
            image: "https://i.ytimg.com/vi/H4jPgMLfn40/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyfY4bGZ_nlzEC6IzUMOiiOvguOA",
        },
    ];


    useEffect(async () => {
        let res = await axios.get('http://localhost:3000/api/get-course');
        console.log(res);
    }, [])


    return (
        <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto">
            <div className="flex space-x-4">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="min-w-[280px] w-[280px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={course.image}
                            alt="Course Thumbnail"
                            className="w-full h-36 object-cover"
                        />

                        <div className="p-4">
                            <h3 className="text-sm font-semibold mb-2 text-gray-800">
                                {course.title}
                            </h3>

                            <p className="text-xs text-gray-600 mb-2 truncate">
                                {course.author}
                            </p>

                            <div className="flex items-center mb-2">
                                <span className="text-yellow-400 text-lg">&#9733;</span>
                                <span className="ml-1 text-gray-800 font-medium text-sm">
                                    {course.rating}
                                </span>
                                <span className="ml-2 text-xs text-gray-600">
                                    ({course.learners})
                                </span>
                            </div>

                            <div className="flex items-center mb-2">
                                <span className="text-lg font-semibold text-gray-800">
                                    ₹{course.price}
                                </span>
                                <span className="ml-2 text-sm line-through text-gray-500">
                                    ₹{course.originalPrice}
                                </span>
                            </div>

                            {course.badge && (
                                <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">
                                    {course.badge}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
