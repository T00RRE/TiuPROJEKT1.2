import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterModal = ({ show, onHide }) => {
    const handleRegister = () => {
        // Implement registration logic here
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered size="lg" className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Rejestracja</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Podaj Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Haslo</Form.Label>
                        <Form.Control type="password" placeholder="Podaj Haslo" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Anuluj
                </Button>
                <Button variant="secondary" onClick={handleRegister}>
                    Zarejestruj sie
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RegisterModal;
