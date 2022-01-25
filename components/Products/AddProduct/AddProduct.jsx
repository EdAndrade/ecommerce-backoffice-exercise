import { useState } from 'react';
import style from './style.module.scss';
import { API } from '../../../services/api';

export function AddProduct( { changeAddProductVisibility } ){

    const [addingProduct, setAddingProduct] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, seCategory] = useState('');

    function closeThisComponent(event){
        if(event.target === event.currentTarget)
            changeAddProductVisibility();
    }

    function sendProduct(){

        setAddingProduct(true);

        API.products.addProduct({
            name: productName,
            quantity,
            category,
            date: new Date()
        }).then( response => {

            setProductName('');
            setQuantity(0);
            seCategory('');
            setAddingProduct(false);
            changeAddProductVisibility({ reload: true});
        })
    }

    return (

        <section id={style.addProduct} onClick={closeThisComponent}>
            
            <div className="addProductContent">
                
                <form action="">

                    <input type="text" onChange={ (event) => {setProductName(event.target.value)}} placeholder='Nome do produto'/>
                    <input type="number" onChange={ (event) => {setQuantity(event.target.value)}} placeholder='Quantidade'/>
                    <input type="text" onChange={ (event) => {seCategory(event.target.value)}} placeholder='Categoria'/>

                    <div className="add-load">
                        { 
                            addingProduct ?
                            <div className="simple-loading"></div> :
                            <button type="submit" onClick={sendProduct}>Cadastrar produto</button>
                        }
                    </div>
                
                </form>
            </div>

        </section>
    );
}