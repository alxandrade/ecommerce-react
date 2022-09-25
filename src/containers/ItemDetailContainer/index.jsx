import React, { useEffect, useState }from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

// const API = '../data/products.json';

const ItemDetailContainer = () => {
    
    const [productDetail, setProductDetail] = useState([]);
    const {productId} = useParams();
    
    useEffect( () => {
        const getProducts = async () => { 
            const producto = [];            
            try{                
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);                
                console.log("Document data:", docSnap.data());

                producto.push({id:docSnap.id, ...docSnap.data()});
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
