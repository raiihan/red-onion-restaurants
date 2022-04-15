import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FoodItems = ({ food }) => {
    const { balance, picture, name, about } = food;
    return (


        <Col>
            <Card className='border-0 text-center food-item'>
                <Card.Img variant="top" src={picture} className='w-50 mx-auto' />
                <Card.Body>
                    <Card.Title className='hover-focus'>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Card.Title>{balance}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );

};

export default FoodItems;