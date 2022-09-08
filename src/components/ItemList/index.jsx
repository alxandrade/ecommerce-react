import React from 'react'
import Item from '../Item'
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/esm/Col';

const ItemList = ({products}) => {
  return (    
      // <CardGroup className="col-md-4">
      <Col className="md-4">
          {products.map(product => {            
            return (
              <Item key={product.id} product={product}/>
            )
          })}        
      </Col>
      //</CardGroup>      
  )
}

export default ItemList