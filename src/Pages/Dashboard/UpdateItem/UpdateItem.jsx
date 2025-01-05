import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    const item = useLoaderData(); 
    console.log( 'data ase na kan',item);
    return (
        <div>
            <h2 className="text-2xl"> Update Items</h2>
        </div>
    );
};

export default UpdateItem;