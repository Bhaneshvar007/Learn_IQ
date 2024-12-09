import React, { useState } from "react";
import { IoNotificationsOffCircleOutline } from "react-icons/io5";

const Notifications = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Button to click and toggle dropdown */}
            <IoNotificationsOffCircleOutline onClick={toggleDropdown} className="rounded cursor-pointer text-[30px] font-bold" />

            {/* Notification Dropdown */}
            {isOpen && (
                <div className="absolute left-[-100px] mt-5 w-72 bg-white border rounded-lg shadow-lg z-50">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-bold text-gray-800">Notifications</h2>
                        <button
                            className="text-purple-600 text-sm font-medium hover:underline"
                            onClick={() => setIsOpen(false)} // Close dropdown when clicking settings
                        >
                            Settings
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 text-gray-500 text-sm text-center">
                        <p>No notifications.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notifications;
