import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='space-y-2'>
            <h1 className='font-bold '>Log In With</h1>
            <div className='flex flex-col gap-2'>
                <button className="btn btn-outline border-base-300 join-item"><FaGoogle></FaGoogle>Google</button>
                <button className="btn btn-outline border-base-300 join-item"><FaGithub></FaGithub>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;