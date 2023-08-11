import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/contactform/ContactForm';
import { ContactList } from 'components/contactlist/ContactList';
import { Section } from 'components/section/Section';
import { Loader } from 'components/loader/Loader';
import { Error } from 'components/error/Error';
import { SearchFilter } from 'components/searchfilter/SearchFilter';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
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

export default Contacts;
