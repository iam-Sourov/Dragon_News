import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-2'>
            <h1 className='font-bold '>Find Us On</h1>
            <div className="join w-full  join-vertical space-y-2">
                <button className="btn btn-outline justify-start border-base-300 join-item"><FaFacebook></FaFacebook>Facebook</button>
                <button className="btn btn-outline justify-start border-base-300 join-item"><FaTwitter></FaTwitter>Twitter</button>
                <button className="btn btn-outline justify-start border-base-300 join-item"><FaInstagram></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;