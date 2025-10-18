import React from 'react';
import Logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-6'>
            <img src={Logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'>{format(new Date(), 'EEEE, MMMM MM ,yyyy')}</p>
        </div>
    );
};

export default Header;