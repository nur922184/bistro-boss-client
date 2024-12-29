import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Future.css'

const Future = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle
                subHeading={"Check it Our"}
                heading={"From Our Menu"}></SectionTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md: ml-10'>
                    <p> Aug 20, 2024</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat deleniti sapiente aperiam perspiciatis eos unde dolor id explicabo voluptas ut impedit, aliquid tempora tenetur laboriosam voluptatibus! Placeat illo id error recusandae doloribus excepturi officia, laudantium natus magni dolores accusantium illum assumenda fugit deserunt odio molestias! Dolores alias reiciendis nam!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Future;