import React from 'react';
import { NavLink } from 'react-router-dom';
import userImage from '../../assets/user.png'



const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-7'>
           <div></div>
           <nav className='flex gap-4'>
            <NavLink to='/' className='text-accent text-[18px]'>Home</NavLink>
            <NavLink to='/about' className='text-accent text-[18px]'>About</NavLink>
            <NavLink to='/carrer' className='text-accent text-[18px]'>Carrer</NavLink>
           </nav>
           <div className='flex gap-4 items-center'>
            <img src={userImage} alt="" />
             <NavLink className='btn font-medium btn-primary text-[18px] text-base-200 py-1.5 px-10 rounded-none' to='/login'>Login</NavLink>
           </div>
        </div>
    );
};

export default Navbar;