import { SearchFilter } from "../../components/Filters/Search/Search";
import style from './style.module.scss';
import { AddProduct } from "../../components/Products/AddProduct/AddProduct";
import { useState } from "react";

export default function Products(){

    const [isAddProductVisible, setAddProductVisibility] = useState(false)

    function changeAddProductVisibility(){
        setAddProductVisibility(!isAddProductVisible)
    }

    return (
        <section id={style.productsPage}>
            <SearchFilter></SearchFilter>
            { isAddProductVisible ? <AddProduct changeAddProductVisibility={changeAddProductVisibility} /> : <></>}
            
            <div className="productsContent">

                <div className="globalAddButton" onClick={changeAddProductVisibility}>
                    <p>+</p>
                </div>
            </div>

        </section>
    );
}