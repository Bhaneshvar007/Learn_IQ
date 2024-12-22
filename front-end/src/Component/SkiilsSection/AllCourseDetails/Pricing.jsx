// Import React and Tailwind CSS
import React, { useContext } from 'react';
import Context from '../../../../context';

const Pricing = ({ filterData }) => {



    let { cartData, setCartData } = useContext(Context);


    return (
        <div className="min-h-screen  flex items-center justify-center z-[-1]">
            <div className="bg-white shadow-md rounded-lg max-w-[400px] p-6">
                {/* Course Header */}
                <div className="flex flex-col items-center w-full">
                    <video
                        src={filterData?.videos}
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

                    <div className="">
                        <p className="text-2xl font-semibold text-gray-700">Price : ${filterData?.price}</p>
                        <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg mt-2 hover:bg-purple-50"
                            onClick={() => setCartData([...new Set([...cartData, filterData])])}
                        >
                            Add to cart
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        30-Day Money-Back Guarantee
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Pricing;
