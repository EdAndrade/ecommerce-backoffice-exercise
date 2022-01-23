import style from './style.module.scss';

export function AsideMenu(){

    return(

        <section id={style.asideMenu}>
            
            <section className="asideContent">

                <div className="logo">
                    <p>Ecommerce</p>
                </div>

                <div className="user">
                    
                    <div className="image">
                        
                    </div>

                    <div className="userName">
                        <p>Edmilson Andrade</p>
                    </div>
                </div>

                <nav>
                    <p>Admins</p>
                    <p>Produtos</p>
                    <p>Usuários</p>
                </nav>

            </section>
        </section>
    );
}