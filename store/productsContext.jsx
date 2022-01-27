import { useState, createContext } from "react";
import { API } from "../services/api";

export const ProductsContext = createContext();

export function ProductsProvider( { children }){

    const [products, setProducts] = useState([]);

    async function getProducts(){

        API.products.getProducts().then( response => {
            setProducts(response.data);
        })
    }

    return (

        <ProductsContext.Provider value={ { products, getProducts } }>
            { children }
        </ProductsContext.Provider>
    );
}