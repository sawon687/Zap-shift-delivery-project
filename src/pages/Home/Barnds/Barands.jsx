import React from 'react';
import Marquee from 'react-fast-marquee';
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands//moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
const barands=[
    casio,
    amazon_vector,
    moonstar,
    randstad,
    star,
    start_people,
    amazon
]
const Barands = () => {
    return (
        <div className='w-7xl mx-auto '>
           <h1 className='text-center font-bold text-3xl'>We've helped thousands of sales teams</h1>
            <Marquee className='h-20'>{barands.map(barands=><img className='mx-10 h-full' src={barands} alt="" />)}</Marquee>
            
        </div>
    );
};

export default Barands;
