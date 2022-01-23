import { AsideMenu } from "../components/Menus/AsideMenu/AsideMenu";
import style from './style.module.scss'

export default function Layout( { children} ){

    return (
        <section className={style.layoutOrientation}>
            <AsideMenu/>
            <div className={style.page}>
                { children }
            </div>
        </section>
    );
}