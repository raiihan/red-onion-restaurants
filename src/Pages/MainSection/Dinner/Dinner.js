import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../../../hooks/useFood';
import FoodItems from '../FoodItems/FoodItems';

const Dinner = () => {
    const { dinners } = useFood();
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                dinners.map(lunch => <FoodItems
                    key={lunch._id}
                    food={lunch}
                />)
            }
        </Row>
    );
};

export default Dinner;