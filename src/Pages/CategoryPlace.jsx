import React from 'react';
import { useLoaderData } from 'react-router';

const CategoryPlace = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            places
        </div>
    );
};

export default CategoryPlace;