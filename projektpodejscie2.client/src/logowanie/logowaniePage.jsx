import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import RegisterModal from '../Components/RegisterModal.jsx';
import ResetModal from '../Components/ResetHasla.jsx';

export const Logowanie = () => {
    const [RegisterModalShow, RegisterSetModalShow] = useState(false);
    const [ResetModalShow, setResetModalShow] = useState(false); 
    return (
        <Container className="custom-container">
            <Row>
                <Col>
                    <Card className="logowanie-bg">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="a">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Podaj Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="a">Haslo</Form.Label>
                                    <Form.Control type="password" placeholder="Haslo" />
                                </Form.Group>
                                <Form.Group className="mb-3 a" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Zapamietaj mnie" />
                                </Form.Group>

                                
                                <Button variant="light" onClick={() => setResetModalShow(true)}>
                                    Zapomniales hasla?
                                </Button>
                                <ResetModal show={ResetModalShow} onHide={() => setResetModalShow(false)} />

                                <Row style={{ marginTop: '20px' }}>
                                    <Col>
                                        <Button variant="light" type="submit" lg={3}>
                                            Zatwierdz
                                        </Button>
                                        <Button
                                            variant="primary"
                                            lg={3}
                                            style={{ marginLeft: '20px' }}
                                            onClick={() => RegisterSetModalShow(true)}
                                        >
                                            Zarejestruj sie!
                                        </Button>
                                        <RegisterModal show={RegisterModalShow} onHide={() => RegisterSetModalShow(false)} />
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Logowanie;
