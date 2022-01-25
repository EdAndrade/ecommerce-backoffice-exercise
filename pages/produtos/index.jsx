import { SearchFilter } from "../../components/Filters/Search/Search";
import style from './style.module.scss';
import { AddProduct } from "../../components/Products/AddProduct/AddProduct";
import { useState, useEffect } from "react";
import { API } from "../../services/api";

export default function Products(){

    const [isAddProductVisible, setAddProductVisibility] = useState(false)
    const [gettingProducts, setGettingProducts] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    function changeAddProductVisibility(){
        setAddProductVisibility(!isAddProductVisible)
    }

    function getProducts(){

        API.products.getProducts().then( response => {
            console.log(response)
            setGettingProducts(false);
        })
    }

    return (
        <section id={style.productsPage}>
            <SearchFilter></SearchFilter>
            { isAddProductVisible ? <AddProduct changeAddProductVisibility={changeAddProductVisibility} /> : <></>}
            
            <div className="productsContent">

                <div className="globalAddButton" onClick={changeAddProductVisibility}>
                    <p>+</p>
                </div>

                { 
                    gettingProducts ? 
                    <div className="simple-loading"></div> :

                    <div className="productsList">

                        <div className="header">
                            <p>Nome</p>
                            <p>Quantidade</p>
                            <p>Categoria</p>
                            <p>Data</p>
                        </div>

                        <div className="products">

                        </div>
                    </div>
                }

                
            </div>

        </section>
    );
}