import css from './ButtonClose.module.css';
import sprite from '../../images/icons.svg';

export const ButtonClose =({onCloseModal})=>{

    return ( 
        <>
        <button type="button" className={css.buttonClose} onClick={onCloseModal}>
            <svg className={css.buttonCloseIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
            </svg>
        </button>
        </>
        
    )
}

