import React from "react";

const TestimonialSection = () => {
    const testimonials = [
        {
            quote:
                "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow's 2023 Developer survey.",
            author: "",
            designation: "",
            linkText: "View Web Development courses",
            linkUrl: "#",
        },
        {
            quote:
                "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
            author: "Alvin Lim",
            designation: "Technical Co-Founder, CTO at Dimensional",
            linkText: "View this iOS & Swift course",
            linkUrl: "#",
        },
        {
            quote:
                "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
            author: "William A. Wachlin",
            designation: "Partner Account Manager at Amazon Web Services",
            linkText: "View this AWS course",
            linkUrl: "#",
        },
        
    ];

    return (
        <div className="py-16">
            <h2 className="text-center text-3xl font-bold mb-12">
                See what others are achieving through learning
            </h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg max-w-sm p-6"
                    >
                        <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
                        {testimonial.author && (
                            <p className="font-bold text-gray-900">{testimonial.author}</p>
                        )}
                        {testimonial.designation && (
                            <p className="text-gray-500 text-sm">{testimonial.designation}</p>
                        )}
                        <li
                            className="text-purple-600 underline mt-4 block cursor-pointer"
                        >
                            {testimonial.linkText}
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
