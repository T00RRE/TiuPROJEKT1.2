import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactButton from '../Components/ContactButton';
export const Koszyk = () => {

    return (

        <div>

            <Row>
                <Col>
                    <h1 style={{ fontSize: '40px' }}>Twoj Koszyk</h1>
                    <hr />

                    <h2 style={{ fontSize: '20px' }}> Twoj koszyk jest pusty </h2>


                    <hr style={{ marginTop: '400px' }} />
                    <h3 style={{ fontSize: '15px', color: 'red' }}> Dodanie artykulow do koszyka nie oznacza ich rezerwacji !</h3>

                </Col>
                <Col>
                    <h1 style={{ fontSize: '40px', marginTop: '70px', marginLeft: '60px' }}> Kwota zamowienia</h1>
                    <suma style={{ fontSize: '30px', marginTop: '140px', marginLeft: '70px' }}> Suma :</suma>
                    <h3 style={{ fontSize: '30px', marginTop: '-40px', marginLeft: '300px' }}> 0,00 zl</h3>


                    <Button variant="outline-dark" style={{ marginTop: '200px', marginLeft: '50px', width: '350px', fontSize: '25px' }}>Przejdz do kasy</Button>
                    <Form.Control style={{ marginLeft: '50px', marginTop: '20px', width: '150px' }} type="text" placeholder="Kod kuponu" />
                    <br />
                    <Button variant="outline-dark" style={{ marginTop: '-112px', marginLeft: '250px', width: '150px', fontSize: '15px' }}>Zastosuj kupon</Button>

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
                        <p>&copy; {new Date().getFullYear()} <Image src="./image/logo1.jpg" style={{ width: '80px' }} /></p>
                    </Col>
                </Row>
                
            </footer>




        </div>
    )
}