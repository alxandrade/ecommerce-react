import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';

const Item = ({product}) => {
  return (
    <Col>    
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.rutaImg} />
      <Card.Body>
        <Card.Title>{product.modelo}</Card.Title>
        <Card.Text>{product.tipoMaceta}</Card.Text>
        <Card.Text>{product.tamanoMaceta}</Card.Text>
        <Card.Text>${product.precioMaceta}</Card.Text>        
        <Button variant="success">Más Información</Button>
      </Card.Body>
    </Card>        
    </Col>
  )
}

export default Item