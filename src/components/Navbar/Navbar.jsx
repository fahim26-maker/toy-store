import React, { use } from 'react';
import logo from "../../assets/toys-corner-logo.jpg"
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogOut =() =>{
        console.log("user trying to logout")
        logOut()
        .then(() => {
            alert("Logged out successful")
        })
        .catch((error) => {
            console.log(error);
        });
    } ;
    return (
        <div className='flex justify-between p-4 px-30 bg-gray-200'>
            
            <div className='flex'>
                <img src={logo} className='h-10 rounded-full mr-2'/>
                <h1 className='font-semibold text-2xl'>ToyTopia – <span className='text-sm text-gray-500'>A Local Kids Toy Store Platform</span></h1>
            </div>
            <div>{user && user.email}</div>
            
            <div className=' space-x-5'>
                <Link to={"/"} className=' hover:underline'>Home</Link>
                <Link to={"my-profile"} className=' hover:underline'>My Profile</Link>
                {user ? <button onClick={handleLogOut} className="btn btn-neutral">Logout</button> :  <Link  to={"/auth/login"} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</Link>}
               
            </div>
        </div>
    );
};

export default Navbar;