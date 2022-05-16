import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import ExceptionalService from './ExceptionalService';

const Services = () => {
    const service=[
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'We provide the best service in  the hole bangladesh',
            img: fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'We provide the best service in  the hole bangladesh',
            img: cavity
        },
        {
            _id:3,
            name:'Teeth whitening',
            description:'We provide the best service in  the hole bangladesh',
            img: whitening
        }
    ];
    return (
        <div className='my-28 px-10'>
            <div className='mb-16'>
                <h2 className='text-primary text-2xl font-bold'>Our Service</h2>
                <h1 className='text-5xl'>Service we provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                service.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>
            <div  className='mt-20 w-3/4'>
                <ExceptionalService></ExceptionalService>
            </div>
        </div>
    );
};

export default Services;