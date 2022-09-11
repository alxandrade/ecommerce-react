import React, { useEffect, useState }from "react";
import ItemDetail from "../../components/ItemDetail";
const API = 'data/products.json';

const ItemDetailContainer = () => {
    
    const [productDetail, setProductDetail] = useState([]);

    useEffect( () => {
        const getProducts = async () => {
            try{
                const response = await fetch(API);
                const data = await response.json();
                const resultado = data.filter((elemento) => elemento.modelo === "CH002");                              

                setProductDetail(resultado);
            } 
            catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);
    
    console.log("productDetail");
    console.log(productDetail);
    return (
        <>
            {productDetail.map((producto, indx) => {
                return <ItemDetail key={indx} product={producto}/>;
            })}
        </>
    )
};

export default ItemDetailContainer;
