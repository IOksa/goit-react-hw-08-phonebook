import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import AddContactForm from '../ContactForm/AddContactForm';
import { ButtonClose } from 'components/ButtonClose/ButtonClose';
import css from './ButtonModalAddContact.module.css';

export const ButtonModalAddContact = ()=>{
    
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Button variant="contained" type="submit" onClick={onOpenModal} className={css.button}>Add new contact</Button>
        {isModalOpen && (
        <Modal onCloseModal={onCloseModal} >
          <ButtonClose onCloseModal={onCloseModal}/>
          <AddContactForm onCloseModal={onCloseModal}/>
        </Modal>
        )} 
    </>
    )
}

