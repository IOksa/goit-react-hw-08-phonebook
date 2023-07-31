import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {setContactsFilter} from '../../redux/contacts/filterSlice';
import {selectFilterState} from '../../redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector(selectFilterState);

  const changeFilter = (e) => {
    dispatch(setContactsFilter(e.currentTarget.value));
    
  };

  return (
    <div className={css.filter__wrap}>
      <label className={css.filter__label}>Find contacts by name </label>
      <input type="text" value={stateFilter} placeholder='search...' onChange={changeFilter} className={css.filter__input}/>
      
    </div>
  );
}

export default Filter;

