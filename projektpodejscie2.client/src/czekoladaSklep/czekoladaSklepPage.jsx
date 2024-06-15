import { Container, Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from "../Components/Produkt";
export const CzekoladaSklep = () => {

    return (

        <div>
            <Container fluid className="hero-section">
                <Row>
                    <Col className="text-center position-relative p-0">
                        <Image src="/image/banery/czekoladaBaner2.jpg" fluid className="hero-image" />
                        <h1 className="hero-text" style={{ marginTop: '90px' }}>CZEKOLADA</h1>
                    </Col>
                </Row>
            </Container>

            <Row style={{ marginTop: '30px' }}>

                <Col xs={6} md={3}>
                    <Form.Label style={{ fontWeight: 'bold' }}>WEDLUG CENY  </Form.Label>
                    <Form.Range />
                    <h1 style={{ fontSize: '20px' }}>Cena:    10zl   - 30zl  </h1>
                    <Button variant="light" style={{ marginLeft: '180px', marginTop: '-60px' }}>Filtruj</Button>
                    <hr style={{ marginTop: '20px', marginBottom: '20px' }} />


                    <Form.Label style={{ fontWeight: 'bold' }}>Stan Magazynowy</Form.Label>

                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Wyprzedaz"
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Dostepnosc "
                        />
                    </Form>
                    <hr style={{ marginTop: '20px', marginBottom: '20px' }} />
                </Col>
                <Col xs={6} md={9}>

                    <Row style={{ display: 'flex' }}>
                        <Form.Select aria-label="Default select example" style={{ width: '220px', marginLeft: '600px' }}>
                            <option>Domyslne sortowanie</option>
                            <option value="1">Sortuj wg ceny: od najnizszej</option>
                            <option value="2">Sortuj wg ceny: od najwyzszej</option>
                            <option value="3">Sortuj wg popularnosci:</option>
                        </Form.Select>


                        <div style={{ marginTop: '30px', marginLeft: '20px', display: 'flex' }}>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt1.jpg"
                                    nazwa="Velvet Temptation"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt2.jpg"
                                    nazwa="Smooth Silk Symphony"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt3.jpg"
                                    nazwa="Rich Caramel Indulgence"
                                />
                            </Col>

                        </div>
                    </Row>
                    <Row>
                        <div style={{ marginTop: '30px', marginLeft: '20px', display: 'flex' }}>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt4.jpg"
                                    nazwa="Intense Dark Pleasure"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt5.jpg"
                                    nazwa="Czekolada taka smaczna"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt6.jpg"
                                    nazwa="Noir Temptation"
                                />
                            </Col>
                        </div>

                    </Row>
                 
                </Col>



            </Row>


            <footer className="light text-dark" >

                <Row style={{ marginTop: '50px' }}>
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