import Pricing from "./Pricing";

const Header_Course = () => {
    return (
        <div className="bg-gray-900 text-white p-6 relative">
            <div className="pr-48">
                <h1 className="text-3xl font-bold">ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</h1>
                <p className="mt-2 text-yellow-400">4.5 ⭐ (41,828 ratings) | 237,093 students</p>
                <p className="mt-2">Created by Julian Melanson, Benza Maman, Leap Year Learning</p>
                <p className="mt-2">Last updated 12/2024</p>
            </div>
            <div className="fixed top-6 right-6">
                <Pricing />
            </div>
        </div>
    );
};

export default Header_Course;
