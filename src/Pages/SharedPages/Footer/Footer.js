import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-dark'>
            <div className='container text-white py-4'>
                <Row xs={1} md={2} >
                    <Col>
                        <img src={logo} width={120} alt="" />
                    </Col>
                    <Col>
                        <Row xs={1} md={2} >
                            <Col>
                                <p>Lorem, ipsum dolor.</p>
                                <p>Lorem, ipsum dolor.</p>
                                <p>Lorem, ipsum dolor.</p>
                                <p>Lorem, ipsum dolor.</p>
                            </Col>
                            <Col>
                                <p>Lorem, ipsum.</p>
                                <p>Lorem, ipsum.</p>
                                <p>Lorem, ipsum.</p>
                                <p>Lorem, ipsum.</p>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row xs={1} md={2}  >
                    <Col>
                        <p>copyright &copy; {year} silvan </p>
                    </Col>
                    <Col>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Privacy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Terms of Use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Pricing</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                </Row>
            </div>

        </div>
    );
};

export default Footer;