import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

export function LayoutKawa() {
    return (
        <div className="App">
            <Navbar bg="light" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to="/furniture" style={{ color: 'black', textDecoration: 'none' }}><Image src="./image/logo1.jpg" style={{ width:'80px'}} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/kawaSklep" className="d-block" style={{ color: 'black', textDecoration: 'none' ,fontSize:'20px' }}>Kawa</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/herbataSklep" className="d-block" style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}>Herbata</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/czekoladaSklep" className="d-block" style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}>Czekolada </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/wyprzedazSklep" className="d-block" style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}>Wyprzedaz </Link>
                            </Nav.Link>
                            {/*<Nav.Link className="ms-auto" >*/}

                            {/*    <Link to="/Furniture" className="d-block" style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}>*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">*/}
                            {/*            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />*/}
                            {/*        </svg>*/}
                            {/*    </Link>*/}
                            {/*</Nav.Link>*/}

                            <Nav.Link className="ms-auto" >
                                <Link to="/koszyk" className="d-block" style={{ color: 'black', textDecoration: 'none', fontSize: '20px', marginLeft: '550px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="ms-auto" >
                                <Link to="/konto" className="d-block" style={{ color: 'black', textDecoration: 'none', fontSize: '20px', marginLeft: '0px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    </svg>
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link  >
                                <Link to="/logowanie" className="d-block">
                                    <Button variant="dark">Logowanie</Button>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}
