import React from 'react';

const FoodCard = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-0 mr-4 bg-slate-900 text-white px-2'>${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;