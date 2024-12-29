import React from 'react';
import FoodCard from '../../../Component/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className=' mx-auto grid md:grid-cols-3 gap-5'>
            {
                items.map(item =>
                    <FoodCard key={item._id}
                        item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;