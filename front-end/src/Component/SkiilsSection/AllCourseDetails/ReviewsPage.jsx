// Import React and Tailwind CSS
import React from 'react';
import Commnet_Review from './Commnet_Review';

const ReviewsPage = () => {
    const reviews = [
        {
            id: 1,
            name: "Daniel Q.",
            time: "3 weeks ago",
            rating: 4.5,
            comment: "The exposure to the many resources was useful, but some of the data is dated. The \"Expert Guests\" in Section 42 all appear to have moved on to other companies and their companies appear to be defunct.",
        },
        {
            id: 2,
            name: "ACHIM B.",
            time: "3 weeks ago",
            rating: 4,
            comment: "Course is very comprehensive, which on the one hand is an asset, but on the other hand some chapters are very specialized and it is questionable that everyone needs really each and every use case and tool in the course…",
        },
    ];

    return (
        <div className="bg-gray-100 my-5 ml-8 ">
            <div className="max-w-[880px] ml-5 bg-white shadow-md rounded-lg p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-5 ">
                    <h1 className="text-xl font-semibold flex items-center">
                        <span className="text-yellow-500 mr-2">★</span> 4.5 course rating
                    </h1>
                    <span className="text-gray-600">10 ratings</span>
                </div>

                {/* Reviews Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-semibold text-white">
                                    {review.name[0]}{review.name.split(' ')[1][0]}
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.time}</p>
                                </div>
                            </div>
                            <div className="text-yellow-500 text-sm mb-2">
                                {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                                    <span key={i}>★</span>
                                ))}
                                {review.rating % 1 !== 0 && <span>☆</span>}
                            </div>
                            <p className="text-gray-700 text-sm">{review.comment}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                                <span>Helpful?</span>
                                {/* <div className="flex space-x-2">
                                    <button className="hover:text-purple-600">👍</button>
                                    <button className="hover:text-purple-600">👎</button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show All Reviews Button */}
                <div className="text-right mt-6">
                    <button className=" text-blue-500 mr-1 rounded duration-500 hover:underline hover:text-blue-600">
                        Show all reviews
                    </button>
                </div>
            </div>



            {/* Coomentn and reating box */}
            <div className='max-w-[880px]  p-5 m-5 bg-white shadow-md rounded-lg'>
                <h1 className='text-2xl font-semibold text-gray-600 mb-5'>Comment section</h1>
                <Commnet_Review />

            </div>
        </div>
    );
};

export default ReviewsPage;
