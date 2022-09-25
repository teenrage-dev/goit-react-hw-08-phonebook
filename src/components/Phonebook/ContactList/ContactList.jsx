import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ renderList, onDeleteContact }) => {
  return (
    <>
      <ul className={css.phonebook__list}>
        {renderList.map(({ name, phone, id }) => (
          <li key={nanoid()} className={css.phonebook__item}>
            <p className={css.phonebook__item_text}>
              {name}: {phone}
            </p>
            <button
              className={css.phonebook_btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  renderList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
