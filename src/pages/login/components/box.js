import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const AppBox = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleView = () => {
        setIsLogin(!isLogin);
    };
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Col md={6} lg={4} className="mx-auto">
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h3>

                            <Form>
                                {!isLogin && (
                                    <Form.Group className="mb-3" controlId="formFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter full name" />
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    {isLogin ? 'Login' : 'Signup'}
                                </Button>
                            </Form>

                            <div className="text-center mt-3">
                                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                                <Button variant="link" onClick={toggleView}>
                                    {isLogin ? 'Signup' : 'Login'}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AppBox;
