import React, { use } from 'react';
import { NavLink } from 'react-router';
const promiseData = fetch('/categories.json').then(res => res.json());
const Category = () => {
    const categories = use(promiseData);
    console.log(categories);
    return (
        <div>
            <h1 className='font-bold text-center'>All Categories ({categories.length})</h1>
            <div className='grid grid-cols-1'>
                {
                    categories.map(category=> <NavLink to={`/category/${category.id}`} className='btn border-0 bg-base-100 hover:bg-base-200 text-accent font-semibold' key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;