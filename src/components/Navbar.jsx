import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
            alert('SignOut Done')
        }).catch((error) => {
            console.log(error);
        });

    }
    return (
        <div className='flex justify-between items-center mt-2 mb-6'>
            <div className="no ">{user ? <button className='btn btn-primary'>{user.email}</button> : 'No User Logged In'}</div>
            <div className="nav  font-semibold flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>

            </div>
            <div className="login-btn  flex items-center gap-2">
                <img src={userLogo} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-8'>Log Out</button> : <Link to={'/auth/login'} className='btn btn-primary px-8'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;