import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ChooseUs = ({ choose }) => {
    const { icon, picture, name, about } = choose;
    return (
        <Col>
            <Card className='border-0'>
                <Card.Img variant="top" src={picture} className=' mx-auto' />
                <Card.Body className='ms-3'>
                    <Card.Title >
                        <img src={icon} alt="" />
                        <span className='fs-6 ms-3'>{name}</span>
                    </Card.Title>
                    <Card.Text className='ms-5'>
                        {about}
                        <div>
                            <Button variant="link">See More</Button>
                        </div>
                    </Card.Text>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default ChooseUs;