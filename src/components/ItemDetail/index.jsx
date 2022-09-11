import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
    
    return (
        <div>            
            <img src={product.rutaImg} alt="product-detail"/>
            <h1>{product.modelo}</h1>
            <p>Tamaño: {product.tamanoMaceta}</p>
            <p>Material: {product.tipoMaceta}</p>
            <p>Precio: ${product.precioMaceta}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemDetail