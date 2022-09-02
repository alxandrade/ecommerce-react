import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';
import Swal from "sweetalert2";

const ItemListContainer = ({greeting}) => {
  
  const agregarAlCarrito = (cantidad) => {        
    Swal.fire({
      title: `Se agregaron ${cantidad}  productos al Carrito`,      
    })
  };

  return (
    <div className = 'item-list-container'>
        <h1 >{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />
    </div>
  )
}

export default ItemListContainer;