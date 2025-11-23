import React from 'react';
import logo from "../../assets/toys-corner-logo.jpg"
import { Link } from 'react-router';


const Navbar = () => {
    return (
        <div className='flex justify-between p-4 px-30 bg-gray-200'>
            <div className='flex'>
                <img src={logo} className='h-10 rounded-full mr-2'/>
                <h1 className='font-semibold text-2xl'>ToyTopia – <span className='text-sm text-gray-500'>A Local Kids Toy Store Platform</span></h1>
            </div>
            <div className=' space-x-5'>
                <Link to={"/"} className=' hover:underline'>Home</Link>
                <Link to={"my-profile"} className=' hover:underline'>My Profile</Link>
            </div>
        </div>
    );
};

export default Navbar;