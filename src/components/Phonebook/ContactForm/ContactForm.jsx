import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = ({ handleSubmit, showMessage }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangePhone = event => {
    const { value } = event.target;
    setPhone(value);
  };

  const validateForm = (event, callback) => {
    event.preventDefault();

    if (!name || !phone) {
      showMessage('Please fill in all fields');
    }
    const contact = callback({ name, phone });
    if (contact) {
      setName('');
      setPhone('');
    }
  };

  return (
    <form
      onSubmit={event => {
        validateForm(event, handleSubmit);
      }}
      className={css.phonebook__form}
    >
      <label htmlFor="name" className={css.phonebook_name}>
        Name
      </label>
      <input
        className={css.phonebook__input}
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number" className={css.phonebook_name}>
        Number
      </label>
      <input
        className={css.phonebook__input}
        type="tel"
        name="number"
        value={phone}
        onChange={handleChangePhone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.phonebook_btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
};
