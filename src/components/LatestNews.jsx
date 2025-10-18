import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div>
            <div className='bg-base-200 w-fit mx-auto p-2 m-2 flex justify-center items-center '>
                <button className='btn btn-secondary'>Latest</button>
                <Marquee pauseOnHover={true} className='flex gap-3'>
                    <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as- - -</p>
                    <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as- - -</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;