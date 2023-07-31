import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';
import { useDispatch } from "react-redux";
import {deleteContact} from 'redux/contacts/operations';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import EditContactForm from '../ContactForm/EditContactForm';
import { ButtonClose } from 'components/ButtonClose/ButtonClose';
import { RotatingLinesSpinner } from 'components/Spinner/RotatingLinesSpinner';


const ContactsListItem = ({contact:{id, name, number}}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        setIsDeleting(true);
        dispatch(deleteContact(id));
        setIsDeleting(false);
    }
  
    const onOpenModal = () => {
        setIsModalOpen(true);
        window.addEventListener('keydown', onEscKeyPress);
    
    
    };
    
    const onCloseModal = () => {
    setIsModalOpen(false);
    window.removeEventListener('keydown', onEscKeyPress);
    
    };
    
    const onEscKeyPress=(event)=> {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;
        if (isEscKey) {
            onCloseModal();
        }
    };

    return (
        <>
        <div className={css.contactListItem__contactThumb}>
            <p>{name}: </p>
            <p>{number}</p>
        </div>
        <button
        type="button"
        onClick={handleDeleteContact}
        className={css.contactListItem__button}
        
        >
        {isDeleting ? <RotatingLinesSpinner/>:'Delete'}
       
        </button>
        <button
        type="button"
        onClick={onOpenModal}
        disabled={isDeleting}
        className={css.contactListItem__button}
        >
       Edit
        </button>
        {isModalOpen && (
        <Modal onCloseModal={onCloseModal} >
          <ButtonClose onCloseModal={onCloseModal}/>
          <EditContactForm onCloseModal={onCloseModal} currentId={id} currentName={name} currentNumber={number}/>
        </Modal>
        )} 
        </>
    );                  
};

ContactsListItem.propTypes={
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    ),

}; 

export default ContactsListItem;