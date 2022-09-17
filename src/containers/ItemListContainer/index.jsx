import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
const API = '../data/products.json';

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const {tipoMacetaId} = useParams();

  useEffect(() => {
    (async () => {
          
      try {
        if (tipoMacetaId) {          
          const response = await fetch(API);
          console.log(response);
          const data = await response.json();
          const productos = data.filter(item => item.tipoMaceta === tipoMacetaId);                              
          
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


  return (    
    <>          
      {
        productos.length ? <ItemList products={productos} /> : <h1>Cargando...</h1>
      }          
    </>
  )
}

export default ItemListContainer;
