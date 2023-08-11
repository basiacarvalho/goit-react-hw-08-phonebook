import { ContactListElement } from 'components/contactlistelement/ContactListElement';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilteredContactList } from 'redux/selectors';

export const ContactList = () => {

  const filteredContactList = useSelector(selectFilteredContactList);

  return (
    <div className={css.contacts}>
      <ul className={css.contactList}>
        {filteredContactList.map(({ name, id, number }) => (
          <ContactListElement name={name} key={id} id={id} number={number} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteOption: PropTypes.func,
};
