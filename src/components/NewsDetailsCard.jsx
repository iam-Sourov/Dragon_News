import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    const { image_url, title, details, category_id } = news
    return (
        <div className='space-y-6'>
            <img className='w-full h-[350px] object-cover' src={image_url} alt="" />
            <h1 className='text-2xl'>{title}</h1>
            <p>{details}</p>

            <Link className='btn btn-secondary' to={`/category/${category_id}`}>Back To Category</Link>
        </div>
    );
};

export default NewsDetailsCard;