import React from 'react';
import { NavLink } from 'react-router';
import userLogo from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-6'>
            <div className="no "></div>
            <div className="nav  font-semibold flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="login-btn  flex items-center gap-2">
                <img src={userLogo} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;