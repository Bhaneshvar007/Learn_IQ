import React from 'react';
import RightDemoForm from './RightDemoForm';

const UdemyBusiness = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <header className="w-full bg-white shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-purple-600">Udemy Business</h1>
                    <button className="text-gray-700 font-semibold">Login</button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto w-full px-4 mt-8">
                <h2 className="text-3xl font-bold mb-4">Get your demo</h2>
                <p className="text-lg mb-6">Tell us your needs and we’ll start on a custom plan to drive results.</p>

                <div className="flex items-center ">
                    {/* Left Content */}
                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                Train your entire workforce with over 27,000+ courses in 15 languages
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                Prep employees for over 200 industry-recognized certification exams
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                Develop highly skilled tech teams in risk-free practice environments
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                Identify emerging skills gaps, learning trends, and industry benchmarks
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                Integrate content with your existing learning management system
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="font-bold mb-2">Trusted by over 16,000 companies:</h3>
                            <div className="flex flex-wrap gap-4">
                                {['VW', 'Samsung', 'Cisco', 'Vimeo', 'P&G', 'HPE', 'Citi', 'Ericsson'].map((logo) => (
                                    <div key={logo} className="bg-gray-200 p-4 rounded-md text-center text-gray-700">
                                        {logo}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <RightDemoForm className=''/>

                </div>
            </main>
        </div>
    );
};

export default UdemyBusiness;
