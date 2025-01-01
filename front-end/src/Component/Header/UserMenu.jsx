import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../../context";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";






const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container

  let navigate = useNavigate();
  let { cartData } = useContext(Context);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    setIsMenuOpen(false);
    localStorage.setItem('E-role', 'user');
    navigate("/");
    window.location.reload();
  };

  let username = localStorage.getItem("E-username");
  let email = localStorage.getItem("E-email");
  let role = localStorage.getItem("E-role");
  let userLogo = username.charAt(0).toUpperCase() + email.charAt(0).toUpperCase();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 p-2 border rounded-full hover:bg-gray-100"
      >
        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
          {userLogo}
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold capitalize">{username}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed right-20 mt-1 w-72 bg-gray-50 shadow border rounded-lg z-[1]"
        >
          <ul className="flex flex-col divide-y divide-gray-200">
            <Link to='/'
              className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer flex items-center justify-between"

            >
              <span>My learning</span>
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
            {role === "user" ? (

              <div>
                <Link
                  to="/add-cart"
                  className="px-4 py-[10px] flex justify-between hover:bg-gray-100 cursor-pointer"

                >
                  <div>
                    <span>My cart</span>
                    {
                      cartData.length != 0 &&
                      <span className="text-purple-600 font-bold px-2 py-0.5 rounded-full">
                        {cartData.length}
                      </span>
                    }
                  </div>

                  <FaCartPlus />
                </Link>
                <Link
                  to="/all-courses"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    Wachlist
                  </li>
                </Link>
                <Link
                  to="/tech-on-page"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    Teach on Learn
                  </li>
                </Link>


                <Link
                  to="/PricingSubscraption"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                    <span>
                      Subscriptions
                    </span>
                    <MdOutlineSubscriptions />

                  </li>
                </Link>
                <Link to='/save-cources'>
                  <li
                    className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer flex items-center justify-between "

                  >
                    <span>
                      Saved Item's
                    </span>
                    <MdOutlineBookmarkAdded className="text-[18px]" />
                  </li>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/find-user"

                >
                  {/* <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    All Users
                  </li> */}
                </Link>
                <Link
                  to="/tech-on-page"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    Teach on Learn
                  </li>
                </Link>

                <Link
                  to="create-course"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    Add courses
                  </li>
                </Link>
                <Link
                  to="pending-cources"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    Pending courses
                  </li>
                </Link>
                <Link
                  to="all-cources"

                >
                  <li className="px-4 py-[10px] duration-500 hover:bg-gray-100 cursor-pointer">
                    All Courses
                  </li>
                </Link>
              </div>
            )}

            <li className="px-4 py-[10px] flex justify-between hover:bg-gray-100">
              <span>Language</span>
              <span className="text-gray-500">English 🌐</span>
            </li>
            <Link
              to="/editprofile"

            >
              <li className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer">
                Edit profile
              </li>
            </Link>
            <li
              className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer flex items-center justify-between"
              onClick={handleLogout}
            >
              <span>Log out</span>
              <MdOutlineLogout className="text-[18px]"/>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
