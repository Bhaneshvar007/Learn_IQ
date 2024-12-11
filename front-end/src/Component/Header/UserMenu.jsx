import React, { useEffect, useState } from "react";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let [isToken, setIsToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.setItem('token', '');
    setIsToken('');// Update the state to reflect logout immediatel
    setIsMenuOpen(false)
  };




  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 p-2 border rounded-full hover:bg-gray-100"
      >
        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
          BK
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">Bhaneshvar Kshirsagar</p>
          <p className="text-xs text-gray-500">bhanusagar858@gmail.com</p>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50">
          <ul className="flex flex-col divide-y divide-gray-200">
            <li className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer">My learning</li>
            <li className="px-4 py-[10px] flex justify-between hover:bg-gray-100 cursor-pointer">
              <span>My cart</span>
              <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">0</span>
            </li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Wishlist</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Teach on Udemy</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Notifications</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Messages</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Account settings</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Payment methods</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Subscriptions</li>
            <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">Purchase history</li>
            <li className="px-4 py-[10px] flex justify-between hover:bg-gray-100">
              <span>Language</span>
              <span className="text-gray-500">English 🌐</span>
            </li>
            <li className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer">Edit profile</li>
            <li className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
