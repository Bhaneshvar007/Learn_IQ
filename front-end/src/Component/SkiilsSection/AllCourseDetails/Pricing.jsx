// Import React and Tailwind CSS
import React from 'react';

const Pricing = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center z-[-1]">
            <div className="bg-white shadow-md rounded-lg max-w-[400px] p-6">
                {/* Course Header */}
                <div className="flex flex-col items-center w-full">
                    <video
                        id="videoPlayer"
                        src="https://mp4-c.udemycdn.com/2023-06-30_15-51-14-79001edcc2f174ba4eb545042d57cc25/2/WebHD_720p.mp4?Expires=1734713286&Signature=HHJNh4neDxY5N9mnVp-P4oto-LvOwTlZ0ahkbobDcFm2XQVutDc8PkehjxPQgxQLUgTZ1X4-LDfsUPQfudGViiNSGNP3T-pza97bhP1eGoOzjHrvVDuJvd2oGYkVlqLl1A6FZFt3azYHhEjqoSn4vCeYr1asJjJBmYudkr7EhpZw1CbXtRlyBPYAkHgtfCLCz4XYDO6I5vEYfgk~62k7~NKXxim7Kexb4QnC~lN6~~qzk4vzCeKWK~pT-Gk58eLL0nq5r9ugWLu8dCk~cjmfyJdmWJ9s~GTpyZ94QEura1yE5SLZZaBs1O9XONtMbn5gjG~j1IMBysZ~dbhmZo98tw__&Key-Pair-Id=K3MG148K9RIRF4"
                        className="w-full h-64 rounded-lg"
                        controls
                    />
                </div>



                {/* Subscription Section */}
                <div className="mt-6">
                    <p className="text-gray-700">
                        <strong>Subscribe to Udemy’s top courses</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                        Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
                        <a href="#" className="text-purple-600 underline"> Learn more</a>
                    </p>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4 hover:bg-purple-700">
                        Start subscription
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-2">Starting at ₹850 per month<br />Cancel anytime</p>

                    <div className="flex items-center justify-center mt-4">
                        <div className="w-full border-b border-gray-300"></div>
                        <span className="text-gray-500 px-3">or</span>
                        <div className="w-full border-b border-gray-300"></div>
                    </div>

                    <div className="text-center">
                        <p className="text-2xl font-semibold">₹2,699</p>
                        <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg mt-2 hover:bg-purple-50">
                            Add to cart
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        30-Day Money-Back Guarantee
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
