import React from 'react'
import ItemCount from '../ItemCount'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import './styles.css';

const ItemDetail = ({product}) => {
    
    return (                    
        <Row>
            <Col>
                <img src={product.rutaImg} className="img-detail" alt="product-detail"/>
            </Col>
            <Col> 
                <h1>{product.modelo}</h1>
                <p>Tamaño: {product.tamanoMaceta}</p>
                <p>Material: {product.tipoMaceta}</p>
                <p>Precio: ${product.precioMaceta}</p>
                <ItemCount/>
            </Col>             
        </Row>        
    )
}

export default ItemDetail


