import React, { useState, useEffect } from 'react';

const TechOnSlide = () => {
    // Array of images and content
    const slides = [
        {
            image: "https://media.licdn.com/dms/image/v2/D4E03AQGxltbkMNHr2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694968332366?e=1740614400&v=beta&t=p3N6ShdmJxVMUW_M9yTzQl57kNa63a1XzfoDfv1ZEaQ",
            description: "“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”",
            name: "Bhaneshvar Kshirsagar"
        },
        {
            image: "https://media.licdn.com/dms/image/v2/D4D35AQHYcZBc04voCA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731036624283?e=1735473600&v=beta&t=euMRWiztItegdRXyD1yh3-XyCqPkKnMo11R4qgC79LM",
            description: "E-Learn has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college. It’s so humbling.”",
            name: "Durgesh Patle"
        },
        {
            image: "https://media.licdn.com/dms/image/v2/D4D35AQGuLnCVNOneMw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723518882356?e=1735473600&v=beta&t=S2QhOonEBh15wTJ-jt1K2Fr-oK3IiVuWzYFyhLwsGEg",
            name: "Abhay Rahangdale",
            description: "“Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”"
        },
    ];

    // State to keep track of the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Function to go to previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Auto-slide effect using useEffect
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <div className="relative max-w-[900px] mx-auto mb-5">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out "
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full relative flex justify-center gap-10 items-center">
                                <img src={slide.image} alt={slide.title} className="h-[300px] object-cover rounded" />
                                <div className=" bg-gray-100 rounded-lg w-96 ">
                                    <h1 className="text-3xl font-semibold text-gray-800 mb-5">{slide.name}</h1>
                                    <p className="text-gray-600">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Arrow */}
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-50 hover:opacity-100">
                    &#60;
                </button>

                {/* Right Arrow */}
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full opacity-50 hover:opacity-100">
                    &#62;
                </button>
            </div>
        </div>
    );
};

export default TechOnSlide;
