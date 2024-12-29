import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Tastimonials = () => {
    const [reviews, setReviws] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviws(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle subHeading={"What Our Client say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        </div>
                        <div className='text-center m-16'>
                            <p>
                                {review.details}
                            </p>
                            <h1 className='text-2xl text-orange-500'>{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Tastimonials;