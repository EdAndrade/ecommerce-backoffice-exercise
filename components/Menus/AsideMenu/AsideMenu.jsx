import style from './style.module.scss';
import Link from 'next/link';
import { StorageManager } from '../../../services/storageManager';
import { ProductsContext } from '../../../store/productsContext';
import { useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../feature/hooks';
import { incremented } from '../../../feature/counter/counterSlice';
import React from "react";
import { CounterStore } from '../../../store/mobx/counter';
import { Observer } from "mobx-react-lite";

export function AsideMenu(){

    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch(incremented());

    const loggedUser = StorageManager.get( { key: 'loggedUser'} )
    const { products, getProducts } = useContext(ProductsContext);

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
                        <p>{ loggedUser && loggedUser.name }</p>
                    </div>
                </div>

                <nav>
                    
                    <Link href='/admins'>
                        <p>Admins</p>
                    </Link>
                    
                    <Link href='/produtos'>
                        <p>Produtos <span>{ products.length }</span></p>
                    </Link>

                    <Link href='/usuarios'>
                        <p>Usuários</p>
                    </Link>

                    <p onClick={() => CounterStore.addCounter()}>Counter <span><Observer>{ () => CounterStore.count }</Observer></span></p>

                </nav>

            </section>
        </section>
    );
}