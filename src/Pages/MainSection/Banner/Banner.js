import React from 'react';
import bannerImg from '../../../Assets/images/bannerbackground.png';

const Banner = () => {
    return (
        <div
            className='bg-image'
            style={{ backgroundImage: `url(${bannerImg})` }}
        >

            <h1>this is banner</h1>
        </div>
    );
};

export default Banner;