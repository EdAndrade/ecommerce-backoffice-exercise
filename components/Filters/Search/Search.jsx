import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchFilter = function(){

    return (
        <section className={style.searchFilter}>
            
            <div className="input-icon-1">
                <input type="text" placeholder='Pesquisar'/>
                <div className="icon">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
        </section>
    )
}