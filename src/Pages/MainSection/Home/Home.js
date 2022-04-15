import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Food from '../Food/Food';
import Lunch from '../Lunch/Lunch';
import WhyChooseMe from '../WhyChooseMe/WhyChooseMe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Nav className="justify-content-center my-5" activeKey="/breakfast">
                <Nav.Item>
                    <Nav.Link as={Link} to="/breakfast">Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/lunch">Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/dinner">Dinner</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Breakfast />} />
                    <Route path='/breakfast' element={<Breakfast />} />
                    <Route path='/lunch' element={<Lunch />} />
                    <Route path='/dinner' element={<Dinner />} />
                </Routes>
            </div>
            <div className='d-flex justify-content-center my-5' >
                <Button variant="secondary" size="lg">
                    Checkout Your Food
                </Button>
            </div>
            <WhyChooseMe></WhyChooseMe>
        </div>
    );
};

export default Home;