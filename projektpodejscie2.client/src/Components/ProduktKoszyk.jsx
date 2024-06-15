import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function ProductKoszyk({ sciezkaDoZdjecia, nazwa }) {
    return (
        <Card className="mb-3" style={{ maxWidth: '540px' }}>
            <div className="d-flex">
                <Card.Img variant="left" src={sciezkaDoZdjecia} style={{ width: '110px', objectFit: 'cover' }} />
                <Card.Body className="d-flex align-items-center justify-content-center">
                    <Card.Title>{nazwa}</Card.Title>
                </Card.Body>
            </div>
        </Card>
    );
}

export default ProductKoszyk;