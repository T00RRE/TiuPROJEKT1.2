
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import tloImage from './appImage/tlo.png';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
function App() {
    return (
        <div className="app-container">
        <Container fluid >
            <Row>
                    <Col>
                        <div style={{ marginTop: '400px', }}>
                        <div className="fontsize">
                        [ LIFESTYLE ]
                        </div>
                        <Button variant="light" size="lg" className="big-button"active>
                            Wchodze!
                        </Button>
                    
                    </div>

                </Col>

                <Col lg={6} md={6} >

                    <div style={{ marginTop: '400px' }}>
                        <div className="fontsize">
                            [KAWA]
                        </div>
                        <Link to="/Furniture" className="d-block a"  >
                        <Button variant="light" size="lg" className="big-button" active>
                        Wchodze!
                            </Button>
                        </Link>
                </div>
                </Col>
            </Row>

            </Container>
        </div>
    );
}

export default App;