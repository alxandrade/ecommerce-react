import React, { useState } from 'react'
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    //Aqui se guarda el Carrito
    const [cart, setCart] = useState([]);

    const addItem = (item) => {        
        const productoRepetido = isInCart(item.id);
        
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id == item.id) {
                    product.cantidad += item.cantidad
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id == id)
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;