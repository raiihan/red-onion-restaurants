import { } from 'bootstrap';
import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import bannerImg from '../../../Assets/images/bannerbackground.png';

const Banner = () => {
    return (
        <div
            className='bg-image position-relative'
            style={{ backgroundImage: `url(${bannerImg})`, height: 'calc( 100vh - 65px)' }}

        >

            <div className='w-50 mx-auto  position-absolute position-absolute top-50 start-50 translate-middle'>

                <h1 className='text-center'>Best Food waiting for your Belly</h1>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Food Item"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>

            </div>
        </div>
    );
};

export default Banner;