import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from 'react-router-dom'

  

const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {    
    navigate(`/detalles/${product.id}`);
  }

  return (
    <Col>    
    <Card border="primary" className='card-container' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.rutaImg} className="card-img" onClick={handleNavigate} alt={`Imagen del producto ${product.modelo}`}/>
      <Card.Body>
        <Card.Title>{product.modelo}</Card.Title>
        <Card.Text>{product.tipoMaceta} - {product.tamanoMaceta}</Card.Text>        
        <Card.Text>${product.precioMaceta} pesos</Card.Text>        
        <Button variant="success" onClick={handleNavigate}>Más Información</Button>        
      </Card.Body>
    </Card>        
    </Col>
  )
}

export default Item