import { Container, Row, Col, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from "../Components/Produkt";
export const HerbataSklep = () => {

    return (

        <div>
            <Container fluid className="hero-section">
                <Row>
                    <Col className="text-center position-relative p-0">
                        <Image src="/image/banery/herbataBaner2.jpg" fluid className="hero-image" />
                        <h1 className="hero-text" style={{ marginTop: '90px', marginLeft: '20px' }}>HERBATA</h1>
                    </Col>
                </Row>
            </Container>

            <Row style={{ marginTop: '30px' }}>

                <Col xs={6} md={3}>
                    <Form.Label style={{ fontWeight: 'bold' }}>WEDLUG CENY  </Form.Label>
                    <Form.Range />
                    <h1 style={{ fontSize: '20px' }}>Cena:    10zl   - 50zl  </h1>
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
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt1.jpg"
                                    nazwa="Mint Harmony - Refreshing Herbal Mint Blendg"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt2.jpg"
                                    nazwa="Earl Grey Supreme - Classic Bergamot-Infused Tea"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt3.jpg"
                                    nazwa="Earl Grey Supreme - Elegant and Aromatic Blend"
                                />
                            </Col>

                        </div>
                    </Row>
                    <Row>
                        <div style={{ marginTop: '30px', marginLeft: '20px', display: 'flex' }}>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt4.jpg"
                                    nazwa="Mint Harmony - Refreshing Herbal Mint Blend"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt5.jpg"
                                    nazwa="Mint Harmony - Refreshing Herbal Mint Blend"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt6.jpg"
                                    nazwa="Chamomile Calm - Gentle Sleepytime Brew"
                                />
                            </Col>
                        </div>

                    </Row>
                    <Row>
                        <div style={{ marginTop: '30px', marginLeft: '20px', display: 'flex' }}>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt7.jpg"
                                    nazwa="Chamomile Calm - Relaxing and Calming Infusion"
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt8.jpg"
                                    nazwa="Chamomile Calm - Soothing Herbal Tea Blend"
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
                        <p>&copy; {new Date().getFullYear()} Nazwa Twojej Strony</p>
                    </Col>
                </Row>

            </footer>


        </div>

    )

}