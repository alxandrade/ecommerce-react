import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const {tipoMacetaId} = useParams();

  useEffect(() => {
    (async () => {          
      try {       
        
        const q = tipoMacetaId
        ? query(collection(db, "products"), where("tipoMaceta", "==", tipoMacetaId))
        : query(collection(db, "products"));
        
        const querySnapshot = await getDocs(q);
        const productos = [];
        
        querySnapshot.forEach((doc) => {
          productos.push({id:doc.id, ...doc.data()});
        });
        setProductos(productos);       
      } catch (error) {        
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
