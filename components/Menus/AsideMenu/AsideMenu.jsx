import style from './style.module.scss';
import Link from 'next/link';

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
                    
                    <Link href='/admins'>
                        <p>Admins</p>
                    </Link>
                    
                    <Link href='/produtos'>
                        <p>Produtos</p>
                    </Link>

                    <Link href='/usuarios'>
                        <p>Usuários</p>
                    </Link>

                </nav>

            </section>
        </section>
    );
}