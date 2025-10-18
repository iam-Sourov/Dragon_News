import React from 'react';
import { Link } from 'react-router';
const Register = () => {
    return (
        <div className='container mx-auto  bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2'>
            <h1 className='font-bold text-center '>Register</h1>
            <form >
                <div className='space-y-2'>
                    <input type="text" className="input" placeholder="Name" />
                    <input type="text" className="input" placeholder="Photo URL" />
                    <input type="email" className="input" placeholder="Email" />
                    <input type="password" className="input" placeholder="Password" />
                </div>
                <button className="w-full btn btn-neutral mt-4">Register</button>
            </form>
            <p>Already have an account? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
        </div>
    );
};

export default Register;