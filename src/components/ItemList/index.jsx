import React from 'react'
import Item from '../Item'
import Row from 'react-bootstrap/Row';

const ItemList = ({products}) => {
  return (    
    <Row xs={1} md={4} className="g-4">
      {products.map(product => {            
        return (
          <Item key={product.id} product={product}/>
        )
      })}              
    </Row>  
  )
}

export default ItemList