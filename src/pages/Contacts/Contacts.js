import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Container from 'components/Container/Container';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import css from './Contacts.module.css';
import { ButtonModalAddContact } from 'components/ButtonModalAddContact/ButtonModalAddContact';
import {CircleSpinner} from 'components/Spinner/CircleSpinner';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading ? (<CircleSpinner/>)
      :(<><h1 className={css.phonebook__title}>Phonebook</h1>
      <Container>
        <div className={css.wrap}>
        <Filter />
        <ButtonModalAddContact/>
        </div>
        <ContactsList />
       </Container></>)}
    </>
  );
}


