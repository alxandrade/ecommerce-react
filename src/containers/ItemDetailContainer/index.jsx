import React, { useEffect, useState }from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
const API = '../data/products.json';

const ItemDetailContainer = () => {
    
    const [productDetail, setProductDetail] = useState([]);
    const {productId} = useParams();
    
    useEffect( () => {
        const getProducts = async () => {            
            try{                
                const response = await fetch(API);
                const data = await response.json();
                const producto = data.filter((elemento) => elemento.id == productId);                

                setProductDetail(producto);                
            } 
            catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [productId]);
        
    return (
        <>
            {productDetail.map((producto, indx) => {
                return <ItemDetail key={indx} product={producto}/>;
            })}
        </>
    )
};

export default ItemDetailContainer;
