import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Register = () => {
    const { createUser, user, setUser } = use(AuthContext);
    console.log(user);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(res => {
                const user = res.user;
                setUser(user.email);
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='container mx-auto  bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2'>
            <h1 className='font-bold text-center '>Register</h1>
            <form onSubmit={handleRegister} className='space-y-2'>
                <input type="text" name='name' className="input" placeholder="Name" />
                <input type="text" name='photoUrl' className="input" placeholder="Photo URL" />
                <input type="email" name='email' className="input" placeholder="Email" />
                <input type="password" name='password' className="input" placeholder="Password" />
                <button type='submit' className="w-full btn btn-neutral mt-4">Register</button>
            </form>
            <p>Already have an account? <Link className='text-secondary' to={'/auth/login'}>Login</Link></p>
        </div>
    );
};

export default Register;