import { SearchFilter } from "../../components/Filters/Search/Search";
import style from './style.module.scss';

export default function Products(){

    return (
        <section id={style.productsPage}>
            <SearchFilter></SearchFilter>
            <p>produtos</p>
        </section>
    );
}