import React from 'react';
import appointment from '../../assets/images/appointment.png';


const Contact = () => {
    return (
        <div className='bg-accent py-20 mb-12' style={{background:`url(${appointment})`}}>
            <h3 className='text-primary text-xl font-bold'>Contact Us</h3>
            <h1 className='text-4xl text-white'>Stay connected with us</h1>
            
            <div className='mt-16 '>
                <input className='mt-5 block m-auto w-1/3 p-2 rounded ' placeholder='Email address' type="text" name="" id="" /> 
                <input className='mt-5 block m-auto w-1/3 p-2 rounded ' placeholder='Subject' type="text" name="" id="" /> 
                <textarea className='mt-5 block m-auto w-1/3 p-2 rounded ' placeholder='Your massage' type="text" name="" id="" /> 
                <input className='mt-5 px-8 font-bold block m-auto p-2 rounded bg-primary' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Contact;