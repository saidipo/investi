import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { lock, hamburgerMenu, close } from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <div className="w-full bg-white border-b shadow-md">
            <div className="max-w-[1480px] mx-auto px-4 py-1 flex justify-between items-center h-[60px]"> {/* Reduced height and padding */}
                {/* Logo as text */}
                <div className="text-2xl font-semibold text-[#20B486]"> {/* Customize the text style here */}
                    Investi.tn {/* Replace with your brand's name */}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex gap-4 text-lg font-medium">
                        <li className="hover:text-[#20B486] transition-colors duration-300">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-[#20B486] transition-colors duration-300">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-[#20B486] transition-colors duration-300">
                            <Link to="/support">Support</Link>
                        </li>
                        <li className="hover:text-[#20B486] transition-colors duration-300">
                            <Link to="/platform">Platform</Link>
                        </li>
                        <li className="hover:text-[#20B486] transition-colors duration-300">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                    
                    {/* Login / Sign Up Buttons */}
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <button className="flex items-center gap-2 bg-transparent px-6 py-2 border border-[#20B486] rounded-lg hover:bg-[#20B486] hover:text-white transition-all">
                                <img src={lock} alt="login-icon" className="w-5 h-5" />
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold hover:bg-[#1a9a72] transition-all">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden" onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt="menu-toggle" className="w-6 h-6" />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${toggle ? 'block' : 'hidden'} absolute top-0 left-0 right-0 bg-white p-4 border-t border-b shadow-lg`}>
                <ul className="space-y-4 text-lg">
                    <li className="hover:text-[#20B486] transition-colors duration-300">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-[#20B486] transition-colors duration-300">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-[#20B486] transition-colors duration-300">
                        <Link to="/support">Support</Link>
                    </li>
                    <li className="hover:text-[#20B486] transition-colors duration-300">
                        <Link to="/platform">Platform</Link>
                    </li>
                    <li className="hover:text-[#20B486] transition-colors duration-300">
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <div className="flex flex-col gap-4 mt-6">
                        <Link to="/login">
                            <button className="border border-[#20B486] flex items-center justify-center gap-2 px-6 py-3 rounded-lg hover:bg-[#20B486] hover:text-white transition-all">
                                <img src={lock} alt="login-icon" className="w-5 h-5" />
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="px-8 py-4 rounded-md bg-[#20B486] text-white font-bold hover:bg-[#1a9a72] transition-all">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
