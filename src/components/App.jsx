import css from './App.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ContactForm } from './contactform/ContactForm';
import { ContactList } from './contactlist/ContactList';
import { Error } from './error/Error';
import { Loader } from './loader/Loader';
import { SearchFilter } from './searchfilter/SearchFilter';
import { Section } from './section/Section';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <SearchFilter />
        {isLoading && <Loader />}
        {error && <Error />}
        {contactList.length > 0 && <ContactList />}
      </Section>
    </div>
  );
};
