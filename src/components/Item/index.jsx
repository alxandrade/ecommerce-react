import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({product}) => {
  return (    
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>        
        <Button variant="success">Más Información</Button>
      </Card.Body>
    </Card>        
  )
}

export default Item