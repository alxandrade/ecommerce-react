import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';
import Swal from "sweetalert2";
import {products} from '../../data/products';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    (async () => {
      const obtenerProductos = new Promise ((accept,reject) =>{
        setTimeout(() => {
          accept(products);
        }, 2000);
      });

      try {
        const productos = await obtenerProductos;
        setProductos(productos);
      } catch (error) {
        console.log(error);        
      }

    })()

  }, []);
  
  const agregarAlCarrito = (cantidad) => {        
    Swal.fire({
      title: `Se agregaron ${cantidad}  productos al Carrito`,      
    })
  };

  console.log(productos);

  return (    
    <>
      
      <Row className="p-3 my-3">
        <Col className="md-4">
          <ItemList products={productos}/>          
        </Col>
      </Row>
      
      <div>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />
      </div>
    </>
  )
}

export default ItemListContainer;
