import React, { useContext, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import UserMenu from './UserMenu';
import Notifications from './Notifications';
import Context from '../../../context';




const NavBar = () => {


    let token = localStorage.getItem('token');
    let role = localStorage.getItem('E-role');
    // console.log(token , "hello token");


    let { cartData, courseData } = useContext(Context);




    return (
        <div className='max-w-[1400px] mx-auto px-4 '>
            <div className='flex items-center justify-between gap-5 border-b-2 h-[80px] z-50'>

                <div className='flex  items-center gap-8'>
                    <Link to={'/'} className='w-[91px] h-[40px] scale-150 pt-[5px]'>
                        <img src="https://www.ballinamorecs.ie/wp-content/uploads/2014/07/elearning-logo.png" alt="Logo" />
                    </Link>

                    {/* <div className="relative cursor-pointer z-50">
                        <Link to='/category'>
                            <p>Category</p>
                        </Link>
                    </div> */}
                </div>


                <div className='flex items-center gap-2 border border-zinc-400 p-2 rounded px-3 flex-grow max-w-md lg:max-w-[350px]'>
                    <IoSearch className='text-2xl text-zinc-600' />
                    <input
                        className='border-0 outline-none w-full text-sm bg-gray-100'
                        type="text"
                        placeholder='Search for anything......'
                    />
                </div>

                <nav className='hidden lg:flex gap-5 items-center'>
                    <Link to='/PricingSubscraption'>
                        <li className='list-none text-zinc-700 cursor-pointer'>Plans & Pricing</li>
                    </Link>
                    <Link to='/e-business'>
                        <li className='list-none text-zinc-700 cursor-pointer'>E-Business</li>
                    </Link>

                    <Link to='/tech-on-page'>
                        <li className='list-none text-zinc-700 cursor-pointer'>Teach on e-learn</li>
                    </Link>

                    {
                        token &&
                        <Link to='/add-cart' className='list-none text-zinc-700 text-2xl cursor-pointer ml-5 relative'>
                            <MdOutlineShoppingCart className='' />
                            {
                                cartData.length != 0 &&
                                <sup className='text-purple-700 text-center text-sm font-bold px-[2px] py-0 rounded-full absolute left-6' >{cartData.length}</sup>
                            }
                        </Link>
                    }
                </nav>


                {!token && (
                    <div className='flex items-center gap-3'>
                        <Link to={'/login'}>
                            <button className='border border-zinc-600 rounded py-[8px] w-[80px] text-sm'>Log in</button>
                        </Link>
                        <Link to={'/signup'}>
                            <button className='bg-[#2d2f31] w-[90px] rounded py-[8px] text-white text-sm'>Sign up</button>
                        </Link>
                        <p className='bg-[#2d2f31] rounded p-[8.5px] text-white cursor-pointer'>
                            <TbWorld className='text-xl font-semibold' />
                        </p>
                    </div>
                )}

                {token && (
                    <div className='flex items-center gap-5 ml-4'>

                        <p className=''>
                            <UserMenu />
                        </p>
                    </div>
                )}







            </div>

            <div className='lg:hidden flex items-center justify-between mt-4'>
                <div className='cursor-pointer'>☰</div>
                <MdOutlineShoppingCart className='text-2xl text-zinc-700 cursor-pointer' />
            </div>
        </div>
    );
};

export default NavBar;
