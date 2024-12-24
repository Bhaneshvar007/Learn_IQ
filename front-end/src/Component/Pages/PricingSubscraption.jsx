import React from "react";
import TestimonialSection from "./TestimonialSection";
import img from './testonomial.png'

const PricingSubscraption = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Choose a plan for success</h2>
                <p className="text-gray-600 mb-8">
                    Don’t want to buy courses one by one? Pick a plan to help you, your
                    team, or your organization achieve outcomes faster.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Personal Plan */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-500">
                        <h3 className="text-xl font-semibold mb-2">Personal Plan</h3>
                        <p className="text-sm text-gray-500 mb-4">For you (Individual)</p>
                        <p className="text-2xl font-bold mb-4">₹850 per month</p>
                        <p className="text-sm text-gray-500 mb-4">
                            Billed monthly or annually. Cancel anytime.
                        </p>
                        <ul className="text-left mb-6">
                            <li>✔ Access to 12,000+ top courses</li>
                            <li>✔ Certification prep</li>
                            <li>✔ Goal-focused recommendations</li>
                            <li>✔ AI-powered coding exercises</li>
                        </ul>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded">
                            Start subscription
                        </button>
                    </div>

                    {/* Team Plan */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Team Plan</h3>
                        <p className="text-sm text-gray-500 mb-4">For your team (2-20 people)</p>
                        <p className="text-2xl font-bold mb-4">₹2,000 a month per user</p>
                        <p className="text-sm text-gray-500 mb-4">
                            Billed annually. Cancel anytime.
                        </p>
                        <ul className="text-left mb-6">
                            <li>✔ Access to 12,000+ top courses</li>
                            <li>✔ Certification prep</li>
                            <li>✔ Goal-focused recommendations</li>
                            <li>✔ AI-powered coding exercises</li>
                            <li>✔ Analytics and adoption reports</li>
                        </ul>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded">
                            Start subscription
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
                        <p className="text-sm text-gray-500 mb-4">For your organization</p>
                        <p className="text-2xl font-bold mb-4">Contact sales for pricing</p>
                        <p className="text-sm text-gray-500 mb-4"></p>
                        <ul className="text-left mb-6">
                            <li>✔ Access to 27,000+ top courses</li>
                            <li>✔ Certification prep</li>
                            <li>✔ Goal-focused recommendations</li>
                            <li>✔ AI-powered coding exercises</li>
                            <li>✔ Advanced analytics and insights</li>
                            <li>✔ Dedicated customer success team</li>
                            <li>✔ International course collection (15 languages)</li>
                            <li>✔ Customizable content</li>
                        </ul>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded">
                            Request a demo
                        </button>
                    </div>
                </div>
            </div>

            <img src={img} className="mt-8"/>

            <TestimonialSection />
        </div>
    );
};

export default PricingSubscraption;
