import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const Logowanie = () => {
    return (
        <Container className=" custom-container" >

            <Row >
                <Col >
                    <Card className="logowanie-bg">
                        <Card.Body>
                            <Form >
                                <Form.Group className="mb-3 " controlId="formBasicEmail" >
                                    <Form.Label className="a">Email </Form.Label>
                                    <Form.Control type="email" placeholder="Podaj Email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="a">Haslo</Form.Label>
                                    <Form.Control type="password" placeholder="Haslo" />
                                </Form.Group>
                                <Form.Group className="mb-3 a" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="zapamietaj mnie " />
                                </Form.Group>
                                <Row>
                                    <Col  >
                                <Button variant="light" type="Zatwierdz" lg-3>
                                    Zatwierdz
                                        </Button>
                                    </Col>
                                    <Col>
                                
                                </Col>
                            </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container >

    )
}