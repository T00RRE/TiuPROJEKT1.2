import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import image1 from './imageMenu/sofaImage1.jpg';
import image2 from './imageMenu/menuImage2.jpg';
import image3 from './imageMenu/menuImage3.jpg';
import image4 from './imageMenu/menuImage4.jpg';
import './MenuPage.css';

export const Menu = () => {
    return (
        <Container fluid className="menu-page-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Row>
                    <Col className="text-center fw-bold fs-1">
                        ABOUT ME!
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col className="text-center fs-5 mt-5 mb-5">
                        "Welcome to the world of artistic furniture and sculptures, where creativity meets functionality. As an artist specializing in crafting unique pieces, I blend imagination with craftsmanship to bring life to every creation. Each piece tells a story, reflecting passion, emotion, and a deep connection to the materials used. From intricately carved sculptures to elegantly designed furniture, my work is a testament to the beauty of artistry in everyday objects. Explore my collection and let each piece inspire your imagination and enrich your space with its distinct charm and character."
                    </Col>
                </Row>
            </div>
            <div>
                <Card className="bg-dark text-white mx-auto">
                    <Card.Body>
                        <Row>
                            <Col className="mt-5 mb-5">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={image1} />
                                    <Card.Body>
                                        <Card.Title>Learn About Furniture</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="dark">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mt-5 mb-5">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={image4} />
                                    <Card.Body>
                                        <Card.Title>Learn About Furniture</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="dark">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mt-5 mb-5">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={image4} />
                                    <Card.Body>
                                        <Card.Title>Learn About Furniture</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="dark">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Row>
                    <Col className="text-center fs-5 mt-5 mb-5">
                        <div>
                            Get in Touch
                            <div>
                                Do you have any questions about our products or services?
                                <div>
                                    We're here to help! Feel free to reach out to us using the contact information below or fill out the form, and we'll get back to you as soon as possible.
                                </div>
                            </div>
                            Address:
                            10 Artisan Street
                            City, 00000
                            <div>
                                Phone:
                                +1 123-456-7890
                            </div>
                            Email:
                            info@exampleartistshop.com
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Text me now!</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button variant="success">Send</Button>{' '}
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
