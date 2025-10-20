import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(`${location.state ? location.state : '/'}`)
                // setUser(user.email);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    }
    return (

        <div className='container mx-auto  bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2'>
            <h1 className='font-bold text-center '>Log In</h1>
            <form onSubmit={handleLogin}>
                <div className='space-y-2'>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <input type="password" name='password' className="input" placeholder="Password" />
                </div>
                <button type='submit' className="w-full btn btn-neutral mt-4">Login</button>
            </form>
            <p>Dont have an account? <Link
                className='text-secondary' to={'/auth/register'}>Register</Link></p>
        </div>
    );
};

export default Login;