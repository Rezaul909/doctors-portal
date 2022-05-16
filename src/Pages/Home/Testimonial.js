import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCart from './ReviewCart';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            city: 'California',
            img: people1,
            msg: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: "Winson Herry",
            city: 'California',
            img: people2,
            msg: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: "Winson Herry",
            city: 'California',
            img: people3,
            msg: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ];
    return (
        <section>
            <div className='flex justify-between mx-10 mt-20'>
                <div>
                    <h2 className='text-primary font-bold text-xl'>Testimonial</h2>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20 my-16'>
                {
                    reviews.map(review=> <ReviewCart key={review._id} review={review}></ReviewCart>)
                }
            </div>
        </section>
    );
};

export default Testimonial;