import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Product from "../Components/Produkt";
export const Furniture = () => {

    return (
        <div>


            <div style={{}}>
                <Image src="./image/banery/menuBaner1.png" fluid style={{ width: '100%' }} className="custom-height" />

            </div>

            <Container>
                <Row style={{ paddingTop: '50px' }}>
                    <Col xs={6} md={4} >
                        <Card style={{ width: '13rem', height: '13rem', borderRadius: '50%', overflow: 'hidden', textAlign: 'center' }}>
                            <Card.Img
                                variant="top"
                                src="./image//kawaProduktyImage/kawaProduk2.jpg"
                                style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                            />
                            <Card.Body style={{ padding: '1rem' }}>
                                <Card.Title ></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div style={{fontSize:'30px', marginLeft: '60px' } }>Kawa</div>
                    </Col>
                    <Col xs={6} md={4} style={{ paddingLeft: '50px' }}>
                        <Card style={{ width: '13rem', height: '13rem', borderRadius: '50%', overflow: 'hidden', textAlign: 'center' }}>
                            <Card.Img
                                variant="top"
                                src="./image//herbataProduktyImage/herbataProdukt2.jpg"
                                style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                            />
                            <Card.Body style={{ padding: '1rem' }}>
                                <Card.Title ></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div style={{ fontSize: '30px', marginLeft: '50px' }}>Herbata</div>
                    </Col>
                    <Col xs={6} md={4} style={{ paddingLeft: '50px' }}>
                        <Card style={{ width: '13rem', height: '13rem', borderRadius: '50%', overflow: 'hidden', textAlign: 'center' }}>
                            <Card.Img
                                variant="top"
                                src="./image/czekoladaProduktyImage/czekoladaProdukt4.jpg"
                                style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                            />
                            <Card.Body style={{ padding: '1rem' }}>
                                <Card.Title ></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div style={{ fontSize: '30px', marginLeft: '40px' }}>Czekolada</div>
                    </Col>



                </Row>

                <div fluid>
                    <h2 style={{ fontSize: '50px', marginTop: '50px' }}>
                        Dostarczamy Kawe na najwyzszym poziomie!
                    </h2>
                </div>

                <Row style={{ marginTop: '100px' }}>
                    <Col xs={6} md={3} style={{ marginLeft: '80px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                        </svg>
                        <h1 style={{ fontSize: '20px', marginLeft: '-40px ' }}>Szybka dostawa</h1>
                    </Col>

                    <Col xs={6} md={3} style={{ marginLeft: '80px' }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <h2 style={{ fontSize: '20px', marginLeft: '-40px ' }} >Najwyzsza jakosc</h2>
                    </Col>
                    <Col xs={6} md={3} style={{ marginLeft: '80px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                        </svg>
                        <h3 style={{ fontSize: '20px', marginLeft: '-40px ' }} >30 dni na zwrot</h3>
                    </Col>

                </Row>



            </Container>



            <Card style={{ marginTop: '100px', height: "500px", display: 'flex', justifyContent: 'center' }} className="custom-card" >
                <Card.Body>
                    <h1 style={{ marginLeft: '190px', marginTop: '40px', fontSize: '50px', color: 'white' }}>
                        22
                    </h1>
                    <h2 style={{ marginLeft: '110px', marginTop: '10px', fontSize: '20px', color: 'white' }}>
                        Dostepnych prodoktow.
                    </h2>

                    <h3 style={{ marginLeft: '160px', marginTop: '40px', fontSize: '50px', color: 'white' }}>
                        4512
                    </h3>
                    <h4 style={{ marginLeft: '100px', marginTop: '10px', fontSize: '20px', color: 'white' }}>
                        Zrealizowanych zamowien.
                    </h4>

                    <h5 style={{ marginLeft: '160px', marginTop: '40px', fontSize: '50px', color: 'white' }}>
                        1241
                    </h5>
                    <h6 style={{ marginLeft: '100px', marginTop: '10px', fontSize: '20px', color: 'white' }}>
                        Zarejestrowanych klientow.
                    </h6>

                    <Image src="./image/deliveryImage.jpg" width="450px" height="450px"
                        style={{ marginLeft: '600px', marginTop: '-400px' }}
                    />

                </Card.Body>
            </Card>

            <nowosci style={{ fontSize: '60px', display: 'flex', justifyContent: 'center' }}>
                Nowosci
            </nowosci>
            <div style={{ fontSize: '20px', display: 'flex', justifyContent: 'center' }}>
                Zobacz najnowsze produkty
            </div>
            <Carousel style={{ marginTop: '100px' }}>
                <Carousel.Item>
                    <Row>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/kawaProdukt1.jpg"
                                nazwa="Arabica Elegance - Premium Single Origin Coffee"
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/kawaProduktyImage/kawaProduk4.jpg"
                                nazwa="Arabica Elegance - Artisan Roasted Perfection"
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/kawaProduktyImage/kawaProduk6.jpg"
                                nazwa="Velvet Latte - Smooth & Luxurious Brew"
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/kawaProduktyImage/kawaProduk7.jpg"
                                nazwa="Midnight Roast - Bold & Intense Dark Coffee"
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt6.jpg"
                                nazwa="Chamomile Calm - Gentle Sleepytime Brew"
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/herbataProduktyImage/herbataProdukt8.jpg"
                                nazwa="Chamomile Calm - Soothing Herbal Tea Blend"
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/czekoladaProduktyImage/czekoladaProdukt3.jpg"
                                nazwa="Rich Caramel Indulgence"
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <Product sciezkaDoZdjecia="./image/kawaProduktyImage/kawaProduk5.jpg"
                                nazwa="Velvet Latte - Indulgent Velvet Experience"
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
                
            </Carousel>

            <Card style={{ marginTop: '100px', height: "500px", display: 'flex', justifyContent: 'center' }} className="custom-card" >
                <Card.Body>
                    <Row>
                        <Col xs={6} md={6}>
                            <Image src="../image/zestawKawa.jpg" rounded style={{ width: '400px', height: '400px', marginLeft: '30px', marginTop: '30px' }} />
                        </Col>
                        <Col xs={6} md={6}>
                            <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                                <h1>Zestaw Prezentowy</h1>
                                <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '20px', color: 'white' }}>
                                    Nasz zestaw prezentowy to idealny wybor dla milosnikow kawy. W pieknym opakowaniu znajdziesz starannie wyselekcjonowane kawy z najlepszych plantacji na swiecie. Kazda filizanka to niezapomniane doznanie smakowe, ktore zachwyci kazdego smakosza.
                                </p>
                                <Button variant="light" style={{ width: '200px', height: '60px', marginTop: '40px' ,fontSize: '30px'}}>
                                    SPRAWDZ
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <div style={{ marginTop: '50px', fontSize: '60px', display: 'flex', justifyContent: 'center' }} >
                Najpopularniejsze produkty
            </div>
            <div style={{ fontSize: '20px', display: 'flex', justifyContent: 'center' }}>
                Sprawdz nasze najnowsze produkty
            </div>

            <Row style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                <Col xs={6} md={4}>
                    <Card style={{ width: '15rem', height: '22rem' }}>
                        <Card.Img variant="top" src="./image/kawaProduktyImage/kawaProduk7.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '15px' }}>Midnight Roast - Bold & Intense Dark Coffee</Card.Title>
                            <Card.Text>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </Card.Text>

                        </Card.Body>

                    </Card>

                </Col>
                <Col xs={6} md={4}>
                    <Card style={{ width: '15rem', height: '22rem' }}>
                        <Card.Img variant="top" src="./image/kawaProduktyImage/kawaProduk6.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '15px' }}>Velvet Latte - Smooth & Luxurious Brew</Card.Title>
                            <Card.Text>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </Card.Text>

                        </Card.Body>

                    </Card>

                </Col>
                <Col xs={6} md={4}>
                    <Card style={{ width: '15rem', height: '22rem' }}>
                        <Card.Img variant="top" src="./image/czekoladaProduktyImage/czekoladaProdukt3.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '15px' }}>Rich Caramel Indulgence</Card.Title>
                            <Card.Text>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <div >

            </div>

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