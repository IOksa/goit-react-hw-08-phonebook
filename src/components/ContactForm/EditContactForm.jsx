import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { editContact } from "redux/contacts/operations";
import {selectContactsState} from 'redux/contacts/selectors';
import toast from 'react-hot-toast';
import {RotatingLinesSpinner} from '../Spinner/RotatingLinesSpinner';
 

const EditContactForm = ({currentId, currentName, currentNumber, onCloseModal}) => {
    const [name, setName] = useState(currentName);
    const [number, setNumber] = useState(currentNumber);
    const [isAdd, setIsAdd]=useState(false);

    const dispatch = useDispatch();
    const stateContacts=useSelector(selectContactsState);

    const handleChange = evt => {
        const { name, value } = evt.target;
    
        switch (name) {
          case 'name':
            setName(value);
            break;
    
          case 'number':
            setNumber(value);
            break;
    
          default:
            console.warn(`Тип поля name - ${name} не обрабатывается`);
        }
      };


    
    const handleSubmit = e => {
        e.preventDefault();
        setIsAdd(true);
        addContacts(name, number);
        setIsAdd(false);
    
    };
 

    const addContacts = (name, number)=> {  
      const normalizedName = name.toLowerCase();
      
      const isInContacts=stateContacts.findIndex(({name})=>name.toLowerCase()===normalizedName );
   
      if(isInContacts!==-1){
        toast.error(`${name} is already in contacts`, {duration: 3000, position: 'top-center'});
       
      }
      else{
        const newContact={
          name:name,
          number:number,
        }
        dispatch(editContact({currentId,newContact}));
        onCloseModal();
      }
     
  
    };
   
    return(
      <>
        <form onSubmit={handleSubmit} className={css.phonebook__formContact}>
            <label className={css.phonebook__formContactLabel}>Name</label>
            <input
                type="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              
                defaultValue={currentName}
                onChange={handleChange}
                className={css.phonebook__formContactInput}
                />
            
            <label className={css.phonebook__formContactLabel}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="^[0-9]+$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               
                defaultValue={currentNumber}
                onChange={handleChange}
                className={css.phonebook__formContactInput}
                />
            <div className={css.buttonWrap}>
            <button type="submit" className={css.form__button} disabled={isAdd}>
            {isAdd ? (<RotatingLinesSpinner/>) : ('Edit contact')}
            </button>
            </div>
        </form>
       
        </>
    
    );


    
}

export default EditContactForm;

EditContactForm.propTypes={
  onCloseModal: PropTypes.func.isRequired,
  currentId: PropTypes.string.isRequired,
  currentName:  PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired,

}; 