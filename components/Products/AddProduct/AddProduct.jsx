import style from './style.module.scss';

export function AddProduct( { changeAddProductVisibility } ){

    function closeThisComponent(event){
        if(event.target === event.currentTarget)
            changeAddProductVisibility();
    }

    return (

        <section id={style.addProduct} onClick={closeThisComponent}>
            
            <div className="addProductContent">
                
            </div>

        </section>
    );
}