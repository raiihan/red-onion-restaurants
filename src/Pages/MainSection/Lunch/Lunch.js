import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../../../hooks/useFood';
import FoodItems from '../FoodItems/FoodItems';

const Lunch = () => {
    const { lunches } = useFood();
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                lunches.map(lunch => <FoodItems
                    key={lunch._id}
                    food={lunch}
                />)
            }
        </Row>
    );
};

export default Lunch;