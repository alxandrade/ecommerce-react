import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
const API = 'data/products.json';

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const {tipoMacetaId} = useParams();

  
  useEffect(() => {
    (async () => {
      console.log("tipoMaceta");
      console.log(tipoMacetaId);
    
      try {
        if (tipoMacetaId) {
          const response = await fetch(API);
          const data = await response.json();
          const productos = data.filter((elemento) => elemento.tipoMaceta === tipoMacetaId);                              
          
          setProductos(productos);        
        }
        else {
          const response = await fetch(API);
          const productos = await response.json();

          setProductos(productos);
        }
      } 
      catch (error) {
        console.log(error);        
      }

    })()

  }, [tipoMacetaId]);
  console.log(productos);
  
  const agregarAlCarrito = (cantidad) => {        
    Swal.fire({
      title: `Se agregaron ${cantidad}  productos al Carrito`,      
    })
  };

  console.log(productos);

  return (    
    <>                    
      <ItemList products={productos}/>          
      
      {/* <div>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />
      </div> */}
    </>
  )
}

export default ItemListContainer;
