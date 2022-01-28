import { SearchFilter } from "../../components/Filters/Search/Search";
import style from './style.module.scss';
import { AddProduct } from "../../components/Products/AddProduct/AddProduct";
import { useState, useEffect, useContext } from "react";
import { API } from "../../services/api";
import { ProductsContext } from "../../store/productsContext";

export default function Products(){

    const [isAddProductVisible, setAddProductVisibility] = useState(false)
    const [gettingProducts, setGettingProducts] = useState(true);
    const [productsList, setProducts] = useState([]);
    const { products, getProducts } = useContext(ProductsContext);

    useEffect(() => {
        performGetProducts();
    },[]);

    function changeAddProductVisibility( { reload } = { reload: false} ){
        setAddProductVisibility(!isAddProductVisible);
        
        if(reload){
            performGetProducts();
        }
    }

    async function performGetProducts(){

        setGettingProducts(true);
        await getProducts();
        setGettingProducts(false);
    }

    return (
        <section id={style.productsPage}>
            <SearchFilter></SearchFilter>
            { isAddProductVisible ? <AddProduct changeAddProductVisibility={changeAddProductVisibility} /> : <></>}
            
            <div className="productsContent">

                <div className="globalAddButton" onClick={() => changeAddProductVisibility()}>
                    <p>+</p>
                </div>

                { 
                    gettingProducts ? 
                    <div className="simple-loading"></div> :

                    <div className="productsList">

                        <div className="header">
                            <p className="name">Nome</p>
                            <p className="quantity">Quantidade</p>
                            <p className="category">Categoria</p>
                            <p className="date">Data</p>
                        </div>

                        <div className="products">

                            { products.map( product => (
                                <div key={product.id} className="product">
                                    <p className="name">{ product.name }</p>
                                    <p className="quantity">{ product.quantity }</p>
                                    <p className="category">{ product.category }</p>
                                    <p className="date">{ product.date }</p>
                                </div>
                            ))}

                        </div>
                    </div>
                }

                
            </div>

        </section>
    );
}