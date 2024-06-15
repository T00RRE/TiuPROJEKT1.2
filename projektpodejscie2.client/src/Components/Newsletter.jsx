import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'; 

const Newsletter = () => {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        const wasModalShown = localStorage.getItem('modalShown');
        if (!wasModalShown) {
            setShowModal(false);
        }
    }, []);

    const handleSave = () => {
        setShowModal(false);
        
        localStorage.setItem('modalShown', 'false');
    };

    const handleClose = () => {
        setShowModal(false);
        localStorage.setItem('modalShown', 'false');
    };

    return (
        <Modal show={showModal} onHide={handleClose} centered size="lg" className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>NewsLetter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="image-container">
                    <img src='./image/Newsletter.jpg' alt="Newsletter" className="img-fluid" />
                    <div className="text-overlay">
                        <h4>Zapisz sie na nasz newsletter!</h4>
                        <p>Otrzymuj najnowsze aktualnosci bezposrednio na swoja skrzynke.</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Form.Control type="text" placeholder="Podaj email" />
                <Button variant="secondary" onClick={handleSave}>
                    Zapisz sie
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Zamknij
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Newsletter;
