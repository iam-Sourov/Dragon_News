import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (

        <div className='container mx-auto  bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2'>
            <h1 className='font-bold text-center '>Log In</h1>
            <form >
                <div className='space-y-2'>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <input type="password" name='password' className="input" placeholder="Password" />
                </div>
                <button className="w-full btn btn-neutral mt-4">Login</button>
            </form>
            <p>Dont have an account? <Link
                className='text-secondary' to={'/auth/register'}>Register</Link></p>
        </div>
    );
};

export default Login;