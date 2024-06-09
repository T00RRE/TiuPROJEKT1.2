import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
export const Konto = () => {

    return (


        <div>
            <h1 style={{marginTop:'20px'} }> Moje Konto :</h1>
            <Accordion defaultActiveKey="0" flush >
            
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Moje Dane</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col xs={6} mb={4 } >
                        <Form.Label htmlFor="inputPassword5">Imie</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            />
                            </Col >
                            <Col xs={6} mb={4}>
                        <Form.Label htmlFor="inputPassword5">Nazwisko</Form.Label>
                           
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                                />
                            </Col>

                        </Row>
                        <Row>
                        <Col>
                            <Form.Label htmlFor="inputPassword5">Adres email</Form.Label>

                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                            </Col>
                        </Row>
                        <div style={{ marginTop: '20px' }}>
                            <Button variant="dark">Zapisz</Button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Adres wysylki</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col xs={4} mb={3} >
                                <Form.Label htmlFor="inputPassword5">Ulica</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col >
                            <Col xs={4} mb={3}>
                                <Form.Label htmlFor="inputPassword5">Miasto</Form.Label>

                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                            <Col xs={4} mb={3}>
                                <Form.Label htmlFor="inputPassword5">nr. Domu</Form.Label>

                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} mb={3} >
                                <Form.Label htmlFor="inputPassword5">Kod Pocztowy</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col >
                            <Col xs={4} mb={3}>
                                <Form.Label htmlFor="inputPassword5">Kraj</Form.Label>

                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                            <div style={{ marginTop: '20px' }}>
                                <Button variant="dark">Zapisz</Button>
                            </div>
                            
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Zmiana Hasla</Accordion.Header>
                    <Accordion.Body>
                        <h1> Zmiana Hasla</h1>
                        <Form.Label htmlFor="inputPassword5">Aktualne haslo</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                             (pozostaw puste, aby nie zmieniac)
                        </Form.Text>
                        <div style={{marginTop:'20px'} }>
                        <Form.Label htmlFor="inputPassword5">Nowe haslo</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            (pozostaw puste, aby nie zmieniac)
                        </Form.Text>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <Form.Label htmlFor="inputPassword5"> Potwierdz Nowe haslo</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                (pozostaw puste, aby nie zmieniac)
                            </Form.Text>
                        </div>
                        <div style={{marginTop:'20px'} }>
                            <Button variant="dark">Zmien Haslo</Button>
                        </div>
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Moje zamowienia</Accordion.Header>
                    <Accordion.Body>
                        <h1> Nie masz zadnych zamowien</h1>
                      
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
            
            <footer className="light text-dark" >

                <Row style={{ marginTop: '400px' }}>
                    <Col md={6} >
                        <h5>Nawigacja</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark">Kontakt</a></li>
                            <li><a href="#" className="text-dark">Sledzenie zamowienia</a></li>
                            <li><a href="#" className="text-dark">Zwroty i reklamacje</a></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5>Informacje</h5>
                        <p>&copy; {new Date().getFullYear()}<Image src="./image/logo1.jpg" style={{ width: '80px' }} /></p>
                    </Col>
                </Row>

            </footer>




        </div>

    )
}