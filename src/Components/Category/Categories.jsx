import React, { use } from 'react';
import { NavLink } from 'react-router-dom';

const categoryPromise = fetch('/categories.json').then(res => res.json());


const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='text-xl text-primary font-semibold mb-5'>All Categories</h2>
            {
                categories.map(category => (
                    <div className='grid grid-cols-1 '>
                        <NavLink key={category.id} to={`/category/${category.id}`} className={({isActive}) => `py-4 px-12 text-[#9F9F9F] font-semibold hover:bg-base-300 hover:text-primary ${isActive ? 'bg-base-300' : ''}` }>{category.name}</NavLink>
                    </div>
                ))
            }

        </div>
    );
};

export default Categories;