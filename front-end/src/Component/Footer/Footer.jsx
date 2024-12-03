import React from 'react';
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className=" bg-[#1C1D1F] text-gray-400 py-8">
            {/* Top Section */}
            <div className='max-w-[1400px] mx-auto'>
                <div className="container mx-auto px-4 flex items-center justify-between gap-5 mb-10">
                    <p className="text-center text-white font-medium ">
                        Top companies choose <span className="text-purple-500">Udemy Business</span> to build in-demand career skills.
                    </p>
                    <div className="flex justify-center items-center space-x-8">
                        {/* Company logos */}
                        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" className="h-10" />
                        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" className="h-10" />
                        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Box" className="h-10" />
                        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="NetApp" className="h-10" />
                        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Eventbrite" className="h-10" />
                    </div>
                </div>

                <hr />

                {/* Links Section */}
                <div className="container mx-auto px-4 mt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                        <ul>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Udemy Business</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Teach on Udemy</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Get the app</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">About us</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Contact us</li>
                        </ul>
                        <ul>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Careers</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Blog</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Help and Support</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Affiliate</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Investors</li>
                        </ul>
                        <ul>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Terms</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Privacy policy</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Cookie settings</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Sitemap</li>
                            <li className="mb-2 duration-500 cursor-pointer hover:text-white">Accessibility statement</li>
                        </ul>
                        <div className="flex items-center space-x-2 absolute right-16">
                            <TbWorld className="text-2xl" />
                            <button className="border border-gray-400 px-5 py-2 rounded duration-500 hover:border-white">
                                English
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className='w-[91px] h-[34px]'>
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udamy" />
                    </div>
                    <p className="mt-4 md:mt-0 text-gray-300">
                        © 2024 Udemy, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;