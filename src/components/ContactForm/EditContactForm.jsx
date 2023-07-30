import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch} from 'react-redux';
import { editContact } from "redux/contacts/operations";



const EditContactForm = ({currentId, currentName, currentNumber, onCloseModal}) => {
    const [name, setName] = useState(currentName);
    const [number, setNumber] = useState(currentNumber);

    const dispatch = useDispatch();

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

        const newContact={
          name:name,
          number:number,
        }
        console.log("currentId=", currentId);
        console.log("newContact=", newContact);
        dispatch(editContact({currentId,newContact}));

        onCloseModal();
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
            <button type="submit" className={css.form__button}>
            Edit contact
            </button>
            </div>
        </form>
       
        </>
    
    );


    
}

export default EditContactForm;