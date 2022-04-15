import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../../../hooks/useFood';
import ChooseUs from '../ChooseUs/ChooseUs';

const WhyChooseMe = () => {
    const { chooseMe } = useFood();
    return (
        <div className='container'>
            <h1>Why you Choose Us</h1>
            <p className='w-25'>Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur?</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chooseMe.map(choose => <ChooseUs
                        key={choose._id}
                        choose={choose}
                    />)
                }
            </Row>
        </div>
    );
};

export default WhyChooseMe;