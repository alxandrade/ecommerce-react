import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from 'react-router-dom'

const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Item product.id")
    console.log(product.id)
    navigate(`/${product.id}`);
  }

  return (
    <Col>    
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.rutaImg} className="img_secundarias" onClick={handleNavigate}/>
      <Card.Body>
        <Card.Title>{product.modelo}</Card.Title>
        <Card.Text>{product.tipoMaceta}</Card.Text>
        <Card.Text>{product.tamanoMaceta}</Card.Text>
        <Card.Text>${product.precioMaceta}</Card.Text>        
        <Button variant="success" onClick={handleNavigate}>Más Información</Button>
      </Card.Body>
    </Card>        
    </Col>
  )
}

export default Item