import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ContactButton from '../Components/ContactButton';
export function Layout() {
    return (
        <div className="App">
            <Navbar bg="light" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link to="/Menu" style={{ color: 'black', textDecoration: 'none' }}>Kawa</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/Menu" className="d-block" style={{ color: 'black', textDecoration: 'none' }}>Menu</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/Furniture" className="d-block" style={{ color: 'black', textDecoration: 'none' }}>Furniture</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">Merch</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#link">
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
            <ContactButton/>
        </div>
       
    );
}
