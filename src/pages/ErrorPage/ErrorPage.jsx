import React from 'react';
import { Link, useRouteError } from 'react-router';
import lota from "../../assets/Group.png"
import er from "../../assets/Group (2).png"
const ErrorPage = () => {
      const error  = useRouteError()
    console.log(error)
    return (
        <div class="bg-[#FFF0E1] h-screen">
        <div className=' justify-center items-center justify-items-center pt-20'>       
            <img src={lota} className=' absolute ' />
            <img src={er} className=' relative top-20' />
        </div>
        <p className='text-center text-4xl font-bold mt-30'>Oops, page not found!</p>
        <p className='text-center text-gray-500 mt-4'>The page you are looking for is not available.</p>
        <Link to={"/"}><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white btn  mx-auto flex justify-center mt-4'>Go Back !!</button></Link>
        </div>
    );
};

export default ErrorPage;