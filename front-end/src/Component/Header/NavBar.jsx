import React from 'react'
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';





const NavBar = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className='flex items-center gap-5 border-b-2 h-[80px]'>

                <Link to={'/'} className='w-[91px] h-[34px]'>
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
                </Link>


                <div className='cursor-pointer'>
                    <p>Category</p>
                </div>

                <div className='flex items-center gap-2 border border-zinc-400 p-2 w-[350px] rounded px-3'>
                    <IoSearch className='text-2xl text-zinc-600' />
                    <input className='border-0 outline-none w-[100%]' type="text" placeholder='Search for anything...' />
                </div>

                <nav className='flex gap-5 items-center ml-10'>
                    <li className='list-none text-zinc-700 cursor-pointer'>Plane & Pricing</li>
                    <li className='list-none text-zinc-700 cursor-pointer'>Udamy Business</li>
                    <li className='list-none text-zinc-700 cursor-pointer'>Teach on Udamy</li>
                    <li className='list-none text-zinc-700 text-2xl cursor-pointer ml-5'><MdOutlineShoppingCart /></li>

                    <Link to={'/login'}>
                        <button className='border border-zinc-600 rounded py-[8px] w-[80px]'>Log in</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button className='bg-[#2d2f31]  w-[90px] rounded py-[8px] text-white '>Sign up</button>
                    </Link>
                    <p className='bg-[#2d2f31]  rounded p-[11px] text-white cursor-pointer'><TbWorld className='text-xl font-semibold' /></p>
                </nav>
            </div>
        </div >
    )
}

export default NavBar
