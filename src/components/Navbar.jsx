import React from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-2 mb-6'>
            <div className="no "></div>
            <div className="nav  font-semibold flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="login-btn  flex items-center gap-2">
                <img src={userLogo} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;