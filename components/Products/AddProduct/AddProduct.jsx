import style from './style.module.scss';

export function AddProduct( { changeAddProductVisibility } ){

    function closeThisComponent(event){
        if(event.target === event.currentTarget)
            changeAddProductVisibility();
    }

    return (

        <section id={style.addProduct} onClick={closeThisComponent}>
            
            <div className="addProductContent">
                
                <form action="">
                    <input type="text" placeholder='Nome do produto'/>
                    <input type="number" placeholder='Quantidade'/>
                    <input type="text" placeholder='Categoria'/>

                    <button type="submit">Cadastrar produto</button>
                </form>
            </div>

        </section>
    );
}