import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
            <Container className='my-5 text-secondary'>
                < Row xs={1} md={2} >
                    <Col>
                        <h2 className=' text-dark text-uppercase fw-bold'>GET IN TOUCH</h2>
                        <p className='my-5 lh-lg'>Here's the story of a man named Brady who was busy with three boys of his own.Thank you for being ravelled down the road and back again.</p>
                        <Form className='mt-4 shadow-lg p-5'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><i className="fas fa-user me-2 custom-text-primary"></i>Name</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Form.Label><i className="far fa-envelope me-2 custom-text-primary"></i>E-mail</Form.Label>
                                <Form.Control className="mb-3" type="email" />
                                <Form.Label><i className="far fa-file-alt me-2 custom-text-primary"></i>Subjects</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Form.Label><i className="fas fa-comments me-2 custom-text-primary"></i>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                                <Button variant="outline-secondary" className='fw-bold custom-text-primary mt-4 form-control'><i className="fas fa-paper-plane me-2 custom-text-primary"></i>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <h2 className='text-dark fw-bold'>CONTACT INFORMATION</h2>
                        <p className='my-5'>Thank you for your interest in contacting Wikipedia. Before proceeding, some important disclaimers.</p>
                        < Row className='mt-5'>
                            <Col xs={12} md={12} className='d-flex '>
                                <div>
                                    <i className="fas fa-map-marker-alt me-4  custom-text-primary" style={{ border: '2px solid black', borderRadius: '50%', padding: '20px' }}></i>
                                </div>
                                <div>
                                    <h4 className='custom-text-primary fw-bold mb-4'>Address</h4>
                                    <p>Jl. Raya Ubud No.88, Bali 80571
                                        <br />  18 Downtown St, Victoria,
                                        Australia</p>
                                </div>
                            </Col>
                            <Col xs={12} md={12} className='my-5 d-flex '>
                                <div>
                                    <i className="fas fa-envelope custom-text-primary me-4" style={{ border: '2px solid black', borderRadius: '50%', padding: '20px' }}></i>
                                </div>
                                <div>
                                    <h4 className='custom-text-primary fw-bold mb-4'>Email Us</h4>
                                    <p>Info@Dronetech.Com
                                        <br />  Help@Dronetech.Com</p>
                                </div>

                            </Col>
                            <Col xs={12} md={12} className='mb-5 d-flex '>
                                <div>
                                    <i className="fas fa-phone-alt custom-text-primary me-4" style={{ border: '2px solid black', borderRadius: '50%', padding: '20px' }}></i>
                                </div>
                                <div>
                                    <h4 className='custom-text-primary fw-bold mb-4'>Call Us</h4>
                                    <p>+01 234 567 89
                                        <br />   +01 234 567 90</p>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    );
};

export default Contact;