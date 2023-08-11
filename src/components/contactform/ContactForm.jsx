import css from './ContactForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    const { value } = evt.target;
    setName(value);
  };

  const handleChangeNumber = evt => {
    const { value } = evt.target;
    setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const existingNames = contactList.map(contact =>
      contact.name.toLowerCase()
    );
    if (existingNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact({ name, number }));
    }
    evt.currentTarget.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="userName">
        Name
        <input
          className={css.nameDetail}
          id="userName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        ></input>
      </label>
      <label className={css.label} htmlFor="userName">
        Number
        <input
          className={css.nameDetail}
          id="userName"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        ></input>
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
