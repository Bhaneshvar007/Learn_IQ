import React, { useState, useEffect } from 'react';

const HomeSlide = () => {
    // Array of images and content
    const slides = [
        {
            image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
            title: "Learning that gets you",
            description: "Skills for you  present (and your future ). Fet Started with us."
        },
        {
            image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/5d643ea4-9972-4d77-85c2-c9dc76233d3c.png",
            title: "24-Hour Flash Sale",
            description: "Learn from real-world experts for as low as ₹449. Sale ends tonight!"
        },
        {
            image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
            title: "Take your career to the next level",
            description: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way."
        },
        {
            image: "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/2b4dae04-f107-4ae6-8188-a57ca45897cb.jpg",
            title: "Powered by community",
            description: "Trust ratings and reviews to make a smarter choice. Get started with our top-rated courses."
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
            <div className="relative max-w-[1400px] mx-auto">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full relative">
                                <img src={slide.image} alt={slide.title} className="h-[500px] object-cover" />
                                <div className="absolute top-20 left-32 bg-white p-6 rounded-lg shadow-lg w-96">
                                    <h1 className="text-3xl font-semibold text-gray-800">{slide.title}</h1>
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

export default HomeSlide;
